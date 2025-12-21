import { useState, useCallback } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  User,
  GripVertical,
  Calendar as CalendarIcon,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  useDraggable,
  useDroppable,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const daysOfWeekFull = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const hours = Array.from({ length: 12 }, (_, i) => i + 7); // 7am to 6pm

interface ScheduledJob {
  id: string;
  date: string;
  time: string;
  duration: number; // in hours
  title: string;
  technician: string;
  status: string;
}

// Sample scheduled jobs
const initialJobs: ScheduledJob[] = [
  { id: "1", date: "2024-12-18", time: "09:00", duration: 2, title: "Reparación de pérdida", technician: "Juan P.", status: "en_camino" },
  { id: "2", date: "2024-12-18", time: "11:30", duration: 1.5, title: "Instalación AC", technician: "Carlos L.", status: "pendiente" },
  { id: "3", date: "2024-12-18", time: "14:00", duration: 2, title: "Mant. eléctrico", technician: "Miguel T.", status: "en_progreso" },
  { id: "4", date: "2024-12-19", time: "10:00", duration: 3, title: "Reparación calefón", technician: "Sin asignar", status: "pendiente" },
  { id: "5", date: "2024-12-19", time: "15:00", duration: 1, title: "Destape cañerías", technician: "Juan P.", status: "pendiente" },
  { id: "6", date: "2024-12-20", time: "09:00", duration: 4, title: "Instalación termotanque", technician: "Carlos L.", status: "pendiente" },
  { id: "7", date: "2024-12-20", time: "14:00", duration: 1, title: "Revisión gas", technician: "Miguel T.", status: "pendiente" },
  { id: "8", date: "2024-12-23", time: "08:00", duration: 2, title: "Emergencia plomería", technician: "Juan P.", status: "pendiente" },
];

const statusColors: Record<string, string> = {
  pendiente: "bg-warning border-warning/50",
  en_camino: "bg-info border-info/50",
  en_progreso: "bg-primary border-primary/50",
  completado: "bg-success border-success/50",
};

const statusBgColors: Record<string, string> = {
  pendiente: "bg-warning/20 border-warning/40 hover:bg-warning/30",
  en_camino: "bg-info/20 border-info/40 hover:bg-info/30",
  en_progreso: "bg-primary/20 border-primary/40 hover:bg-primary/30",
  completado: "bg-success/20 border-success/40 hover:bg-success/30",
};

// Draggable Job Component
function DraggableJob({ job, isOverlay = false }: { job: ScheduledJob; isOverlay?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: job.id,
    data: job,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const hourStart = parseInt(job.time.split(":")[0]);
  const minStart = parseInt(job.time.split(":")[1]);
  const topOffset = (hourStart - 7) * 60 + minStart; // pixels from top (1px per minute)
  const height = job.duration * 60; // height based on duration

  if (isOverlay) {
    return (
      <div
        className={cn(
          "absolute left-1 right-1 rounded-lg border-l-4 p-2 cursor-grabbing shadow-lg z-50",
          statusBgColors[job.status]
        )}
        style={{ height: `${height}px` }}
      >
        <div className="flex items-start gap-1">
          <GripVertical className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground truncate">{job.title}</p>
            <p className="text-xs text-muted-foreground">{job.time}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, top: `${topOffset}px`, height: `${height}px` }}
      className={cn(
        "absolute left-1 right-1 rounded-lg border-l-4 p-2 cursor-grab transition-all",
        statusBgColors[job.status],
        isDragging && "opacity-50 shadow-lg"
      )}
      {...listeners}
      {...attributes}
    >
      <div className="flex items-start gap-1">
        <GripVertical className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-foreground truncate">{job.title}</p>
          <p className="text-xs text-muted-foreground">{job.time}</p>
          {job.duration >= 1.5 && (
            <div className="flex items-center gap-1 mt-1">
              <User className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground truncate">{job.technician}</span>
            </div>
          )}
        </div>
      </div>
      {/* Resize handle */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize flex items-center justify-center hover:bg-foreground/10 rounded-b-lg"
        onMouseDown={(e) => {
          e.stopPropagation();
          // Resize logic would go here
        }}
      >
        <div className="w-8 h-1 bg-muted-foreground/30 rounded-full" />
      </div>
    </div>
  );
}

// Droppable Day Column
function DroppableDay({ dateKey, children }: { dateKey: string; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: dateKey,
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "relative border-r border-border last:border-r-0 min-h-full transition-colors",
        isOver && "bg-primary/5"
      )}
    >
      {children}
    </div>
  );
}

// Droppable Hour Cell
function DroppableHourCell({ dateKey, hour }: { dateKey: string; hour: number }) {
  const dropId = `${dateKey}-${hour}`;
  const { isOver, setNodeRef } = useDroppable({
    id: dropId,
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "h-[60px] border-b border-border/50 transition-colors",
        isOver && "bg-primary/10"
      )}
    />
  );
}

