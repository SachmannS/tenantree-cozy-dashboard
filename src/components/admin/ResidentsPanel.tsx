
import React from 'react';
import { Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const residents = [
  {
    id: 1,
    name: 'Rahul Sharma',
    property: 'Sunrise Villa',
    room: 'A-101',
    leaseEnd: '2024-08-15',
    rentStatus: 'paid',
    avatar: 'RS'
  },
  {
    id: 2,
    name: 'Priya Patel',
    property: 'Garden Heights',
    room: 'B-205',
    leaseEnd: '2024-07-20',
    rentStatus: 'pending',
    avatar: 'PP'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    property: 'Metro Stay',
    room: 'C-303',
    leaseEnd: '2024-09-10',
    rentStatus: 'paid',
    avatar: 'AK'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    property: 'Sunrise Villa',
    room: 'A-204',
    leaseEnd: '2024-07-25',
    rentStatus: 'pending',
    avatar: 'SR'
  }
];

export const ResidentsPanel = () => {
  return (
    <div className="tenantree-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-tenantree-primary">Recent Residents</h2>
        <span className="text-sm text-muted-foreground">{residents.length} active</span>
      </div>
      
      <div className="space-y-4">
        {residents.map((resident) => (
          <div key={resident.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-tenantree-soft/50 transition-colors">
            <div className="w-10 h-10 bg-tenantree-accent/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-tenantree-primary">{resident.avatar}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-tenantree-primary truncate">{resident.name}</h4>
              <p className="text-sm text-muted-foreground">
                {resident.property} • Room {resident.room}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {resident.rentStatus === 'paid' ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-orange-500" />
              )}
              
              <div className="text-right">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(resident.leaseEnd).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
