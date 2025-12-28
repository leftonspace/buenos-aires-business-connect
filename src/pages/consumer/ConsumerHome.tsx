import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Mic, Wrench, Zap, Snowflake, Flame, Lock, Paintbrush, Hammer, Truck, Star, Clock, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "plomeria", name: "Plomería", icon: Wrench, color: "bg-info/10 text-info" },
  { id: "electricidad", name: "Electricidad", icon: Zap, color: "bg-warning/10 text-warning" },
  { id: "aire-acondicionado", name: "Aire Acondicionado", icon: Snowflake, color: "bg-primary/10 text-primary" },
  { id: "gas", name: "Gas", icon: Flame, color: "bg-destructive/10 text-destructive" },
  { id: "cerrajeria", name: "Cerrajería", icon: Lock, color: "bg-muted-foreground/10 text-muted-foreground" },
  { id: "pintura", name: "Pintura", icon: Paintbrush, color: "bg-accent/10 text-accent" },
  { id: "construccion", name: "Construcción", icon: Hammer, color: "bg-success/10 text-success" },
  { id: "mudanzas", name: "Mudanzas", icon: Truck, color: "bg-info/10 text-info" },
];

const featuredProviders = [
  {
    id: "1",
    name: "Servicios Eléctricos García",
    category: "Electricidad",
    rating: 4.9,
    reviews: 127,
    distance: "1.2 km",
    responseTime: "15 min",
    verified: true,
    available: true,
  },
  {
    id: "2",
    name: "Plomería Express BA",
    category: "Plomería",
    rating: 4.7,
    reviews: 89,
    distance: "2.5 km",
    responseTime: "20 min",
    verified: true,
    available: true,
  },
  {
    id: "3",
    name: "Clima Total",
    category: "Aire Acondicionado",
    rating: 4.8,
    reviews: 203,
    distance: "3.1 km",
    responseTime: "30 min",
    verified: true,
    available: false,
  },
];

export default function ConsumerHome() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Buenos Aires, Argentina");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/buscar?categoria=${categoryId}`);
  };

  const handleProviderClick = (providerId: string) => {
    navigate(`/negocio/${providerId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">CampoTech</h1>
              <p className="text-primary-foreground/80 text-sm">Encontrá el servicio que necesitás</p>
            </div>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="¿Qué servicio necesitás?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 pr-12 h-12 bg-card text-foreground border-0 shadow-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  <Mic className="h-5 w-5" />
                </Button>
              </div>
              <Button onClick={handleSearch} className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Categories Grid */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Categorías</h2>
          <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="flex flex-col items-center p-4 rounded-xl bg-card hover:shadow-md transition-all hover:-translate-y-1 border border-border/50"
              >
                <div className={`p-3 rounded-full ${category.color} mb-2`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium text-center text-foreground">{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* AI Search Suggestion */}
        <section className="mb-10">
          <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Mic className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Probá buscar con voz</p>
                <p className="text-xs text-muted-foreground">"Necesito un plomero urgente para una pérdida"</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </Card>
        </section>

        {/* Featured Providers */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Cerca tuyo</h2>
            <Button variant="ghost" size="sm" onClick={() => navigate("/buscar")} className="text-primary">
              Ver todos
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-3">
            {featuredProviders.map((provider) => (
              <Card
                key={provider.id}
                onClick={() => handleProviderClick(provider.id)}
                className="p-4 cursor-pointer hover:shadow-md transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {provider.name.charAt(0)}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground truncate">{provider.name}</h3>
                      {provider.verified && (
                        <Badge variant="secondary" className="bg-success/10 text-success text-xs px-1.5">
                          ✓ Verificado
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{provider.category}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                        <span className="font-medium text-foreground">{provider.rating}</span>
                        <span>({provider.reviews})</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {provider.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        Responde en {provider.responseTime}
                      </span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex-shrink-0">
                    {provider.available ? (
                      <Badge className="bg-success/10 text-success border-0">Disponible</Badge>
                    ) : (
                      <Badge variant="secondary">Ocupado</Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border py-2 px-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center p-2 text-primary">
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Buscar</span>
          </button>
          <button className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary">
            <Star className="h-5 w-5" />
            <span className="text-xs mt-1">Favoritos</span>
          </button>
          <button className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary">
            <Clock className="h-5 w-5" />
            <span className="text-xs mt-1">Historial</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
