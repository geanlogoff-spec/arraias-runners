import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem Somos | Arraias Runners - Grupo de Corrida",
  description: "Conheça a história, missão e valores da Arraias Runners. Um grupo de corrida de rua em Rodrigues Alves, Acre, focado em saúde e comunidade.",
  alternates: {
    canonical: "https://arraias-runners.vercel.app/sobre",
  },
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
