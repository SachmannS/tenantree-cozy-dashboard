
import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AdminHeader = () => {
  return (
    <div className="tenantree-card p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-tenantree-primary mb-2">
            Welcome back, Sarah! 🏠
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your properties today
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
