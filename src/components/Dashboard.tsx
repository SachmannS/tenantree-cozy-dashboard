
import React, { useState } from 'react';
import { AdminDashboard } from './admin/AdminDashboard';
import { TenantDashboard } from './tenant/TenantDashboard';
import { Button } from '@/components/ui/button';

export const Dashboard = () => {
  const [userRole, setUserRole] = useState<'admin' | 'tenant'>('admin');

  return (
    <div className="min-h-screen bg-tenantree-soft">
      <div className="container mx-auto p-4">
        {/* Demo Role Switcher */}
        <div className="mb-6 flex justify-center">
          <div className="tenantree-card p-2 flex gap-2">
            <Button
              variant={userRole === 'admin' ? 'default' : 'outline'}
              onClick={() => setUserRole('admin')}
              className="text-sm"
            >
              Admin View
            </Button>
            <Button
              variant={userRole === 'tenant' ? 'default' : 'outline'}
              onClick={() => setUserRole('tenant')}
              className="text-sm"
            >
              Tenant View
            </Button>
          </div>
        </div>

        {/* Render appropriate dashboard */}
        {userRole === 'admin' ? <AdminDashboard /> : <TenantDashboard />}
      </div>
    </div>
  );
};
