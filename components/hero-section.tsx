"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Particle animation
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const colors = ['#9333ea', '#06b6d4', '#ffffff'];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function animate() {
      if (!ctx) return; // Ensure ctx is not null
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
    
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
    
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas id="particle-canvas" className="absolute inset-0 z-0"></canvas>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
      
      <motion.div 
        className="container mx-auto px-4 z-20 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex"
        >
          <Badge variant="outline" className="px-4 py-2 text-lg border-purple-500 bg-background/50 backdrop-blur-sm">
            <Calendar className="mr-2 h-4 w-4" /> June 15-17, 2025
          </Badge>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          HackNova <span className="text-foreground">2025</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Ignite your creativity, code the future, and launch your ideas into the cosmos.
          Join 500+ innovators for 48 hours of hacking, learning, and building.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8"
            onClick={() => {
              toast.success("Registration opening soon!");
              window.open('https://forms.gle/example', '_blank');
            }}
          >
            <Rocket className="mr-2 h-5 w-5" /> Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-500 text-foreground hover:bg-purple-500/10"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Learn More
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <MapPin className="h-5 w-5 text-purple-500" />
          <span className="text-foreground/80">Tech University Campus, Innovation Hall</span>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.4,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <Button 
          variant="ghost" 
          size="sm"
          className="text-foreground/60 hover:text-foreground"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            Scroll Down
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
}