"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Zap, ArrowRight } from "lucide-react";

export function CTA() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) return;

    const message = encodeURIComponent(
      "Olá! Vim pelo site da Arraias Runners e gostaria de saber mais sobre os treinos! 🏃‍♂️"
    );
    window.open(`https://wa.me/55${digits}?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-brand-neon/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full border border-brand-neon/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full border border-brand-neon/10" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-brand-neon/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/20 rounded-full px-4 py-1.5 mb-8"
          >
            <Zap className="w-4 h-4 text-brand-neon" />
            <span className="text-sm font-medium text-brand-neon">100% gratuito</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            Seu primeiro passo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-neon-light">
              começa hoje.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-brand-gray mb-12 max-w-lg mx-auto">
            Informe seu WhatsApp e nossa equipe vai te orientar para dar o primeiro passo.
          </p>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-dark-gray/60 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm max-w-lg mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="(00) 00000-0000"
                  aria-label="Número de WhatsApp com DDD"
                  className="w-full bg-brand-black/80 border border-white/15 rounded-xl px-6 py-4 text-white text-lg outline-none focus:border-brand-neon/60 focus:shadow-[0_0_0_3px_rgba(57,255,20,0.1)] transition-all placeholder:text-brand-gray/40"
                />
              </div>

              <button
                type="submit"
                disabled={phone.replace(/\D/g, "").length < 10}
                className="w-full bg-brand-neon hover:bg-brand-neon-light text-brand-black font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none text-lg"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Abrindo WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Fale com a Gente
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-brand-gray/40 mt-4 text-center">
              Ao enviar, você será redirecionado para o WhatsApp.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
