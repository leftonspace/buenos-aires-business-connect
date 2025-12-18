import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Technician {
  id: string;
  name: string;
  avatar: string;
  status: "disponible" | "en_trabajo" | "en_camino" | "descanso";
  currentJob?: string;
  location?: string;
  phone: string;
}

const statusConfig = {
  disponible: { label: "Disponible", className: "bg-success/15 text-success border-success/30" },
  en_trabajo: { label: "En Trabajo", className: "bg-primary/15 text-primary border-primary/30" },
  en_camino: { label: "En Camino", className: "bg-info/15 text-info border-info/30" },
  descanso: { label: "Descanso", className: "bg-muted text-muted-foreground border-border" },
};

const technicians: Technician[] = [
  {
    id: "1",
    name: "Juan Pérez",
    avatar: "JP",
    status: "en_camino",
    currentJob: "Reparación de pérdida",
    location: "Av. Corrientes 1234",
    phone: "+54 11 1234-5678",
  },
  {
    id: "2",
    name: "Carlos López",
    avatar: "CL",
    status: "disponible",
    phone: "+54 11 2345-6789",
  },
  {
    id: "3",
    name: "Miguel Torres",
    avatar: "MT",
    status: "en_trabajo",
    currentJob: "Mantenimiento eléctrico",
    location: "Calle Lavalle 890",
    phone: "+54 11 3456-7890",
  },
  {
    id: "4",
    name: "Pedro Sánchez",
    avatar: "PS",
    status: "descanso",
    phone: "+54 11 4567-8901",
  },
];

export function TechnicianStatus() {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Estado del Equipo</h3>
        <p className="text-sm text-muted-foreground">4 técnicos activos hoy</p>
      </div>
      <div className="p-3 space-y-2">
        {technicians.map((tech, index) => (
          <div
            key={tech.id}
            className="p-3 rounded-lg hover:bg-muted/50 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-semibold text-primary-foreground shrink-0">
                {tech.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="font-medium text-foreground truncate">{tech.name}</p>
                  <Badge
                    variant="outline"
                    className={cn("shrink-0 text-xs", statusConfig[tech.status].className)}
                  >
                    {statusConfig[tech.status].label}
                  </Badge>
                </div>
                {tech.currentJob && (
                  <p className="text-sm text-foreground mb-1">{tech.currentJob}</p>
                )}
                {tech.location && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{tech.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Phone className="w-3 h-3" />
                  <span>{tech.phone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
