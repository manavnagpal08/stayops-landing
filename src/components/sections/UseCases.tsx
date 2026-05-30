"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Stethoscope, Truck, GraduationCap, Factory, Phone, HeartHandshake, UserPlus 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

const iconMap: Record<string, React.ElementType> = {
  Building2, Stethoscope, Truck, GraduationCap, Factory, Phone, HeartHandshake, UserPlus
};

export function UseCases({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="use-cases" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-muted">
              {data.subtitle}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-transparent rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item: any, index: number) => {
            const IconComponent = iconMap[item.icon] || Building2;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-[#111] hover:bg-[#151515] transition-colors group">
                <CardHeader>
                  <IconComponent className="h-8 w-8 text-gold-600 mb-4 group-hover:text-gold-400 transition-colors" />
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
