
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-50 glass">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold">ZK</span>
          </div>
          <h1 className="text-2xl font-bold gradient-text">cToken POP</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => navigate('/create')}>Create Event</Button>
          <Button variant="ghost" onClick={() => navigate('/claim')}>Claim Token</Button>
          <Button variant="ghost" onClick={() => navigate('/collection')}>My Collection</Button>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => navigate('/connect')}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
