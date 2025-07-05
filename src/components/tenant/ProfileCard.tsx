
import React from 'react';
import { Phone, Mail, User, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ProfileCard = () => {
  return (
    <div className="tenantree-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-tenantree-primary">My Profile</h2>
        <Button variant="outline" size="sm">
          <Edit3 className="h-4 w-4 mr-2" />
          Edit
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-tenantree-accent/20 rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-tenantree-primary">RS</span>
          </div>
          <div>
            <h3 className="font-semibold text-tenantree-primary">Rahul Sharma</h3>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-tenantree-accent" />
            <span className="text-sm">+91 98765 43210</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-tenantree-accent" />
            <span className="text-sm">rahul.sharma@email.com</span>
          </div>
          
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-tenantree-accent" />
            <span className="text-sm">ID: TT2024001</span>
          </div>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <h4 className="font-medium text-tenantree-primary mb-3">Emergency Contact</h4>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-medium">Name:</span> Priya Sharma</p>
            <p className="text-sm"><span className="font-medium">Relation:</span> Spouse</p>
            <p className="text-sm"><span className="font-medium">Phone:</span> +91 98765 43211</p>
          </div>
        </div>
      </div>
    </div>
  );
};
