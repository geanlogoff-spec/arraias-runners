"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Sparkles, X, Copy, MessageCircle, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function AIGenerator() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setShowModal(false);
  }, []);

  // Lock body scroll when modal is open & listen for Escape
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    // Track custom GA4 event
    trackEvent("generate_workout", "engagement", prompt.slice(0, 100));

    setLoading(true);
    setError("");
    setResult("");
    setShowModal(false);

    try {
      const response = await fetch("/api/generate-workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao gerar treino");
      }

      setResult(data.result);
      setShowModal(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro inesperado ao gerar treino.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(result);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section id="generator" className="py-24 bg-brand-dark-gray relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent" />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Monte seu <span className="text-brand-neon">Treino Inteligente</span>
          </h2>
          <p className="text-brand-gray text-lg">
            Nossa Inteligência Artificial cria o plano perfeito para você começar com o pé direito.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-black border border-white/10 rounded-3xl p-6 md:p-8 box-glow relative overflow-hidden"
        >
          {/* Decorative animated sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-4 -right-4"
            >
              <Sparkles className="w-40 h-40 text-brand-neon" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 0], scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6"
            >
              <Sparkles className="w-24 h-24 text-brand-neon" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.06, 0.14, 0.06] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 right-1/4"
            >
              <Sparkles className="w-12 h-12 text-brand-neon-light" />
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="flex flex-col gap-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Sou o João, tenho 30 anos, sedentário e quero caminhar 2x na semana. Tenho 1h livre pela manhã..."
                rows={3}
                className="w-full bg-brand-dark-gray border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-neon transition-colors resize-none"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="self-end bg-brand-neon text-brand-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-neon-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  <>
                    Gerar Treino
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
          </form>
        </motion.div>
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {showModal && result && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Plano de treino gerado pela IA"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-brand-dark-gray border border-white/20 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-brand-black/50">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-neon/20 p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-brand-neon" />
                  </div>
                  <h3 className="font-bold text-xl text-white">Seu Plano de Treino</h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  aria-label="Fechar plano de treino"
                  className="p-2 text-brand-gray hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="prose prose-invert prose-brand prose-headings:text-brand-neon prose-a:text-brand-neon max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {result}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Footer / Actions */}
              <div className="p-6 border-t border-white/10 bg-brand-black/50 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-brand-dark-gray border border-white/20 text-white hover:bg-white/5 transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-brand-neon" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copiar Treino
                    </>
                  )}
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar p/ WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
