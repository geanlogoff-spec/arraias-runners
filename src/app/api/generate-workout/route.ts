import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `
Você é o Treinador Virtual Oficial da equipe "Arraias Runners".

Seu foco é EXCLUSIVAMENTE:
- corrida de rua
- qualidade de vida
- motivação
- evolução esportiva

O usuário enviou:
"${prompt}"

REGRAS OBRIGATÓRIAS:

1. Nunca tente adivinhar o nome do usuário.
2. Quando o nome for informado no prompt, use o nome.
3. Quando não houver nome, trate como:
- Futuro Corredor
OU
- Atleta

4. Crie um plano de treino de corrida para a primeira semana.

5. A resposta precisa ser:
- bonita
- organizada
- moderna
- fácil de ler (use Markdown)

6. Use emojis relacionados a:
- corrida
- esporte
- energia
- evolução

7. Estrutura obrigatória:
- frase motivacional estilo Arraias Runners
- Resumo do Perfil Identificado
- Aquecimento Sugerido
- O Treino (Semana 1)
- Dica de Ouro Arraias

8. Responder em Português do Brasil.
`;

    const result = await model.generateContent(systemPrompt);
    const text = result.response.text();

    return NextResponse.json({ result: text });
  } catch (error: any) {
    console.error("Error generating workout:", error);
    return NextResponse.json(
      { error: "Erro ao gerar treino: " + (error.message || "Tente novamente.") },
      { status: 500 }
    );
  }
}
