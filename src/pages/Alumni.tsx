import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Building2, Calendar, Mail, Phone, Search, Plus, MapPin } from "lucide-react";

export default function Alumni() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Alumni Network</h1>
          <p className="text-muted-foreground">Connect with alumni and manage meetups</p>
        </div>
        <Button className="bg-gradient-to-r from-success to-info hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Add Alumni
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search alumni by name, company, or batch..." className="pl-10" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Dr. Arvind Kumar", batch: "2010-2014", company: "Google", position: "Senior Engineer", location: "Bangalore", dept: "CSE" },
          { name: "Priya Mehta", batch: "2012-2016", company: "Microsoft", position: "Product Manager", location: "Hyderabad", dept: "IT" },
          { name: "Suresh Reddy", batch: "2015-2019", company: "Amazon", position: "SDE-2", location: "Chennai", dept: "CSE" },
          { name: "Anjali Sharma", batch: "2011-2015", company: "Infosys", position: "Tech Lead", location: "Pune", dept: "ECE" },
          { name: "Vikram Singh", batch: "2013-2017", company: "Wipro", position: "Manager", location: "Mumbai", dept: "IT" },
          { name: "Neha Patel", batch: "2014-2018", company: "TCS", position: "Senior Developer", location: "Delhi", dept: "CSE" },
        ].map((alumni, i) => (
          <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-success to-info flex items-center justify-center text-2xl font-bold text-white">
                    {alumni.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    {alumni.batch}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{alumni.name}</h3>
                  <p className="text-sm text-muted-foreground">{alumni.dept} Department</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>{alumni.position} at {alumni.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{alumni.location}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-success" />
            Upcoming Alumni Meetups
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: "Tech Talk: AI in Industry", date: "March 20, 2024", attendees: 45, location: "Main Auditorium" },
              { title: "Career Guidance Session", date: "March 25, 2024", attendees: 67, location: "Seminar Hall" },
              { title: "Alumni Cricket Match", date: "April 5, 2024", attendees: 32, location: "Sports Ground" },
            ].map((event, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/50 flex items-center justify-between hover:bg-muted transition-colors">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{event.title}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{event.attendees}</p>
                  <p className="text-xs text-muted-foreground">Registered</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
