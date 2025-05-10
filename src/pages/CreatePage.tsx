
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CreateEventForm from '@/components/CreateEventForm';

const CreatePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Create Event & Mint cTokens</h1>
            
            <div className="mb-8">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Creating an event will mint compressed tokens (cTokens) for your attendees using ZK Compression. 
                      This reduces the cost by up to 5000x compared to regular tokens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <CreateEventForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreatePage;
