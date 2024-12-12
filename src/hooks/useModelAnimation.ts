import { useEffect, useState } from 'react';

interface UseModelAnimationProps {
  animationDuration?: number; // Duration in milliseconds
  delay?: number; // Delay before showing popup in milliseconds
}

export const useModelAnimation = ({
  animationDuration = 5000, // Default 5 seconds
  delay = 1000 // Default 1 second
}: UseModelAnimationProps = {}) => {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThankYou(true);
    }, animationDuration + delay);

    return () => clearTimeout(timer);
  }, [animationDuration, delay]);

  return {
    showThankYou,
    closeThankYou: () => setShowThankYou(false)
  };
};