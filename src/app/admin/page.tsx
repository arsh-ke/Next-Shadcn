"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";

const adminItems = [
  { id: 1, title: "User Management", description: "Manage system users and permissions", status: "active", users: 1240 },
  { id: 2, title: "System Settings", description: "Configure application settings", status: "active", users: 0 },
  { id: 3, title: "Email Templates", description: "Edit email templates and notifications", status: "active", users: 45 },
  { id: 4, title: "Security Audit", description: "View security logs and audit trails", status: "critical", users: 0 },
  { id: 5, title: "Database Backup", description: "Manage database backups and recovery", status: "active", users: 0 },
  { id: 6, title: "API Keys", description: "Manage API keys and access tokens", status: "warning", users: 12 },
];

const AdminPage = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Admin Panel</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <p className="text-muted-foreground mt-2">Manage system settings, users, and configuration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                <Badge variant={item.status === "active" ? "default" : item.status === "warning" ? "secondary" : "destructive"}>
                  {item.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{item.users} items</p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
