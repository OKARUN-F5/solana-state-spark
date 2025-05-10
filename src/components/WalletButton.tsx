
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Wallet, CheckCircle } from 'lucide-react';

export function WalletButton() {
  const { connected, walletName, disconnect } = useWallet();
  const navigate = useNavigate();
  
  if (!connected) {
    return (
      <Button 
        onClick={() => navigate('/connect')}
        className="bg-gradient-primary hover:opacity-90 transition-opacity"
      >
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-green-500 text-green-600">
          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
          {walletName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem
          onClick={() => navigate('/collection')}
          className="cursor-pointer"
        >
          View Collection
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={disconnect}
          className="text-red-500 cursor-pointer focus:text-red-500"
        >
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default WalletButton;
