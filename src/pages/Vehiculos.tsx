import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Truck,
  Fuel,
  Wrench,
  MapPin,
  MoreHorizontal,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const statusConfig = {
  activo: { label: "Activo", className: "bg-success/15 text-success" },
  en_uso: { label: "En Uso", className: "bg-primary/15 text-primary" },
  mantenimiento: { label: "Mantenimiento", className: "bg-warning/15 text-warning" },
  inactivo: { label: "Inactivo", className: "bg-muted text-muted-foreground" },
};

const vehicles = [
  {
    id: "VEH-001",
    plate: "AB 123 CD",
    model: "Fiat Fiorino 2022",
    type: "Utilitario",
    status: "en_uso" as const,
    assignedTo: "Juan Pérez",
    fuel: 75,
    lastMaintenance: "15 Nov 2024",
    nextMaintenance: "15 Feb 2025",
    km: "45.230 km",
    location: "Av. Corrientes 1234, CABA",
  },
  {
    id: "VEH-002",
    plate: "EF 456 GH",
    model: "Renault Kangoo 2021",
    type: "Utilitario",
    status: "activo" as const,
    assignedTo: "Carlos López",
    fuel: 50,
    lastMaintenance: "01 Dic 2024",
    nextMaintenance: "01 Mar 2025",
    km: "62.180 km",
    location: "Base",
  },
  {
    id: "VEH-003",
    plate: "IJ 789 KL",
    model: "Peugeot Partner 2023",
    type: "Utilitario",
    status: "en_uso" as const,
    assignedTo: "Miguel Torres",
    fuel: 30,
    lastMaintenance: "20 Oct 2024",
    nextMaintenance: "20 Ene 2025",
    km: "28.450 km",
    location: "Calle Lavalle 890, CABA",
  },
  {
    id: "VEH-004",
    plate: "MN 012 OP",
    model: "VW Saveiro 2020",
    type: "Pickup",
    status: "mantenimiento" as const,
    assignedTo: null,
    fuel: 100,
    lastMaintenance: "18 Dic 2024",
    nextMaintenance: "18 Mar 2025",
    km: "89.320 km",
    location: "Taller",
  },
];

export default function Vehiculos() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Vehículos</h1>
            <p className="text-muted-foreground">Gestión de flota y mantenimiento</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Agregar Vehículo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Vehículos</p>
                <p className="text-2xl font-bold text-foreground">4</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <Truck className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">En Uso</p>
                <p className="text-2xl font-bold text-success">2</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-info/10">
                <Truck className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Disponibles</p>
                <p className="text-2xl font-bold text-info">1</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <Wrench className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mantenimiento</p>
                <p className="text-2xl font-bold text-warning">1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                    <Truck className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{vehicle.model}</h3>
                      <Badge variant="outline" className={cn("text-xs", statusConfig[vehicle.status].className)}>
                        {statusConfig[vehicle.status].label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="font-mono">{vehicle.plate}</span>
                      <span>•</span>
                      <span>{vehicle.type}</span>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Cargar Combustible</DropdownMenuItem>
                    <DropdownMenuItem>Programar Mantenimiento</DropdownMenuItem>
                    <DropdownMenuItem>Ver Historial</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Assigned To */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Asignado a</p>
                  {vehicle.assignedTo ? (
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{vehicle.assignedTo}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-muted-foreground">Sin asignar</span>
                  )}
                </div>

                {/* Fuel */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Combustible</p>
                  <div className="flex items-center gap-2">
                    <Fuel className={cn(
                      "w-4 h-4",
                      vehicle.fuel > 50 ? "text-success" : vehicle.fuel > 25 ? "text-warning" : "text-destructive"
                    )} />
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all",
                          vehicle.fuel > 50 ? "bg-success" : vehicle.fuel > 25 ? "bg-warning" : "bg-destructive"
                        )}
                        style={{ width: `${vehicle.fuel}%` }}
                      />
                    </div>
                    <span className="text-sm text-foreground">{vehicle.fuel}%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Location */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Ubicación</p>
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-foreground truncate">{vehicle.location}</span>
                  </div>
                </div>

                {/* KM */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Kilometraje</p>
                  <span className="text-sm text-foreground">{vehicle.km}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border text-xs">
                <div>
                  <span className="text-muted-foreground">Último mantenimiento: </span>
                  <span className="text-foreground">{vehicle.lastMaintenance}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Próximo: </span>
                  <span className="text-foreground">{vehicle.nextMaintenance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
