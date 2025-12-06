"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, Filter } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const reports = [
  { id: 1, name: "Monthly Revenue Report", date: "2025-12-06", status: "completed", progress: 100, format: "PDF" },
  { id: 2, name: "Q4 Financial Summary", date: "2025-12-05", status: "completed", progress: 100, format: "Excel" },
  { id: 3, name: "User Growth Analytics", date: "2025-12-04", status: "in-progress", progress: 65, format: "PDF" },
  { id: 4, name: "Marketing Campaign Report", date: "2025-12-03", status: "completed", progress: 100, format: "PDF" },
  { id: 5, name: "Customer Satisfaction Survey", date: "2025-12-02", status: "in-progress", progress: 42, format: "Excel" },
  { id: 6, name: "Security Audit Report", date: "2025-12-01", status: "completed", progress: 100, format: "PDF" },
];

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Reports</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground mt-2">View and download generated reports</p>
        </div>
        <Button>
          <Filter className="mr-2 w-4 h-4" /> Generate Report
        </Button>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{report.name}</h3>
                  <p className="text-sm text-muted-foreground">{report.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={report.status === "completed" ? "default" : "secondary"}>
                    {report.status}
                  </Badge>
                  <Badge variant="outline">{report.format}</Badge>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{report.progress}%</span>
                </div>
                <Progress value={report.progress} />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" /> View
                </Button>
                <Button variant="outline" size="sm" disabled={report.status !== "completed"}>
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
