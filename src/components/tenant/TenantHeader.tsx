
import React from 'react';
import { MessageCircle, Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TenantHeader = () => {
  return (
    <div className="tenantree-card p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-tenantree-primary mb-2">
            Hi Rahul! 👋
          </h1>
          <p className="text-muted-foreground">
            Welcome to your cozy space at Sunrise Villa
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
