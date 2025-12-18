import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MapPin, Clock, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Job {
  id: string;
  title: string;
  customer: string;
  address: string;
  technician: string;
  status: "pendiente" | "en_camino" | "en_progreso" | "completado";
  time: string;
  priority: "alta" | "media" | "baja";
}

const statusConfig = {
  pendiente: { label: "Pendiente", className: "bg-warning/15 text-warning border-warning/30" },
  en_camino: { label: "En Camino", className: "bg-info/15 text-info border-info/30" },
  en_progreso: { label: "En Progreso", className: "bg-primary/15 text-primary border-primary/30" },
  completado: { label: "Completado", className: "bg-success/15 text-success border-success/30" },
};

const priorityConfig = {
  alta: { label: "Alta", className: "bg-destructive/15 text-destructive" },
  media: { label: "Media", className: "bg-warning/15 text-warning" },
  baja: { label: "Baja", className: "bg-muted text-muted-foreground" },
};

const sampleJobs: Job[] = [
  {
    id: "TR-001",
    title: "Reparación de pérdida",
    customer: "María González",
    address: "Av. Corrientes 1234, CABA",
    technician: "Juan Pérez",
    status: "en_camino",
    time: "09:00",
    priority: "alta",
  },
  {
    id: "TR-002",
    title: "Instalación de aire acondicionado",
    customer: "Roberto Silva",
    address: "Av. Santa Fe 4567, CABA",
    technician: "Carlos López",
    status: "pendiente",
    time: "11:30",
    priority: "media",
  },
  {
    id: "TR-003",
    title: "Mantenimiento eléctrico",
    customer: "Ana Martínez",
    address: "Calle Lavalle 890, CABA",
    technician: "Miguel Torres",
    status: "en_progreso",
    time: "14:00",
    priority: "baja",
  },
  {
    id: "TR-004",
    title: "Destape de cañerías",
    customer: "Luis Fernández",
    address: "Belgrano 2345, CABA",
    technician: "Juan Pérez",
    status: "completado",
    time: "08:00",
    priority: "alta",
  },
];

export function JobsTable() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Trabajos de Hoy</h3>
        <p className="text-sm text-muted-foreground">4 trabajos programados</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                Trabajo
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                Cliente
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                Técnico
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                Estado
              </th>
              <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                Hora
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sampleJobs.map((job, index) => (
              <tr
                key={job.id}
                className="hover:bg-muted/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-5 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground">{job.id}</span>
                      <Badge variant="outline" className={cn("text-xs", priorityConfig[job.priority].className)}>
                        {priorityConfig[job.priority].label}
                      </Badge>
                    </div>
                    <p className="font-medium text-foreground">{job.title}</p>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{job.customer}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {job.address}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{job.technician}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <Badge
                    variant="outline"
                    className={cn("font-medium", statusConfig[job.status].className)}
                  >
                    {statusConfig[job.status].label}
                  </Badge>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {job.time}
                  </div>
                </td>
                <td className="px-3 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Reasignar</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Cancelar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
