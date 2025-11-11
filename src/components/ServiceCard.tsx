import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
      }}
      transition={{ duration: 0.3 }}
      className="relative group"
      data-testid={`service-card-${index}`}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"
      />
      
      <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full">
        {/* Icon with animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-4"
        >
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
            <Icon size={28} className="text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="text-xl font-bold text-white mb-3"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="text-gray-400 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Hover arrow indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;