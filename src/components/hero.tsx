"use client";

import React from 'react';
import { motion } from "motion/react";
interface HeroProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Discover Movies for",
  titleHighlight = "Developers",
  subtitle = "Curated films that inspire coding, innovation, and technological curiosity",
}) => {
  return (
    <div className="w-full py-20 px-4 flex flex-col items-center justify-center text-center bg-[#0D1117] text-white">
      <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }} 
      className="text-4xl md:text-6xl font-medium mb-4">
        {title}{' '}
        <span className="text-[#3B82F6]">{titleHighlight}</span>
      </motion.h1>
      
      <motion.p 
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      viewport={{ once: true }}className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
        {subtitle}
      </motion.p>
    </div>
  );
};

export default Hero;