"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Rocket, Github, Twitter, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border/50 pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-900/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <motion.div 
              className="flex items-center gap-2 text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="h-7 w-7 text-primary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                HackNova
              </span>
            </motion.div>
            <p className="text-foreground/70 mb-4">
              Ignite your creativity, code the future, and launch your ideas into the cosmos.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Partners', 'Timeline', 'Prizes', 'FAQ'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-foreground/70 hover:text-purple-500"
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Code of Conduct', 'Rules', 'Judging Criteria', 'Sponsor Guide', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-foreground/70 hover:text-purple-500"
                    onClick={() => {}}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4 text-purple-500" />
                <a href="mailto:info@hacknova.example.com" className="hover:text-purple-500">
                  info@hacknova.example.com
                </a>
              </li>
              <li className="text-foreground/70">
                Tech University Campus,<br />
                Innovation Hall,<br />
                123 Hacker Way,<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-border/30 my-6" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} HackNova. All rights reserved.
          </p>
          
          <p className="text-foreground/60 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by the HackNova Team
          </p>
        </div>
      </div>
    </footer>
  );
}