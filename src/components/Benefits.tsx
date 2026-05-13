"use client";

import { motion } from "framer-motion";
import { HeartPulse, Brain, Users, Trophy } from "lucide-react";

const benefits = [
  {
    title: "Saúde em dia",
    description: "Melhore seu condicionamento cardiovascular, fortaleça os músculos e aumente sua imunidade com a prática regular.",
    icon: HeartPulse,
    accent: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "Mente blindada",
    description: "Reduza o estresse, combata a ansiedade e melhore a qualidade do seu sono liberando endorfinas.",
    icon: Brain,
    accent: "from-brand-neon/20 to-teal-500/5",
  },
  {
    title: "Faça amigos",
    description: "Conecte-se com pessoas que compartilham da mesma paixão e encontre motivação extra treinando em grupo.",
    icon: Users,
    accent: "from-emerald-400/20 to-green-600/5",
  },
  {
    title: "Supere limites",
    description: "Defina metas, quebre recordes pessoais e descubra que você é capaz de ir muito mais longe do que imagina.",
    icon: Trophy,
    accent: "from-lime-500/20 to-brand-neon/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Mais motivos para <span className="text-brand-neon">correr</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-brand-dark-gray/50 border border-white/5 rounded-3xl p-8 hover:bg-brand-dark-gray hover:border-brand-neon/20 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-brand-neon/50 group-hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                  <benefit.icon className="w-7 h-7 text-brand-neon" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-brand-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
