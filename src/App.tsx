import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import TravelPage from "./pages/TravelPage";
import InsurancePage from "./pages/InsurancePage";
import HealthPage from "./pages/HealthPage";
import RealtyPage from "./pages/RealtyPage";
import FinancePage from "./pages/FinancePage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen gradient-hero flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/travel" element={<TravelPage />} />
              <Route path="/insurance" element={<InsurancePage />} />
              <Route path="/health" element={<HealthPage />} />
              <Route path="/realty" element={<RealtyPage />} />
              <Route path="/finance" element={<FinancePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
