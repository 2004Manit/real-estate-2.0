import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export const AnimatedSearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPropertyTypeFocused, setIsPropertyTypeFocused] = useState(false);
  const [isPriceRangeFocused, setIsPriceRangeFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [propertyType, setPropertyType] = useState('all-types');
  const [priceRange, setPriceRange] = useState('all-prices');

  // Animated Border Component for Dropdowns
  const AnimatedBorder = ({ isFocused }) => (
    <>
      {/* Animated Border - Top */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-lg"
        initial={{ width: 0, opacity: 0 }}
        animate={isFocused ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ zIndex: 10 }}
      />

      {/* Animated Border - Right */}
      <motion.div
        className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-r-lg"
        initial={{ height: 0, opacity: 0 }}
        animate={isFocused ? { height: '100%', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.15 }}
        style={{ zIndex: 10 }}
      />

      {/* Animated Border - Bottom */}
      <motion.div
        className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-transparent via-cyan-400 to-transparent rounded-b-lg"
        initial={{ width: 0, opacity: 0 }}
        animate={isFocused ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
        style={{ zIndex: 10 }}
      />

      {/* Animated Border - Left */}
      <motion.div
        className="absolute bottom-0 left-0 w-[2px] bg-gradient-to-t from-transparent via-cyan-400 to-transparent rounded-l-lg"
        initial={{ height: 0, opacity: 0 }}
        animate={isFocused ? { height: '100%', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.45 }}
        style={{ zIndex: 10 }}
      />

      {/* Breathing Glow Effect */}
      {isFocused && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
            zIndex: 9,
          }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
              '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
              '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative max-w-5xl mx-auto"
    >
      {/* Search container */}
      <motion.div
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Animated Border - Top */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-t-2xl"
          initial={{ width: 0, opacity: 0 }}
          animate={isFocused ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ zIndex: 10 }}
        />

        {/* Animated Border - Right */}
        <motion.div
          className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-r-2xl"
          initial={{ height: 0, opacity: 0 }}
          animate={isFocused ? { height: '100%', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.15 }}
          style={{ zIndex: 10 }}
        />

        {/* Animated Border - Bottom */}
        <motion.div
          className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-transparent via-cyan-400 to-transparent rounded-b-2xl"
          initial={{ width: 0, opacity: 0 }}
          animate={isFocused ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
          style={{ zIndex: 10 }}
        />

        {/* Animated Border - Left */}
        <motion.div
          className="absolute bottom-0 left-0 w-[2px] bg-gradient-to-t from-transparent via-cyan-400 to-transparent rounded-l-2xl"
          initial={{ height: 0, opacity: 0 }}
          animate={isFocused ? { height: '100%', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.45 }}
          style={{ zIndex: 10 }}
        />

        {/* Breathing Glow Effect */}
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
              zIndex: 9,
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                '0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2)',
                '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}

        {/* Glow effect when focused */}
        <motion.div
          animate={{
            opacity: isFocused ? 1 : 0,
            scale: isFocused ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-lg"
          style={{ zIndex: -1 }}
        />

        {/* Main search input */}
        <div className="relative glass-effect rounded-2xl overflow-hidden">
          <div className="flex items-center px-6 py-4 gap-4">
            {/* Search icon */}
            <motion.div
              animate={{
                rotate: isFocused ? 360 : 0,
                scale: isFocused ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground flex-shrink-0"
            >
              <Search className="w-6 h-6" />
            </motion.div>

            {/* Input field */}
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search for modern spaces..."
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-2 text-base font-light"
            />

            {/* Vertical divider */}
            <div className="h-8 w-px bg-border flex-shrink-0" />

            {/* Property Type Dropdown */}
            <div className="relative">
              <Select value={propertyType} onValueChange={setPropertyType} onOpenChange={setIsPropertyTypeFocused}>
                <SelectTrigger 
                  className="w-[160px] border-none bg-transparent text-foreground hover:bg-foreground/5 transition-colors relative"
                  onFocus={() => setIsPropertyTypeFocused(true)}
                  onBlur={() => setIsPropertyTypeFocused(false)}
                >
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                  <SelectItem value="luxury">Luxury Estates</SelectItem>
                </SelectContent>
              </Select>
              <AnimatedBorder isFocused={isPropertyTypeFocused} />
            </div>

            {/* Vertical divider */}
            <div className="h-8 w-px bg-border flex-shrink-0" />

            {/* Price Range Dropdown */}
            <div className="relative">
              <Select value={priceRange} onValueChange={setPriceRange} onOpenChange={setIsPriceRangeFocused}>
                <SelectTrigger 
                  className="w-[160px] border-none bg-transparent text-foreground hover:bg-foreground/5 transition-colors relative"
                  onFocus={() => setIsPriceRangeFocused(true)}
                  onBlur={() => setIsPriceRangeFocused(false)}
                >
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all-prices">All Prices</SelectItem>
                  <SelectItem value="under-500k">Under $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="above-2m">Above $2M</SelectItem>
                </SelectContent>
              </Select>
              <AnimatedBorder isFocused={isPriceRangeFocused} />
            </div>

            {/* Vertical divider */}
            <div className="h-8 w-px bg-border flex-shrink-0" />

            {/* Animated search button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-primary-foreground px-8 py-2.5 rounded-xl font-medium shadow-elegant hover:shadow-glow transition-shadow duration-300 flex-shrink-0"
            >
              Search
            </motion.button>
          </div>

          {/* Animated border bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isFocused ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left"
          />
        </div>
      </motion.div>

      {/* Floating particles around search bar */}
      {isFocused && (
        <>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default AnimatedSearchBar;