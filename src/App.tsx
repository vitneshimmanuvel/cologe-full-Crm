import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Placements from "./pages/Placements";
import Alumni from "./pages/Alumni";
import Marksheets from "./pages/Marksheets";
import Attendance from "./pages/Attendance";
import Events from "./pages/Events";
import Departments from "./pages/Departments";
import Affiliation from "./pages/Affiliation";
import NAAC from "./pages/NAAC";
import NBA from "./pages/NBA";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/marksheets" element={<Marksheets />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/events" element={<Events />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/affiliation" element={<Affiliation />} />
            <Route path="/naac" element={<NAAC />} />
            <Route path="/nba" element={<NBA />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