export default function Agenda() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 16)); // Start of week
  const [selectedDate, setSelectedDate] = useState<string>("2024-12-18");
  const [viewMode, setViewMode] = useState<"week" | "month">("week");
  const [jobs, setJobs] = useState<ScheduledJob[]>(initialJobs);
  const [activeJob, setActiveJob] = useState<ScheduledJob | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // Get week days
  const getWeekDays = () => {
    const weekStart = new Date(currentDate);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(weekStart);
      date.setDate(date.getDate() + i);
      return date;
    });
  };

  const weekDays = getWeekDays();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const prevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const formatDateKey = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const getJobsForDate = (dateKey: string) => {
    return jobs.filter(job => job.date === dateKey);
  };

  const selectedDateJobs = getJobsForDate(selectedDate);

  const handleDragStart = (event: DragStartEvent) => {
    const job = jobs.find(j => j.id === event.active.id);
    if (job) setActiveJob(job);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveJob(null);
    const { active, over } = event;
    
    if (!over) return;

    const draggedJobId = active.id as string;
    const dropId = over.id as string;

    // Check if dropped on a day column or hour cell
    if (dropId.includes("-")) {
      const [date, hourStr] = dropId.split("-");
      const hour = hourStr ? parseInt(hourStr) : null;
      
      setJobs(prev =>
        prev.map(job => {
          if (job.id === draggedJobId) {
            const newTime = hour 
              ? `${String(hour).padStart(2, "0")}:00`
              : job.time;
            return {
              ...job,
              date: date.length === 10 ? date : job.date,
              time: newTime,
            };
          }
          return job;
        })
      );
    } else if (dropId.length === 10) {
      // Dropped on day column header
      setJobs(prev =>
        prev.map(job => {
          if (job.id === draggedJobId) {
            return { ...job, date: dropId };
          }
          return job;
        })
      );
    }
  };

  // Month view calendar
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < startingDay; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const formatMonthDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  return (
    <DashboardLayout>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Agenda</h1>
              <p className="text-muted-foreground">
                Arrastrá y soltá trabajos para reorganizar • Redimensioná para ajustar duración
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* View Toggle */}
              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === "week" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("week")}
                  className="gap-1.5"
                >
                  <LayoutGrid className="w-4 h-4" />
                  Semana
                </Button>
                <Button
                  variant={viewMode === "month" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("month")}
                  className="gap-1.5"
                >
                  <CalendarIcon className="w-4 h-4" />
                  Mes
                </Button>
              </div>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Agendar Trabajo
              </Button>
            </div>
          </div>

          {viewMode === "week" ? (
            /* Weekly View */
            <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
              {/* Week Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">
                  {monthNames[weekDays[0].getMonth()]} {weekDays[0].getFullYear()}
                  {weekDays[6].getMonth() !== weekDays[0].getMonth() && 
                    ` - ${monthNames[weekDays[6].getMonth()]} ${weekDays[6].getFullYear()}`
                  }
                </h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date(2024, 11, 18))}>
                    Hoy
                  </Button>
                  <Button variant="outline" size="icon-sm" onClick={prevWeek}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon-sm" onClick={nextWeek}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Week Grid */}
              <div className="flex">
                {/* Time Column */}
                <div className="w-16 shrink-0 border-r border-border bg-muted/30">
                  <div className="h-16 border-b border-border" /> {/* Header spacer */}
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="h-[60px] px-2 py-1 text-xs text-muted-foreground text-right border-b border-border/50"
                    >
                      {hour}:00
                    </div>
                  ))}
                </div>

                {/* Day Columns */}
                <div className="flex-1 grid grid-cols-7">
                  {weekDays.map((date) => {
                    const dateKey = formatDateKey(date);
                    const isToday = dateKey === "2024-12-18";
                    const dayJobs = getJobsForDate(dateKey);

                    return (
                      <div key={dateKey} className="flex flex-col">
                        {/* Day Header */}
                        <div
                          className={cn(
                            "h-16 p-2 border-b border-r border-border flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors",
                            isToday && "bg-primary/10"
                          )}
                          onClick={() => setSelectedDate(dateKey)}
                        >
                          <span className="text-xs text-muted-foreground">
                            {daysOfWeek[date.getDay()]}
                          </span>
                          <span
                            className={cn(
                              "text-lg font-semibold w-8 h-8 flex items-center justify-center rounded-full",
                              isToday && "bg-primary text-primary-foreground",
                              dateKey === selectedDate && !isToday && "bg-secondary"
                            )}
                          >
                            {date.getDate()}
                          </span>
                        </div>

                        {/* Hour Grid */}
                        <DroppableDay dateKey={dateKey}>
                          <div className="relative">
                            {hours.map((hour) => (
                              <DroppableHourCell key={hour} dateKey={dateKey} hour={hour} />
                            ))}
                            {/* Jobs */}
                            {dayJobs.map((job) => (
                              <DraggableJob key={job.id} job={job} />
                            ))}
                          </div>
                        </DroppableDay>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Month View */
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

                    const dateKey = formatMonthDateKey(day);
                    const dayJobs = getJobsForDate(dateKey);
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
                        {dayJobs.length > 0 && (
                          <div className="flex gap-0.5">
                            {dayJobs.slice(0, 3).map((job, i) => (
                              <div
                                key={i}
                                className={cn(
                                  "w-1.5 h-1.5 rounded-full",
                                  isSelected ? "bg-primary-foreground/70" : statusColors[job.status].split(" ")[0]
                                )}
                              />
                            ))}
                            {dayJobs.length > 3 && (
                              <span className={cn(
                                "text-xs",
                                isSelected ? "text-primary-foreground/70" : "text-muted-foreground"
                              )}>
                                +{dayJobs.length - 3}
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
                            statusColors[job.status].split(" ")[0]
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
          )}
        </div>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeJob && <DraggableJob job={activeJob} isOverlay />}
        </DragOverlay>
      </DndContext>
    </DashboardLayout>
  );
}
