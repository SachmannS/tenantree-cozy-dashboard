
import React from 'react';
import { MapPin, Calendar, Users, Wifi, Car, Coffee } from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Car, label: 'Parking' },
  { icon: Coffee, label: 'Common Kitchen' },
  { icon: Users, label: 'Common Area' }
];

export const MyStaySection = () => {
  return (
    <div className="tenantree-card p-6">
      <h2 className="text-xl font-semibold text-tenantree-primary mb-6">My Stay</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-tenantree-accent/20 rounded-xl flex items-center justify-center">
            <span className="text-2xl">🏠</span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium text-tenantree-primary mb-2">
              Sunrise Villa - Room A-101
            </h3>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>123 Koramangala, Bangalore, Karnataka 560034</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-tenantree-accent" />
              <span className="font-medium text-tenantree-primary">Lease Start</span>
            </div>
            <p className="text-sm text-muted-foreground">March 15, 2024</p>
          </div>
          
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-red-500" />
              <span className="font-medium text-tenantree-primary">Lease End</span>
            </div>
            <p className="text-sm text-muted-foreground">August 15, 2024</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-tenantree-primary mb-3">Available Amenities</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <amenity.icon className="h-4 w-4 text-tenantree-accent" />
                <span>{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
