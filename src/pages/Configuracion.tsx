import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  User,
  Bell,
  CreditCard,
  Shield,
  Palette,
  MessageCircle,
  FileText,
  Save,
  Upload,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Configuracion() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Configuración</h1>
          <p className="text-muted-foreground">Administrá la configuración de tu negocio</p>
        </div>

        <Tabs defaultValue="empresa" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted p-1">
            <TabsTrigger value="empresa" className="gap-2">
              <Building2 className="w-4 h-4" />
              Empresa
            </TabsTrigger>
            <TabsTrigger value="cuenta" className="gap-2">
              <User className="w-4 h-4" />
              Cuenta
            </TabsTrigger>
            <TabsTrigger value="notificaciones" className="gap-2">
              <Bell className="w-4 h-4" />
              Notificaciones
            </TabsTrigger>
            <TabsTrigger value="facturacion" className="gap-2">
              <CreditCard className="w-4 h-4" />
              Facturación
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp AI
            </TabsTrigger>
          </TabsList>

          {/* Empresa Tab */}
          <TabsContent value="empresa" className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">Información de la Empresa</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center border-2 border-dashed border-border">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Subir Logo</Button>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG hasta 2MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nombre del Negocio</Label>
                    <Input defaultValue="Plomería García" />
                  </div>
                  <div className="space-y-2">
                    <Label>CUIT</Label>
                    <Input defaultValue="20-12345678-9" />
                  </div>
                  <div className="space-y-2">
                    <Label>Dirección</Label>
                    <Input defaultValue="Av. Corrientes 1234, CABA" />
                  </div>
                  <div className="space-y-2">
                    <Label>Teléfono</Label>
                    <Input defaultValue="+54 11 1234-5678" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Email</Label>
                    <Input defaultValue="info@plomeriagarcia.com" type="email" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Servicios que Ofrecés</Label>
                  <Textarea 
                    placeholder="Describe los servicios que ofrecés..."
                    defaultValue="Plomería general, destape de cañerías, instalación de sanitarios, reparación de pérdidas, instalación de termotanques y calefones."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Zona de Cobertura</Label>
                    <Select defaultValue="caba">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="caba">CABA</SelectItem>
                        <SelectItem value="gba-norte">GBA Norte</SelectItem>
                        <SelectItem value="gba-sur">GBA Sur</SelectItem>
                        <SelectItem value="gba-oeste">GBA Oeste</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Horario de Atención</Label>
                    <Input defaultValue="Lun-Vie 8:00-18:00, Sáb 9:00-13:00" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Cuenta Tab */}
          <TabsContent value="cuenta" className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tu Cuenta</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nombre</Label>
                    <Input defaultValue="Carlos" />
                  </div>
                  <div className="space-y-2">
                    <Label>Apellido</Label>
                    <Input defaultValue="García" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue="carlos@plomeriagarcia.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label>Teléfono</Label>
                    <Input defaultValue="+54 11 9999-0000" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Cambiar Contraseña</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Contraseña Actual</Label>
                      <Input type="password" />
                    </div>
                    <div></div>
                    <div className="space-y-2">
                      <Label>Nueva Contraseña</Label>
                      <Input type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label>Confirmar Contraseña</Label>
                      <Input type="password" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notificaciones Tab */}
          <TabsContent value="notificaciones" className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">Preferencias de Notificaciones</h3>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">WhatsApp</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Nuevo Lead</p>
                        <p className="text-sm text-muted-foreground">Cuando entra un nuevo mensaje de un cliente potencial</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">AI Necesita Ayuda</p>
                        <p className="text-sm text-muted-foreground">Cuando el AI no puede manejar una consulta</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Trabajos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Trabajo Completado</p>
                        <p className="text-sm text-muted-foreground">Cuando un técnico marca un trabajo como completado</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Nueva Reseña</p>
                        <p className="text-sm text-muted-foreground">Cuando un cliente deja una valoración</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Pago Recibido</p>
                        <p className="text-sm text-muted-foreground">Cuando se registra un pago</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Inventario</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Stock Bajo</p>
                        <p className="text-sm text-muted-foreground">Cuando un producto está por debajo del mínimo</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Facturacion Tab */}
          <TabsContent value="facturacion" className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">Configuración AFIP</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-success" />
                    <span className="font-medium text-success">Conectado con AFIP</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Última sincronización: hace 2 horas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Punto de Venta</Label>
                    <Input defaultValue="00001" />
                  </div>
                  <div className="space-y-2">
                    <Label>Condición IVA</Label>
                    <Select defaultValue="responsable-inscripto">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="responsable-inscripto">Responsable Inscripto</SelectItem>
                        <SelectItem value="monotributo">Monotributo</SelectItem>
                        <SelectItem value="exento">Exento</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <h4 className="font-medium text-foreground">Plan de Suscripción</h4>
                <div className="p-4 rounded-lg border border-primary bg-primary/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">Plan Profesional</p>
                      <p className="text-sm text-muted-foreground">$55/mes • 5 usuarios • 200 trabajos/mes</p>
                    </div>
                    <Button variant="outline">Cambiar Plan</Button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* WhatsApp AI Tab */}
          <TabsContent value="whatsapp" className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-4">Configuración de WhatsApp AI</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                  <div>
                    <p className="font-medium text-foreground">AI Activo</p>
                    <p className="text-sm text-muted-foreground">El asistente responderá automáticamente a los mensajes</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Comportamiento del AI</h4>
                  
                  <div className="space-y-2">
                    <Label>Nivel de Confianza para Auto-Agendar</Label>
                    <Select defaultValue="alto">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bajo">Bajo - Agenda casi todo automáticamente</SelectItem>
                        <SelectItem value="medio">Medio - Agenda si está seguro</SelectItem>
                        <SelectItem value="alto">Alto - Solo agenda si está muy seguro</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Si el AI no tiene suficiente confianza, te transferirá la conversación
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Mensaje de Bienvenida</Label>
                    <Textarea 
                      rows={3}
                      defaultValue="¡Hola! Gracias por contactar a Plomería García. Soy el asistente virtual. ¿En qué puedo ayudarte hoy?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Mensaje Fuera de Horario</Label>
                    <Textarea 
                      rows={3}
                      defaultValue="Hola! En este momento estamos fuera de horario. Nuestro horario de atención es Lun-Vie 8:00-18:00. Te responderemos a primera hora!"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Uso de AI Este Mes</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 rounded-lg bg-muted text-center">
                      <p className="text-2xl font-bold text-foreground">78</p>
                      <p className="text-xs text-muted-foreground">Conversaciones</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted text-center">
                      <p className="text-2xl font-bold text-success">89%</p>
                      <p className="text-xs text-muted-foreground">Resueltas por AI</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted text-center">
                      <p className="text-2xl font-bold text-foreground">22</p>
                      <p className="text-xs text-muted-foreground">Restantes</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="gap-2">
                    <Save className="w-4 h-4" />
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
