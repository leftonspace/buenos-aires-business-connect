import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search, Filter, MapPin, Star, Clock, CheckCircle, Shield, Wrench, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const mockResults = [
  {
    id: "1",
    name: "Servicios Eléctricos García",
    category: "Electricidad",
    rating: 4.9,
    reviews: 127,
    distance: 1.2,
    responseTime: "15 min",
    verified: true,
    insured: true,
    licensed: true,
    available: true,
    priceRange: "$$",
    services: ["Instalaciones", "Reparaciones", "Emergencias 24hs"],
  },
  {
    id: "2",
    name: "Plomería Express BA",
    category: "Plomería",
    rating: 4.7,
    reviews: 89,
    distance: 2.5,
    responseTime: "20 min",
    verified: true,
    insured: true,
    licensed: false,
    available: true,
    priceRange: "$",
    services: ["Destapaciones", "Pérdidas", "Instalación de sanitarios"],
  },
  {
    id: "3",
    name: "Clima Total",
    category: "Aire Acondicionado",
    rating: 4.8,
    reviews: 203,
    distance: 3.1,
    responseTime: "30 min",
    verified: true,
    insured: true,
    licensed: true,
    available: false,
    priceRange: "$$$",
    services: ["Instalación", "Mantenimiento", "Carga de gas"],
  },
  {
    id: "4",
    name: "MultiServicios Rápido",
    category: "Plomería",
    rating: 4.5,
    reviews: 56,
    distance: 0.8,
    responseTime: "10 min",
    verified: true,
    insured: false,
    licensed: false,
    available: true,
    priceRange: "$",
    services: ["Reparaciones menores", "Destapaciones"],
  },
  {
    id: "5",
    name: "Técnicos del Sur",
    category: "Electricidad",
    rating: 4.6,
    reviews: 178,
    distance: 4.2,
    responseTime: "45 min",
    verified: true,
    insured: true,
    licensed: true,
    available: true,
    priceRange: "$$",
    services: ["Tableros", "Instalaciones industriales", "Domiciliario"],
  },
];

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("categoria") || "";

  const [searchQuery, setSearchQuery] = useState(query);
  const [filters, setFilters] = useState({
    maxDistance: 10,
    minRating: 4,
    availableNow: false,
    verified: false,
    insured: false,
  });
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const applyFilters = () => {
    const newActiveFilters: string[] = [];
    if (filters.availableNow) newActiveFilters.push("Disponible ahora");
    if (filters.verified) newActiveFilters.push("Verificado");
    if (filters.insured) newActiveFilters.push("Asegurado");
    if (filters.minRating > 4) newActiveFilters.push(`${filters.minRating}+ estrellas`);
    if (filters.maxDistance < 10) newActiveFilters.push(`< ${filters.maxDistance} km`);
    setActiveFilters(newActiveFilters);
    setIsFilterOpen(false);
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    // Reset corresponding filter
    if (filter === "Disponible ahora") setFilters(f => ({ ...f, availableNow: false }));
    if (filter === "Verificado") setFilters(f => ({ ...f, verified: false }));
    if (filter === "Asegurado") setFilters(f => ({ ...f, insured: false }));
  };

  const filteredResults = mockResults.filter(result => {
    if (filters.availableNow && !result.available) return false;
    if (filters.verified && !result.verified) return false;
    if (filters.insured && !result.insured) return false;
    if (result.rating < filters.minRating) return false;
    if (result.distance > filters.maxDistance) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar servicios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10"
              />
            </div>
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <SlidersHorizontal className="h-4 w-4" />
                  {activeFilters.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {activeFilters.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh]">
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  {/* Distance */}
                  <div className="space-y-3">
                    <Label>Distancia máxima: {filters.maxDistance} km</Label>
                    <Slider
                      value={[filters.maxDistance]}
                      onValueChange={([value]) => setFilters(f => ({ ...f, maxDistance: value }))}
                      min={1}
                      max={20}
                      step={1}
                    />
                  </div>

                  {/* Rating */}
                  <div className="space-y-3">
                    <Label>Calificación mínima: {filters.minRating} estrellas</Label>
                    <Slider
                      value={[filters.minRating]}
                      onValueChange={([value]) => setFilters(f => ({ ...f, minRating: value }))}
                      min={1}
                      max={5}
                      step={0.5}
                    />
                  </div>

                  {/* Toggles */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="available">Disponible ahora</Label>
                      <Switch
                        id="available"
                        checked={filters.availableNow}
                        onCheckedChange={(checked) => setFilters(f => ({ ...f, availableNow: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="verified">Solo verificados (CUIT)</Label>
                      <Switch
                        id="verified"
                        checked={filters.verified}
                        onCheckedChange={(checked) => setFilters(f => ({ ...f, verified: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="insured">Con seguro</Label>
                      <Switch
                        id="insured"
                        checked={filters.insured}
                        onCheckedChange={(checked) => setFilters(f => ({ ...f, insured: checked }))}
                      />
                    </div>
                  </div>

                  <Button onClick={applyFilters} className="w-full">
                    Aplicar filtros
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
              {activeFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="secondary"
                  className="flex items-center gap-1 whitespace-nowrap"
                >
                  {filter}
                  <button onClick={() => removeFilter(filter)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-4">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredResults.length} resultados {query && `para "${query}"`} {category && `en ${category}`}
          </p>
          <Button variant="ghost" size="sm" className="text-xs">
            Ordenar por relevancia
          </Button>
        </div>

        {/* Results List */}
        <div className="space-y-3">
          {filteredResults.map((result, index) => (
            <Card
              key={result.id}
              onClick={() => navigate(`/negocio/${result.id}`)}
              className="p-4 cursor-pointer hover:shadow-md transition-all hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">
                    {result.name.charAt(0)}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-foreground">{result.name}</h3>
                    <span className="text-muted-foreground">{result.priceRange}</span>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-1.5 mb-2 flex-wrap">
                    {result.verified && (
                      <Badge variant="secondary" className="bg-success/10 text-success text-xs px-1.5 py-0">
                        <CheckCircle className="h-3 w-3 mr-0.5" />
                        CUIT
                      </Badge>
                    )}
                    {result.insured && (
                      <Badge variant="secondary" className="bg-info/10 text-info text-xs px-1.5 py-0">
                        <Shield className="h-3 w-3 mr-0.5" />
                        Asegurado
                      </Badge>
                    )}
                    {result.licensed && (
                      <Badge variant="secondary" className="bg-warning/10 text-warning text-xs px-1.5 py-0">
                        <Wrench className="h-3 w-3 mr-0.5" />
                        Matriculado
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                      <span className="font-medium text-foreground">{result.rating}</span>
                      <span>({result.reviews})</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {result.distance} km
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {result.responseTime}
                    </span>
                  </div>

                  {/* Services */}
                  <p className="text-xs text-muted-foreground truncate">
                    {result.services.join(" • ")}
                  </p>
                </div>

                {/* Availability */}
                <div className="flex-shrink-0">
                  {result.available ? (
                    <div className="w-3 h-3 rounded-full bg-success animate-pulse" title="Disponible" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-muted-foreground" title="Ocupado" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">No hay resultados</h3>
            <p className="text-sm text-muted-foreground">
              Probá ajustando los filtros o buscando algo diferente
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
