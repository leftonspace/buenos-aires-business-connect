import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Trabajos from "./pages/Trabajos";
import Clientes from "./pages/Clientes";
import Equipo from "./pages/Equipo";
import Agenda from "./pages/Agenda";
import Inventario from "./pages/Inventario";
import Vehiculos from "./pages/Vehiculos";
import Facturas from "./pages/Facturas";
import Analisis from "./pages/Analisis";
import WhatsApp from "./pages/WhatsApp";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trabajos" element={<Trabajos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/facturas" element={<Facturas />} />
          <Route path="/analisis" element={<Analisis />} />
          <Route path="/whatsapp" element={<WhatsApp />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
