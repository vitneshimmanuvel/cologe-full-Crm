import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Plus, Clock } from "lucide-react";

export default function Events() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Events & Meetings</h1>
          <p className="text-muted-foreground">Manage academic events and teacher meetings</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {[
          {
            title: "Technical Symposium 2024",
            type: "Academic",
            date: "March 25-27, 2024",
            time: "09:00 AM - 05:00 PM",
            venue: "Main Auditorium",
            participants: 456,
            status: "Upcoming",
            color: "primary"
          },
          {
            title: "Faculty Development Program",
            type: "Training",
            date: "March 20, 2024",
            time: "10:00 AM - 04:00 PM",
            venue: "Seminar Hall A",
            participants: 45,
            status: "Ongoing",
            color: "success"
          },
          {
            title: "Department HOD Meeting",
            type: "Meeting",
            date: "March 18, 2024",
            time: "11:00 AM - 01:00 PM",
            venue: "Conference Room",
            participants: 12,
            status: "Completed",
            color: "muted"
          },
          {
            title: "Sports Day",
            type: "Extra-Curricular",
            date: "April 5, 2024",
            time: "07:00 AM - 06:00 PM",
            venue: "Sports Complex",
            participants: 1200,
            status: "Upcoming",
            color: "accent"
          },
          {
            title: "Placement Drive - TCS",
            type: "Placement",
            date: "March 22, 2024",
            time: "09:30 AM - 05:00 PM",
            venue: "Placement Hall",
            participants: 234,
            status: "Upcoming",
            color: "warning"
          },
          {
            title: "Research Paper Presentation",
            type: "Academic",
            date: "March 28, 2024",
            time: "02:00 PM - 05:00 PM",
            venue: "Seminar Hall B",
            participants: 78,
            status: "Upcoming",
            color: "info"
          },
        ].map((event, i) => (
          <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`bg-${event.color}/10 text-${event.color} border-${event.color}/20`}
                  >
                    {event.type}
                  </Badge>
                </div>
                <Badge 
                  variant="outline"
                  className={
                    event.status === "Upcoming" ? "bg-primary/10 text-primary border-primary/20" :
                    event.status === "Ongoing" ? "bg-success/10 text-success border-success/20" :
                    "bg-muted/10 text-muted-foreground border-muted/20"
                  }
                >
                  {event.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">{event.participants} participants</span>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                {event.status === "Upcoming" && (
                  <Button size="sm" className="flex-1">
                    Register
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
