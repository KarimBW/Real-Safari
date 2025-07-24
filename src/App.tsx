
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TravelStyleProvider } from "@/contexts/TravelStyleContext";
import Index from "./pages/Index";
import PackYourCalendar from "./pages/PackYourCalendar";
import DestinationPage from "./pages/DestinationPage";
import GamePlan from "./pages/GamePlan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TravelStyleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Redirect /plan to /game-plan */}
            <Route path="/plan" element={<Navigate to="/game-plan" replace />} />
            <Route path="/pack-your-calendar" element={<PackYourCalendar />} />
            <Route path="/destination/:id" element={<DestinationPage />} />
            <Route path="/game-plan" element={<GamePlan />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </TravelStyleProvider>
  </QueryClientProvider>
);

export default App;
