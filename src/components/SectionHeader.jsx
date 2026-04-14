import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, description, align = 'center' }) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent-blue font-bold tracking-widest uppercase text-sm"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 leading-tight text-primary-dark"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed font-medium"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
