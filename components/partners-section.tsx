"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import React from "react";

export function PartnersSection() {
  const platinumPartners = [
    {
      name: "Suhant University",
      logo: "/su.png",
    },
    {
      name: "Sunstone",
      logo: "/sunstone.png",
    },
    {
      name: "SET",
      logo: "/SET.png",
    },
    {
      name: "hex",
      logo: "/hex.png",
    },
    {
      name: "Education partner",
      logo: "/7.png",
    },

  ];

  const goldPartners = [
    {
      name: "Merelyn Studio",
      logo: "/Logos.png",
    },
    {
      name: "Smaaash",
      logo: "/Smaaash.png",
    },
    {
      name: "Huion",
      logo: "/Huion.png",
    },
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our Amazing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Partners
            </span>
          </h2>
        </motion.div>

        {/* Platinum Partners */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {platinumPartners.map((partner, index) => (
            <div key={index} className="w-36 sm:w-44 md:w-52">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gold Partners */}
        <div className="flex flex-wrap justify-center gap-6">
          {goldPartners.map((partner, index) => (
            <div key={index} className="w-36 sm:w-44 md:w-52">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-purple-500 text-foreground hover:bg-purple-500/10"
            onClick={() => window.open("https://forms.gle/84u5TxNYsVBpJ6yq5", "_blank")}
          >
            Become a Partner <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
