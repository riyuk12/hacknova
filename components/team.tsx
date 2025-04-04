"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function TeamPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1 }, // Keep visible in case animation fails
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const teams = [
    {
      name: "Core Team",
      members: [
        {
          name: "Pratham Gupta",
          role: "Club President",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
          bio: "Former Google engineer with 10+ years of experience in AI and machine learning.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Aditya Minz",
          role: "Vice President",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
          bio: "Tech enthusiast and full-stack developer with a passion for scalable architecture.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rishav Gupta",
          role: "Head of Finance",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop",
          bio: "Award-winning designer with expertise in user experience and interface design.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rajat Bose",
          role: "Head of Operations",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop",
          bio: "Full-stack developer specializing in React and Node.js ecosystems.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        }
      ]
    },
    {
      name: "Social Team",
      members: [
        {
          name: "Pratham Gupta",
          role: "Club President",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
          bio: "Former Google engineer with 10+ years of experience in AI and machine learning.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Aditya Minz",
          role: "Vice President",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
          bio: "Tech enthusiast and full-stack developer with a passion for scalable architecture.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rishav Gupta",
          role: "Head of Finance",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop",
          bio: "Award-winning designer with expertise in user experience and interface design.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rajat Bose",
          role: "Head of Operations",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop",
          bio: "Full-stack developer specializing in React and Node.js ecosystems.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        }
        
      ]
    },
    {
      name: "Multimedia Team",
      members: [
        {
          name: "Pratham Gupta",
          role: "Club President",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
          bio: "Former Google engineer with 10+ years of experience in AI and machine learning.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Aditya Minz",
          role: "Vice President",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
          bio: "Tech enthusiast and full-stack developer with a passion for scalable architecture.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rishav Gupta",
          role: "Head of Finance",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop",
          bio: "Award-winning designer with expertise in user experience and interface design.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rajat Bose",
          role: "Head of Operations",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop",
          bio: "Full-stack developer specializing in React and Node.js ecosystems.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        }
        
      ]
    },
    {
      name: "Public Relations Team",
      members: [
        {
          name: "Pratham Gupta",
          role: "Club President",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
          bio: "Former Google engineer with 10+ years of experience in AI and machine learning.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Aditya Minz",
          role: "Vice President",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
          bio: "Tech enthusiast and full-stack developer with a passion for scalable architecture.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rishav Gupta",
          role: "Head of Finance",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop",
          bio: "Award-winning designer with expertise in user experience and interface design.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        },
        {
          name: "Rajat Bose",
          role: "Head of Operations",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop",
          bio: "Full-stack developer specializing in React and Node.js ecosystems.",
          social: { twitter: "#", linkedin: "#", github: "#" }
        }
        
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Team</span>
            </h1>
          </motion.div>

          {teams.map((team, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">{team.name}</h2>
              <motion.div 
                ref={idx === 0 ? ref : null} // Attach ref to first team for inView detection
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {team.members.map((member, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="relative mb-6 aspect-square overflow-hidden rounded-xl">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-lg font-medium text-foreground/70 mb-3">{member.role}</p>
                        <p className="text-foreground/60 mb-4">{member.bio}</p>
                        <div className="flex gap-4">
                          <a href={member.social.twitter} className="text-foreground/60 hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                          </a>
                          <a href={member.social.linkedin} className="text-foreground/60 hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a href={member.social.github} className="text-foreground/60 hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
