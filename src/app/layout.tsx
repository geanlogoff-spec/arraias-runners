import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arraias Runners | Seu primeiro passo começa hoje",
  description: "Grupo de corrida focado em qualidade de vida, superação e amizade. Melhore seu condicionamento cardiovascular, faça novos amigos e quebre seus recordes com a Arraias Runners.",
  keywords: ["corrida de rua", "grupo de corrida", "treino de corrida", "corrida iniciantes", "assessoria esportiva", "corrida Acre", "Arraias Runners"],
  openGraph: {
    title: "Arraias Runners",
    description: "Nosso combustível é a superação! Descubra que você é capaz de ir muito mais longe do que imagina.",
    url: "https://arraiasrunners.com.br", // Placeholder
    siteName: "Arraias Runners",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arraias Runners",
    description: "Nosso combustível é a superação!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-brand-black text-brand-white selection:bg-brand-neon selection:text-brand-black">
        {children}
      </body>
    </html>
  );
}
