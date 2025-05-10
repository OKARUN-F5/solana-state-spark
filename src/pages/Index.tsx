
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 to-primary-blue/5 -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                  <span className="gradient-text">cToken POP</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Proof-of-Participation with ZK Compression
                </h2>
                <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  Create and distribute event tokens using Solana's ZK Compression technology. 
                  Reduce costs by up to <span className="font-bold text-primary-purple">5000x</span> while preserving security and composability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <Button 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6 px-8"
                    onClick={() => navigate('/create')}
                  >
                    Create Event
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/10 transition-colors text-lg py-6 px-8"
                    onClick={() => navigate('/claim')}
                  >
                    Claim Token
                  </Button>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-purple to-primary-blue rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-white rounded-3xl glass flex items-center justify-center p-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">cToken</div>
                        <div className="text-sm text-gray-600 mt-2">ZK Compressed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Create Event & Mint Tokens</h3>
                <p className="text-gray-600">
                  Organizers create events and mint compressed tokens (cTokens) at a fraction of the cost of regular tokens.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Generate QR Codes</h3>
                <p className="text-gray-600">
                  Each event gets a unique QR code that attendees can scan to claim their proof-of-participation.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl animate-slide-up" style={{ animationDelay: "0.6s" }}>
                <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Collect & Showcase</h3>
                <p className="text-gray-600">
                  Attendees scan QR codes to claim cTokens, building their verifiable on-chain collection of experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tech Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Why ZK Compression?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              ZK Compression dramatically reduces the cost of on-chain storage while maintaining security, performance, and composability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Cost Reduction</h3>
                <p className="text-gray-600">Up to 5000x cheaper than regular token accounts, making mass distribution viable.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 gradient-text">L1 Security</h3>
                <p className="text-gray-600">Inherits the full security guarantees of the Solana L1 blockchain.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 gradient-text">High Performance</h3>
                <p className="text-gray-600">Maintains Solana's high throughput and low latency for excellent UX.</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Composability</h3>
                <p className="text-gray-600">Seamlessly interact with other Solana programs and accounts.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-purple/10 to-primary-blue/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Try It Out?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Create your first event with compressed tokens or claim a token to experience the power of ZK Compression.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => navigate('/create')}
              >
                Create Event
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue/10 transition-colors"
                onClick={() => navigate('/claim')}
              >
                Claim Token
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
