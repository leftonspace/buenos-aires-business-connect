import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  MoreHorizontal,
  Phone,
  Mail,
  Briefcase,
  Star,
  Calendar,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const roleConfig = {
  dueno: { label: "Dueño", className: "bg-accent/15 text-accent" },
  despachador: { label: "Despachador", className: "bg-info/15 text-info" },
  tecnico: { label: "Técnico", className: "bg-primary/15 text-primary" },
};

const statusConfig = {
  activo: { label: "Activo", className: "bg-success/15 text-success" },
  en_trabajo: { label: "En Trabajo", className: "bg-primary/15 text-primary" },
  descanso: { label: "Descanso", className: "bg-muted text-muted-foreground" },
  inactivo: { label: "Inactivo", className: "bg-destructive/15 text-destructive" },
};

const team = [
  {
    id: "EQ-001",
    name: "Carlos García",
    email: "carlos.garcia@email.com",
    phone: "+54 11 9999-0000",
    role: "dueno" as const,
    status: "activo" as const,
    jobsCompleted: 45,
    rating: 4.9,
    hireDate: "01 Ene 2022",
    schedule: {
      lunes: "08:00 - 18:00",
      martes: "08:00 - 18:00",
      miercoles: "08:00 - 18:00",
      jueves: "08:00 - 18:00",
      viernes: "08:00 - 16:00",
      sabado: null,
      domingo: null,
    },
  },
  {
    id: "EQ-002",
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    phone: "+54 11 1234-5678",
    role: "tecnico" as const,
    status: "en_trabajo" as const,
    jobsCompleted: 234,
    rating: 4.8,
    hireDate: "15 Mar 2022",
    schedule: {
      lunes: "08:00 - 17:00",
      martes: "08:00 - 17:00",
      miercoles: "08:00 - 17:00",
      jueves: "08:00 - 17:00",
      viernes: "08:00 - 17:00",
      sabado: "09:00 - 13:00",
      domingo: null,
    },
  },
  {
    id: "EQ-003",
    name: "Carlos López",
    email: "carlos.lopez@email.com",
    phone: "+54 11 2345-6789",
    role: "tecnico" as const,
    status: "activo" as const,
    jobsCompleted: 189,
    rating: 4.6,
    hireDate: "01 Jun 2022",
    schedule: {
      lunes: "09:00 - 18:00",
      martes: "09:00 - 18:00",
      miercoles: "09:00 - 18:00",
      jueves: "09:00 - 18:00",
      viernes: "09:00 - 18:00",
      sabado: null,
      domingo: null,
    },
  },
  {
    id: "EQ-004",
    name: "Miguel Torres",
    email: "miguel.torres@email.com",
    phone: "+54 11 3456-7890",
    role: "tecnico" as const,
    status: "en_trabajo" as const,
    jobsCompleted: 156,
    rating: 4.7,
    hireDate: "10 Sep 2022",
    schedule: {
      lunes: "07:00 - 16:00",
      martes: "07:00 - 16:00",
      miercoles: "07:00 - 16:00",
      jueves: "07:00 - 16:00",
      viernes: "07:00 - 16:00",
      sabado: "08:00 - 12:00",
      domingo: null,
    },
  },
  {
    id: "EQ-005",
    name: "Laura Méndez",
    email: "laura.mendez@email.com",
    phone: "+54 11 4567-8901",
    role: "despachador" as const,
    status: "activo" as const,
    jobsCompleted: 0,
    rating: null,
    hireDate: "01 Feb 2023",
    schedule: {
      lunes: "08:00 - 17:00",
      martes: "08:00 - 17:00",
      miercoles: "08:00 - 17:00",
      jueves: "08:00 - 17:00",
      viernes: "08:00 - 17:00",
      sabado: null,
      domingo: null,
    },
  },
  {
    id: "EQ-006",
    name: "Pedro Sánchez",
    email: "pedro.sanchez@email.com",
    phone: "+54 11 5678-9012",
    role: "tecnico" as const,
    status: "descanso" as const,
    jobsCompleted: 78,
    rating: 4.5,
    hireDate: "15 Nov 2023",
    schedule: {
      lunes: "10:00 - 19:00",
      martes: "10:00 - 19:00",
      miercoles: null,
      jueves: "10:00 - 19:00",
      viernes: "10:00 - 19:00",
      sabado: "10:00 - 14:00",
      domingo: null,
    },
  },
];

const days = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"] as const;
const dayLabels = { lunes: "Lun", martes: "Mar", miercoles: "Mié", jueves: "Jue", viernes: "Vie", sabado: "Sáb", domingo: "Dom" };

export default function Equipo() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Equipo</h1>
            <p className="text-muted-foreground">Gestioná tu equipo de trabajo</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Agregar Empleado
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Total Empleados</p>
            <p className="text-2xl font-bold text-foreground">6</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Técnicos Activos</p>
            <p className="text-2xl font-bold text-success">4</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">En Trabajo Ahora</p>
            <p className="text-2xl font-bold text-primary">2</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Rating Promedio</p>
            <p className="text-2xl font-bold text-foreground">4.7 ⭐</p>
          </div>
        </div>

        <Tabs defaultValue="lista" className="space-y-4">
          <TabsList>
            <TabsTrigger value="lista">Lista de Empleados</TabsTrigger>
            <TabsTrigger value="horarios">Horarios</TabsTrigger>
          </TabsList>

          <TabsContent value="lista" className="space-y-4">
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {team.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all duration-200 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={cn("text-xs", roleConfig[member.role].className)}>
                            {roleConfig[member.role].label}
                          </Badge>
                          <Badge variant="outline" className={cn("text-xs", statusConfig[member.status].className)}>
                            {statusConfig[member.status].label}
                          </Badge>
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
                        <DropdownMenuItem>Ver Perfil</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Ver Horario</DropdownMenuItem>
                        <DropdownMenuItem>Asignar Trabajo</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Desactivar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Desde: {member.hireDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{member.jobsCompleted} trabajos</span>
                    </div>
                    {member.rating ? (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-sm font-medium text-foreground">{member.rating}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">Despachador</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="horarios" className="space-y-4">
            {/* Schedule Table */}
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                        Empleado
                      </th>
                      {days.map((day) => (
                        <th key={day} className="text-center text-xs font-medium text-muted-foreground uppercase tracking-wide px-3 py-3">
                          {dayLabels[day]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {team.map((member, index) => (
                      <tr
                        key={member.id}
                        className="hover:bg-muted/30 transition-colors animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">{member.name}</p>
                              <Badge variant="outline" className={cn("text-xs", roleConfig[member.role].className)}>
                                {roleConfig[member.role].label}
                              </Badge>
                            </div>
                          </div>
                        </td>
                        {days.map((day) => (
                          <td key={day} className="px-3 py-4 text-center">
                            {member.schedule[day] ? (
                              <span className="text-xs text-foreground bg-primary/10 px-2 py-1 rounded">
                                {member.schedule[day]}
                              </span>
                            ) : (
                              <span className="text-xs text-muted-foreground">Libre</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
