
import React from 'react';
import { Download, Filter, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const paymentStats = [
  {
    title: 'Total Monthly Income',
    value: '₹3,45,000',
    change: '+12%',
    trend: 'up'
  },
  {
    title: 'Rent Received',
    value: '₹2,45,800',
    change: '71%',
    trend: 'up'
  },
  {
    title: 'Pending Payments',
    value: '₹99,200',
    change: '29%',
    trend: 'down'
  }
];

export const RentPaymentsSection = () => {
  return (
    <div className="tenantree-card p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold text-tenantree-primary">Rent & Payments</h2>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {paymentStats.map((stat, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              {stat.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-orange-500" />
              )}
            </div>
            <p className="text-2xl font-semibold text-tenantree-primary">{stat.value}</p>
            <p className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-orange-600'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>
      
      <div className="bg-tenantree-soft/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-tenantree-primary">Payment Timeline</h3>
          <span className="text-sm text-muted-foreground">July 2024</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Week 1</span>
            <span className="text-sm font-medium text-green-600">₹85,000</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Week 2</span>
            <span className="text-sm font-medium text-green-600">₹92,400</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm">Week 3</span>
            <span className="text-sm font-medium text-green-600">₹68,400</span>
          </div>
          <div className="flex items-center justify-between py-2 border-t pt-3">
            <span className="text-sm font-medium">Total Collected</span>
            <span className="text-sm font-semibold text-tenantree-primary">₹2,45,800</span>
          </div>
        </div>
      </div>
    </div>
  );
};
