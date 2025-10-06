import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, FileText, TrendingUp, Calendar, Award } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the College Management System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Placements"
          value="1,234"
          icon={Briefcase}
          trend="+12% from last year"
          colorClass="bg-gradient-to-br from-accent to-warning"
        />
        <StatCard
          title="Active Alumni"
          value="5,678"
          icon={Users}
          trend="+8% growth"
          colorClass="bg-gradient-to-br from-success to-info"
        />
        <StatCard
          title="Total Students"
          value="3,456"
          icon={FileText}
          trend="Across all departments"
          colorClass="bg-gradient-to-br from-info to-primary"
        />
        <StatCard
          title="Upcoming Events"
          value="24"
          icon={Calendar}
          trend="This month"
          colorClass="bg-gradient-to-br from-primary to-primary-glow"
        />
      </div>

      {/* Recent Activity Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Recent Placements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { company: "Google", students: 12, package: "₹24 LPA" },
                { company: "Microsoft", students: 8, package: "₹22 LPA" },
                { company: "Amazon", students: 15, package: "₹20 LPA" },
                { company: "Infosys", students: 45, package: "₹8 LPA" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div>
                    <p className="font-semibold text-foreground">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.students} students placed</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-success">{item.package}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Rajesh Kumar", dept: "CSE", cgpa: "9.8" },
                { name: "Priya Sharma", dept: "ECE", cgpa: "9.7" },
                { name: "Amit Patel", dept: "CSE", cgpa: "9.6" },
                { name: "Sneha Reddy", dept: "IT", cgpa: "9.5" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.dept} Department</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{item.cgpa} CGPA</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
