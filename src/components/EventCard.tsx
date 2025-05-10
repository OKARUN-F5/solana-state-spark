
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
  onViewDetails?: (id: string) => void;
}

export function EventCard({ id, title, description, date, location, imageUrl, onViewDetails }: EventProps) {
  return (
    <Card className="token-card overflow-hidden">
      {imageUrl && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {date} • {location}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-sm line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          onClick={() => onViewDetails && onViewDetails(id)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EventCard;
