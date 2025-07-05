
import React from 'react';
import { Dashboard } from '@/components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="tenantree-gradient min-h-24 flex items-center justify-center mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-tenantree-primary mb-2">
            Tenantree
          </h1>
          <p className="text-tenantree-accent font-medium">
            Your cozy PG management platform
          </p>
        </div>
      </div>
      
      <Dashboard />
    </div>
  );
};

export default Index;
