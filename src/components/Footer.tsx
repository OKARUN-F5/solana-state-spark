
import React from 'react';

export function Footer() {
  return (
    <footer className="mt-auto py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} cToken POP - ZK Compression Demo for Solana Hackathon
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/lightprotocol/light-protocol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-primary-purple transition-colors"
            >
              Light Protocol
            </a>
            <a 
              href="https://helius.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-primary-blue transition-colors"
            >
              Helius
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
