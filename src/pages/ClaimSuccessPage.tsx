
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ClaimSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tokenData = location.state || {
    eventId: "event_demo",
    eventName: "Demo Event",
    tokenSymbol: "POP",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">Token Successfully Claimed!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Your proof-of-participation has been added to your collection.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-purple to-primary-blue p-1 rounded-2xl mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white rounded-xl p-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-purple to-primary-blue rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{tokenData.tokenSymbol}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{tokenData.eventName}</h2>
                <p className="text-gray-500 mb-4">Proof-of-Participation Token</p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Token Type</span>
                    <span className="text-sm font-medium">Compressed Token (cToken)</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Event ID</span>
                    <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{tokenData.eventId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Claimed On</span>
                    <span className="text-sm">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xs text-gray-400 flex items-center justify-center gap-1 mb-1">
                    <span>VERIFIED WITH</span>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium gradient-text">ZK Compression Technology</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => navigate('/collection')}
              >
                View My Collection
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/claim')}
              >
                Claim Another Token
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              This token has been added to your on-chain collection and can be viewed or transferred at any time.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClaimSuccessPage;
