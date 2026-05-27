"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Renizio Negreiros",
    text: "Minha vida mudou depois da Arraias. Comecei a correr, parei e comecei de novo, e hoje corro com um sorriso no rosto!",
    role: "Corredor há 7 anos",
    image: "/images/renizio.png",
  },
  {
    name: "Emerson Lima",
    text: "A energia do grupo é surreal. Você acorda às 5h da manhã animado porque sabe que vai encontrar os amigos.",
    role: "Meio Maratonista",
    image: "/images/emerson.png",
  },
  {
    name: "Sara Barros",
    text: "Sempre achei que corrida não era para mim. A comunidade me abraçou e me mostrou que todos podem.",
    role: "Corredora há 2 anos",
    image: "/images/sara.png",
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
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-brand-neon/10 flex-shrink-0 flex items-center justify-center">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-brand-neon font-bold text-sm">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-white leading-snug">{t.name}</p>
                  <p className="text-brand-neon text-sm leading-snug">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
