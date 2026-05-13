"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Heart, Target, Users, Trophy, Footprints } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

const timeline = [
  {
    year: "2023",
    title: "O primeiro passo",
    description: "Tudo começou com um pequeno grupo de amigos que se reunia para caminhar no final de semana em Rodrigues Alves.",
    icon: Footprints,
  },
  {
    year: "2024",
    title: "A comunidade cresceu",
    description: "O grupo ganhou nome, identidade e começou a atrair novos corredores de todas as idades e níveis.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Primeiras conquistas",
    description: "Participamos de corridas de rua oficiais e nossos membros quebraram seus primeiros recordes pessoais.",
    icon: Trophy,
  },
  {
    year: "2026",
    title: "Tecnologia e IA",
    description: "Lançamos o gerador de treinos com IA para ajudar todos a começarem da melhor forma possível.",
    icon: Target,
  },
];

const values = [
  {
    title: "Inclusão",
    description: "Todos são bem-vindos, independente do nível, idade ou ritmo.",
    icon: Heart,
  },
  {
    title: "Superação",
    description: "Cada treino é uma oportunidade de ir um pouco além do que foi ontem.",
    icon: Target,
  },
  {
    title: "Comunidade",
    description: "Ninguém corre sozinho. O grupo é a nossa maior força e motivação.",
    icon: Users,
  },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-neon selection:text-black">
      <Navbar />
      {/* Header */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-brand-neon/8 blur-[120px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-neon transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o início
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="https://i.postimg.cc/d1MZxJZ7/logo-arraia.png"
                alt="Arraias Runners"
                width={140}
                height={60}
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Quem somos, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-neon-light">
                para onde corremos.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-gray max-w-2xl leading-relaxed">
              A Arraias Runners nasceu da vontade de transformar vidas através da corrida.
              Somos um grupo de corrida de Rodrigues Alves, no Acre, que acredita que todo mundo
              pode ser corredor — basta dar o primeiro passo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-brand-dark-gray relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Nossa <span className="text-brand-neon">missão</span>
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                Queremos ser a porta de entrada para quem deseja começar a correr. Mais do que quilômetros,
                entregamos acolhimento, saúde mental, amizades verdadeiras e a certeza de que ninguém fica para trás.
              </p>
              <p className="text-brand-gray text-lg leading-relaxed">
                Cada treino é um encontro. Cada conquista é celebrada em grupo.
                Na Arraias Runners, o pace não importa — o que importa é estar lá.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "+100", label: "Corredores ativos" },
                { number: "3", label: "Anos de história" },
                { number: "52", label: "Treinos por ano" },
                { number: "∞", label: "Amizades criadas" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-brand-black rounded-2xl border border-white/10 p-6 text-center hover:border-brand-neon/30 transition-colors"
                >
                  <p className="text-3xl md:text-4xl font-extrabold text-brand-neon mb-2">{stat.number}</p>
                  <p className="text-brand-gray text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Nossos <span className="text-brand-neon">valores</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group bg-brand-dark-gray/50 border border-white/5 rounded-3xl p-8 hover:border-brand-neon/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300">
                  <value.icon className="w-8 h-8 text-brand-neon" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-brand-gray leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-dark-gray relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Nossa <span className="text-brand-neon">trajetória</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 md:gap-8 relative"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl bg-brand-black border border-brand-neon/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(57,255,20,0.15)]">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-brand-neon" />
                  </div>
                  <div className="pt-1">
                    <span className="text-brand-neon font-bold text-sm tracking-wider">{item.year}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-brand-gray leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center mx-auto mb-8">
              <MapPin className="w-10 h-10 text-brand-neon" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Rodrigues Alves, <span className="text-brand-neon">Acre</span>
            </h2>
            <p className="text-brand-gray text-lg mb-4">
              Nossos treinos acontecem nas melhores rotas da cidade, aproveitando a natureza amazônica e o ar puro.
            </p>
            <div className="flex items-center justify-center gap-2 text-brand-gray">
              <Calendar className="w-5 h-5 text-brand-neon" />
              <span>Treinos regulares toda semana — siga nosso Instagram para os horários!</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark-gray relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-glow">
              Vem correr com a gente!
            </h2>
            <p className="text-brand-gray text-lg mb-8 max-w-xl mx-auto">
              Não importa se você nunca correu 1 km. O importante é começar.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-neon text-brand-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-neon-light transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(57,255,20,0.4)]"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar e gerar meu treino
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
