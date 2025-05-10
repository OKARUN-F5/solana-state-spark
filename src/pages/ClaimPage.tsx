
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QRScanner from '@/components/QRScanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const ClaimPage = () => {
  const navigate = useNavigate();
  const [eventId, setEventId] = useState('');

  const handleManualClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid Event ID",
        variant: "destructive",
      });
      return;
    }
    
    handleSuccessfulClaim(eventId);
  };

  const handleQrScan = (scannedData: string) => {
    // For simplicity, we're assuming the QR code contains the event ID directly
    handleSuccessfulClaim(scannedData);
  };

  const handleSuccessfulClaim = (id: string) => {
    toast({
      title: "Token Claim Initiated",
      description: "Processing your token claim...",
    });
    
    // Simulate network delay
    setTimeout(() => {
      navigate('/claim-success', { 
        state: { 
          eventId: id,
          eventName: `Event ${id.split('_')[1] || ''}`,
          tokenSymbol: "POP",
        } 
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">Claim Your cToken</h1>
            <p className="text-gray-600 mb-8 text-center">
              Scan a QR code or enter an event ID to claim your proof-of-participation.
            </p>
            
            <Card className="glass-card overflow-hidden">
              <Tabs defaultValue="scan" className="w-full">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="scan">Scan QR Code</TabsTrigger>
                  <TabsTrigger value="manual">Enter Event ID</TabsTrigger>
                </TabsList>
                
                <TabsContent value="scan" className="p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-lg font-semibold mb-2">Scan Event QR Code</h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Position the QR code within the camera frame.
                    </p>
                  </div>
                  
                  <QRScanner onScan={handleQrScan} />
                </TabsContent>
                
                <TabsContent value="manual" className="p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-lg font-semibold mb-2">Enter Event ID</h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Input the event ID provided by the event organizer.
                    </p>
                  </div>
                  
                  <form onSubmit={handleManualClaim} className="space-y-4">
                    <div className="space-y-2">
                      <Input 
                        type="text" 
                        placeholder="e.g., event_123456" 
                        value={eventId}
                        onChange={(e) => setEventId(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    >
                      Claim Token
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>
            
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Claiming a token creates a compressed token (cToken) in your wallet. This token serves as an on-chain 
                    proof that you participated in the event. Unlike regular tokens, compressed tokens use ZK technology 
                    to drastically reduce costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClaimPage;
