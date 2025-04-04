"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const platinumPartners = [
    { name: "Sunstone", logo: "https://media.discordapp.net/attachments/1293272278250815508/1357598147341320262/Sunstone_BLUE_2_page-0001.jpg?ex=67f0c94d&is=67ef77cd&hm=bb560eeb5e552bd238ba97e26569dec76cf9b346270d8ab54317e8a7f8209e7e&=&format=webp&width=3238&height=422 " },
  ];

  const goldPartners = [
    { name: "Merelyn Studio", logo: "https://media.discordapp.net/attachments/1293272278250815508/1357598685353218068/1.png?ex=67f0c9cd&is=67ef784d&hm=5a55b10292c687615aa25f0328940f4be41d22307937cd591288c19bb71b9dcb&=&format=webp&quality=lossless&width=1000&height=1000 " },
  ];


  return (
    <section id="partners" className="py-20 bg-background/80 relative overflow-hidden">
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
            Our Amazing <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Partners</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Nexify is made possible by the generous support of our industry-leading partners.
          </p>
        </motion.div>
        
        <div ref={ref} className="space-y-16">
          {/* Platinum Partners */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-center"
            >
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full">
                Education Partners
              </span>
            </motion.h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="flex flex-wrap justify-center gap-8"
            >
              {platinumPartners.map((partner, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border/50 flex items-center justify-center"
                  style={{ width: 280, height: 140 }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Gold Partners */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-center"
            >
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full">
                Sponsoring Partners
              </span>
            </motion.h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="flex flex-wrap justify-center gap-6"
            >
              {goldPartners.map((partner, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/50 flex items-center justify-center"
                  style={{ width: 220, height: 110 }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button 
            variant="outline" 
            className="border-purple-500 text-foreground hover:bg-purple-500/10"
            onClick={() => window.open('mailto:partners@Nexify.example.com', '_blank')}
          >
            Become a Partner <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}