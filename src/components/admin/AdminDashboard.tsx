
import React from 'react';
import { AdminHeader } from './AdminHeader';
import { QuickStats } from './QuickStats';
import { PropertiesSection } from './PropertiesSection';
import { ResidentsPanel } from './ResidentsPanel';
import { RentPaymentsSection } from './RentPaymentsSection';

export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <AdminHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-4">
          <QuickStats />
        </div>
        
        <div className="lg:col-span-2">
          <PropertiesSection />
        </div>
        
        <div className="lg:col-span-2">
          <ResidentsPanel />
        </div>
        
        <div className="lg:col-span-4">
          <RentPaymentsSection />
        </div>
      </div>
    </div>
  );
};
