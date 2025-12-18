import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Search,
  Phone,
  Bot,
  User,
  Clock,
  CheckCheck,
  Send,
  Paperclip,
  Mic,
  MoreVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const conversations = [
  {
    id: "1",
    name: "María González",
    phone: "+54 11 1234-5678",
    lastMessage: "Perfecto, los esperamos mañana a las 9am",
    time: "Hace 5 min",
    unread: 2,
    isAI: false,
    status: "activo",
  },
  {
    id: "2",
    name: "Roberto Silva",
    phone: "+54 11 2345-6789",
    lastMessage: "¿Podrían pasarme un presupuesto para la instalación del aire?",
    time: "Hace 15 min",
    unread: 1,
    isAI: true,
    status: "ai_handling",
  },
  {
    id: "3",
    name: "Ana Martínez",
    phone: "+54 11 3456-7890",
    lastMessage: "Gracias por el servicio, excelente trabajo!",
    time: "Hace 1 hora",
    unread: 0,
    isAI: false,
    status: "completado",
  },
  {
    id: "4",
    name: "Luis Fernández",
    phone: "+54 11 4567-8901",
    lastMessage: "El técnico ya terminó, quedo todo perfecto",
    time: "Hace 2 horas",
    unread: 0,
    isAI: false,
    status: "completado",
  },
  {
    id: "5",
    name: "Nuevo Lead",
    phone: "+54 11 5678-9012",
    lastMessage: "Hola, necesito arreglar una pérdida urgente",
    time: "Hace 3 horas",
    unread: 3,
    isAI: true,
    status: "nuevo",
  },
];

const messages = [
  {
    id: "1",
    sender: "customer",
    content: "Hola, necesito arreglar una pérdida en el baño",
    time: "14:30",
  },
  {
    id: "2",
    sender: "ai",
    content: "¡Hola María! Gracias por contactarnos. Entiendo que tenés una pérdida en el baño. ¿Podrías decirme si es en una canilla, inodoro o cañería?",
    time: "14:31",
  },
  {
    id: "3",
    sender: "customer",
    content: "Es en la cañería debajo del lavatorio, está goteando",
    time: "14:32",
  },
  {
    id: "4",
    sender: "ai",
    content: "Perfecto, entendido. Tenemos disponibilidad mañana entre las 9am y 11am. ¿Te serviría ese horario? El técnico Juan Pérez estaría disponible para atenderte.",
    time: "14:33",
  },
  {
    id: "5",
    sender: "customer",
    content: "Sí, a las 9am me viene bien",
    time: "14:35",
  },
  {
    id: "6",
    sender: "ai",
    content: "Excelente, quedás agendada para mañana 19 de diciembre a las 9am. Tu dirección es Av. Corrientes 1234, ¿es correcto?",
    time: "14:35",
  },
  {
    id: "7",
    sender: "customer",
    content: "Sí, exacto",
    time: "14:36",
  },
  {
    id: "8",
    sender: "human",
    content: "Perfecto, los esperamos mañana a las 9am. Juan te va a contactar 30 minutos antes de llegar. ¡Gracias por confiar en nosotros!",
    time: "14:40",
  },
];

export default function WhatsApp() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] flex gap-0 bg-card rounded-xl border border-border overflow-hidden shadow-sm">
        {/* Conversations List */}
        <div className="w-80 border-r border-border flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">WhatsApp</h2>
              <Badge className="bg-success/15 text-success">Conectado</Badge>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar conversaciones..." className="pl-10" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 p-4 border-b border-border">
            <div className="text-center">
              <p className="text-lg font-bold text-foreground">127</p>
              <p className="text-xs text-muted-foreground">Hoy</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-success">89%</p>
              <p className="text-xs text-muted-foreground">AI Resuelto</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-warning">5</p>
              <p className="text-xs text-muted-foreground">Pendientes</p>
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={cn(
                  "w-full p-4 flex items-start gap-3 border-b border-border hover:bg-muted/50 transition-colors text-left",
                  selectedConversation.id === conv.id && "bg-muted"
                )}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  {conv.isAI && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-info flex items-center justify-center">
                      <Bot className="w-3 h-3 text-info-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-foreground truncate">{conv.name}</p>
                    <span className="text-xs text-muted-foreground shrink-0">{conv.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {conv.status === "ai_handling" && (
                      <Badge variant="outline" className="text-xs bg-info/15 text-info">
                        AI Manejando
                      </Badge>
                    )}
                    {conv.status === "nuevo" && (
                      <Badge variant="outline" className="text-xs bg-accent/15 text-accent">
                        Nuevo Lead
                      </Badge>
                    )}
                  </div>
                </div>
                {conv.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs text-primary-foreground">{conv.unread}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{selectedConversation.name}</p>
                <p className="text-sm text-muted-foreground">{selectedConversation.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon-sm">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon-sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={cn(
                  "flex animate-slide-up",
                  message.sender === "customer" ? "justify-start" : "justify-end"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={cn(
                    "max-w-[70%] rounded-2xl px-4 py-2 relative",
                    message.sender === "customer"
                      ? "bg-card border border-border rounded-tl-sm"
                      : message.sender === "ai"
                      ? "bg-info/10 border border-info/20 rounded-tr-sm"
                      : "bg-primary text-primary-foreground rounded-tr-sm"
                  )}
                >
                  {message.sender !== "customer" && (
                    <div className="flex items-center gap-1 mb-1">
                      {message.sender === "ai" ? (
                        <>
                          <Bot className="w-3 h-3 text-info" />
                          <span className="text-xs text-info">AI</span>
                        </>
                      ) : (
                        <>
                          <User className="w-3 h-3 text-primary-foreground/70" />
                          <span className="text-xs text-primary-foreground/70">Vos</span>
                        </>
                      )}
                    </div>
                  )}
                  <p className={cn(
                    "text-sm",
                    message.sender === "customer" ? "text-foreground" : 
                    message.sender === "ai" ? "text-foreground" : "text-primary-foreground"
                  )}>
                    {message.content}
                  </p>
                  <div className={cn(
                    "flex items-center justify-end gap-1 mt-1",
                    message.sender === "customer" ? "text-muted-foreground" :
                    message.sender === "ai" ? "text-muted-foreground" : "text-primary-foreground/70"
                  )}>
                    <span className="text-xs">{message.time}</span>
                    {message.sender !== "customer" && (
                      <CheckCheck className="w-3 h-3" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Input
                placeholder="Escribí un mensaje..."
                className="flex-1"
              />
              <Button variant="ghost" size="icon">
                <Mic className="w-5 h-5" />
              </Button>
              <Button size="icon">
                <Send className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
              <span>AI está activo y respondiendo automáticamente</span>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                Desactivar AI temporalmente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
