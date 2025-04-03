"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Gift, Zap, Star, Cpu, Database, Globe, Cloud, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function PrizesSection() {
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

  const mainPrizes = [
    {
      icon: <Trophy className="h-12 w-12 text-amber-500" />,
      title: "Grand Prize",
      value: "₹15,000",
      description: "For the most innovative and impactful overall project",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Award className="h-12 w-12 text-gray-300" />,
      title: "Runner Up",
      value: "₹10,000",
      description: "For the second-place team with exceptional execution",
      color: "from-gray-400 to-gray-300"
    },
    {
      icon: <Gift className="h-12 w-12 text-amber-700" />,
      title: "Third Place",
      value: "₹5,000",
      description: "For the third-place team showing great potential",
      color: "from-amber-700 to-amber-600"
    },
  ];

  

  return (
    <section id="prizes" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
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
            What You Can <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Win</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Over ₹50,000 in prizes, and perks await the most innovative teams.
          </p>
        </motion.div>
        
        {/* Main Prizes */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {mainPrizes.map((prize, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 relative mt-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${prize.color} rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-300`}></div>
                    <div className="relative">{prize.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{prize.title}</h3>
                  <div className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${prize.color}`}>
                    {prize.value}
                  </div>
                  <p className="text-foreground/70 group-hover:text-foreground/90 transition-colors">{prize.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        
        
        {/* Additional Prizes
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/50"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500" /> Additional Perks & Opportunities
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-2">
              <div className="mt-1 text-purple-500">
                <Gift className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold">Cloud Credits:</span> $10,000 in cloud credits for all winning teams
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-purple-500">
                <Gift className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold">Incubator Access:</span> Top 3 teams get 3 months of incubator space
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-purple-500">
                <Gift className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold">Mentorship:</span> 6 months of mentorship from industry leaders
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-purple-500">
                <Gift className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold">Hardware:</span> Latest tech gadgets and development kits
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-purple-500">
                <Gift className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold">Investor Meetings:</span> Pitch opportunities with VC firms
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-purple-500">
                <Gift className="h-4 w-4" />
              </div>
              <div>
                <span className="font-semibold">Job Opportunities:</span> Fast-track interviews with sponsor companies
              </div>
            </li>
          </ul>
        </motion.div> */}
      </div>
    </section>
  );
}