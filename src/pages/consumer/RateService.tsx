import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Star, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function RateService() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const { toast } = useToast();

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock service data
  const serviceData = {
    businessName: "Servicios Eléctricos García",
    service: "Reparación de cortocircuitos",
    date: "27 de diciembre, 2024",
    technician: "Juan García",
  };

  const handleSubmit = async () => {
    if (rating === 0) {
      toast({
        title: "Seleccioná una calificación",
        description: "Por favor, elegí cuántas estrellas querés darle al servicio.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center animate-scale-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">¡Gracias por tu opinión!</h1>
          <p className="text-muted-foreground mb-6">
            Tu calificación ayuda a otros usuarios a encontrar los mejores servicios.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Volver al inicio
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-2">Calificá el servicio</h1>
          <p className="text-primary-foreground/80">Tu opinión es importante</p>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-6">
        {/* Service Card */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-primary">
                {serviceData.businessName.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{serviceData.businessName}</h2>
              <p className="text-sm text-muted-foreground">{serviceData.service}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {serviceData.date} • Técnico: {serviceData.technician}
              </p>
            </div>
          </div>
        </Card>

        {/* Rating Section */}
        <Card className="p-6 mb-6">
          <h3 className="font-semibold text-foreground text-center mb-4">
            ¿Cómo calificarías el servicio?
          </h3>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-2 transition-transform hover:scale-110"
              >
                <Star
                  className={`h-10 w-10 transition-colors ${
                    star <= (hoveredRating || rating)
                      ? 'fill-warning text-warning'
                      : 'text-muted'
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            {rating === 0 && "Tocá una estrella para calificar"}
            {rating === 1 && "Muy malo"}
            {rating === 2 && "Malo"}
            {rating === 3 && "Regular"}
            {rating === 4 && "Bueno"}
            {rating === 5 && "Excelente"}
          </p>
        </Card>

        {/* Comment Section */}
        <Card className="p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3">
            ¿Querés agregar un comentario? (opcional)
          </h3>
          <Textarea
            placeholder="Contanos tu experiencia con el servicio..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2 text-right">
            {comment.length}/500 caracteres
          </p>
        </Card>

        {/* Quick Tags */}
        <Card className="p-6 mb-8">
          <h3 className="font-semibold text-foreground mb-3">¿Qué destacarías?</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Puntualidad",
              "Profesionalismo",
              "Precio justo",
              "Limpieza",
              "Buena comunicación",
              "Trabajo de calidad",
            ].map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                onClick={() => {
                  if (!comment.includes(tag)) {
                    setComment((prev) => (prev ? `${prev}, ${tag}` : tag));
                  }
                }}
                className="text-xs"
              >
                {tag}
              </Button>
            ))}
          </div>
        </Card>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full h-12 text-lg mb-8"
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Enviar calificación
            </>
          )}
        </Button>
      </main>
    </div>
  );
}
