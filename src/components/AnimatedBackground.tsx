import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

// Particle class for the animation
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;

    // Create a gradient of tech-themed colors matching our theme
    const colors = ['#FF6FB5', '#4ECDC4', '#F7B733', '#FC4445'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    // Update position
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x > this.width || this.x < 0) {
      this.speedX = -this.speedX;
    }

    if (this.y > this.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recreate particles when resizing
      initParticles(ctx, canvas.width, canvas.height);
    };

    // Initialize particles
    const initParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.floor((width * height) / 10000), 150);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(ctx, width, height));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles
      drawConnections(ctx);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Draw connections between nearby particles
    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 150;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance);

            ctx.beginPath();
            ctx.strokeStyle = `rgba(78, 205, 196, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Set up canvas and start animation
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <>
      <BackgroundContainer>
        <ParticleCanvas ref={canvasRef} />
      </BackgroundContainer>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default AnimatedBackground;
