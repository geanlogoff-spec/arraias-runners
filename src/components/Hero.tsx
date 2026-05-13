"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Users, Star, Zap } from "lucide-react";
import Image from "next/image";

const words = ["força!", "superação!", "energia!", "diversão!", "amizade!"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black pt-24 lg:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-brand-neon/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-1/4 w-[40vw] h-[40vw] bg-brand-neon-light/5 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 bg-brand-dark-gray/50 border border-brand-gray/20 rounded-full px-4 py-2 backdrop-blur-md mt-4 lg:mt-0"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-neon animate-pulse" />
            <span className="text-sm font-medium text-brand-white/80">Comunidade Ativa</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="https://i.postimg.cc/d1MZxJZ7/logo-arraia.png"
              alt="Arraias Runners Logo"
              width={180}
              height={80}
              className="mb-8"
              priority
            />
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Nosso combustível é a <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-neon-light">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-brand-gray max-w-xl"
          >
            Não sabe por onde começar seu treino? Conte como você deseja iniciar e como é sua rotina esportiva. Nosso assistente vai ajudar você a dar os primeiros passos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md relative group cursor-pointer"
            onClick={scrollToGenerator}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon to-brand-neon-light rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-brand-dark-gray/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 pl-6 shadow-2xl">
              <span className="text-brand-gray/60 flex-1 truncate">
                Informe seu nome e rotina...
              </span>
              <button className="bg-brand-neon text-brand-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-neon-light transition-colors">
                Gerar Treino
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 text-sm text-brand-gray/80 pt-4"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-neon" />
              <span>+100 corredores</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-brand-neon" />
              <span>Iniciantes a Avançados</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 box-glow">
            {/* Imagem Placeholder de Alta Qualidade */}
            <Image
              src="https://i.ibb.co/wNRW73bq/Whats-App-Image-2026-05-13-at-17-10-35.jpg"
              alt="Corredores em movimento"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-12 left-8 bg-brand-dark-gray/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="bg-brand-neon/20 p-3 rounded-xl">
                <Star className="w-6 h-6 text-brand-neon" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Comunidade</p>
                <p className="text-brand-gray text-sm">Feita para todos</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
