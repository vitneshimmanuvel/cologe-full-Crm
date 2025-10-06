import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, BookOpen, Award, ChevronRight } from "lucide-react";

export default function Departments() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Department Portals</h1>
        <p className="text-muted-foreground">Access department-wise semester and subject information</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { name: "Computer Science", students: 480, faculty: 45, code: "CSE", color: "from-primary to-primary-glow" },
          { name: "Information Technology", students: 360, faculty: 32, code: "IT", color: "from-info to-primary" },
          { name: "Electronics", students: 300, faculty: 28, code: "ECE", color: "from-success to-info" },
          { name: "Mechanical", students: 250, faculty: 24, code: "MECH", color: "from-accent to-warning" },
        ].map((dept, i) => (
          <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center shadow-lg`}>
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{dept.name}</h3>
                  <Badge variant="outline" className="mt-2 bg-primary/10 text-primary border-primary/20">
                    {dept.code}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Students
                    </span>
                    <span className="font-semibold text-foreground">{dept.students}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Faculty
                    </span>
                    <span className="font-semibold text-foreground">{dept.faculty}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>CSE Department - Semester Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sem6" className="space-y-6">
            <TabsList>
              <TabsTrigger value="sem6">Semester 6</TabsTrigger>
              <TabsTrigger value="sem5">Semester 5</TabsTrigger>
              <TabsTrigger value="sem4">Semester 4</TabsTrigger>
            </TabsList>

            <TabsContent value="sem6" className="space-y-4">
              {[
                { code: "CS601", name: "Machine Learning", credits: 4, faculty: "Dr. Ramesh Kumar", students: 120 },
                { code: "CS602", name: "Cloud Computing", credits: 3, faculty: "Prof. Anita Singh", students: 120 },
                { code: "CS603", name: "Blockchain Technology", credits: 3, faculty: "Dr. Suresh Patel", students: 120 },
                { code: "CS604", name: "Software Engineering", credits: 4, faculty: "Prof. Meera Reddy", students: 120 },
              ].map((subject, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                          <BookOpen className="w-7 h-7 text-white" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-foreground">{subject.name}</h4>
                            <Badge variant="outline" className="bg-muted text-muted-foreground">
                              {subject.code}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Faculty: {subject.faculty}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-2 text-primary">
                          <Award className="w-4 h-4" />
                          <span className="font-bold">{subject.credits} Credits</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{subject.students} students</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="sem5">
              <p className="text-center text-muted-foreground py-8">Semester 5 subjects will be displayed here</p>
            </TabsContent>

            <TabsContent value="sem4">
              <p className="text-center text-muted-foreground py-8">Semester 4 subjects will be displayed here</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
