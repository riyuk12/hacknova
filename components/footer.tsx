"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Rocket,Instagram, Linkedin, Mail, Heart } from 'lucide-react';

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
                Nexify
              </span>
            </motion.div>
            <p className="text-foreground/70 mb-4">
              Ignite your creativity, code the future, and launch your ideas into the cosmos.
            </p>
            <div className="flex gap-3">
              
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
              <a href="https://www.instagram.com/su_zenith/" target='blank' rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10 hover:text-purple-500">
                <a href="https://www.linkedin.com/company/zenithofsu/" target='blank' rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
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
          
          {/* resources add */}
          {/* <div>
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
          </div> */}
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4 text-purple-500" />
                <a href="mailto:zenithsushant.events@gmail.com" className="hover:text-purple-500">
                zenithsushant.events@gmail.com
                </a>
              </li>
              <li className="text-foreground/70">
                Sushant University,Gurugram,<br />
                School of Engineering and Technology<br />
              </li>
              <li className="text-foreground/70">
              <div className="max-width:100%;overflow:hidden;color:red;width:300px;height:100px;"><div id="gmap-canvas" className="height:100%; width:100%;max-width:100%;"><iframe className="height:100%;width:100%;border:0;" src="https://www.google.com/maps/embed/v1/place?q=sushant+university+,+gurugram&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="google-map-html" href="https://www.bootstrapskins.com/themes" id="grab-map-data"></a></div>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-border/30 my-6" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} Nexify. All rights reserved.
          </p>
          
          <p className="text-foreground/60 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by the Zenith Club
          </p>
        </div>
      </div>
    </footer>
  );
}