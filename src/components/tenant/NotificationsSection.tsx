
import React from 'react';
import { Bell, MessageCircle, Wrench, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const notifications = [
  {
    id: 1,
    type: 'payment',
    icon: DollarSign,
    title: 'Rent Due Reminder',
    message: 'Your August rent of ₹15,000 is due in 5 days',
    time: '2 hours ago',
    priority: 'high'
  },
  {
    id: 2,
    type: 'maintenance',
    icon: Wrench,
    title: 'Maintenance Update',
    message: 'WiFi issue in common area has been resolved',
    time: '1 day ago',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'message',
    icon: MessageCircle,
    title: 'Message from Admin',
    message: 'Monthly house meeting scheduled for this Saturday at 6 PM',
    time: '2 days ago',
    priority: 'low'
  }
];

export const NotificationsSection = () => {
  return (
    <div className="tenantree-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-tenantree-primary">Notifications</h2>
        <Button variant="ghost" size="sm" className="text-tenantree-accent">
          Mark all as read
        </Button>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`border rounded-lg p-4 hover:border-tenantree-accent/30 transition-colors ${
              notification.priority === 'high' ? 'border-orange-200 bg-orange-50/30' : 'border-gray-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${
                notification.priority === 'high' ? 'bg-orange-100' :
                notification.priority === 'medium' ? 'bg-blue-100' : 'bg-gray-100'
              }`}>
                <notification.icon className={`h-4 w-4 ${
                  notification.priority === 'high' ? 'text-orange-600' :
                  notification.priority === 'medium' ? 'text-blue-600' : 'text-gray-600'
                }`} />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-tenantree-primary mb-1">
                  {notification.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {notification.message}
                </p>
                <span className="text-xs text-muted-foreground">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <Button variant="outline" className="w-full">
          <Wrench className="h-4 w-4 mr-2" />
          Request Maintenance
        </Button>
      </div>
    </div>
  );
};
