import { Phone } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Depoimentos", href: "#community" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Fale Conosco", href: "#cta" },
];

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <Image
            src="https://i.postimg.cc/d1MZxJZ7/logo-arraia.png"
            alt="Arraias Runners Logo"
            width={120}
            height={50}
            className="opacity-50 hover:opacity-100 transition-opacity"
          />

          <a
            href="https://wa.me/5568999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-brand-dark-gray/50 px-6 py-3 rounded-full border border-white/10 hover:border-brand-neon/30 transition-colors"
          >
            <Phone className="w-5 h-5 text-brand-neon" />
            <span className="text-white font-medium">Fale conosco pelo WhatsApp</span>
          </a>
        </div>

        <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-brand-gray hover:text-brand-neon transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-brand-gray/50">
          <p>
            &copy; {new Date().getFullYear()} Arraias Runners. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
