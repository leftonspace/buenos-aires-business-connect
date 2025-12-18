import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Sample scheduled jobs
const scheduledJobs = [
  { date: "2024-12-18", time: "09:00", title: "Reparación de pérdida", technician: "Juan P.", status: "en_camino" },
  { date: "2024-12-18", time: "11:30", title: "Instalación AC", technician: "Carlos L.", status: "pendiente" },
  { date: "2024-12-18", time: "14:00", title: "Mant. eléctrico", technician: "Miguel T.", status: "en_progreso" },
  { date: "2024-12-19", time: "10:00", title: "Reparación calefón", technician: "Sin asignar", status: "pendiente" },
  { date: "2024-12-19", time: "15:00", title: "Destape cañerías", technician: "Juan P.", status: "pendiente" },
  { date: "2024-12-20", time: "09:00", title: "Instalación termotanque", technician: "Carlos L.", status: "pendiente" },
  { date: "2024-12-20", time: "11:00", title: "Revisión gas", technician: "Miguel T.", status: "pendiente" },
  { date: "2024-12-23", time: "08:00", title: "Emergencia plomería", technician: "Juan P.", status: "pendiente" },
];

const statusColors = {
  pendiente: "bg-warning",
  en_camino: "bg-info",
  en_progreso: "bg-primary",
  completado: "bg-success",
};

export default function Agenda() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 18)); // December 2024
  const [selectedDate, setSelectedDate] = useState<string>("2024-12-18");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get calendar days
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const formatDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const getJobsForDate = (dateKey: string) => {
    return scheduledJobs.filter(job => job.date === dateKey);
  };

  const selectedDateJobs = getJobsForDate(selectedDate);

  // Build calendar grid
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Agenda</h1>
            <p className="text-muted-foreground">Calendario de trabajos programados</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Agendar Trabajo
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="xl:col-span-2 bg-card rounded-xl border border-border p-5 shadow-sm">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                {monthNames[month]} {year}
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon-sm" onClick={prevMonth}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon-sm" onClick={nextMonth}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="aspect-square" />;
                }

                const dateKey = formatDateKey(day);
                const jobs = getJobsForDate(dateKey);
                const isSelected = dateKey === selectedDate;
                const isToday = dateKey === "2024-12-18";

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(dateKey)}
                    className={cn(
                      "aspect-square rounded-lg p-1 flex flex-col items-center justify-start transition-all duration-200 hover:bg-secondary",
                      isSelected && "bg-primary text-primary-foreground hover:bg-primary",
                      isToday && !isSelected && "ring-2 ring-primary ring-offset-2"
                    )}
                  >
                    <span className={cn(
                      "text-sm font-medium mb-1",
                      isSelected ? "text-primary-foreground" : "text-foreground"
                    )}>
                      {day}
                    </span>
                    {jobs.length > 0 && (
                      <div className="flex gap-0.5">
                        {jobs.slice(0, 3).map((job, i) => (
                          <div
                            key={i}
                            className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              isSelected ? "bg-primary-foreground/70" : statusColors[job.status as keyof typeof statusColors]
                            )}
                          />
                        ))}
                        {jobs.length > 3 && (
                          <span className={cn(
                            "text-xs",
                            isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
                          )}>
                            +{jobs.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Day Jobs */}
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
            <div className="p-5 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">
                {new Date(selectedDate).toLocaleDateString('es-AR', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'long' 
                })}
              </h3>
              <p className="text-sm text-muted-foreground">
                {selectedDateJobs.length} trabajo{selectedDateJobs.length !== 1 ? 's' : ''} programado{selectedDateJobs.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="p-3 space-y-2 max-h-[500px] overflow-y-auto">
              {selectedDateJobs.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  <p>No hay trabajos para este día</p>
                  <Button variant="outline" size="sm" className="mt-3 gap-2">
                    <Plus className="w-4 h-4" />
                    Agendar
                  </Button>
                </div>
              ) : (
                selectedDateJobs.map((job, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        statusColors[job.status as keyof typeof statusColors]
                      )} />
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {job.time}
                      </div>
                      <Badge variant="outline" className="text-xs ml-auto">
                        {job.status === "pendiente" ? "Pendiente" : 
                         job.status === "en_camino" ? "En Camino" :
                         job.status === "en_progreso" ? "En Progreso" : "Completado"}
                      </Badge>
                    </div>
                    <p className="font-medium text-foreground text-sm mb-1">{job.title}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {job.technician}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
