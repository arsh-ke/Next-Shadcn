"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Trash2, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";

const messages = [
  { id: 1, from: "John Doe", subject: "Project Update", preview: "Please review the latest changes...", date: "2025-12-06", read: false },
  { id: 2, from: "Jane Smith", subject: "Meeting Reminder", preview: "Don't forget about our meeting at 3 PM", date: "2025-12-05", read: true },
  { id: 3, from: "Mike Johnson", subject: "Budget Approval", preview: "The Q4 budget has been approved", date: "2025-12-05", read: false },
  { id: 4, from: "Sarah Williams", subject: "New Feature Request", preview: "Users are requesting dark mode support", date: "2025-12-04", read: true },
  { id: 5, from: "Team Lead", subject: "Sprint Planning", preview: "Let's schedule the sprint planning meeting", date: "2025-12-04", read: true },
];

const InboxPage = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Inbox</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Inbox</h1>
          <p className="text-muted-foreground mt-2">You have {messages.filter(m => !m.read).length} unread messages</p>
        </div>
      </div>

      <div className="space-y-3">
        {messages.map((message) => (
          <Card key={message.id} className={`cursor-pointer hover:bg-accent transition ${!message.read ? "border-primary" : ""}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{message.from}</p>
                      {!message.read && <Badge>New</Badge>}
                    </div>
                    <p className="text-sm font-medium">{message.subject}</p>
                    <p className="text-sm text-muted-foreground">{message.preview}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">{message.date}</p>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Archive className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InboxPage;
