import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, CheckCircle, Shield, Wrench, MessageCircle, Phone, Share2, Heart, ChevronRight, ThumbsUp, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

// Mock data for a business
const businessData = {
  id: "1",
  name: "Servicios Eléctricos García",
  category: "Electricidad",
  description: "Más de 15 años de experiencia en instalaciones eléctricas domiciliarias e industriales. Servicio de emergencia 24hs.",
  rating: 4.9,
  totalReviews: 127,
  ratingBreakdown: { 5: 98, 4: 22, 3: 5, 2: 1, 1: 1 },
  distance: "1.2 km",
  address: "Palermo, Buenos Aires",
  responseTime: "15 min",
  memberSince: "2019",
  completedJobs: 1245,
  verified: true,
  insured: true,
  licensed: true,
  available: true,
  phone: "+54 11 1234-5678",
  services: [
    { name: "Instalación eléctrica completa", price: "Consultar" },
    { name: "Reparación de cortocircuitos", price: "Desde $15.000" },
    { name: "Instalación de aire acondicionado", price: "Desde $25.000" },
    { name: "Emergencias 24hs", price: "Desde $20.000" },
    { name: "Tableros eléctricos", price: "Consultar" },
  ],
  photos: [1, 2, 3, 4, 5, 6],
  reviews: [
    {
      id: "1",
      author: "María G.",
      rating: 5,
      date: "Hace 2 días",
      comment: "Excelente trabajo, muy profesional y puntual. Solucionó el problema rápidamente.",
      helpful: 12,
      service: "Reparación de cortocircuitos",
    },
    {
      id: "2",
      author: "Carlos L.",
      rating: 5,
      date: "Hace 1 semana",
      comment: "Muy recomendable. Instaló el aire en menos de 2 horas y dejó todo limpio.",
      helpful: 8,
      service: "Instalación de aire acondicionado",
    },
    {
      id: "3",
      author: "Ana P.",
      rating: 4,
      date: "Hace 2 semanas",
      comment: "Buen trabajo, aunque tardó un poco más de lo esperado.",
      helpful: 3,
      service: "Instalación eléctrica",
    },
  ],
};

export default function BusinessProfile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola, vi tu perfil en CampoTech. Necesito un servicio de ${businessData.category.toLowerCase()}.`
    );
    window.open(`https://wa.me/${businessData.phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const totalRatings = Object.values(businessData.ratingBreakdown).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Business Header */}
        <section className="py-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-primary">
                {businessData.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-foreground mb-1">{businessData.name}</h1>
              <p className="text-muted-foreground text-sm mb-2">{businessData.category}</p>
              
              {/* Verification Badges */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {businessData.verified && (
                  <Badge variant="secondary" className="bg-success/10 text-success text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    CUIT Verificado
                  </Badge>
                )}
                {businessData.insured && (
                  <Badge variant="secondary" className="bg-info/10 text-info text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Asegurado
                  </Badge>
                )}
                {businessData.licensed && (
                  <Badge variant="secondary" className="bg-warning/10 text-warning text-xs">
                    <Wrench className="h-3 w-3 mr-1" />
                    Matriculado
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-3 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-lg font-bold text-foreground">{businessData.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">{businessData.totalReviews} reseñas</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-center gap-1 mb-1">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-lg font-bold text-foreground">{businessData.distance}</span>
              </div>
              <p className="text-xs text-muted-foreground">{businessData.address}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-lg font-bold text-foreground">{businessData.responseTime}</span>
              </div>
              <p className="text-xs text-muted-foreground">Respuesta</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {businessData.description}
          </p>

          {/* Quick Stats */}
          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
            <span>🗓️ Desde {businessData.memberSince}</span>
            <span>✅ {businessData.completedJobs} trabajos</span>
          </div>
        </section>

        {/* Tabs */}
        <Tabs defaultValue="services" className="mt-2">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="services">Servicios</TabsTrigger>
            <TabsTrigger value="photos">Fotos</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services" className="mt-4">
            <div className="space-y-2">
              {businessData.services.map((service, index) => (
                <Card key={index} className="p-4 flex items-center justify-between">
                  <span className="font-medium text-foreground">{service.name}</span>
                  <span className="text-sm text-muted-foreground">{service.price}</span>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="mt-4">
            <div className="grid grid-cols-3 gap-2">
              {businessData.photos.map((photo) => (
                <div
                  key={photo}
                  className="aspect-square rounded-lg bg-muted flex items-center justify-center"
                >
                  <Image className="h-8 w-8 text-muted-foreground/50" />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-4">
            {/* Rating Summary */}
            <Card className="p-4 mb-4">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground">{businessData.rating}</div>
                  <div className="flex items-center justify-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= Math.round(businessData.rating) ? 'fill-warning text-warning' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{businessData.totalReviews} reseñas</p>
                </div>
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="text-xs w-3">{stars}</span>
                      <Progress
                        value={(businessData.ratingBreakdown[stars as keyof typeof businessData.ratingBreakdown] / totalRatings) * 100}
                        className="h-2"
                      />
                      <span className="text-xs text-muted-foreground w-8">
                        {businessData.ratingBreakdown[stars as keyof typeof businessData.ratingBreakdown]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Reviews List */}
            <div className="space-y-4">
              {businessData.reviews.map((review) => (
                <Card key={review.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {review.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{review.author}</span>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${star <= review.rating ? 'fill-warning text-warning' : 'text-muted'}`}
                            />
                          ))}
                        </div>
                        <Badge variant="secondary" className="text-xs py-0">
                          {review.service}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{review.comment}</p>
                      <button className="flex items-center gap-1 mt-2 text-xs text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="h-3 w-3" />
                        Útil ({review.helpful})
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="container mx-auto flex gap-3">
          <Button variant="outline" size="lg" className="flex-1" onClick={() => window.open(`tel:${businessData.phone}`)}>
            <Phone className="h-5 w-5 mr-2" />
            Llamar
          </Button>
          <Button size="lg" className="flex-1 bg-success hover:bg-success/90" onClick={handleWhatsAppContact}>
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
