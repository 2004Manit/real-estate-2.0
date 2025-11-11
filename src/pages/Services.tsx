import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Home, TrendingUp, Shield, Sparkles, BarChart3, Building2, Users, FileText, Send } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import headerBg from "@/assets/property img.png";

// Using a placeholder luxury property image for CTA section
const heroImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop";

// Animation wrapper component for scroll-triggered animations
const AnimateOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Stagger children animation
const StaggerContainer = ({ children, staggerDelay = 0.1, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, direction = "up" }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Parallax component
const ParallaxSection = ({ children, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

// Counter animation component
const CounterAnimation = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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

  // Scroll progress for header parallax
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Header Section with Background Image */}
      <section ref={headerRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: headerY, scale: headerScale }}
        >
          <img 
            src={headerBg}
            alt="Luxury Property Background" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlays for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30"
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>

        {/* Animated Particles/Dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                x: [0, Math.random() * 50 - 25],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Content with fade animation */}
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          style={{ opacity: headerOpacity }}
        >
          <AnimateOnScroll direction="down">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Elevate Your{" "}
              <motion.span
                className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Real Estate Experience
              </motion.span>
            </motion.h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.3}>
            <motion.p 
              className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
            </motion.p>
          </AnimateOnScroll>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Fade Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
      
      <div className="pb-20 bg-black">
        <div className="container mx-auto px-4">

          {/* Animated Stats Section */}
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8">
              {[
                { label: "Properties Sold", end: 500, suffix: "+" },
                { label: "Happy Clients", end: 1200, suffix: "+" },
                { label: "Years Experience", end: 15, suffix: "+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-white mb-2">
                    <CounterAnimation end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Services Grid with stagger animation */}
          <StaggerContainer 
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {services.map((service, index) => (
              <StaggerItem key={index} direction="up">
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Detailed Service Sections */}
          <div className="space-y-20">
            {/* Property Selling Section */}
            <section>
              <AnimateOnScroll direction="left">
                <motion.h2 
                  className="text-3xl font-bold mb-6 text-white"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  Unlock Property Value
                </motion.h2>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={0.2}>
                <p className="text-gray-400 mb-8 max-w-3xl">
                  Selling your property? We make it a rewarding experience. At Estatein, we're your trusted partner in selling real estate assets. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best possible return on your investment.
                </p>
              </AnimateOnScroll>

              <StaggerContainer 
                staggerDelay={0.15}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: BarChart3,
                    title: "Valuation Mastery",
                    description: "Discover the true value of your property with our expert valuation services.",
                  },
                  {
                    icon: Building2,
                    title: "Strategic Marketing",
                    description: "We create compelling marketing campaigns to attract serious buyers.",
                  },
                  {
                    icon: Shield,
                    title: "Closing Success",
                    description: "Navigate the closing process with confidence and expert guidance.",
                  },
                ].map((service, index) => (
                  <StaggerItem key={index} direction="up">
                    <ServiceCard {...service} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>

            {/* Property Management Section */}
            <section>
              <AnimateOnScroll direction="right">
                <motion.h2 
                  className="text-3xl font-bold mb-6 text-white"
                  whileHover={{ scale: 1.02, x: -10 }}
                >
                  Effortless Property Management
                </motion.h2>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={0.2}>
                <p className="text-gray-400 mb-8 max-w-3xl">
                  Owning a property shouldn't be stressful. At Estatein, we understand the complexities and responsibilities that come with property ownership. That's why we offer comprehensive property management services to make property ownership effortless and rewarding.
                </p>
              </AnimateOnScroll>

              <StaggerContainer 
                staggerDelay={0.15}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Users,
                    title: "Tenant Harmony",
                    description: "We handle all aspects of tenant management with professionalism.",
                  },
                  {
                    icon: Shield,
                    title: "Maintenance Ease",
                    description: "Say goodbye to property maintenance headaches with our comprehensive services.",
                  },
                  {
                    icon: FileText,
                    title: "Financial Peace of Mind",
                    description: "Managing property finances is complex. Our financial experts handle all aspects.",
                  },
                  {
                    icon: Building2,
                    title: "Legal Guardian",
                    description: "Stay compliant with property laws and regulations with our legal guidance.",
                  },
                ].map((service, index) => (
                  <StaggerItem key={index} direction={index % 2 === 0 ? "left" : "right"}>
                    <ServiceCard {...service} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section with Parallax */}
      <div className="relative min-h-[600px] py-20 md:py-32 overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={heroImage}
            alt="Luxury Property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10 h-full min-h-[600px] flex items-center">
          <div className="max-w-2xl">
            <AnimateOnScroll direction="left">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                Find Your Perfect<br />
                <motion.span
                  className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Property
                </motion.span>{" "}
                With Estatein
              </motion.h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2} direction="left">
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                Looking for your dream home? Estatein makes property searching easy and stress-free! With our user-friendly platform and expert agents,
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.4} direction="left">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold transition-all text-lg shadow-lg"
                data-testid="cta-search-button"
              >
                Start Your Search
              </motion.button>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-32 h-32 rounded-full bg-pink-500/20 blur-xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Footer */}
      <footer className="bg-[#070707] border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and Newsletter Section */}
            <AnimateOnScroll direction="up" delay={0}>
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" fill="white"/>
                    </svg>
                  </motion.div>
                  <span className="text-2xl font-bold text-white">Estatein</span>
                </div>
                <div className="relative max-w-md">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-[#0b0b0b] border border-gray-800 rounded-full px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-br from-purple-600 to-purple-400"
                  >
                    <Send size={16} className="text-white" />
                  </motion.button>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Navigation Links with stagger */}
            {[
              {
                title: "Home",
                links: [
                  { to: "/", label: "Hero Section" },
                  { to: "/#features", label: "Features" },
                  { to: "/properties", label: "Properties" },
                  { to: "/#faq", label: "FAQ's" },
                ],
              },
              {
                title: "About Us",
                links: [
                  { to: "/#about", label: "Our Story" },
                  { to: "/#team", label: "Our Team" },
                ],
              },
              {
                title: "Properties",
                links: [
                  { to: "/properties", label: "Portfolio" },
                  { to: "/properties", label: "Categories" },
                ],
              },
              {
                title: "Services",
                links: [
                  { to: "/services", label: "Our Services" },
                  { to: "/contact", label: "Contact Us" },
                ],
              },
            ].map((section, sectionIndex) => (
              <AnimateOnScroll key={section.title} direction="up" delay={0.1 * (sectionIndex + 1)}>
                <div>
                  <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to={link.to} className="text-gray-400 hover:text-purple-400 transition-colors">
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;

