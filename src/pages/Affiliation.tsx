import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, AlertCircle, FileCheck, Calendar, Building2 } from "lucide-react";
import { useState } from "react";

export default function Affiliation() {
  const [selectedDept, setSelectedDept] = useState("all");

  const affiliationData = [
    {
      dept: "Computer Science",
      code: "CSE",
      affiliatedTo: "respected university",
      approvalYear: "2015",
      validUntil: "2026",
      status: "active",
      intake: 120,
      accreditationBody: "AICTE",
    },
    {
      dept: "Information Technology",
      code: "IT",
      affiliatedTo: "respencted university",
      approvalYear: "2017",
      validUntil: "2026",
      status: "active",
      intake: 90,
      accreditationBody: "AICTE",
    },
    {
      dept: "Electronics",
      code: "ECE",
      affiliatedTo: "respected university",
      approvalYear: "2016",
      validUntil: "2025",
      status: "renewal",
      intake: 60,
      accreditationBody: "AICTE",
    },
    {
      dept: "Mechanical",
      code: "MECH",
      affiliatedTo: "respected university",
      approvalYear: "2014",
      validUntil: "2026",
      status: "active",
      intake: 60,
      accreditationBody: "AICTE",
    },
    {
      dept: "Civil",
      code: "CIVIL",
      affiliatedTo: "respected university",
      approvalYear: "2014",
      validUntil: "2026",
      status: "active",
      intake: 60,
      accreditationBody: "AICTE",
    },
  ];

  const filteredData = selectedDept === "all" 
    ? affiliationData 
    : affiliationData.filter(d => d.code === selectedDept);

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Affiliation Management</h1>
          <p className="text-muted-foreground">Track university affiliation and approval status</p>
        </div>
        <Select value={selectedDept} onValueChange={setSelectedDept}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="CSE">Computer Science</SelectItem>
            <SelectItem value="IT">Information Technology</SelectItem>
            <SelectItem value="ECE">Electronics</SelectItem>
            <SelectItem value="MECH">Mechanical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Affiliations</p>
                <p className="text-3xl font-bold text-primary">{filteredData.length}</p>
              </div>
              <FileCheck className="w-12 h-12 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Status</p>
                <p className="text-3xl font-bold text-success">
                  {filteredData.filter(d => d.status === "active").length}
                </p>
              </div>
              <CheckCircle2 className="w-12 h-12 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Renewal Needed</p>
                <p className="text-3xl font-bold text-warning">
                  {filteredData.filter(d => d.status === "renewal").length}
                </p>
              </div>
              <AlertCircle className="w-12 h-12 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Intake</p>
                <p className="text-3xl font-bold text-info">
                  {filteredData.reduce((sum, d) => sum + d.intake, 0)}
                </p>
              </div>
              <Building2 className="w-12 h-12 text-info" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {filteredData.map((dept, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">{dept.dept}</CardTitle>
                    <Badge variant="outline" className="mt-1 bg-muted text-muted-foreground">
                      {dept.code}
                    </Badge>
                  </div>
                </div>
                <Badge 
                  variant="outline"
                  className={
                    dept.status === "active" 
                      ? "bg-success/10 text-success border-success/20" 
                      : "bg-warning/10 text-warning border-warning/20"
                  }
                >
                  {dept.status === "active" ? "Active" : "Renewal Required"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Affiliated To</p>
                  <p className="font-semibold text-foreground">{dept.affiliatedTo}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Accreditation Body</p>
                  <p className="font-semibold text-foreground">{dept.accreditationBody}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Approval Year
                  </p>
                  <p className="font-semibold text-foreground">{dept.approvalYear}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Valid Until
                  </p>
                  <p className="font-semibold text-foreground">{dept.validUntil}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Approved Intake</p>
                  <p className="text-2xl font-bold text-primary">{dept.intake} Students</p>
                </div>
                <Button variant="outline">View Documents</Button>
                <Button>Update Status</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
