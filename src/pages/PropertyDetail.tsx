import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bed, Bath, Square, MapPin, Star, ArrowLeft } from "lucide-react";
import property1 from "@/assets/property-1.jpg";

const PropertyDetail = () => {
  const { id } = useParams();

  const property = {
    id: "1",
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    description: "Discover your own piece of paradise with the Seaside Serenity Villa. This breathtaking villa offers unparalleled luxury and comfort, featuring four spacious bedrooms, three elegant bathrooms, and a stunning beachfront location. Enjoy panoramic ocean views from every room, a modern gourmet kitchen, and a private infinity pool. With its contemporary design and premium finishes throughout, this villa is perfect for those seeking the ultimate in coastal living.",
    images: [property1, property1, property1, property1],
    amenities: [
      "24/7 concierge services for seamless living",
      "Gourmet kitchen with top-of-the-line appliances",
      "Private beach access for morning strolls",
      "Master suite with spa-inspired bathroom",
      "Private garage and ample storage space",
    ],
    adminRatings: {
      cleanliness: 4.8,
      facilities: 4.9,
      connectivity: 4.7,
      safety: 5.0,
      overall: 4.85,
    },
    reviews: [
      {
        id: 1,
        user: "Sarah Johnson",
        rating: 5,
        comment: "Absolutely stunning property! The ocean views are breathtaking and the amenities are top-notch. Highly recommend!",
        date: "2 weeks ago",
      },
      {
        id: 2,
        user: "Michael Chen",
        rating: 5,
        comment: "Perfect location and beautiful home. The attention to detail in the design is remarkable.",
        date: "1 month ago",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/properties">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Link>
          </Button>

          {/* Property Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">${property.price.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="md:row-span-2">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {property.images.slice(1, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Stats */}
              <Card className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <Bed className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">{property.bedrooms}</p>
                      <p className="text-sm text-muted-foreground">Bedrooms</p>
                    </div>
                    <div className="text-center">
                      <Bath className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">{property.bathrooms}</p>
                      <p className="text-sm text-muted-foreground">Bathrooms</p>
                    </div>
                    <div className="text-center">
                      <Square className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">{property.area}</p>
                      <p className="text-sm text-muted-foreground">Square Feet</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features and Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground">{amenity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin Ratings */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Property Ratings</h2>
                <Card className="bg-gradient-card border-border shadow-card">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {Object.entries(property.adminRatings).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-sm text-muted-foreground capitalize mb-1">{key}</p>
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 fill-primary text-primary" />
                            <span className="text-xl font-bold">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                <div className="space-y-4">
                  {property.reviews.map((review) => (
                    <Card key={review.id} className="bg-gradient-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold">{review.user}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <Card className="bg-gradient-card border-border shadow-card sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Inquire About This Property</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="First Name" className="bg-background border-border" />
                    </div>
                    <div>
                      <Input placeholder="Last Name" className="bg-background border-border" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="bg-background border-border" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Phone" className="bg-background border-border" />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your message..."
                        className="bg-background border-border min-h-[100px]"
                      />
                    </div>
                    <Button variant="hero" className="w-full">Send Inquiry</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Estatein. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetail;
