import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Star,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const customers = [
  {
    id: "CL-001",
    name: "María González",
    email: "maria.gonzalez@email.com",
    phone: "+54 11 1234-5678",
    address: "Av. Corrientes 1234, CABA",
    totalJobs: 12,
    totalSpent: "$156.000",
    rating: 5,
    lastJob: "15 Dic 2024",
    status: "activo",
  },
  {
    id: "CL-002",
    name: "Roberto Silva",
    email: "roberto.silva@email.com",
    phone: "+54 11 2345-6789",
    address: "Av. Santa Fe 4567, CABA",
    totalJobs: 3,
    totalSpent: "$95.000",
    rating: 4,
    lastJob: "10 Dic 2024",
    status: "activo",
  },
  {
    id: "CL-003",
    name: "Ana Martínez",
    email: "ana.martinez@email.com",
    phone: "+54 11 3456-7890",
    address: "Calle Lavalle 890, CABA",
    totalJobs: 8,
    totalSpent: "$78.500",
    rating: 5,
    lastJob: "18 Dic 2024",
    status: "activo",
  },
  {
    id: "CL-004",
    name: "Luis Fernández",
    email: "luis.fernandez@email.com",
    phone: "+54 11 4567-8901",
    address: "Belgrano 2345, CABA",
    totalJobs: 5,
    totalSpent: "$42.000",
    rating: 4,
    lastJob: "18 Dic 2024",
    status: "activo",
  },
  {
    id: "CL-005",
    name: "Sofía Rodríguez",
    email: "sofia.rodriguez@email.com",
    phone: "+54 11 5678-9012",
    address: "Av. Rivadavia 5678, CABA",
    totalJobs: 1,
    totalSpent: "$22.000",
    rating: null,
    lastJob: "Pendiente",
    status: "nuevo",
  },
  {
    id: "CL-006",
    name: "Diego Moreno",
    email: "diego.moreno@email.com",
    phone: "+54 11 6789-0123",
    address: "Palermo 789, CABA",
    totalJobs: 15,
    totalSpent: "$230.000",
    rating: 5,
    lastJob: "05 Dic 2024",
    status: "vip",
  },
];

export default function Clientes() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Clientes</h1>
            <p className="text-muted-foreground">Gestioná tu base de clientes</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nuevo Cliente
          </Button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar clientes..." className="pl-10" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Total Clientes</p>
            <p className="text-2xl font-bold text-foreground">156</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Nuevos Este Mes</p>
            <p className="text-2xl font-bold text-foreground">12</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Clientes VIP</p>
            <p className="text-2xl font-bold text-foreground">8</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">Rating Promedio</p>
            <p className="text-2xl font-bold text-foreground">4.7 ⭐</p>
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{customer.name}</h3>
                      {customer.status === "vip" && (
                        <Badge className="bg-accent text-accent-foreground text-xs">VIP</Badge>
                      )}
                      {customer.status === "nuevo" && (
                        <Badge variant="outline" className="text-xs">Nuevo</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{customer.id}</p>
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
                    <DropdownMenuItem>Nuevo Trabajo</DropdownMenuItem>
                    <DropdownMenuItem>Historial</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground truncate">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground truncate">{customer.address}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-sm">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.totalJobs} trabajos</span>
                </div>
                <div className="flex items-center gap-1">
                  {customer.rating ? (
                    <>
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm font-medium text-foreground">{customer.rating}</span>
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground">Sin rating</span>
                  )}
                </div>
                <span className="text-sm font-semibold text-foreground">{customer.totalSpent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
