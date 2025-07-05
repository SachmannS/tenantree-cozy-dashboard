
import React from 'react';
import { Users, Home, DollarSign, Calendar } from 'lucide-react';

const stats = [
  {
    title: 'Total Residents',
    value: '47',
    change: '+3 this month',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Occupancy Rate',
    value: '89%',
    change: '+5% from last month',
    icon: Home,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Rent Collected',
    value: '₹2,45,800',
    change: 'This month',
    icon: DollarSign,
    color: 'text-tenantree-accent',
    bgColor: 'bg-orange-50'
  },
  {
    title: 'Lease Expiries',
    value: '6',
    change: 'Next 30 days',
    icon: Calendar,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="tenantree-card p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-tenantree-primary mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
            <p className="text-xs text-tenantree-accent font-medium">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
