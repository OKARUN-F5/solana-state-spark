
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@/contexts/WalletContext';
import { toast } from '@/components/ui/use-toast';

export function useRequireWallet() {
  const { connected } = useWallet();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!connected) {
      toast({
        title: "Wallet Required",
        description: "Please connect your wallet to access this feature.",
      });
      navigate('/connect');
    }
  }, [connected, navigate]);
  
  return connected;
}

export default useRequireWallet;
