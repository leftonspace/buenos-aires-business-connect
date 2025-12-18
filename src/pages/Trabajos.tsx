import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  MapPin,
  Clock,
  User,
  Calendar,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const statusConfig = {
  pendiente: { label: "Pendiente", className: "bg-warning/15 text-warning border-warning/30" },
  asignado: { label: "Asignado", className: "bg-info/15 text-info border-info/30" },
  en_camino: { label: "En Camino", className: "bg-info/15 text-info border-info/30" },
  en_progreso: { label: "En Progreso", className: "bg-primary/15 text-primary border-primary/30" },
  completado: { label: "Completado", className: "bg-success/15 text-success border-success/30" },
  cancelado: { label: "Cancelado", className: "bg-destructive/15 text-destructive border-destructive/30" },
};

const jobs = [
  {
    id: "TR-001",
    title: "Reparación de pérdida de agua",
    description: "Pérdida en cañería del baño principal",
    customer: "María González",
    address: "Av. Corrientes 1234, CABA",
    technician: "Juan Pérez",
    status: "en_camino" as const,
    date: "18 Dic 2024",
    time: "09:00 - 11:00",
    priority: "alta",
    amount: "$15.000",
  },
  {
    id: "TR-002",
    title: "Instalación de aire acondicionado",
    description: "Split 3000 frigorías, habitación principal",
    customer: "Roberto Silva",
    address: "Av. Santa Fe 4567, CABA",
    technician: "Carlos López",
    status: "pendiente" as const,
    date: "18 Dic 2024",
    time: "11:30 - 14:00",
    priority: "media",
    amount: "$85.000",
  },
  {
    id: "TR-003",
    title: "Mantenimiento eléctrico preventivo",
    description: "Revisión tablero y puntos de luz",
    customer: "Ana Martínez",
    address: "Calle Lavalle 890, CABA",
    technician: "Miguel Torres",
    status: "en_progreso" as const,
    date: "18 Dic 2024",
    time: "14:00 - 16:00",
    priority: "baja",
    amount: "$12.500",
  },
  {
    id: "TR-004",
    title: "Destape de cañerías",
    description: "Destape de cañería de cocina",
    customer: "Luis Fernández",
    address: "Belgrano 2345, CABA",
    technician: "Juan Pérez",
    status: "completado" as const,
    date: "18 Dic 2024",
    time: "08:00 - 09:00",
    priority: "alta",
    amount: "$8.500",
  },
  {
    id: "TR-005",
    title: "Reparación de calefón",
    description: "Calefón no enciende, revisar piloto",
    customer: "Sofía Rodríguez",
    address: "Av. Rivadavia 5678, CABA",
    technician: null,
    status: "pendiente" as const,
    date: "19 Dic 2024",
    time: "10:00 - 12:00",
    priority: "alta",
    amount: "$22.000",
  },
];

export default function Trabajos() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Trabajos</h1>
            <p className="text-muted-foreground">Gestioná todos los trabajos de tu negocio</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nuevo Trabajo
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar trabajos..." className="pl-10" />
          </div>
          <Select defaultValue="todos">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los estados</SelectItem>
              <SelectItem value="pendiente">Pendiente</SelectItem>
              <SelectItem value="en_progreso">En Progreso</SelectItem>
              <SelectItem value="completado">Completado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Más Filtros
          </Button>
        </div>

        {/* Jobs List */}
        <div className="space-y-3">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Main Info */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-muted-foreground">{job.id}</span>
                    <Badge
                      variant="outline"
                      className={cn("text-xs", statusConfig[job.status].className)}
                    >
                      {statusConfig[job.status].label}
                    </Badge>
                    {job.priority === "alta" && (
                      <Badge variant="outline" className="bg-destructive/15 text-destructive text-xs">
                        Urgente
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </div>

                {/* Customer & Location */}
                <div className="lg:w-48 space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-foreground truncate">{job.customer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground truncate">{job.address}</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="lg:w-40 space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-foreground">{job.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground">{job.time}</span>
                  </div>
                </div>

                {/* Technician */}
                <div className="lg:w-36">
                  {job.technician ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{job.technician}</span>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full">
                      Asignar
                    </Button>
                  )}
                </div>

                {/* Amount & Actions */}
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-foreground">{job.amount}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Duplicar</DropdownMenuItem>
                      <DropdownMenuItem>Generar Factura</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Cancelar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
