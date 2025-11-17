import { Toaster } from "./components/ui/toaster.jsx";
import { Tooltip } from "./components/ui/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound";
import JobsPage from "./pages/JobsPage.jsx";
import CandidatesPage from "./pages/CandidatesPage.jsx";
import ApplicationsPage from "./pages/ApplicationsPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

 

function App() {
  return (
 
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/candidates" element={<CandidatesPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    
  );
}

export default App;
