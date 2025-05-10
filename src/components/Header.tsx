
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import WalletButton from './WalletButton';
import { useIsMobile } from '@/hooks/use-mobile';

export function Header() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full sticky top-0 z-50 glass">
      <div className="container mx-auto py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2" onClick={() => navigate('/')} role="button">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base">ZK</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold gradient-text">cToken POP</h1>
        </div>
        
        {isMobile ? (
          <div className="flex items-center gap-3">
            <WalletButton />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Button variant="ghost" onClick={() => navigate('/create')} className="justify-start">Create Event</Button>
                  <Button variant="ghost" onClick={() => navigate('/claim')} className="justify-start">Claim Token</Button>
                  <Button variant="ghost" onClick={() => navigate('/collection')} className="justify-start">My Collection</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => navigate('/create')}>Create Event</Button>
              <Button variant="ghost" onClick={() => navigate('/claim')}>Claim Token</Button>
              <Button variant="ghost" onClick={() => navigate('/collection')}>My Collection</Button>
            </nav>
            <div className="flex items-center gap-4">
              <WalletButton />
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
