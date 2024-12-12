import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { thankYouAnimations } from '../config/animations';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-custom flex items-center justify-center p-4">
      <motion.div
        {...thankYouAnimations.container}
        className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
      >
        <motion.div
          {...thankYouAnimations.icon}
          className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <Heart className="w-12 h-12 text-primary" />
        </motion.div>

        <motion.h1
          {...thankYouAnimations.title}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          {...thankYouAnimations.text}
          className="text-gray-600 mb-8"
        >
          We hope you enjoyed exploring our AR experience. Your engagement helps us create better immersive experiences.
        </motion.p>

        <motion.div
          {...thankYouAnimations.button}
          className="space-y-4"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full"
          >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;