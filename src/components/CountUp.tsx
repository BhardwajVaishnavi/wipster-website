import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1.5,
  delay = 0,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ',',
  className,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);

      let startTime: number;
      let animationFrame: number;

      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressPercent = Math.min(progress / (duration * 1000), 1);

        // Easing function (easeOutExpo)
        const easeProgress = progressPercent === 1
          ? 1
          : 1 - Math.pow(2, -10 * progressPercent);

        setCount(Math.floor(easeProgress * end));

        if (progressPercent < 1) {
          animationFrame = requestAnimationFrame(startAnimation);
        } else {
          setCount(end);
        }
      };

      const timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(startAnimation);
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [isInView, hasAnimated, end, duration, delay]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
};

export default CountUp;
