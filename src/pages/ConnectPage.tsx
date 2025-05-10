
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const ConnectPage = () => {
  const navigate = useNavigate();

  const handleConnect = (walletName: string) => {
    toast({
      title: "Wallet Connection",
      description: `Connecting to ${walletName}...`,
    });
    
    // Simulate connection
    setTimeout(() => {
      toast({
        title: "Connected!",
        description: "Your wallet has been successfully connected.",
        variant: "default", // Changed from "success" to "default"
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">Connect Wallet</h1>
            <p className="text-gray-600 mb-8 text-center">
              Connect your Solana wallet to create events or claim tokens
            </p>
            
            <Card className="glass-card mb-6">
              <CardHeader>
                <CardTitle>Select a Wallet</CardTitle>
                <CardDescription>
                  Choose one of the following wallet options to connect
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between h-14"
                  onClick={() => handleConnect("Phantom")}
                >
                  <span>Phantom</span>
                  <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="128" height="128" rx="64" fill="url(#paint0_linear_401_43)"/>
                    <path d="M110.584 64.9142H99.142C99.142 41.7651 80.173 23 56.7724 23C33.6612 23 14.8366 41.3057 14.414 64.0583C13.9756 87.8149 36.5496 108 60.6202 108H64.0583C85.6099 108 110.584 89.7474 110.584 64.9142Z" fill="white"/>
                    <path d="M73.6865 65.1281C73.6865 72.1491 67.9659 77.8697 60.9449 77.8697C53.9238 77.8697 48.2032 72.1491 48.2032 65.1281C48.2032 58.107 53.9238 52.3864 60.9449 52.3864C67.9659 52.3864 73.6865 58.107 73.6865 65.1281Z" fill="url(#paint1_linear_401_43)"/>
                    <defs>
                      <linearGradient id="paint0_linear_401_43" x1="128" y1="0" x2="0" y2="128" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#534BB1"/>
                        <stop offset="1" stopColor="#551BF9"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_401_43" x1="73.6865" y1="52.3864" x2="48.2032" y2="77.8697" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#534BB1"/>
                        <stop offset="1" stopColor="#551BF9"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between h-14"
                  onClick={() => handleConnect("Solflare")}
                >
                  <span>Solflare</span>
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2221 10.175C17.2221 10.175 9.62957 15.4347 8.17383 16.4282C6.7181 17.4218 6.76013 19.2962 8.17383 20.1345C9.5875 20.9728 17.2401 25.8249 17.2401 25.8249C17.2401 25.8249 16.7389 21.3782 17.1541 20.1345C17.5693 18.8908 20.9242 17.1912 22.2179 16.4282C23.5115 15.6653 17.2221 10.175 17.2221 10.175Z" fill="#FE9900"/>
                    <path d="M17.0923 10.9359C17.0923 10.9359 16.6711 14.7788 17.0923 15.6652C17.5136 16.5516 20.9245 17.8913 22.218 16.3764C23.5115 14.8615 17.0923 10.9359 17.0923 10.9359Z" fill="#FFDF48"/>
                    <path d="M17.2402 25.8252C17.2402 25.8252 16.7379 22.2195 17.2402 20.9758C17.7426 19.7321 21.2093 18.0184 22.218 16.4275C23.2268 14.8366 17.2402 25.8252 17.2402 25.8252Z" fill="#FE9900"/>
                    <path d="M6.7811 17.7661C6.7811 17.7661 12.9641 10.8758 14.8227 6.64856C16.6812 2.42133 21.8548 5.27699 21.7688 7.24414C21.6828 9.21129 19.8463 19.1832 19.8463 19.1832L6.7811 17.7661Z" fill="#FE9900"/>
                    <path d="M21.288 10.7617C20.8668 12.022 19.8465 19.1834 19.8465 19.1834L6.78125 17.7663C6.78125 17.7663 8.8069 15.1543 10.6064 12.5384" stroke="#FFDF48" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.2402 25.8252C17.2402 25.8252 17.9372 28.8541 19.2668 28.9981C20.5965 29.1421 22.3682 26.8748 21.5299 25.5812C20.6915 24.2876 17.2402 25.8252 17.2402 25.8252Z" fill="#FE9900"/>
                    <path d="M17.2393 25.8252C17.2393 25.8252 16.2338 28.67 14.9682 28.9981C13.7026 29.3262 11.6799 27.3111 12.3544 25.9214C13.0288 24.5316 17.2393 25.8252 17.2393 25.8252Z" fill="#FE9900"/>
                  </svg>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between h-14"
                  onClick={() => handleConnect("Backpack")}
                >
                  <span>Backpack</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#121212"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 5.75L6.5 8.5V12.5L12 18.25L17.5 12.5V8.5L12 5.75ZM8 10.25L12 8.25L16 10.25V11.75L12 15.75L8 11.75V10.25Z" fill="white"/>
                  </svg>
                </Button>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <div className="text-xs text-gray-500 text-center">
                  By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
                </div>
              </CardFooter>
            </Card>
            
            <div className="text-center">
              <Button variant="ghost" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConnectPage;
