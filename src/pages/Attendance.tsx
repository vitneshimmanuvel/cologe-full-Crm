import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { UserCheck, Users, Plus, Calendar } from "lucide-react";

export default function Attendance() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Attendance Management</h1>
          <p className="text-muted-foreground">Track student and teacher attendance</p>
        </div>
        <Button className="bg-gradient-to-r from-warning to-accent hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Mark Attendance
        </Button>
      </div>

      <Tabs defaultValue="students" className="space-y-6">
        <TabsList>
          <TabsTrigger value="students">Student Attendance</TabsTrigger>
          <TabsTrigger value="teachers">Teacher Attendance</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Today's Present</p>
                    <p className="text-3xl font-bold text-success">2,456</p>
                  </div>
                  <UserCheck className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Today's Absent</p>
                    <p className="text-3xl font-bold text-destructive">123</p>
                  </div>
                  <Users className="w-8 h-8 text-destructive" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                    <p className="text-3xl font-bold text-primary">95.2%</p>
                  </div>
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    <p className="text-3xl font-bold text-foreground">2,579</p>
                  </div>
                  <Users className="w-8 h-8 text-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Department-wise Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { dept: "Computer Science", present: 456, total: 480, percentage: 95 },
                  { dept: "Information Technology", present: 342, total: 360, percentage: 95 },
                  { dept: "Electronics", present: 278, total: 300, percentage: 93 },
                  { dept: "Mechanical", present: 232, total: 250, percentage: 93 },
                ].map((dept, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{dept.dept}</p>
                        <p className="text-sm text-muted-foreground">
                          {dept.present} / {dept.total} students present
                        </p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${
                          dept.percentage >= 95 ? 'bg-success/10 text-success border-success/20' : 
                          dept.percentage >= 90 ? 'bg-warning/10 text-warning border-warning/20' :
                          'bg-destructive/10 text-destructive border-destructive/20'
                        }`}
                      >
                        {dept.percentage}%
                      </Badge>
                    </div>
                    <Progress value={dept.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Students with Low Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Rohit Kumar", rollNo: "21CS401", dept: "CSE", attendance: 68 },
                  { name: "Kavita Sharma", rollNo: "21IT205", dept: "IT", attendance: 72 },
                  { name: "Ajay Patel", rollNo: "21EC310", dept: "ECE", attendance: 65 },
                ].map((student, i) => (
                  <div key={i} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-destructive to-warning flex items-center justify-center text-white font-bold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {student.rollNo} • {student.dept}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                      {student.attendance}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teachers">
          <Card>
            <CardHeader>
              <CardTitle>Teacher Attendance Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Dr. Ramesh Kumar", dept: "CSE", status: "Present", time: "09:00 AM" },
                  { name: "Prof. Anita Singh", dept: "IT", status: "Present", time: "09:15 AM" },
                  { name: "Dr. Suresh Patel", dept: "ECE", status: "Present", time: "09:05 AM" },
                  { name: "Prof. Meera Reddy", dept: "Mech", status: "Absent", time: "-" },
                ].map((teacher, i) => (
                  <div key={i} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold">
                        {teacher.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{teacher.name}</p>
                        <p className="text-sm text-muted-foreground">{teacher.dept} Department</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant="outline" 
                        className={teacher.status === "Present" ? 
                          'bg-success/10 text-success border-success/20' : 
                          'bg-destructive/10 text-destructive border-destructive/20'
                        }
                      >
                        {teacher.status}
                      </Badge>
                      {teacher.time !== "-" && (
                        <p className="text-xs text-muted-foreground mt-1">{teacher.time}</p>
                      )}
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
