import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import { Home, TrendingUp, Shield, Sparkles, ArrowRight, Send, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import homePageBackground from "@/assets/home page background.avif";

import AnimatedDeviceSection from "@/components/AnimatedDeviceSection";  // latest update

// Add animation styles
const animationStyles = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .word-animate {
    display: inline-block;
    animation: slideInUp 0.6s ease-out forwards;
    margin-right: 0.3em;
  }
  
  .word-animate:nth-child(1) { animation-delay: 0.1s; }
  .word-animate:nth-child(2) { animation-delay: 0.2s; }
  .word-animate:nth-child(3) { animation-delay: 0.3s; }
  .word-animate:nth-child(4) { animation-delay: 0.4s; }
  .word-animate:nth-child(5) { animation-delay: 0.5s; }
  .word-animate:nth-child(6) { animation-delay: 0.6s; }
  .word-animate:nth-child(7) { animation-delay: 0.7s; }
`;

const Index = () => {
  const stats = [
    { value: "200+", label: "Happy Customers" },
    { value: "10k+", label: "Properties For Clients" },
    { value: "16+", label: "Years of Experience" },
  ];

  const services = [
    {
      icon: Home,
      title: "Find Your Dream Home",
      description: "Explore our curated selection of exceptional homes and investment properties across prime locations.",
    },
    {
      icon: TrendingUp,
      title: "Unlock Property Value",
      description: "Selling your property? We'll maximize your return with our expert valuation and marketing services.",
    },
    {
      icon: Shield,
      title: "Effortless Property Management",
      description: "Let us handle the stress of property ownership with comprehensive management solutions.",
    },
    {
      icon: Sparkles,
      title: "Smart Investments, Informed Decisions",
      description: "Make confident investment choices with our data-driven insights and market analysis.",
    },
  ];

  const featuredProperties = [
    {
      id: "1",
      image: property1,
      title: "Seaside Serenity Villa",
      description: "A stunning beachfront villa with modern amenities and breathtaking ocean views.",
      price: 1250000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      location: "Malibu, California",
    },
    {
      id: "2",
      image: property2,
      title: "Metropolitan Haven",
      description: "Contemporary urban apartment in the heart of the city with skyline views.",
      price: 650000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      location: "Downtown, New York",
    },
    {
      id: "3",
      image: property3,
      title: "Rustic Retreat Cottage",
      description: "Luxurious penthouse with stunning cityscape and premium amenities throughout.",
      price: 850000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      location: "Los Angeles, California",
    },
  ];

  return (
    <div className="min-h-screen">
      <style>{animationStyles}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="word-animate">Discover</span>
              <span className="word-animate">Your</span>
              <span className="word-animate">Dream</span>
              <br />
              <span className="word-animate"><span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Property</span></span>
              <span className="word-animate">with</span>
              <span className="word-animate">HousingDTU</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in-up stagger-1">
              Your journey to finding the perfect property begins here. Explore our curated listings to find the home that matches your dreams.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-2">
              <Button variant="hero" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center animate-fade-in-up stagger-${index + 1}`}>
                <h3 className="text-4xl font-bold text-primary mb-2 hover:scale-110 transition-transform duration-300">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl">
                Comprehensive real estate services tailored to your unique needs
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`animate-scale-in stagger-${Math.min(index + 1, 4)}`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Device Section - Scroll-based animations */}
      <AnimatedDeviceSection />

      {/* Featured Properties Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-fade-in-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investment opportunities.
              </p>
            </div>
            <Button variant="hero" asChild className="hidden md:flex hover:scale-105 transition-transform duration-300">
              <Link to="/properties">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div key={property.id} className={`animate-scale-in stagger-${Math.min(index + 1, 4)}`}>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden animate-fade-in-up">
            <Button variant="hero" asChild className="hover:scale-105 transition-transform duration-300">
              <Link to="/properties">
                View All Properties <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-card animate-scale-in hover:shadow-purple transition-shadow duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
              Start Your Real Estate Journey Today
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Your dream property is just a click away. Take the first step towards your future.
            </p>
            <Button variant="hero" size="lg" asChild className="animate-fade-in-up stagger-2 hover:scale-105 transition-transform duration-300">
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Hero CTA Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={homePageBackground}
            alt="Modern house in forest" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Find Your Perfect Property Now!
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Browse our latest listings and take the next step toward your dream home.
            </p>
            <div className="animate-fade-in-up stagger-2">
              <Button 
                asChild
                className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Link to="/properties">Start Your Search</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Brand and Email Subscription */}
            <div className="md:col-span-4">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Home className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold">Estatein</span>
              </Link>
              <div className="relative mb-4">
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  className="pr-12 bg-secondary border-border"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-foreground">Home</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-foreground">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-foreground">Properties</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-foreground">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <p>&copy;2024 Estatein. All Rights Reserved.</p>
              <Link to="/" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;