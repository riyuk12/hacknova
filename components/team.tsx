"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";


export function TeamPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const subTeams = {
    name: "Sub Teams",
    teams: [
      {
        name: "Marketing & Outreach",
        members: [
          { name: "Vaishnavi Sharma" },
          { name: "Bhartesh Tyagi" },
          { name: "Mohit Pokhriyal" },
          { name: "Param Jaiswal" },
          { name: "Radhika Yadav" },
          { name: "Shourya Vats" }
        ],
        bio: "Tasked with putting Nexify'25 on the map, the Outreach & Marketing Team drives visibility through creative campaigns, strategic partnerships, and high-impact digital outreach. From student communities to industry circles, they ensure the excitement around Nexify spreads far and wide — fueling participation, engagement, and buzz every step of the way."
      },
      {
        name: "Creatives Team",
        members: [
          { name: "Akshit Mathur" },
          { name: "Kanishk Gaur" },
          { name: "Kyathika Rao" },
          { name: "Navneet Kumar" },
          { name: "Nisha Patwal" },
          { name: "Prachi Sharma" },
          { name: "Prashant Kumar" }
        ],
        bio: "The Creative Team shapes the visual soul of Nexify'25. From branding and design to digital content and event themes, they craft every visual detail to make the experience bold, immersive, and unforgettable. Their work doesn't just catch eyes — it captures the spirit of innovation."
      },
      {
        name: "Event Management Team",
        members: [
          { name: "Avni Sharma" },
          { name: "Chaitanya Kumar" },
          { name: "Jayana Batra" },
          { name: "Khush Kapoor" },
          { name: "Panav Singh" },
          { name: "Shivam Mehta" },
          { name: "Rupesh Rajput" }
        ],
        bio: "The backbone of Nexify'25, the Event Management Team handles everything from pre-event logistics to real-time coordination. Whether it's managing schedules, venues, or on-ground flow, they ensure the entire experience is smooth, structured, and memorable for every participant and guest."
      },
      {
        name: "Social Media Team",
        members: [
          { name: "Ayesha Gupta" },
          { name: "Drishika Aneja" },
          { name: "Kanisha Goyal" },
          { name: "Mitanshi Dalal" },
          { name: "Nitija Negi" },
          { name: "Swanti Kathpalia" },
          { name: "Vanshu Yadav" },
          { name: "Riya Sethi" }
        ],
        bio: "The voice of Nexify'25 in the digital world, the Social Media Team drives engagement across platforms with creative content, real-time updates, and community interaction. From countdowns to highlights, they keep the momentum alive and the audience connected — one post at a time."
      },
      {
        name: "Media Team",
        members: [
          { name: "Raghav Sharma" },
          { name: "Samanyu" },
          { name: "Soumay Garg" },
          { name: "Vikram Yadav" }
        ],
        bio: "The storytellers of Nexify'25, the Media Team captures every moment through the lens. From candid shots to cinematic recaps, they document the energy, emotion, and excitement of the event — turning memories into visuals that inspire and resonate far beyond the venue."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground" id="team">
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
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">Sub Teams</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated teams that bring Nexify'25 to life through their specialized skills and unwavering commitment.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid gap-8"
          >
            {subTeams.teams.map((team, idx) => (
              <motion.div key={idx} variants={item}>
                <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                          {team.name}
                        </h3>
                        <p className="text-foreground/80 mb-6 leading-relaxed">
                          {team.bio}
                        </p>
                      </div>
                      <div className="relative overflow-hidden rounded-xl bg-black/20 p-6">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/20 backdrop-blur-sm"></div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="relative z-10"
                        >
                          <h4 className="text-lg font-semibold mb-4 text-primary">Team Members</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {team.members.map((member, index) => (
                              <div
                                key={index}
                                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                              >
                                {member.name}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-12">
            <Link href="/">
              <Button
                variant="outline"
                className="border-purple-500 text-foreground hover:bg-purple-500/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



export default function CoreTeamPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const coreTeam = {
    name: "Core Team",
    members: [
      {
        name: "Pratham Gupta",
        role: "President",
        image: "/pratham.png",
        bio: "A curious mind and natural leader, driving the vision behind Zenith. They've transformed it into a thriving event community at Sushant University. With a strong belief in teamwork, innovation, and execution, they lead from the front — ensuring every event, including Nexify'25, is a standout experience.",
        social: { twitter: "#", linkedin: "https://www.linkedin.com/in/pratham4gupta/", github: "#" }
      },
      {
        name: "Aditya Minz",
        role: "Vice President",
        image: "/aditya.webp",
        bio: "A founding force behind Zenith, he blends calm leadership with sharp execution. As Vice President, he ensures every moving part — from planning to on-ground coordination — runs like clockwork. Known for his reliability and problem-solving mindset, he’s the steady hand behind the chaos of innovation.",
        social: { twitter: "#", linkedin: "https://www.linkedin.com/in/adityaminz/", github: "#" }
      },
      {
        name: "Rishav Gupta",
        role: "Performance & Finance",
        image: "/rishav.webp",
        bio: "With a sharp mind for both numbers and strategy, they bridge the gap between execution and efficiency. From managing budgets to tracking team performance, they ensure everything stays on target. Equally at home with code and coordination, they bring structure, insight, and energy to every aspect of Zenith.",
        social: { twitter: "#", linkedin: "https://www.linkedin.com/in/rishavgupta14/", github: "#" }
      },
      {
        name: "Rajat Bose",
        role: "Head of Operations",
        image: "/rajat.webp",
        bio: "A skilled full-stack developer who thrives on structure and speed. As Head of Operations, they ensure every part of the event — from logistics to live execution — runs seamlessly. Tech-savvy, solution-oriented, and always ahead of the curve, they keep the gears of Zenith turning smoothly.",
        social: { twitter: "#", linkedin: "https://www.linkedin.com/in/rajat-bose-9b73561b7/", github: "#" }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground" id="team">
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">{coreTeam.name}</h2>
            <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {coreTeam.members.map((member, index) => (
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

                        <a href={member.social.linkedin} target="_blank" className="text-foreground/60 hover:text-primary transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-8">
              <Link href={"/team"}>
                <Button
                  variant="outline"
                  className="border-purple-500 text-foreground hover:bg-purple-500/10"
                >
                  Our Team <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

