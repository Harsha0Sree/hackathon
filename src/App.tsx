
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import AnalyzeLanding from "./pages/analyze/AnalyzeLanding";
import SelectTask from "./pages/analyze/SelectTask";
import Configure from "./pages/analyze/Configure";
import Results from "./pages/analyze/Results";
import ModelsDirectory from "./pages/models/ModelsDirectory";
import ModelDetail from "./pages/models/ModelDetail";
import LearnLanding from "./pages/learn/LearnLanding";
import Impact from "./pages/learn/Impact";
import Methodology from "./pages/learn/Methodology";
import Practices from "./pages/learn/Practices";
import Glossary from "./pages/learn/Glossary";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Analyze Routes */}
          <Route path="/analyze" element={<AnalyzeLanding />} />
          <Route path="/analyze/select-task" element={<SelectTask />} />
          <Route path="/analyze/configure" element={<Configure />} />
          <Route path="/analyze/results/:id" element={<Results />} />
          
          {/* Models Routes */}
          <Route path="/models" element={<ModelsDirectory />} />
          <Route path="/models/:id" element={<ModelDetail />} />
          
          {/* Learn Routes */}
          <Route path="/learn" element={<LearnLanding />} />
          <Route path="/learn/impact" element={<Impact />} />
          <Route path="/learn/methodology" element={<Methodology />} />
          <Route path="/learn/practices" element={<Practices />} />
          <Route path="/learn/glossary" element={<Glossary />} />
          
          {/* About Route */}
          <Route path="/about" element={<About />} />
          
          {/* Catch-all NotFound Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
