import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Plus, Filter } from "lucide-react";

export default function Marksheets() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Marksheet Management</h1>
          <p className="text-muted-foreground">Track and manage student marks across all batches</p>
        </div>
        <Button className="bg-gradient-to-r from-info to-primary hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Upload Marks
        </Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search by student name or roll number..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="cse">CSE</SelectItem>
            <SelectItem value="ece">ECE</SelectItem>
            <SelectItem value="it">IT</SelectItem>
            <SelectItem value="mech">Mechanical</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="1">1st Year</SelectItem>
            <SelectItem value="2">2nd Year</SelectItem>
            <SelectItem value="3">3rd Year</SelectItem>
            <SelectItem value="4">4th Year</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          More Filters
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Marksheets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Roll No</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Department</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Year</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Semester</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">CGPA</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rollNo: "21CS101", name: "Rahul Kumar", dept: "CSE", year: "3rd", sem: "6", cgpa: 9.2, status: "Pass" },
                  { rollNo: "21IT205", name: "Priya Sharma", dept: "IT", year: "3rd", sem: "6", cgpa: 8.8, status: "Pass" },
                  { rollNo: "21EC310", name: "Amit Patel", dept: "ECE", year: "2nd", sem: "4", cgpa: 7.5, status: "Pass" },
                  { rollNo: "21CS402", name: "Sneha Reddy", dept: "CSE", year: "4th", sem: "8", cgpa: 9.5, status: "Pass" },
                  { rollNo: "21ME125", name: "Vikram Singh", dept: "Mech", year: "3rd", sem: "5", cgpa: 6.8, status: "Pass" },
                ].map((student, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-mono text-sm font-medium text-foreground">{student.rollNo}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium text-foreground">{student.name}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {student.dept}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{student.year} Year</td>
                    <td className="py-4 px-4 text-muted-foreground">Sem {student.sem}</td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-lg text-primary">{student.cgpa}</span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        {student.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
