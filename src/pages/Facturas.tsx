import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Search,
  FileText,
  Download,
  MoreHorizontal,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
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
  pagada: { label: "Pagada", className: "bg-success/15 text-success", icon: CheckCircle },
  pendiente: { label: "Pendiente", className: "bg-warning/15 text-warning", icon: Clock },
  vencida: { label: "Vencida", className: "bg-destructive/15 text-destructive", icon: XCircle },
  borrador: { label: "Borrador", className: "bg-muted text-muted-foreground", icon: FileText },
};

const invoices = [
  {
    id: "FAC-001-2024",
    customer: "María González",
    job: "TR-001 - Reparación de pérdida",
    date: "18 Dic 2024",
    dueDate: "25 Dic 2024",
    amount: "$15.000",
    status: "pendiente" as const,
    type: "Factura B",
  },
  {
    id: "FAC-002-2024",
    customer: "Roberto Silva",
    job: "TR-002 - Instalación AC",
    date: "18 Dic 2024",
    dueDate: "25 Dic 2024",
    amount: "$85.000",
    status: "borrador" as const,
    type: "Factura B",
  },
  {
    id: "FAC-003-2024",
    customer: "Ana Martínez",
    job: "TR-003 - Mant. eléctrico",
    date: "17 Dic 2024",
    dueDate: "24 Dic 2024",
    amount: "$12.500",
    status: "pagada" as const,
    type: "Factura C",
  },
  {
    id: "FAC-004-2024",
    customer: "Luis Fernández",
    job: "TR-004 - Destape cañerías",
    date: "18 Dic 2024",
    dueDate: "18 Dic 2024",
    amount: "$8.500",
    status: "pagada" as const,
    type: "Factura C",
  },
  {
    id: "FAC-005-2024",
    customer: "Diego Moreno",
    job: "TR-120 - Instalación termotanque",
    date: "05 Dic 2024",
    dueDate: "12 Dic 2024",
    amount: "$45.000",
    status: "vencida" as const,
    type: "Factura B",
  },
  {
    id: "FAC-006-2024",
    customer: "Carolina Ruiz",
    job: "TR-118 - Revisión gas",
    date: "10 Dic 2024",
    dueDate: "17 Dic 2024",
    amount: "$18.500",
    status: "pagada" as const,
    type: "Factura B",
  },
];

export default function Facturas() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Facturas</h1>
            <p className="text-muted-foreground">Gestión de facturación AFIP</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Nueva Factura
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <DollarSign className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cobrado Este Mes</p>
                <p className="text-2xl font-bold text-success">$458.500</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendiente</p>
                <p className="text-2xl font-bold text-warning">$100.000</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-destructive/10">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Vencido</p>
                <p className="text-2xl font-bold text-destructive">$45.000</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Facturas</p>
                <p className="text-2xl font-bold text-foreground">127</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar facturas..." className="pl-10" />
          </div>
          <Select defaultValue="todos">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="pagada">Pagadas</SelectItem>
              <SelectItem value="pendiente">Pendientes</SelectItem>
              <SelectItem value="vencida">Vencidas</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
        </div>

        {/* Invoices Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Factura
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Cliente
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Trabajo
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Fecha
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Monto
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wide px-5 py-3">
                    Estado
                  </th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {invoices.map((invoice, index) => {
                  const StatusIcon = statusConfig[invoice.status].icon;
                  return (
                    <tr
                      key={invoice.id}
                      className="hover:bg-muted/30 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <td className="px-5 py-4">
                        <div>
                          <p className="font-medium text-foreground font-mono">{invoice.id}</p>
                          <p className="text-xs text-muted-foreground">{invoice.type}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm text-foreground">{invoice.customer}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm text-muted-foreground">{invoice.job}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div>
                          <p className="text-sm text-foreground">{invoice.date}</p>
                          <p className="text-xs text-muted-foreground">Vence: {invoice.dueDate}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm font-semibold text-foreground">{invoice.amount}</span>
                      </td>
                      <td className="px-5 py-4">
                        <Badge variant="outline" className={cn("gap-1 text-xs", statusConfig[invoice.status].className)}>
                          <StatusIcon className="w-3 h-3" />
                          {statusConfig[invoice.status].label}
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
                            <DropdownMenuItem>Ver Factura</DropdownMenuItem>
                            <DropdownMenuItem>Descargar PDF</DropdownMenuItem>
                            <DropdownMenuItem>Enviar por WhatsApp</DropdownMenuItem>
                            <DropdownMenuItem>Marcar como Pagada</DropdownMenuItem>
                            <DropdownMenuItem>Duplicar</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Anular</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
