import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arraias Runners | Grupo de Corrida em Rodrigues Alves - AC",
  description: "Grupo de corrida de rua em Rodrigues Alves, Acre. Treinos regulares, dicas de corrida e uma comunidade unida para você superar limites. Junte-se a nós!",
  keywords: [
    "corrida de rua",
    "grupo de corrida",
    "treino de corrida",
    "corrida iniciantes",
    "assessoria esportiva",
    "corrida Acre",
    "Arraias Runners",
    "Rodrigues Alves",
    "Vale do Juruá"
  ],
  alternates: {
    canonical: "https://arraias-runners.vercel.app",
  },
  openGraph: {
    title: "Arraias Runners",
    description: "Nosso combustível é a superação! Descubra que você é capaz de ir muito mais longe do que imagina.",
    url: "https://arraias-runners.vercel.app",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-brand-black text-brand-white selection:bg-brand-neon selection:text-brand-black">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Arraias Runners",
              "description": "Grupo de corrida de rua focado em saúde, qualidade de vida e comunidade no Vale do Juruá, Rodrigues Alves, Acre.",
              "url": "https://arraias-runners.vercel.app",
              "logo": "https://i.postimg.cc/d1MZxJZ7/logo-arraia.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rodrigues Alves",
                "addressRegion": "AC",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.instagram.com/arraiasrunners/"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
