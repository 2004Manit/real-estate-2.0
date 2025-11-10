import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Home, TrendingUp, Shield, Sparkles, BarChart3, Building2, Users, FileText, Send } from "lucide-react";
import heroImage from "@/assets/hehe hehe.webp";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Find Your Dream Home",
      description: "Explore our curated selection of exceptional homes and investment properties across prime locations. Our expert team helps you find the perfect property that matches your lifestyle and investment goals.",
    },
    {
      icon: TrendingUp,
      title: "Unlock Property Value",
      description: "Selling your property? We'll maximize your return with our expert valuation and marketing services. Our strategic approach ensures your property stands out in the market and attracts qualified buyers.",
    },
    {
      icon: Shield,
      title: "Effortless Property Management",
      description: "Let us handle the stress of property ownership with comprehensive management solutions. From tenant screening to maintenance coordination, we take care of every detail so you don't have to.",
    },
    {
      icon: Sparkles,
      title: "Smart Investments, Informed Decisions",
      description: "Make confident investment choices with our data-driven insights and market analysis. We provide detailed property assessments, ROI projections, and strategic guidance for your real estate portfolio.",
    },
    {
      icon: BarChart3,
      title: "Valuation Mastery",
      description: "Discover the true value of your property with our expert valuation services. We use advanced analytics and market knowledge to provide accurate, competitive pricing strategies.",
    },
    {
      icon: Building2,
      title: "Strategic Marketing",
      description: "Selling a property? We create compelling marketing campaigns that showcase your property's unique features and attract serious buyers through multiple channels.",
    },
    {
      icon: Users,
      title: "Tenant Harmony",
      description: "Our comprehensive tenant management services ensure smooth landlord-tenant relationships. We handle screening, contracts, and ongoing communications with professionalism.",
    },
    {
      icon: FileText,
      title: "Legal Guardian",
      description: "Navigate the complex legal aspects of property transactions with confidence. Our experienced team ensures all documentation and compliance requirements are handled properly.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Elevate Your Real Estate Experience
            </h1>
            <p className="text-muted-foreground text-lg">
              Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Detailed Service Sections */}
          <div className="space-y-20">
            {/* Property Selling */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Unlock Property Value</h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Selling your property? We make it a rewarding experience. At Estatein, we're your trusted partner in selling real estate assets. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best possible return on your investment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServiceCard
                  icon={BarChart3}
                  title="Valuation Mastery"
                  description="Discover the true value of your property with our expert valuation services."
                />
                <ServiceCard
                  icon={Building2}
                  title="Strategic Marketing"
                  description="We create compelling marketing campaigns to attract serious buyers."
                />
                <ServiceCard
                  icon={Shield}
                  title="Closing Success"
                  description="Navigate the closing process with confidence and expert guidance."
                />
              </div>
            </section>

            {/* Property Management */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Effortless Property Management</h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Owning a property shouldn't be stressful. At Estatein, we understand the complexities and responsibilities that come with property ownership. That's why we offer comprehensive property management services to make property ownership effortless and rewarding.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ServiceCard
                  icon={Users}
                  title="Tenant Harmony"
                  description="We handle all aspects of tenant management with professionalism."
                />
                <ServiceCard
                  icon={Shield}
                  title="Maintenance Ease"
                  description="Say goodbye to property maintenance headaches with our comprehensive services."
                />
                <ServiceCard
                  icon={FileText}
                  title="Financial Peace of Mind"
                  description="Managing property finances is complex. Our financial experts handle all aspects."
                />
                <ServiceCard
                  icon={Building2}
                  title="Legal Guardian"
                  description="Stay compliant with property laws and regulations with our legal guidance."
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative min-h-[600px] py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Luxury Property" 
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay to show sky colors - similar to reference image */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 h-full min-h-[600px] flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Find Your Perfect<br />Property With Estatein
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
              Looking for your dream home? Estatein makes property searching easy and stress-free! With our user-friendly platform and expert agents,
            </p>
            <button className="px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg">
              Start Your Search
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#070707] border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Newsletter Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="white"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-white">Estatein</span>
              </div>
              <div className="relative max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-full bg-[#0b0b0b] border border-border rounded-full px-4 py-3 text-white"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-br from-purple-600 to-purple-400">
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Home</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Hero Section
                  </Link>
                </li>
                <li>
                  <Link to="/#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="hover:text-white transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/#faq" className="hover:text-white transition-colors">
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/#about" className="hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/#team" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Properties</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/properties" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="hover:text-white transition-colors">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Services;
