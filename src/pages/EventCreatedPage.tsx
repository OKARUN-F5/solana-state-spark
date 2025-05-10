
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QRGenerator from '@/components/QRGenerator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EventCreatedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventData = location.state || {
    eventId: "event_demo",
    title: "Demo Event",
    date: "2025-05-15",
    tokenSymbol: "DEMO",
    tokenSupply: "100"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">Event Successfully Created!</h1>
              <p className="text-xl text-gray-600">
                Your event is set up and cTokens have been minted.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="glass-card text-left animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                  <CardDescription>Summary of your created event</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Event Title</h3>
                      <p className="text-lg font-semibold">{eventData.title}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Event Date</h3>
                      <p>{new Date(eventData.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Event ID</h3>
                      <p className="font-mono text-xs bg-gray-100 p-1 rounded">{eventData.eventId}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-left animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle>Token Information</CardTitle>
                  <CardDescription>Details about your minted cTokens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Token Symbol</h3>
                      <p className="text-lg font-semibold">{eventData.tokenSymbol}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Supply</h3>
                      <p>{eventData.tokenSupply} tokens</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Cost Savings</h3>
                      <p className="text-green-600">~5000x less than regular tokens</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="text-2xl font-bold mb-6">Event QR Code</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Share this QR code with your attendees so they can claim their proof-of-participation cTokens.
              </p>
              <div className="max-w-xs mx-auto">
                <QRGenerator eventId={eventData.eventId} />
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={() => navigate('/create')}
                >
                  Create Another Event
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventCreatedPage;
