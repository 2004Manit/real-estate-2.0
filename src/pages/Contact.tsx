import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Home, Send,  Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative pt-32 pb-12 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/dtu-tour.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Get in Touch with Estatein
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up stagger-1">
              Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="pt-10 pb-20">
        <div className="container mx-auto px-4">

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-card border-border shadow-card hover:shadow-purple transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">info@estatein.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card hover:shadow-purple transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">+1 (123) 456-7890</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card hover:shadow-purple transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Main Headquarters</h3>
                <p className="text-muted-foreground mb-2">123 Estatein Plaza, City Center, Metropolis</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                <p className="text-muted-foreground mb-8">
                  We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with our team. Whether you're a prospective client, partner, or simply curious, we're here to answer your questions and provide the assistance you need.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Enter First Name" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Enter Last Name" className="bg-background border-border" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="Enter your Email" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input type="tel" placeholder="Enter Phone Number" className="bg-background border-border" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Inquiry Type</label>
                      <Select>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select Inquiry Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Buying Property</SelectItem>
                          <SelectItem value="selling">Selling Property</SelectItem>
                          <SelectItem value="renting">Renting Property</SelectItem>
                          <SelectItem value="investment">Investment Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">How Did You Hear About Us?</label>
                      <Select>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="ad">Advertisement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Enter your Message here..."
                      className="bg-background border-border min-h-[150px]"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree with Terms of Use and Privacy Policy
                    </label>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Your Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Locations */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Discover Our Office Locations</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories to find the Estatein office nearest to you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Main Headquarters</h3>
                  <p className="text-2xl font-semibold mb-4">123 Estatein Plaza, City Center, Metropolis</p>
                  <p className="text-muted-foreground mb-6">
                    Welcome to our main headquarters in the bustling heart of Metropolis. This is where our core team comes together to drive innovation and excellence in the real estate industry. If you're looking to meet with us, here's a quick guide to our main office facilities.
                  </p>
                  <div className="flex gap-2 mb-6">
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-sm">info@estatein.com</div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-sm">+1 (123) 456-7890</div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-sm">Metropolis</div>
                  </div>
                  <Button variant="hero" className="w-full">Get Direction</Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Regional Offices</h3>
                  <p className="text-2xl font-semibold mb-4">456 Urban Avenue, Downtown District, Metropolis</p>
                  <p className="text-muted-foreground mb-6">
                    Estatein's presence extends to multiple regions, each with a dedicated office to better serve our diverse clientele. Whether you're an international client or located in a different part of the country, we have regional offices equipped to cater to your real estate needs with the same level of professionalism.
                  </p>
                  <div className="flex gap-2 mb-6">
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-sm">info@estatein.com</div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-sm">+1 (123) 456-7890</div>
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-sm">Metropolis</div>
                  </div>
                  <Button variant="hero" className="w-full">Get Direction</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          
        </div>
      </div>
      
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

export default Contact;
