
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TokenCard from '@/components/TokenCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CollectionPage = () => {
  // Demo data - in a real app, this would come from the blockchain
  const [tokens] = useState([
    {
      id: "token_1",
      name: "ETH Denver",
      event: "ETH Denver 2025",
      date: "February 15, 2025",
      imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV0aGVyZXVtfGVufDB8fDB8fHww",
      claimed: true
    },
    {
      id: "token_2",
      name: "Solana Breakpoint",
      event: "Solana Breakpoint 2024",
      date: "November 20, 2024",
      imageUrl: "https://cryptotvplus.com/wp-content/uploads/2023/06/genesis-20230621-101251-02-1140x694.jpg",
      claimed: true
    },
    {
      id: "token_3",
      name: "Solana Hackathon",
      event: "Solana Zero Hackathon",
      date: "May 10, 2025",
      claimed: true
    },
    {
      id: "token_4",
      name: "Devcon Event",
      event: "Devcon 7",
      date: "July 5, 2024",
      claimed: false
    }
  ]);
  
  const claimedTokens = tokens.filter(token => token.claimed);
  const pendingTokens = tokens.filter(token => !token.claimed);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center">My cToken Collection</h1>
            <p className="text-gray-600 mb-8 text-center">
              View all your proof-of-participation compressed tokens
            </p>
            
            <Tabs defaultValue="all" className="w-full mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Tokens ({tokens.length})</TabsTrigger>
                  <TabsTrigger value="claimed">Claimed ({claimedTokens.length})</TabsTrigger>
                  <TabsTrigger value="pending">Pending ({pendingTokens.length})</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-6">
                {tokens.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tokens.map(token => (
                      <TokenCard key={token.id} {...token} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">You don't have any tokens yet.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="claimed" className="mt-6">
                {claimedTokens.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {claimedTokens.map(token => (
                      <TokenCard key={token.id} {...token} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">You don't have any claimed tokens yet.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="pending" className="mt-6">
                {pendingTokens.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {pendingTokens.map(token => (
                      <TokenCard key={token.id} {...token} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">You don't have any pending tokens.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    These tokens are compressed using ZK technology on Solana. Each token uses approximately 5000x less blockchain 
                    space than traditional tokens, making them extremely cost-effective while maintaining full security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollectionPage;
