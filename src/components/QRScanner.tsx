
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import jsQR from 'jsqr';
import { useIsMobile } from '@/hooks/use-mobile';

interface QRScannerProps {
  onScan: (data: string) => void;
}

export function QRScanner({ onScan }: QRScannerProps) {
  const [scanning, setScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const isMobile = useIsMobile();

  const startScanner = async () => {
    try {
      setScanning(true);
      const constraints = {
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setHasPermission(true);
        scanQRCode();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasPermission(false);
      toast({
        title: "Camera Access Error",
        description: "Please allow camera access to scan QR codes.",
        variant: "destructive"
      });
      setScanning(false);
    }
  };

  const stopScanner = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setScanning(false);
  };

  const switchCamera = () => {
    stopScanner();
    setFacingMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
    setTimeout(() => {
      startScanner();
    }, 300);
  };

  const scanQRCode = () => {
    if (!scanning) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (video && canvas && video.readyState === video.HAVE_ENOUGH_DATA) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        
        if (code) {
          console.log("QR Code detected:", code.data);
          onScan(code.data);
          stopScanner();
          return;
        }
      }
    }

    if (scanning) {
      requestAnimationFrame(scanQRCode);
    }
  };

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-sm aspect-square mb-4 rounded-lg overflow-hidden">
        {scanning ? (
          <>
            <video 
              ref={videoRef} 
              className="absolute top-0 left-0 w-full h-full object-cover"
              playsInline 
              muted
            />
            <canvas 
              ref={canvasRef} 
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
            />
            <div className="absolute inset-0 border-2 border-primary rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-white/80 rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-shadow bg-black/30 p-2 rounded inline-block">
                Position QR code within the frame
              </p>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Camera preview will appear here</p>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 w-full">
        <Button 
          onClick={scanning ? stopScanner : startScanner} 
          className={scanning ? "bg-red-500 hover:bg-red-600 flex-grow md:flex-grow-0" : "bg-gradient-primary hover:opacity-90 flex-grow md:flex-grow-0"}
        >
          {scanning ? "Cancel Scanning" : "Start Scanning"}
        </Button>
        
        {scanning && isMobile && (
          <Button 
            onClick={switchCamera}
            variant="outline" 
            className="border-primary text-primary flex-grow md:flex-grow-0"
          >
            Switch Camera
          </Button>
        )}
      </div>
      
      {hasPermission === false && (
        <p className="text-red-500 text-sm mt-2">
          Camera access denied. Please check your browser settings.
        </p>
      )}
    </div>
  );
}

export default QRScanner;
