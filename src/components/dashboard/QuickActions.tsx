import { Button } from "@/components/ui/button";
import { Plus, UserPlus, Calendar, FileText } from "lucide-react";

export function QuickActions() {
  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-4">Acciones Rápidas</h3>
      <div className="grid grid-cols-2 gap-3">
        <Button className="h-auto py-4 flex-col gap-2" variant="default">
          <Plus className="w-5 h-5" />
          <span className="text-xs">Nuevo Trabajo</span>
        </Button>
        <Button className="h-auto py-4 flex-col gap-2" variant="outline">
          <UserPlus className="w-5 h-5" />
          <span className="text-xs">Nuevo Cliente</span>
        </Button>
        <Button className="h-auto py-4 flex-col gap-2" variant="outline">
          <Calendar className="w-5 h-5" />
          <span className="text-xs">Agendar</span>
        </Button>
        <Button className="h-auto py-4 flex-col gap-2" variant="outline">
          <FileText className="w-5 h-5" />
          <span className="text-xs">Nueva Factura</span>
        </Button>
      </div>
    </div>
  );
}
