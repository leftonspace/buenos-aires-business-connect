import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Briefcase,
  Users,
  Star,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jul", value: 285000 },
  { month: "Ago", value: 320000 },
  { month: "Sep", value: 298000 },
  { month: "Oct", value: 410000 },
  { month: "Nov", value: 385000 },
  { month: "Dic", value: 458500 },
];

const jobsData = [
  { month: "Jul", completados: 45, cancelados: 3 },
  { month: "Ago", completados: 52, cancelados: 2 },
  { month: "Sep", completados: 48, cancelados: 4 },
  { month: "Oct", completados: 61, cancelados: 2 },
  { month: "Nov", completados: 58, cancelados: 3 },
  { month: "Dic", completados: 67, cancelados: 1 },
];

const serviceDistribution = [
  { name: "Plomería", value: 45, color: "hsl(173, 58%, 39%)" },
  { name: "Electricidad", value: 25, color: "hsl(38, 92%, 50%)" },
  { name: "Refrigeración", value: 20, color: "hsl(199, 89%, 48%)" },
  { name: "Otros", value: 10, color: "hsl(215, 16%, 47%)" },
];

const technicianPerformance = [
  { name: "Juan P.", jobs: 34, rating: 4.8, revenue: 156000 },
  { name: "Carlos L.", jobs: 28, rating: 4.6, revenue: 142000 },
  { name: "Miguel T.", jobs: 25, rating: 4.7, revenue: 98000 },
  { name: "Pedro S.", jobs: 15, rating: 4.5, revenue: 62500 },
];

export default function Analisis() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Análisis</h1>
            <p className="text-muted-foreground">Métricas y rendimiento de tu negocio</p>
          </div>
          <Select defaultValue="6m">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 días</SelectItem>
              <SelectItem value="30d">Últimos 30 días</SelectItem>
              <SelectItem value="3m">Últimos 3 meses</SelectItem>
              <SelectItem value="6m">Últimos 6 meses</SelectItem>
              <SelectItem value="1y">Último año</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="animate-slide-up">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Ingresos Totales</p>
                  <p className="text-2xl font-bold text-foreground mt-1">$2.156.500</p>
                  <div className="flex items-center gap-1 mt-2 text-success text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+18.5% vs período anterior</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-success/10">
                  <DollarSign className="w-5 h-5 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: "50ms" }}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Trabajos Completados</p>
                  <p className="text-2xl font-bold text-foreground mt-1">331</p>
                  <div className="flex items-center gap-1 mt-2 text-success text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+12% vs período anterior</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Nuevos Clientes</p>
                  <p className="text-2xl font-bold text-foreground mt-1">47</p>
                  <div className="flex items-center gap-1 mt-2 text-success text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+8 este mes</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-info/10">
                  <Users className="w-5 h-5 text-info" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-up" style={{ animationDelay: "150ms" }}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rating Promedio</p>
                  <p className="text-2xl font-bold text-foreground mt-1">4.7 ⭐</p>
                  <div className="flex items-center gap-1 mt-2 text-success text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>Top 15% en tu zona</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-accent/10">
                  <Star className="w-5 h-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ingresos Mensuales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(173, 58%, 39%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "Ingresos"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(173, 58%, 39%)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Jobs Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Trabajos por Mes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={jobsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="completados" fill="hsl(173, 58%, 39%)" radius={[4, 4, 0, 0]} name="Completados" />
                    <Bar dataKey="cancelados" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} name="Cancelados" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Service Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Distribución de Servicios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {serviceDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value}%`, "Porcentaje"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {serviceDistribution.map((service) => (
                  <div key={service.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }} />
                    <span className="text-sm text-foreground">{service.name}</span>
                    <span className="text-sm text-muted-foreground ml-auto">{service.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technician Performance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Rendimiento por Técnico</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicianPerformance.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-semibold text-primary-foreground">
                      {tech.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{tech.name}</p>
                      <p className="text-sm text-muted-foreground">{tech.jobs} trabajos</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-foreground flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        {tech.rating}
                      </p>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${tech.revenue.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Facturado</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
