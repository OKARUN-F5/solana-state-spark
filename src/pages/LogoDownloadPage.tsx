
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const LogoDownloadPage = () => {
  const { toast } = useToast();
  const svgRef = useRef<SVGSVGElement>(null);

  // Function to download logo as SVG
  const downloadSVG = () => {
    if (!svgRef.current) return;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'ctoken-pop-logo.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    toast({
      title: "Logo Downloaded",
      description: "The SVG logo has been downloaded successfully.",
    });
  };
  
  // Function to download as PNG
  const downloadPNG = () => {
    if (!svgRef.current) return;
    
    const canvas = document.createElement('canvas');
    const size = 300; // High resolution
    canvas.width = size;
    canvas.height = size;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Create a temporary image from the SVG
    const img = new Image();
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      // Draw background first
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, size, size);
      
      // Draw the SVG on canvas
      ctx.drawImage(img, 0, 0, size, size);
      
      // Create download link
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'ctoken-pop-logo.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      URL.revokeObjectURL(svgUrl);
      
      toast({
        title: "Logo Downloaded",
        description: "The PNG logo has been downloaded successfully.",
      });
    };
    
    img.src = svgUrl;
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center gradient-text">Logo Download</h1>
          
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="mb-8">
              <svg 
                ref={svgRef}
                width="200" 
                height="200" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md"
              >
                {/* Background circle */}
                <circle cx="50" cy="50" r="48" fill="url(#gradientBg)" />
                
                {/* Token shape */}
                <circle cx="50" cy="50" r="40" fill="white" />
                <path 
                  d="M50 10C28.95 10 12 26.95 12 48C12 69.05 28.95 86 50 86C71.05 86 88 69.05 88 48C88 26.95 71.05 10 50 10ZM50 78C33.43 78 20 64.57 20 48C20 31.43 33.43 18 50 18C66.57 18 80 31.43 80 48C80 64.57 66.57 78 50 78Z" 
                  fill="#4C1D95" 
                />
                
                {/* C letter for cToken */}
                <path 
                  d="M60 36H42C38.69 36 36 38.69 36 42V54C36 57.31 38.69 60 42 60H60" 
                  stroke="#2563EB" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                />
                
                {/* ZK hint */}
                <path 
                  d="M44 68L56 68M44 68L56 54M44 68L56 54M56 68L44 54"
                  stroke="#4C1D95" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                {/* Define gradient */}
                <defs>
                  <linearGradient id="gradientBg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4C1D95" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>cToken POP Logo</CardTitle>
                <CardDescription>
                  Download our logo in various formats for your use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  This logo represents the cToken Proof-of-Participation platform, featuring a stylized "c" for compression and hints of ZK technology.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button onClick={downloadSVG} className="flex items-center gap-2">
                  <Download size={16} />
                  Download SVG
                </Button>
                <Button onClick={downloadPNG} variant="outline" className="flex items-center gap-2">
                  <Download size={16} />
                  Download PNG
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LogoDownloadPage;
