"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Camera, Send, MessageSquare, Zap } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function CTA() {
  const instagramUrl = "https://www.instagram.com/arraiasrunners/";

  const stats = [
    { label: "Corredores", value: "+100" },
    { label: "Treinos/Sem", value: "3x" },
    { label: "Participação", value: "Grátis" },
  ];

  const highlights = [
    {
      icon: <Calendar className="w-6 h-6 text-brand-neon" />,
      title: "Treinos Semanais",
      desc: "Acompanhe os horários e locais exatos divulgados semanalmente.",
    },
    {
      icon: <Camera className="w-6 h-6 text-brand-neon" />,
      title: "Registros e Fotos",
      desc: "Confira as fotos oficiais dos treinos e eventos no Foco Radical e stories do Instagram.",
    },
    {
      icon: <Users className="w-6 h-6 text-brand-neon" />,
      title: "Comunidade Ativa",
      desc: "Tire dúvidas, peça orientações ou combine treinos diretamente via Direct.",
    },
  ];

  return (
    <section id="cta" className="py-28 relative overflow-hidden bg-brand-black">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full border border-brand-neon/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-brand-neon/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text and benefits */}
          <div className="lg:col-span-6 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/20 rounded-full px-4 py-1.5"
            >
              <Zap className="w-4 h-4 text-brand-neon animate-pulse" />
              <span className="text-sm font-medium text-brand-neon">Contato & Informações</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Quer correr com a gente?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-neon-light">
                Nos encontre no Instagram.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-brand-gray"
            >
              O Instagram é o ponto central da nossa comunidade. Lá compartilhamos locais de encontro, horários, dicas de corrida e os registros fotográficos de cada treino.
            </motion.p>

            {/* highlights list */}
            <div className="space-y-6 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="bg-brand-dark-gray border border-white/10 p-3 rounded-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Instagram Profile Card */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md bg-brand-dark-gray/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden hover:border-brand-neon/20 transition-colors duration-300"
            >
              {/* Instagram top bar decoration */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-semibold text-brand-gray/50 tracking-widest uppercase">
                  Instagram Profile
                </div>
                <InstagramIcon className="w-5 h-5 text-brand-gray/40" />
              </div>

              {/* Profile Details */}
              <div className="flex flex-col items-center text-center">
                {/* Avatar with rotating glow ring representing a story */}
                <div className="relative mb-4 group cursor-pointer">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1.5 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 rounded-full blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative w-24 h-24 rounded-full bg-brand-black border-2 border-brand-dark-gray overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src="https://i.postimg.cc/d1MZxJZ7/logo-arraia.png"
                      alt="Arraias Runners Logo"
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  {/* Active story badge */}
                  <span className="absolute bottom-0 right-1 bg-brand-neon text-brand-black text-[10px] font-extrabold px-2 py-0.5 rounded-full border-2 border-brand-dark-gray uppercase tracking-wider">
                    Live
                  </span>
                </div>

                {/* Handle and Title */}
                <h3 className="text-xl font-bold text-white mb-0.5">Arraias Runners</h3>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-neon font-medium text-sm hover:underline flex items-center gap-1.5 mb-4"
                >
                  @arraiasrunners
                </a>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-brand-gray mb-6 bg-brand-black/40 px-3 py-1 rounded-full border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-brand-neon" />
                  <span>Rodrigues Alves - AC</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 w-full bg-brand-black/45 border border-white/5 rounded-2xl py-4 mb-8">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center border-r last:border-r-0 border-white/5">
                      <div className="text-lg font-bold text-white leading-none mb-1">{stat.value}</div>
                      <div className="text-[10px] text-brand-gray uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bio text snippet */}
                <p className="text-sm text-brand-gray/90 mb-8 max-w-xs leading-relaxed">
                  🏃‍♂️ Grupo de corrida de rua em Rodrigues Alves.<br />
                  📅 Treinos semanais e preparação para provas.<br />
                  📸 Diga oi no direct e junte-se ao cardume!
                </p>

                {/* Action Buttons */}
                <div className="w-full flex flex-col sm:flex-row gap-3">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-neon hover:bg-brand-neon-light text-brand-black font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(57,255,20,0.25)] text-sm"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    Seguir no Instagram
                  </a>
                  <a
                    href={`${instagramUrl}direct/inbox/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-brand-black hover:bg-brand-black/80 border border-white/15 hover:border-brand-neon/30 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-brand-neon" />
                    Enviar Direct
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
