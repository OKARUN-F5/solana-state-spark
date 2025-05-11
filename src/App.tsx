
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/contexts/WalletContext";
import Index from "./pages/Index";
import CreatePage from "./pages/CreatePage";
import EventCreatedPage from "./pages/EventCreatedPage";
import ClaimPage from "./pages/ClaimPage";
import ClaimSuccessPage from "./pages/ClaimSuccessPage";
import CollectionPage from "./pages/CollectionPage";
import ConnectPage from "./pages/ConnectPage";
import LogoDownloadPage from "./pages/LogoDownloadPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WalletProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/event-created" element={<EventCreatedPage />} />
            <Route path="/claim" element={<ClaimPage />} />
            <Route path="/claim-success" element={<ClaimSuccessPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/logo-download" element={<LogoDownloadPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
