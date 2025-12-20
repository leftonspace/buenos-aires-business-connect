import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  Users, 
  Truck, 
  FileText, 
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Bell
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ServiciosPro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Funciones</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">Cómo funciona</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Precios</a>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard">Probar Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Verificación CUIT integrada
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Gestión de servicios
              <span className="text-primary"> inteligente</span> para tu negocio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Organizá tu equipo, seguí a tus técnicos en tiempo real y automatizá la comunicación con tus clientes. Todo en una sola plataforma.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" asChild>
                <Link to="/dashboard">
                  Empezar ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#demo">Ver demostración</a>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Sin tarjeta de crédito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                14 días gratis
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Soporte en español
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-t from-background via-transparent to-transparent absolute inset-x-0 bottom-0 h-32 z-10" />
            <div className="bg-sidebar rounded-xl shadow-2xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-accent/50" />
                <div className="w-3 h-3 rounded-full bg-success/50" />
              </div>
              <div className="p-6 grid grid-cols-4 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">Trabajos Hoy</div>
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <div className="text-xs text-success">+3 vs ayer</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">Técnicos Activos</div>
                  <div className="text-2xl font-bold text-foreground">8</div>
                  <div className="text-xs text-muted-foreground">En campo</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">Facturado</div>
                  <div className="text-2xl font-bold text-foreground">$156K</div>
                  <div className="text-xs text-success">+18% este mes</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">Satisfacción</div>
                  <div className="text-2xl font-bold text-foreground">4.9</div>
                  <div className="text-xs text-accent">⭐ Excelente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Todo lo que necesitás para gestionar tu negocio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Herramientas potentes diseñadas para empresas de servicios en Argentina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Live Map */}
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Mapa en Tiempo Real</h3>
              <p className="text-muted-foreground">
                Seguí la ubicación de tu equipo en vivo. Asigná trabajos al técnico más cercano y optimizá rutas automáticamente.
              </p>
            </div>

            {/* WhatsApp AI */}
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp Inteligente</h3>
              <p className="text-muted-foreground">
                Tu asistente responde consultas, agenda turnos y crea fichas de clientes automáticamente. Configuralo a tu medida.
              </p>
            </div>

            {/* Smart Scheduling */}
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Agenda Inteligente</h3>
              <p className="text-muted-foreground">
                Evitá superposiciones automáticamente. El sistema detecta conflictos y sugiere horarios disponibles al instante.
              </p>
            </div>

            {/* Team Management */}
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-info/20 transition-colors">
                <Users className="w-6 h-6 text-info" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Gestión de Equipo</h3>
              <p className="text-muted-foreground">
                Controlá horarios, asistencia y rendimiento. Cada técnico tiene su perfil con historial completo de trabajos.
              </p>
            </div>

            {/* Fleet Management */}
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-warning/20 transition-colors">
                <Truck className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Control de Flota</h3>
              <p className="text-muted-foreground">
                Seguimiento de vehículos, alertas de mantenimiento y control de combustible. Todo en un solo lugar.
              </p>
            </div>

            {/* AFIP Integration */}
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Facturación AFIP</h3>
              <p className="text-muted-foreground">
                Generá facturas electrónicas directo a AFIP. Presupuestos, seguimiento de pagos y reportes fiscales incluidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Asistente Inteligente
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Tu copiloto en cada conversación
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mientras chateás con clientes por WhatsApp, tu asistente trabaja en segundo plano: detecta oportunidades, previene errores de agenda y te sugiere la mejor respuesta.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Detección de conflictos</h4>
                    <p className="text-muted-foreground text-sm">Si un cliente pide un horario ocupado, te avisa y sugiere alternativas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Creación automática de fichas</h4>
                    <p className="text-muted-foreground text-sm">Extrae datos del chat y crea perfiles de cliente sin que tengas que escribir nada.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Respuestas configurables</h4>
                    <p className="text-muted-foreground text-sm">Personalizá el tono, servicios y precios que tu asistente ofrece a cada consulta.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">WhatsApp Business</div>
                  <div className="text-xs text-muted-foreground">Conectado • 3 conversaciones activas</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Customer message */}
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg rounded-tl-none px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-foreground">Hola, necesito un plomero para el lunes a las 14hs</p>
                  </div>
                </div>
                
                {/* AI Alert */}
                <div className="bg-warning/10 border border-warning/30 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-warning text-sm font-medium mb-1">
                    <Bell className="w-4 h-4" />
                    Alerta del asistente
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Lunes 14hs ya tiene un trabajo asignado. Horarios disponibles: 10hs, 16hs o martes completo.
                  </p>
                </div>

                {/* Suggested response */}
                <div className="flex justify-end">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg rounded-tr-none px-4 py-2 max-w-[80%]">
                    <div className="text-xs text-primary font-medium mb-1">Respuesta sugerida</div>
                    <p className="text-sm text-foreground">¡Hola! El lunes a las 14hs ya está ocupado. ¿Te sirve a las 16hs o preferís el martes?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-foreground">Verificación de Empresa</h4>
                  <div className="flex items-center gap-2 text-success text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    Verificado
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">CUIT</span>
                    <span className="font-mono text-foreground">30-71234567-9</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Razón Social</span>
                    <span className="text-foreground">Servicios Técnicos SRL</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Condición IVA</span>
                    <span className="text-foreground">Responsable Inscripto</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-muted-foreground">Estado AFIP</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-success">Activo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                Seguridad garantizada
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Verificación automática con AFIP
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Validamos cada empresa con CUIT directamente contra los registros de AFIP. Tus clientes saben que trabajan con un negocio habilitado.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Validación CUIT</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-success mb-1">Automático</div>
                  <div className="text-sm text-muted-foreground">Sin papeleos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Empresas de servicios confían en nosotros
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Empresas activas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">15K</div>
              <div className="text-muted-foreground">Trabajos por mes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Empezá a organizar tu negocio hoy
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            14 días de prueba gratis. Sin compromisos. Cancelá cuando quieras.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" variant="secondary" asChild>
              <Link to="/dashboard">
                Crear cuenta gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Hablar con ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">ServiciosPro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                La plataforma de gestión para empresas de servicios en Argentina.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Funciones</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Trabaja con nosotros</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ServiciosPro. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Hecho con ❤️ en Argentina</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
