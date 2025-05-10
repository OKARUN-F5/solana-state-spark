
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

interface WalletContextType {
  connected: boolean;
  walletName: string | null;
  connectTime: string | null;
  isConnecting: boolean;
  connect: (walletName: string) => Promise<boolean>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState<boolean>(false);
  const [walletName, setWalletName] = useState<string | null>(null);
  const [connectTime, setConnectTime] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  // Check for existing connection on mount
  useEffect(() => {
    const storedWallet = localStorage.getItem('connectedWallet');
    const storedConnectTime = localStorage.getItem('connectedAt');
    
    if (storedWallet) {
      setConnected(true);
      setWalletName(storedWallet);
      setConnectTime(storedConnectTime);
    }
  }, []);

  // Connect wallet function
  const connect = async (name: string): Promise<boolean> => {
    setIsConnecting(true);
    
    try {
      // In a production app, this would use an actual wallet adapter
      // For demo purposes, we'll simulate a connection
      
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Save connection info
      const connectTimestamp = new Date().toISOString();
      localStorage.setItem('connectedWallet', name);
      localStorage.setItem('connectedAt', connectTimestamp);
      
      // Update state
      setConnected(true);
      setWalletName(name);
      setConnectTime(connectTimestamp);
      setIsConnecting(false);
      
      toast({
        title: "Connected",
        description: `Successfully connected to ${name}`,
      });
      
      return true;
    } catch (error) {
      console.error("Wallet connection error:", error);
      setIsConnecting(false);
      
      toast({
        title: "Connection Failed",
        description: "Could not connect to wallet. Please try again.",
        variant: "destructive",
      });
      
      return false;
    }
  };

  // Disconnect wallet function
  const disconnect = () => {
    localStorage.removeItem('connectedWallet');
    localStorage.removeItem('connectedAt');
    
    setConnected(false);
    setWalletName(null);
    setConnectTime(null);
    
    toast({
      title: "Disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

  const value = {
    connected,
    walletName,
    connectTime,
    isConnecting,
    connect,
    disconnect
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  
  return context;
};
