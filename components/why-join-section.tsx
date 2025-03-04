"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Users, 
  Lightbulb, 
  Rocket, 
  Trophy, 
  Zap,
  Cpu,
  Globe,
  Heart
} from 'lucide-react';

export function WhyJoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const features = [
    {
      icon: <Code className="h-10 w-10 text-purple-500" />,
      title: "Learn New Technologies",
      description: "Dive into cutting-edge tech stacks and expand your coding skills with expert mentors and workshops."
    },
    {
      icon: <Users className="h-10 w-10 text-cyan-500" />,
      title: "Network with Peers",
      description: "Connect with like-minded innovators, industry professionals, and potential future collaborators."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
      title: "Bring Ideas to Life",
      description: "Transform your concepts into working prototypes with the support of our resources and mentors."
    },
    {
      icon: <Trophy className="h-10 w-10 text-amber-500" />,
      title: "Win Amazing Prizes",
      description: "Compete for over $50,000 in prizes, including cash awards, tech gadgets, and startup opportunities."
    },
    {
      icon: <Cpu className="h-10 w-10 text-emerald-500" />,
      title: "Access to Resources",
      description: "Get exclusive access to APIs, cloud credits, hardware, and tools from our sponsors."
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "Build Lasting Friendships",
      description: "Form bonds that extend beyond the hackathon as you collaborate, problem-solve, and celebrate together."
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Global Community",
      description: "Join participants from over 50 countries in a diverse, inclusive environment of innovation."
    },
    {
      icon: <Zap className="h-10 w-10 text-orange-500" />,
      title: "Boost Your Career",
      description: "Enhance your portfolio, gain real-world experience, and connect with potential employers."
    },
    {
      icon: <Rocket className="h-10 w-10 text-indigo-500" />,
      title: "Launch Your Startup",
      description: "Many successful startups began as hackathon projects. Yours could be next!"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-900/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">HackNova</span>?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            More than just a hackathon, HackNova is a launchpad for innovation, collaboration, and personal growth.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="relative">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <p className="text-lg text-foreground/80">
              <span className="font-bold text-primary">500+</span> Hackers • 
              <span className="font-bold text-primary ml-2">48</span> Hours • 
              <span className="font-bold text-primary ml-2">$50K+</span> in Prizes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}