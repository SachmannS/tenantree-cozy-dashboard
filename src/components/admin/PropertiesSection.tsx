
import React from 'react';
import { Plus, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const properties = [
  {
    id: 1,
    name: 'Sunrise Villa',
    location: 'Koramangala, Bangalore',
    occupancy: { filled: 12, total: 15 },
    rent: '₹15,000/month',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Garden Heights',
    location: 'Indiranagar, Bangalore',
    occupancy: { filled: 8, total: 10 },
    rent: '₹18,000/month',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Metro Stay',
    location: 'Whitefield, Bangalore',
    occupancy: { filled: 20, total: 25 },
    rent: '₹12,000/month',
    image: '/placeholder.svg'
  }
];

export const PropertiesSection = () => {
  return (
    <div className="tenantree-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-tenantree-primary">Properties</h2>
        <Button className="bg-tenantree-primary hover:bg-tenantree-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>
      
      <div className="space-y-4">
        {properties.map((property) => (
          <div key={property.id} className="border border-gray-100 rounded-lg p-4 hover:border-tenantree-accent/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-tenantree-primary mb-1">{property.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  {property.location}
                </div>
              </div>
              <span className="text-sm font-medium text-tenantree-accent">{property.rent}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="font-medium text-tenantree-primary">
                  {property.occupancy.filled}/{property.occupancy.total}
                </span>
                <span className="text-muted-foreground ml-1">rooms filled</span>
              </div>
              
              <div className="w-24 bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-tenantree-accent h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(property.occupancy.filled / property.occupancy.total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
