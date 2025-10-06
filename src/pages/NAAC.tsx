import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Award, TrendingUp, FileText, Target } from "lucide-react";
import { useState } from "react";

export default function NAAC() {
  const [selectedDept, setSelectedDept] = useState("all");

  const naacData = [
    {
      dept: "Computer Science",
      code: "CSE",
      overallGrade: "A+",
      cgpa: 3.45,
      criteria: [
        { name: "Curricular Aspects", score: 3.5, maxScore: 4 },
        { name: "Teaching-Learning", score: 3.6, maxScore: 4 },
        { name: "Research & Innovation", score: 3.4, maxScore: 4 },
        { name: "Infrastructure", score: 3.3, maxScore: 4 },
        { name: "Student Support", score: 3.5, maxScore: 4 },
        { name: "Governance", score: 3.4, maxScore: 4 },
        { name: "Institutional Values", score: 3.5, maxScore: 4 },
      ],
      lastAccredited: "2022",
      nextDue: "2027",
    },
    {
      dept: "Information Technology",
      code: "IT",
      overallGrade: "A",
      cgpa: 3.25,
      criteria: [
        { name: "Curricular Aspects", score: 3.3, maxScore: 4 },
        { name: "Teaching-Learning", score: 3.4, maxScore: 4 },
        { name: "Research & Innovation", score: 3.1, maxScore: 4 },
        { name: "Infrastructure", score: 3.2, maxScore: 4 },
        { name: "Student Support", score: 3.3, maxScore: 4 },
        { name: "Governance", score: 3.2, maxScore: 4 },
        { name: "Institutional Values", score: 3.3, maxScore: 4 },
      ],
      lastAccredited: "2022",
      nextDue: "2027",
    },
    {
      dept: "Electronics",
      code: "ECE",
      overallGrade: "A",
      cgpa: 3.15,
      criteria: [
        { name: "Curricular Aspects", score: 3.2, maxScore: 4 },
        { name: "Teaching-Learning", score: 3.3, maxScore: 4 },
        { name: "Research & Innovation", score: 3.0, maxScore: 4 },
        { name: "Infrastructure", score: 3.1, maxScore: 4 },
        { name: "Student Support", score: 3.2, maxScore: 4 },
        { name: "Governance", score: 3.1, maxScore: 4 },
        { name: "Institutional Values", score: 3.2, maxScore: 4 },
      ],
      lastAccredited: "2023",
      nextDue: "2028",
    },
    {
      dept: "Mechanical",
      code: "MECH",
      overallGrade: "B+",
      cgpa: 2.95,
      criteria: [
        { name: "Curricular Aspects", score: 3.0, maxScore: 4 },
        { name: "Teaching-Learning", score: 3.1, maxScore: 4 },
        { name: "Research & Innovation", score: 2.8, maxScore: 4 },
        { name: "Infrastructure", score: 2.9, maxScore: 4 },
        { name: "Student Support", score: 3.0, maxScore: 4 },
        { name: "Governance", score: 2.9, maxScore: 4 },
        { name: "Institutional Values", score: 3.0, maxScore: 4 },
      ],
      lastAccredited: "2023",
      nextDue: "2028",
    },
  ];

  const filteredData = selectedDept === "all" 
    ? naacData 
    : naacData.filter(d => d.code === selectedDept);

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "from-success to-success-glow";
    if (grade.startsWith("B")) return "from-info to-info-glow";
    return "from-warning to-warning-glow";
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">NAAC Accreditation</h1>
          <p className="text-muted-foreground">National Assessment and Accreditation Council Scores</p>
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
                <p className="text-sm text-muted-foreground mb-1">Average CGPA</p>
                <p className="text-3xl font-bold text-success">
                  {(filteredData.reduce((sum, d) => sum + d.cgpa, 0) / filteredData.length).toFixed(2)}
                </p>
              </div>
              <Award className="w-12 h-12 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">A+ Grades</p>
                <p className="text-3xl font-bold text-primary">
                  {filteredData.filter(d => d.overallGrade === "A+").length}
                </p>
              </div>
              <TrendingUp className="w-12 h-12 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-info/10 to-info/5 border-info/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Departments</p>
                <p className="text-3xl font-bold text-info">{filteredData.length}</p>
              </div>
              <FileText className="w-12 h-12 text-info" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Target CGPA</p>
                <p className="text-3xl font-bold text-accent">3.5</p>
              </div>
              <Target className="w-12 h-12 text-accent" />
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
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getGradeColor(dept.overallGrade)} flex items-center justify-center shadow-lg`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">{dept.dept}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        {dept.code}
                      </Badge>
                      <Badge className="bg-success text-white">
                        Grade: {dept.overallGrade}
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        CGPA: {dept.cgpa}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Last Accredited</p>
                  <p className="font-bold text-foreground">{dept.lastAccredited}</p>
                  <p className="text-xs text-muted-foreground mt-1">Next Due: {dept.nextDue}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {dept.criteria.map((criterion, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{criterion.name}</span>
                    <span className="text-muted-foreground">
                      {criterion.score} / {criterion.maxScore}
                    </span>
                  </div>
                  <Progress 
                    value={(criterion.score / criterion.maxScore) * 100} 
                    className="h-2"
                  />
                </div>
              ))}
              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                <Button variant="outline" className="flex-1">View SSR Report</Button>
                <Button className="flex-1">Download Certificate</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
