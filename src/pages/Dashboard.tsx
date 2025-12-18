import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { JobsTable } from "@/components/dashboard/JobsTable";
import { TechnicianStatus } from "@/components/dashboard/TechnicianStatus";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Briefcase, Users, DollarSign, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="animate-slide-up">
          <h1 className="text-2xl font-bold text-foreground">Buenos días, Carlos</h1>
          <p className="text-muted-foreground">Acá tenés el resumen de tu negocio hoy.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Trabajos Hoy"
            value={8}
            change="+2 vs ayer"
            changeType="positive"
            icon={Briefcase}
            iconColor="bg-primary"
          />
          <StatCard
            title="Clientes Activos"
            value={156}
            change="+12 este mes"
            changeType="positive"
            icon={Users}
            iconColor="bg-info"
          />
          <StatCard
            title="Facturado Hoy"
            value="$45.600"
            change="+18% vs semana pasada"
            changeType="positive"
            icon={DollarSign}
            iconColor="bg-success"
          />
          <StatCard
            title="Rating Promedio"
            value="4.8"
            change="Top 15% en tu zona"
            changeType="positive"
            icon={TrendingUp}
            iconColor="bg-accent"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Jobs Table - Takes 2 columns */}
          <div className="xl:col-span-2">
            <JobsTable />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <QuickActions />
            <TechnicianStatus />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
