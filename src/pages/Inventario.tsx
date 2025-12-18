import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  Package,
  AlertTriangle,
  TrendingDown,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const inventory = [
  {
    id: "INV-001",
    name: "Caño PVC 110mm",
    category: "Cañerías",
    stock: 45,
    minStock: 20,
    unit: "metros",
    price: "$850",
    location: "Depósito A",
    status: "ok",
  },
  {
    id: "INV-002",
    name: "Llave de paso 1/2\"",
    category: "Griferías",
    stock: 12,
    minStock: 10,
    unit: "unidades",
    price: "$2.500",
    location: "Depósito A",
    status: "bajo",
  },
  {
    id: "INV-003",
    name: "Cinta teflón",
    category: "Consumibles",
    stock: 85,
    minStock: 30,
    unit: "rollos",
    price: "$350",
    location: "Vehículo 1",
    status: "ok",
  },
  {
    id: "INV-004",
    name: "Sellador silicona",
    category: "Consumibles",
    stock: 8,
    minStock: 15,
    unit: "tubos",
    price: "$1.200",
    location: "Depósito A",
    status: "critico",
  },
  {
    id: "INV-005",
    name: "Gas refrigerante R410A",
    category: "Refrigeración",
    stock: 6,
    minStock: 5,
    unit: "kg",
    price: "$15.000",
    location: "Depósito B",
    status: "bajo",
  },
  {
    id: "INV-006",
    name: "Cable 2.5mm²",
    category: "Eléctrico",
    stock: 150,
    minStock: 50,
    unit: "metros",
    price: "$450",
    location: "Vehículo 2",
    status: "ok",
  },
  {
    id: "INV-007",
    name: "Disyuntor 20A",
    category: "Eléctrico",
    stock: 3,
    minStock: 8,
    unit: "unidades",
    price: "$4.500",
    location: "Depósito A",
    status: "critico",
  },
  {
    id: "INV-008",
    name: "Flexible de agua 40cm",
    category: "Griferías",
    stock: 28,
    minStock: 15,
    unit: "unidades",
    price: "$1.800",
    location: "Vehículo 1",
    status: "ok",
  },
];

const statusConfig = {
  ok: { label: "Normal", className: "bg-success/15 text-success" },
  bajo: { label: "Stock Bajo", className: "bg-warning/15 text-warning" },
  critico: { label: "Crítico", className: "bg-destructive/15 text-destructive" },
};

export default function Inventario() {
  const criticalItems = inventory.filter(i => i.status === "critico").length;
  const lowItems = inventory.filter(i => i.status === "bajo").length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Inventario</h1>
            <p className="text-muted-foreground">Control de stock y materiales</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Agregar Producto
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Productos</p>
                <p className="text-2xl font-bold text-foreground">156</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <Package className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stock Normal</p>
                <p className="text-2xl font-bold text-success">{inventory.length - criticalItems - lowItems}</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <TrendingDown className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stock Bajo</p>
                <p className="text-2xl font-bold text-warning">{lowItems}</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-destructive/10">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Crítico</p>
                <p className="text-2xl font-bold text-destructive">{criticalItems}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar productos..." className="pl-10" />
        </div>

        {/* Inventory Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Producto
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Categoría
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Stock
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Ubicación
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Precio
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Estado
                  </th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {inventory.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-muted/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.id}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-foreground">{item.category}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">
                            {item.stock} {item.unit}
                          </span>
                        </div>
                        <Progress 
                          value={(item.stock / (item.minStock * 3)) * 100} 
                          className="h-1.5 w-24"
                        />
                        <p className="text-xs text-muted-foreground">Mín: {item.minStock}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm text-foreground">{item.location}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-foreground">{item.price}</span>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant="outline" className={cn("text-xs", statusConfig[item.status].className)}>
                        {statusConfig[item.status].label}
                      </Badge>
                    </td>
                    <td className="px-3 py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon-sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem>Agregar Stock</DropdownMenuItem>
                          <DropdownMenuItem>Mover</DropdownMenuItem>
                          <DropdownMenuItem>Historial</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
