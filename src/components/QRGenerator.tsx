
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface QRGeneratorProps {
  eventId: string;
  onDownload?: () => void;
}

export function QRGenerator({ eventId, onDownload }: QRGeneratorProps) {
  const [qrUrl, setQrUrl] = useState<string>('');

  useEffect(() => {
    // Generate QR code URL using a free QR code API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${window.location.origin}/claim/${eventId}`;
    setQrUrl(qrCodeUrl);
  }, [eventId]);

  const handleDownload = () => {
    // Create a temporary anchor element to download the image
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `event-${eventId}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (onDownload) {
      onDownload();
    }
  };

  return (
    <Card className="glass-card">
      <CardContent className="pt-6 flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-inner mb-4">
          {qrUrl ? (
            <img 
              src={qrUrl} 
              alt="Event QR Code" 
              className="w-48 h-48 object-contain"
            />
          ) : (
            <div className="w-48 h-48 flex items-center justify-center">
              <p className="text-gray-400">Loading QR Code...</p>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleDownload}
          className="mt-4 bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          Download QR Code
        </Button>
        
        <p className="text-sm text-gray-500 mt-4 text-center">
          Share this QR code with event attendees so they can claim their cTokens.
        </p>
      </CardContent>
    </Card>
  );
}

export default QRGenerator;
