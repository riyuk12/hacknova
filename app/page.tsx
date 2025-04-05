"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Rocket,
  Trophy,
  Users,
  Calendar,
  Sparkles,
  ChevronDown,
  ExternalLink,
  Github,
  Code,
  Zap,
  Award,
  Gift,
  HelpCircle,
  Star,
  Heart,
  Cpu,
  Database,
  Globe,
  Cloud,
  Smartphone,
  Lightbulb,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PartnersSection } from '@/components/partners-section';
import { TimelineSection } from '@/components/timeline-section';
import { PrizesSection } from '@/components/prizes-section';
import { FAQSection } from '@/components/faq-section';
import { HeroSection } from '@/components/hero-section';
import { WhyJoinSection } from '@/components/why-join-section';
import CoreTeamPage from '@/components/team';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Why Join Section */}
      <WhyJoinSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Prizes Section */}
      <PrizesSection />

      {/* team section */}
      <CoreTeamPage />
      {/* FAQ Section */}
      <FAQSection />
      
      <Footer />
    </main>
  );
}