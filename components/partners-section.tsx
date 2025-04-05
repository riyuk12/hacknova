"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import React from "react";

export function PartnersSection() {
  const platinumPartners = [
    {
      name: "Sunstone",
      logo: "https://media.discordapp.net/attachments/1293272278250815508/1357598685034320003/2.png?ex=67f1728d&is=67f0210d&hm=235a1e4e8925bf259872b1775262e0e1a6b5d55ab6022437c7f3a98174c33ebb&=&format=webp&quality=lossless",
    },
    {
      name: "Suhant University",
      logo: "https://media.discordapp.net/attachments/1293272278250815508/1357600168282689656/sushant.png?ex=67f173ef&is=67f0226f&hm=1f3b37780838a4e51e8f5be03466a8aa77ea00c572d51924f98eee8a0436101f&=&format=webp&quality=lossless",
    },
  ];

  const goldPartners = [
    {
      name: "Merelyn Studio",
      logo: "https://media.discordapp.net/attachments/1293272278250815508/1357598685353218068/1.png?ex=67f0c9cd&is=67ef784d&hm=5a55b10292c687615aa25f0328940f4be41d22307937cd591288c19bb71b9dcb&=&format=webp&quality=lossless&width=1000&height=1000",
    },
    {
      name: "Smaaash",
      logo: "https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/484655494_2913048828850382_2783647709664895193_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=N2S0MJl4aLoQ7kNvwGoxcdR&_nc_oc=AdlfG4bCXH9FwwRh2YGVn98qzBCgIPyYEIVGiHUleil5i6C7dSQLSwYF2CuRCee0Ld7qK4-IbA3YFUG6jSfQ7uF8&_nc_zt=23&_nc_ht=scontent.fdel27-5.fna&_nc_gid=oUBFnPszNTvIfXib1yrq6w&oh=00_AYFVLaEsCaJyQSzRNlcI8KQcNv6Yih2jv-H9Nud7A_0BSQ&oe=67F5F408",
    },
    {
      name: "Huion",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Huion_current_logo_vertical_arrangement.svg",
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
