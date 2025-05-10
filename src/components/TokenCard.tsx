
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface TokenProps {
  id: string;
  name: string;
  event: string;
  date: string;
  imageUrl?: string;
  claimed: boolean;
}

export function TokenCard({ name, event, date, imageUrl, claimed }: TokenProps) {
  return (
    <Card className="token-card overflow-hidden">
      <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-4xl font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <Badge variant={claimed ? "default" : "outline"} className={claimed ? "bg-green-500" : ""}>
            {claimed ? "Claimed" : "Unclaimed"}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-500">
          {event}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm text-gray-500">Issued on {date}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-gray-400">Compressed Token</span>
          <span className="text-xs text-gray-400">ZK Verified</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default TokenCard;
