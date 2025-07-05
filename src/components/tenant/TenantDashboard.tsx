
import React from 'react';
import { TenantHeader } from './TenantHeader';
import { MyStaySection } from './MyStaySection';
import { RentDetailsPanel } from './RentDetailsPanel';
import { ProfileCard } from './ProfileCard';
import { NotificationsSection } from './NotificationsSection';

export const TenantDashboard = () => {
  return (
    <div className="space-y-6">
      <TenantHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MyStaySection />
        </div>
        
        <div className="lg:col-span-1">
          <RentDetailsPanel />
        </div>
        
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>
        
        <div className="lg:col-span-2">
          <NotificationsSection />
        </div>
      </div>
    </div>
  );
};
