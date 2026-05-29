"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  action: string;
  time: string;
}

const names = [
  "Renan Souza", "Mariana Silva", "Carlos Eduardo", "Amanda Vasconcelos",
  "Francisco Silva", "Jéssica Melo", "Thiago Oliveira", "Luciana Lima",
  "Raimundo Nonato", "Maria Clara", "Antônio Marcos", "Sandra Cunha",
  "Geraldo Souza", "Patrícia Bezerra", "Daniela Soares", "Valderlan Lima",
  "Cícero Neto", "Marcos Vinícius", "Luan Rodrigues", "Felipe Dantas",
  "Beatriz Costa", "Letícia Pinheiro", "Renizio Negreiros", "Emerson Lima",
  "Sara Barros", "Clodoaldo Santos", "Raimunda Melo", "Erick Nogueira"
];

const actions = [
  "gerou um treino de 5km para iniciantes",
  "criou uma planilha para sua primeira Meia Maratona",
  "acabou de criar seu treino personalizado de tiros",
  "gerou um treino focado em queima de gordura com IA",
  "acabou de gerar um treino de tiros de velocidade",
  "gerou um treino regenerativo pós-longão",
  "criou um plano de corrida e fortalecimento",
  "gerou um treino de subidas para Rodrigues Alves",
  "acabou de criar um treino de 10km personalizado",
  "gerou uma planilha de treinos para iniciantes do zero"
];

const times = ["agora mesmo", "há 1 minuto", "há 2 minutos", "há poucos segundos"];

export function LiveActivityToast() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomTime = times[Math.floor(Math.random() * times.length)];
      
      setNotification({
        id: Date.now(),
        name: randomName,
        action: randomAction,
        time: randomTime
      });
      setIsVisible(true);

      // Hide after 5 seconds
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        // Wait random time between 8 and 18 seconds before showing next
        const nextDelay = Math.random() * (18000 - 8000) + 8000;
        timeoutId = setTimeout(showRandomNotification, nextDelay);
      }, 5000);
    };

    // Start first notification after 6 seconds
    timeoutId = setTimeout(showRandomNotification, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && notification && (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, y: 50, scale: 0.9, x: -20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.9, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-50 flex items-center gap-4 bg-brand-black/90 backdrop-blur-md border border-brand-neon/20 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] max-w-sm w-[calc(100vw-2rem)] md:w-auto"
        >
          {/* Avatar / Icon Container */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-neon/10 border border-brand-neon/30 text-brand-neon shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0 pr-6">
            <p className="text-sm font-bold text-white leading-snug truncate">
              {notification.name}
            </p>
            <p className="text-xs text-brand-gray mt-0.5 leading-normal">
              {notification.action}
            </p>
            <span className="text-[10px] text-brand-neon/80 font-semibold uppercase tracking-wider mt-1 block">
              {notification.time}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 text-brand-gray hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Fechar notificação"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
