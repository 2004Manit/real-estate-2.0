import { useState } from "react";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import { Home, Send,  Twitter, Youtube,Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  
  // Form state for List your PG/Flat
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyName: "",
    propertyType: "",
    pricing: "",
    location: "",
    message: "",
    agreedToTerms: false,
  });

  // Dark theme colors (permanent)
  const sectionBg = "#121212";
  const containerBg = "#1A1A1A";
  const inputBg = "#2C2C2C";
  const textColor = "#FFFFFF";
  const labelColor = "#FFFFFF";
  const placeholderColor = "#A0A0A0";
  const borderColor = "transparent";

  const properties = [
    {
      id: "1",
      image: property1,
      title: "Seaside Serenity Villa",
      description: "A stunning beachfront villa with modern amenities and breathtaking ocean views. Perfect for those seeking luxury coastal living.",
      price: 1250000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      location: "Malibu, California",
      type: "villa",
    },
    {
      id: "2",
      image: property2,
      title: "Metropolitan Haven",
      description: "Contemporary urban apartment in the heart of the city with skyline views and premium finishes throughout.",
      price: 650000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      location: "Downtown, New York",
      type: "apartment",
    },
    {
      id: "3",
      image: property3,
      title: "Rustic Retreat Cottage",
      description: "Luxurious penthouse with stunning cityscape and premium amenities. The epitome of urban sophistication.",
      price: 850000,
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      location: "Los Angeles, California",
      type: "penthouse",
    },
    {
      id: "4",
      image: property1,
      title: "Garden Oasis Estate",
      description: "Sprawling estate with lush gardens, pool, and multiple entertainment areas. Your private paradise.",
      price: 2100000,
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      location: "Beverly Hills, California",
      type: "villa",
    },
    {
      id: "5",
      image: property2,
      title: "Urban Loft Living",
      description: "Modern loft with industrial charm, exposed brick, and soaring ceilings in a vibrant neighborhood.",
      price: 520000,
      bedrooms: 2,
      bathrooms: 1,
      area: 1100,
      location: "Brooklyn, New York",
      type: "apartment",
    },
    {
      id: "6",
      image: property3,
      title: "Skyline Penthouse",
      description: "Exclusive penthouse offering panoramic city views, private terrace, and world-class amenities.",
      price: 3500000,
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      location: "Manhattan, New York",
      type: "penthouse",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBuilding} 
            alt="Properties" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Dream Property
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl animate-fade-in stagger-1">
              Welcome to Estatein, where your property search is easy and fun. Explore our curated selection of properties, each offering a unique story.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-20">
        <div className="container mx-auto px-4">

          {/* Filters */}
          <div className="bg-gradient-card border border-border rounded-2xl p-6 mb-12 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
              </div>
              
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-500000">$0 - $500k</SelectItem>
                  <SelectItem value="500000-1000000">$500k - $1M</SelectItem>
                  <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
                  <SelectItem value="2000000+">$2M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button variant="hero">Apply Filters</Button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="hero" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>

      {/* List your PG / Flat Section */}
      <section className="py-20" style={{ backgroundColor: sectionBg, transition: "background-color 0.3s ease" }}>
        <style>{`
          .pg-form-input::placeholder {
            color: ${placeholderColor} !important;
          }
          .pg-form-textarea::placeholder {
            color: ${placeholderColor} !important;
          }
          .pg-form-select [data-placeholder] {
            color: ${placeholderColor} !important;
          }
        `}</style>
        <div className="container mx-auto px-4">
          <div 
            className="rounded-lg p-8 md:p-12 max-w-6xl mx-auto border transition-colors"
            style={{ 
              backgroundColor: containerBg,
              borderRadius: "8px",
              borderColor: "rgba(255,255,255,0.1)"
            }}
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl font-semibold mb-4 transition-colors" style={{ color: textColor, fontSize: "36px", fontWeight: 600 }}>
                List your PG / Flat
              </h2>
              <p className="text-base transition-colors" style={{ color: placeholderColor, fontSize: "16px" }}>
                Do you own a PG or a Flat? Join our platform and reach thousands of students looking for accommodation near Delhi Technological University.
              </p>
            </div>

            {/* Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
                console.log(formData);
              }}
              className="space-y-6"
            >
              {/* Personal Information - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="h-12 px-4 pg-form-input"
                    style={{
                      backgroundColor: inputBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: "8px",
                      color: textColor,
                      fontSize: "16px",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="h-12 px-4 pg-form-input"
                    style={{
                      backgroundColor: inputBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: "8px",
                      color: textColor,
                      fontSize: "16px",
                    }}
                  />
                </div>
              </div>

              {/* Contact Information - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 px-4 pg-form-input"
                    style={{
                      backgroundColor: inputBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: "8px",
                      color: textColor,
                      fontSize: "16px",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 px-4 pg-form-input"
                    style={{
                      backgroundColor: inputBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: "8px",
                      color: textColor,
                      fontSize: "16px",
                    }}
                  />
                </div>
              </div>

              {/* Property Details - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    Property Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter Property Name"
                    value={formData.propertyName}
                    onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                    className="h-12 px-4 pg-form-input"
                    style={{
                      backgroundColor: inputBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: "8px",
                      color: textColor,
                      fontSize: "16px",
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    Property Type
                  </label>
                  <Select value={formData.propertyType || undefined} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                    <SelectTrigger 
                      className="h-12 px-4 pg-form-select"
                      style={{
                        backgroundColor: inputBg,
                        border: `1px solid ${borderColor}`,
                        borderRadius: "8px",
                        color: formData.propertyType ? textColor : placeholderColor,
                        fontSize: "16px",
                      }}
                    >
                      <SelectValue placeholder="Select Property Type" />
                    </SelectTrigger>
                    <SelectContent className="pg-form-select" style={{ backgroundColor: containerBg, border: `1px solid ${borderColor}`, borderRadius: "8px" }}>
                      <SelectItem value="pg" style={{ color: textColor }}>PG</SelectItem>
                      <SelectItem value="flat" style={{ color: textColor }}>Flat</SelectItem>
                      <SelectItem value="apartment" style={{ color: textColor }}>Apartment</SelectItem>
                      <SelectItem value="house" style={{ color: textColor }}>House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Pricing and Location - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    Pricing
                  </label>
                  <Select value={formData.pricing || undefined} onValueChange={(value) => setFormData({ ...formData, pricing: value })}>
                    <SelectTrigger 
                      className="h-12 px-4 pg-form-select"
                      style={{
                        backgroundColor: inputBg,
                        border: `1px solid ${borderColor}`,
                        borderRadius: "8px",
                        color: formData.pricing ? textColor : placeholderColor,
                        fontSize: "16px",
                      }}
                    >
                      <SelectValue placeholder="Select Budget" />
                    </SelectTrigger>
                    <SelectContent className="pg-form-select" style={{ backgroundColor: containerBg, border: `1px solid ${borderColor}`, borderRadius: "8px" }}>
                      <SelectItem value="5k-10k" style={{ color: textColor }}>₹5,000 - ₹10,000</SelectItem>
                      <SelectItem value="10k-15k" style={{ color: textColor }}>₹10,000 - ₹15,000</SelectItem>
                      <SelectItem value="15k-20k" style={{ color: textColor }}>₹15,000 - ₹20,000</SelectItem>
                      <SelectItem value="20k-25k" style={{ color: textColor }}>₹20,000 - ₹25,000</SelectItem>
                      <SelectItem value="25k+" style={{ color: textColor }}>₹25,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                    Location
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter location of your Property"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="h-12 px-4 pg-form-input"
                    style={{
                      backgroundColor: inputBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: "8px",
                      color: textColor,
                      fontSize: "16px",
                    }}
                  />
                </div>
              </div>

              {/* Message - Full Width */}
              <div className="space-y-2">
                <label className="text-base font-medium block" style={{ color: labelColor, fontSize: "16px", fontWeight: 500 }}>
                  Message
                </label>
                <Textarea
                  placeholder="Tell us more about your property..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-4 py-3 min-h-[120px] resize-y pg-form-textarea"
                  style={{
                    backgroundColor: inputBg,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "8px",
                    color: textColor,
                    fontSize: "16px",
                  }}
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked === true })}
                  style={{
                    borderColor: "#2C2C2C",
                    backgroundColor: formData.agreedToTerms ? "#6A1B9A" : "#2C2C2C",
                  }}
                />
                <label
                  htmlFor="terms"
                  className="text-sm cursor-pointer"
                  style={{ color: placeholderColor, fontSize: "16px" }}
                >
                  I agree with{" "}
                  <a href="#" className="underline hover:opacity-80 transition-opacity" style={{ color: placeholderColor }}>
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:opacity-80 transition-opacity" style={{ color: placeholderColor }}>
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button - Right Aligned */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="px-6 py-3 text-base font-medium rounded-lg transition-opacity"
                  style={{
                    backgroundColor: "#6A1B9A",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: 500,
                    padding: "12px 25px",
                    opacity: formData.agreedToTerms ? 1 : 0.5,
                    cursor: formData.agreedToTerms ? "pointer" : "not-allowed",
                  }}
                  disabled={!formData.agreedToTerms}
                >
                  Send Your Message
                </Button>
              </div>
            </form>
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

export default Properties;
