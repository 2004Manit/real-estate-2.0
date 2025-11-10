import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Facebook, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import footerCtaBg from "@/assets/footer-cta-bg.jpg";
import { Link } from "react-router-dom";


const About = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const stats = [
    { value: "10K+", label: "Properties Listed" },
    { value: "5K+", label: "Happy Clients Served" },
    { value: "100+", label: "Professional Agents" },
    { value: "95%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroBuilding})`,
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-background/50" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Browse through a curated selection of properties tailored to your needs. Find your dream home, investment, or rental today.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up stagger-2">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Shaping The Future Of Real Estate With Innovation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are redefining real estate with innovation and excellence. By leveraging technology and market expertise, we make buying, selling, and renting seamless.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up stagger-3">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-elegant h-[500px]">
                <img 
                  src={heroBuilding} 
                  alt="Modern interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              {/* Tabs */}
              <div className="flex gap-4 mb-8">
                <Button
                  variant={activeTab === "vision" ? "default" : "outline"}
                  onClick={() => setActiveTab("vision")}
                  className="px-6 transition-all"
                >
                  Our Vision
                </Button>
                <Button
                  variant={activeTab === "mission" ? "default" : "outline"}
                  onClick={() => setActiveTab("mission")}
                  className="px-6 transition-all"
                >
                  Our Mission
                </Button>
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Trusted & Innovative Real Estate Connection
                </h3>
                
                {activeTab === "vision" ? (
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Finding the perfect home or investment property requires expertise, trust, and innovation. We bridge the gap between your real estate goals and seamless transactions by combining industry knowledge with cutting-edge technology.
                    </p>
                    <div className="border-l-4 border-primary pl-6 py-4 mt-6">
                      <p className="text-foreground font-medium">
                        Our vision is to revolutionize the real estate industry by making property transactions transparent, efficient, and accessible to everyone.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Our mission is to provide exceptional service and innovative solutions that empower our clients to make informed real estate decisions. We are committed to delivering value through transparency, integrity, and expertise.
                    </p>
                    <div className="border-l-4 border-primary pl-6 py-4 mt-6">
                      <p className="text-foreground font-medium">
                        We strive to create lasting relationships with our clients by exceeding expectations and delivering results that matter.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden animate-fade-in-up">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${footerCtaBg})`,
            filter: "brightness(0.5)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join The Urbanet Community Today!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover how we can help you find, sell, or rent properties with ease.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-background hover:bg-white/90 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </section>


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

export default About;
