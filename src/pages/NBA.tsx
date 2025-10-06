import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, CheckCircle, Clock, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function NBA() {
  const [selectedDept, setSelectedDept] = useState("all");

  const nbaData = [
    {
      dept: "Computer Science",
      code: "CSE",
      accreditationStatus: "Accredited",
      validFrom: "2021",
      validUntil: "2026",
      tier: "Tier I",
      pos: [
        { id: "PO1", name: "Engineering Knowledge", attainment: 85 },
        { id: "PO2", name: "Problem Analysis", attainment: 82 },
        { id: "PO3", name: "Design/Development", attainment: 88 },
        { id: "PO4", name: "Investigation", attainment: 80 },
        { id: "PO5", name: "Modern Tool Usage", attainment: 90 },
        { id: "PO6", name: "Engineer and Society", attainment: 78 },
      ],
      psos: [
        { id: "PSO1", name: "Software Development", attainment: 87 },
        { id: "PSO2", name: "Problem Solving", attainment: 85 },
        { id: "PSO3", name: "Research Skills", attainment: 82 },
      ],
    },
    {
      dept: "Information Technology",
      code: "IT",
      accreditationStatus: "Accredited",
      validFrom: "2022",
      validUntil: "2027",
      tier: "Tier I",
      pos: [
        { id: "PO1", name: "Engineering Knowledge", attainment: 83 },
        { id: "PO2", name: "Problem Analysis", attainment: 80 },
        { id: "PO3", name: "Design/Development", attainment: 85 },
        { id: "PO4", name: "Investigation", attainment: 78 },
        { id: "PO5", name: "Modern Tool Usage", attainment: 88 },
        { id: "PO6", name: "Engineer and Society", attainment: 76 },
      ],
      psos: [
        { id: "PSO1", name: "IT Infrastructure", attainment: 84 },
        { id: "PSO2", name: "Network Security", attainment: 82 },
        { id: "PSO3", name: "System Analysis", attainment: 80 },
      ],
    },
    {
      dept: "Electronics",
      code: "ECE",
      accreditationStatus: "Under Review",
      validFrom: "2020",
      validUntil: "2025",
      tier: "Tier II",
      pos: [
        { id: "PO1", name: "Engineering Knowledge", attainment: 80 },
        { id: "PO2", name: "Problem Analysis", attainment: 78 },
        { id: "PO3", name: "Design/Development", attainment: 82 },
        { id: "PO4", name: "Investigation", attainment: 76 },
        { id: "PO5", name: "Modern Tool Usage", attainment: 84 },
        { id: "PO6", name: "Engineer and Society", attainment: 74 },
      ],
      psos: [
        { id: "PSO1", name: "Circuit Design", attainment: 81 },
        { id: "PSO2", name: "Signal Processing", attainment: 79 },
        { id: "PSO3", name: "Embedded Systems", attainment: 77 },
      ],
    },
    {
      dept: "Mechanical",
      code: "MECH",
      accreditationStatus: "Provisional",
      validFrom: "2023",
      validUntil: "2026",
      tier: "Tier II",
      pos: [
        { id: "PO1", name: "Engineering Knowledge", attainment: 78 },
        { id: "PO2", name: "Problem Analysis", attainment: 76 },
        { id: "PO3", name: "Design/Development", attainment: 80 },
        { id: "PO4", name: "Investigation", attainment: 74 },
        { id: "PO5", name: "Modern Tool Usage", attainment: 82 },
        { id: "PO6", name: "Engineer and Society", attainment: 72 },
      ],
      psos: [
        { id: "PSO1", name: "Mechanical Design", attainment: 79 },
        { id: "PSO2", name: "Manufacturing", attainment: 77 },
        { id: "PSO3", name: "Thermal Systems", attainment: 75 },
      ],
    },
  ];

  const filteredData = selectedDept === "all" 
    ? nbaData 
    : nbaData.filter(d => d.code === selectedDept);

  const getStatusColor = (status: string) => {
    if (status === "Accredited") return "bg-success/10 text-success border-success/20";
    if (status === "Under Review") return "bg-warning/10 text-warning border-warning/20";
    return "bg-info/10 text-info border-info/20";
  };

  const getStatusIcon = (status: string) => {
    if (status === "Accredited") return <CheckCircle className="w-12 h-12 text-success" />;
    if (status === "Under Review") return <Clock className="w-12 h-12 text-warning" />;
    return <BarChart3 className="w-12 h-12 text-info" />;
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">NBA Accreditation</h1>
          <p className="text-muted-foreground">National Board of Accreditation - PO & PSO Attainment</p>
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
        <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Accredited</p>
                <p className="text-3xl font-bold text-success">
                  {filteredData.filter(d => d.accreditationStatus === "Accredited").length}
                </p>
              </div>
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Under Review</p>
                <p className="text-3xl font-bold text-warning">
                  {filteredData.filter(d => d.accreditationStatus === "Under Review").length}
                </p>
              </div>
              <Clock className="w-12 h-12 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tier I</p>
                <p className="text-3xl font-bold text-primary">
                  {filteredData.filter(d => d.tier === "Tier I").length}
                </p>
              </div>
              <Award className="w-12 h-12 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg PO</p>
                <p className="text-3xl font-bold text-info">
                  {Math.round(
                    filteredData.reduce((sum, d) => 
                      sum + d.pos.reduce((s, p) => s + p.attainment, 0) / d.pos.length, 0
                    ) / filteredData.length
                  )}%
                </p>
              </div>
              <BarChart3 className="w-12 h-12 text-info" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {filteredData.map((dept, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                    {getStatusIcon(dept.accreditationStatus)}
                  </div>
                  <div>
                    <CardTitle className="text-foreground">{dept.dept}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        {dept.code}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(dept.accreditationStatus)}>
                        {dept.accreditationStatus}
                      </Badge>
                      <Badge className="bg-primary text-white">
                        {dept.tier}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Valid Period</p>
                  <p className="font-bold text-foreground">{dept.validFrom} - {dept.validUntil}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pos" className="space-y-6">
                <TabsList className="w-full">
                  <TabsTrigger value="pos" className="flex-1">Program Outcomes (PO)</TabsTrigger>
                  <TabsTrigger value="psos" className="flex-1">Program Specific Outcomes (PSO)</TabsTrigger>
                </TabsList>

                <TabsContent value="pos" className="space-y-4">
                  {dept.pos.map((po, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            {po.id}
                          </Badge>
                          <span className="text-foreground font-medium">{po.name}</span>
                        </div>
                        <span className="text-muted-foreground font-semibold">
                          {po.attainment}%
                        </span>
                      </div>
                      <Progress value={po.attainment} className="h-2" />
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="psos" className="space-y-4">
                  {dept.psos.map((pso, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-success/10 text-success">
                            {pso.id}
                          </Badge>
                          <span className="text-foreground font-medium">{pso.name}</span>
                        </div>
                        <span className="text-muted-foreground font-semibold">
                          {pso.attainment}%
                        </span>
                      </div>
                      <Progress value={pso.attainment} className="h-2" />
                    </div>
                  ))}
                </TabsContent>
              </Tabs>

              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                <Button variant="outline" className="flex-1">View SAR Report</Button>
                <Button variant="outline" className="flex-1">Download Assessment</Button>
                <Button className="flex-1">Update Attainment</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
