"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é a Arraias Runners?",
    answer: "A Arraias Runners é um grupo de corrida focado em qualidade de vida, superação e amizade. Você pode participar dos nossos treinos presenciais ou acompanhar nossas dicas online. Aqui você sempre encontra motivação para continuar!",
  },
  {
    question: "Quanto custa participar?",
    answer: "A participação nos treinos abertos é gratuita! Entre em contato para saber mais.",
  },
  {
    question: "Onde acontecem os treinos?",
    answer: "Nossos encontros principais acontecem em Rodrigues Alves e arredores, aproveitando as melhores rotas da cidade e natureza. Acompanhe nosso Instagram para saber os locais exatos da semana.",
  },
  {
    question: "Sou iniciante, posso participar?",
    answer: "Com certeza! A Arraias Runners é para todos. Temos iniciantes que estão dando os primeiros passos e maratonistas experientes. Ninguém fica para trás.",
  },
  {
    question: "Preciso de equipamento profissional?",
    answer: "Não! Um tênis confortável e roupas leves são suficientes para começar. Com o tempo, podemos te orientar sobre os melhores equipamentos para sua evolução.",
  },
  {
    question: "A Arraias Runners é adequada para crianças?",
    answer: "Incentivamos o esporte desde cedo! Crianças podem participar de eventos específicos e caminhadas acompanhadas pelos pais, promovendo saúde em família.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-brand-neon">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-brand-dark-gray/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-neon focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
              >
                <span className="font-bold text-lg text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-neon transition-transform duration-300 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    role="region"
                    aria-label={faq.question}
                  >
                    <div className="px-6 pb-5 text-brand-gray leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
