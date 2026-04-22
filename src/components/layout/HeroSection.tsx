"use client";

import { motion } from "framer-motion";
import { Search, MapPin, CalendarDays } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/hero-apartment.jpg";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Luxury apartment interior"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gold/20 text-gold-light mb-6">
            Premium Rentals
          </span>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            style={{ color: "hsl(40, 60%, 95%)" }}
          >
            Find Your
            <br />
            <span className="text-gold">Perfect Space</span>
          </h1>
          <p
            className="text-lg md:text-xl mb-10 max-w-lg"
            style={{ color: "hsl(210, 15%, 75%)" }}
          >
            Discover curated apartments for every lifestyle — from beachfront
            retreats to urban student lofts.
          </p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2"
          >
            <div className="flex items-center gap-2 flex-1 px-4 py-3 rounded-xl bg-background/50">
              <MapPin className="h-5 w-5 text-gold shrink-0" />
              <input
                type="text"
                placeholder="Where do you want to live?"
                className="bg-transparent w-full text-sm text-foreground placeholder:text-muted-foreground outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 flex-1 px-4 py-3 rounded-xl bg-background/50">
              <CalendarDays className="h-5 w-5 text-gold shrink-0" />
              <input
                type="text"
                placeholder="Move-in date"
                className="bg-transparent w-full text-sm text-foreground placeholder:text-muted-foreground outline-none"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
              />
            </div>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground rounded-xl px-8"
              onClick={() => router.push("/")}
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
