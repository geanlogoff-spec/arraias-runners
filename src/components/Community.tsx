"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    text: "Minha vida mudou depois da Arraias. Comecei caminhando e hoje corro 10km com um sorriso no rosto!",
    role: "Corredora há 1 ano",
  },
  {
    name: "Carlos Mendes",
    text: "A energia do grupo é surreal. Você acorda às 5h da manhã animado porque sabe que vai encontrar os amigos.",
    role: "Maratonista",
  },
  {
    name: "Juliana Costa",
    text: "Sempre achei que corrida não era para mim. A comunidade me abraçou e me mostrou que todos podem.",
    role: "Iniciante",
  },
];

export function Community() {
  return (
    <section id="community" className="py-24 bg-brand-dark-gray overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            A força da <span className="text-brand-neon">Comunidade</span>
          </motion.h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Não é só sobre correr, é sobre com quem você corre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-brand-black p-8 rounded-3xl border border-white/5 hover:border-brand-neon/20 relative transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-neon text-brand-neon" />
                ))}
              </div>
              <p className="text-brand-white/90 text-lg mb-6 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon font-bold text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-brand-neon text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
