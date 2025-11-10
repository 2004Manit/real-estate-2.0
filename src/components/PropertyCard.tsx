import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
}

const PropertyCard = ({
  id,
  image,
  title,
  description,
  price,
  bedrooms,
  bathrooms,
  area,
  location,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 group shadow-card hover:shadow-purple hover:scale-[1.02]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-sm font-semibold text-foreground">${price.toLocaleString()}</p>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-2">
          <p className="text-xs text-muted-foreground mb-1">{location}</p>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{area} sqft</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button variant="hero" className="w-full hover:scale-105 transition-transform duration-300" asChild>
          <Link to={`/properties/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
