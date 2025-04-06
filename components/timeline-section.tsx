"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Coffee, Code, Lightbulb, Rocket, Trophy, Users, Utensils ,Mic,Award} from 'lucide-react';

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const timelineEvents = [
    {
      day: "Day 1 - Wednesday, April 16",
      events: [
        { time: "9:00 AM", title: "Registrations & Check-in", icon: <Users className="h-5 w-5" />, description: "Arrive at Innovation Hall, collect your welcome pack and swag" },
        { time: "11:00 AM", title: "Speaker Session", icon: <Mic className="h-5 w-5" />, description: "Listen to industry experts share insights and experiences" },
        { time: "12:30 PM", title: "Hackathon Begins", icon: <Code className="h-5 w-5" />, description: "Start working on your projects and bring ideas to life" },
        { time: "2:00 PM", title: "Lunch Break", icon: <Utensils className="h-5 w-5" />, description: "Enjoy a delicious meal to recharge" },
        { time: "5:00 PM", title: "Evening Snacks", icon: <Coffee className="h-5 w-5" />, description: "Grab some light snacks and refreshments" },
        { time: "8:00 PM", title: "Dinner", icon: <Utensils className="h-5 w-5" />, description: "Savor a hearty meal to keep going" },
        { time: "Night", title: "Tea/Coffee Breaks", icon: <Coffee className="h-5 w-5" />, description: "Stay energized with warm beverages throughout the night" },
      ]
    },
    {
      day: "Day 2 - Thursday, April 17",
      events: [
        { time: "7:00 AM", title: "Breakfast", icon: <Utensils className="h-5 w-5" />, description: "Start your day with a hearty breakfast" },
        { time: "1:00 PM", title: "Snacks", icon: <Coffee className="h-5 w-5" />, description: "Quick energy boost to keep you going" },
        { time: "3:00 PM - 6:00 PM", title: "Final Judging & Closing Ceremony", icon: <Award className="h-5 w-5" />, description: "Present your projects, witness the judging, and celebrate the winners" },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="timeline" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
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
            Event <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Timeline</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Unfold the journey of ideas to impact—Nexify Schedule.
          </p>
        </motion.div>
        
        <div ref={ref} className="space-y-12">
          {timelineEvents.map((daySchedule, dayIndex) => (
            <div key={dayIndex} className="relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
                className="mb-6"
              >
                <Badge variant="outline" className="px-4 py-2 text-lg border-purple-500 bg-card/30 backdrop-blur-sm">
                  <Calendar className="mr-2 h-5 w-5 text-purple-500" /> {daySchedule.day}
                </Badge>
              </motion.div>
              
              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="relative border-l-2 border-purple-500/50 pl-8 ml-4"
              >
                {daySchedule.events.map((event, eventIndex) => (
                  <motion.div 
                    key={eventIndex} 
                    variants={item}
                    className="mb-8 relative"
                  >
                    <div className="absolute -left-[42px] top-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-background rounded-full"></div>
                    </div>
                    
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 overflow-hidden group">
                      <CardContent className="p-5">
                        <div className="flex flex-col md:flex-row md:items-center gap-3">
                          <Badge variant="secondary" className="w-fit text-sm px-3 py-1 bg-purple-500/10 text-purple-400 border-purple-500/30">
                            {event.time}
                          </Badge>
                          
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                            <span className="text-purple-500">{event.icon}</span>
                            {event.title}
                          </h3>
                          
                          <p className="text-foreground/70 md:ml-auto">{event.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <p className="text-lg text-foreground/80">
              <span className="font-bold text-primary">Note:</span> Schedule is subject to minor changes. You will be notified in prior in case of any changes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}