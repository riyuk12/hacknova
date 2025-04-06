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
import { TeamPage } from '@/components/team';

export default function Home({children}: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}