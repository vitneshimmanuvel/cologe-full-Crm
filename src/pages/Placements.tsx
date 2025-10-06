import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Users, Download, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Placements() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Placement Management</h1>
          <p className="text-muted-foreground">Track student placements, drives, and resumes</p>
        </div>
        <Button className="bg-gradient-to-r from-accent to-warning hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Add Placement
        </Button>
      </div>

      <Tabs defaultValue="placed" className="space-y-6">
        <TabsList>
          <TabsTrigger value="placed">Placed Students</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Drives</TabsTrigger>
          <TabsTrigger value="history">Placement History</TabsTrigger>
        </TabsList>

        <TabsContent value="placed" className="space-y-4">
          {[
            { name: "Rahul Verma", company: "Google", package: "₹24 LPA", date: "2024-01-15", dept: "CSE" },
            { name: "Anita Singh", company: "Microsoft", package: "₹22 LPA", date: "2024-01-20", dept: "IT" },
            { name: "Suresh Kumar", company: "Amazon", package: "₹20 LPA", date: "2024-02-05", dept: "CSE" },
            { name: "Meera Patel", company: "Wipro", package: "₹7 LPA", date: "2024-02-10", dept: "ECE" },
          ].map((student, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-warning flex items-center justify-center text-2xl font-bold text-white">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{student.name}</h3>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {student.dept}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {student.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {student.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-2xl font-bold text-success">{student.package}</p>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          {[
            { company: "TCS", date: "2024-03-15", positions: 50, eligibility: "All branches, 6.5+ CGPA" },
            { company: "Accenture", date: "2024-03-20", positions: 35, eligibility: "CSE, IT, ECE, 7+ CGPA" },
            { company: "Cognizant", date: "2024-03-25", positions: 40, eligibility: "All branches, 6+ CGPA" },
          ].map((drive, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-info to-primary flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{drive.company}</h3>
                        <p className="text-sm text-muted-foreground">{drive.eligibility}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{drive.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Users className="w-4 h-4" />
                      <span className="font-bold">{drive.positions} positions</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Year-wise Placement Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { year: "2023-24", placed: 456, total: 500, highest: "₹42 LPA", average: "₹8.5 LPA" },
                  { year: "2022-23", placed: 423, total: 480, highest: "₹38 LPA", average: "₹7.8 LPA" },
                  { year: "2021-22", placed: 398, total: 460, highest: "₹35 LPA", average: "₹7.2 LPA" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-bold text-lg text-foreground">{stat.year}</p>
                      <p className="text-sm text-muted-foreground">
                        {stat.placed} / {stat.total} students placed ({Math.round((stat.placed/stat.total)*100)}%)
                      </p>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <p className="text-muted-foreground">Highest</p>
                        <p className="font-bold text-success">{stat.highest}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Average</p>
                        <p className="font-bold text-primary">{stat.average}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
