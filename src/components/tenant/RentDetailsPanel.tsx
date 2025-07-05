
import React from 'react';
import { Download, CreditCard, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const RentDetailsPanel = () => {
  return (
    <div className="tenantree-card p-6">
      <h2 className="text-xl font-semibold text-tenantree-primary mb-6">Rent Details</h2>
      
      <div className="space-y-4">
        <div className="border border-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Monthly Rent</span>
            <span className="text-lg font-semibold text-tenantree-primary">₹15,000</span>
          </div>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Due Date</span>
            <span className="text-sm font-medium">5th of every month</span>
          </div>
          
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-600">July rent paid</span>
          </div>
        </div>
        
        <div className="border border-orange-100 bg-orange-50/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Upcoming Payment</span>
          </div>
          <p className="text-sm text-orange-600 mb-3">August rent due in 5 days</p>
          
          <Button className="w-full bg-tenantree-primary hover:bg-tenantree-primary/90">
            <CreditCard className="h-4 w-4 mr-2" />
            Pay Rent
          </Button>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-tenantree-primary">Payment History</h4>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium">July 2024</p>
                <p className="text-xs text-muted-foreground">Paid on July 3, 2024</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <Button variant="ghost" size="sm">
                  <Download className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium">June 2024</p>
                <p className="text-xs text-muted-foreground">Paid on June 2, 2024</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <Button variant="ghost" size="sm">
                  <Download className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
