# Meu Primeiro Demon Core

Landing page fictícia do kit de ciências **"Meu Primeiro Demon Core"**, construída como projeto
de estudo em **Vite + React + oxlint**, seguindo as convenções descritas em `AGENTS.md`.

## Produto

- **Nome:** Meu Primeiro Demon Core
- **Descrição:** Kit de ciências fictício e satírico, inspirado em brinquedos educativos e
  anúncios de televendas dos anos 1980 e 1990. Promete (sem qualquer base real) transformar
  qualquer jovem em um pequeno gênio da ciência. Produto inofensivo, sem instruções de fabricação
  de armas ou experimentos perigosos.
- **Público-alvo:** jovens e adultos que gostam de humor nonsense, sátiras publicitárias e
  produtos fictícios. Tom exageradamente confiante, corporativo apesar do absurdo, nostálgico e
  irônico, sem ofender grupos sociais, religiosos ou políticos.

## Requisitos

- Node.js 18+ e npm

## Comandos

```bash
npm install     # instala as dependências (obrigatório antes de rodar qualquer coisa)
npm run dev     # inicia o servidor de desenvolvimento (Vite)
npm run build   # gera o build de produção em dist/
npm run lint    # analisa o código com oxlint
npm run preview # serve o build de produção localmente
```

## Estrutura

```
index.html            # entrada HTML -> /src/main.jsx
public/               # assets estáticos servidos na raiz
src/
  main.jsx            # ponto de entrada do React
  App.jsx             # componente raiz (estado do modal de reserva)
  index.css           # tema global (escuro, amarelo radioativo)
  assets/             # imagens do produto (simbolo, embalagem, conteudo, diversao)
  componentes/        # componentes UI com CSS Modules
    Cabecalho.jsx / Cabecalho.module.css
    Hero.jsx / Hero.module.css
    Beneficios.jsx / Beneficios.module.css
    ComoFunciona.jsx / ComoFunciona.module.css
    ProvaSocial.jsx / ProvaSocial.module.css
    Oferta.jsx / Oferta.module.css
    FAQ.jsx / FAQ.module.css
    CTAFinal.jsx / CTAFinal.module.css
    ModalReserva.jsx / ModalReserva.module.css
    Card.jsx / Card.module.css
    Botao.jsx / Botao.module.css
    PainelControle.jsx / PainelControle.module.css
  pages/
    Home.jsx / Home.module.css  # compõe todas as seções da landing page
```

## Arquitetura escolhida

O projeto mantém a organização estabelecida em `AGENTS.md`, sem adotar um padrão de pasta pesado:
componentes funcionais com named exports em `src/componentes/`, estilo modularizado via
`*.module.css`, estado local com hooks do React, sem router e sem framework de testes. A página
`Home` compõe todas as seções obrigatórias da landing page. Não há backend, banco de dados nem
APIs externas; todos os dados são mockados localmente.

## Tecnologias utilizadas

- React 19
- JavaScript (Vite)
- CSS Modules para estilização modularizada
- oxlint para lintagem

## Seções da landing page (conforme Instrucoes.txt)

1. Header com logotipo, navegação por âncoras e CTA "Quero meu núcleo!".
2. Hero com título, descrição, imagem da embalagem, preço promocional, botão "Reservar meu kit"
   e selo humorístico.
3. Benefícios e diferenciais (4 cards fictícios com textos entre parênteses).
4. Apresentação do produto / Conteúdo da embalagem (imagens com legendas engraçadas).
5. Como funciona (3 etapas).
6. Prova social (4 depoimentos fictícios).
7. Oferta e preço (preço original/promocional, lista do kit, bônus, botão de compra simulada).
8. FAQ interativo em estilo acordeão (6 perguntas).
9. CTA final com texto e botão "Reservar meu Demon Core".
10. Modal de reserva fictício com formulário (nome, e-mail, preferência de embalagem),
    validação básica e mensagem de confirmação (não envia dados a servidores).

## Funcionalidades

- Navegação por âncoras entre as seções da página.
- Botões de CTA que abrem o modal de reserva fictícia.
- Formulário de reserva com validação básica dos campos.
- Mensagem de confirmação após o envio (reserva demonstrativa, sem cobrança real).
- FAQ interativo (acordeão).
- Responsividade para computadores e celulares.
- Estados de foco nos elementos interativos e textos alternativos nas imagens.

## Ideias iniciais e alternativas consideradas

Campo a ser preenchido durante o desenvolvimento (não foram registradas decisões alternativas
ainda).

## Referências visuais e pesquisas realizadas

Campo a ser preenchido durante o desenvolvimento (não foram registradas referências externas
ainda).

## Limitações do protótipo

- Produto totalmente fictício; nenhuma compra real nem coleta de dados financeiros.
- Não há integração com backend, banco de dados ou APIs externas.
- As imagens do produto são assets locais já incluídas no projeto.
- Não inclui framework de testes automatizados.

## Instruções para executar o projeto localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Para build de produção:
   ```bash
   npm run build
   ```
4. Para pré-visualizar o build:
   ```bash
   npm run preview
   ```

## Modificações realizadas

- `src/componentes/Cabecalho.jsx` + `Cabecalho.module.css`: adicionada navegação por âncoras
  (Benefícios, Como funciona, Avaliações, Oferta, FAQ) e botão CTA "Quero meu núcleo!"; layout
  adaptado para mobile.
- Novos componentes com CSS Modules: `Hero`, `Beneficios`, `ComoFunciona`, `ProvaSocial`,
  `Oferta`, `FAQ` (acordeão), `CTAFinal`, `ModalReserva`.
- `src/pages/Home.jsx`: reescrito para compor todas as seções obrigatórias da landing page com
  IDs de âncora, incluindo conteúdo da embalagem e painel de controle existente.
- `src/App.jsx`: gerencia o estado de abertura/fechamento do modal de reserva e o disponibiliza
  para `Cabecalho` e `Home`.
- `README.md`: atualizado com descrição do produto, arquitetura, tecnologias, seções da landing
  page, funcionalidades e instruções de execução.

O arquivo `Instrucoes.txt` não foi modificado.

## Feedbacks

- **Feedback do usuário:** "MELHOROU E MUITOKKKKKKJJJ" ("KKKKKJj" é uma forma brasileira de
  demonstrar risos, semelhante ao "LMAO"). A landing page atendeu às expectativas e ficou
  visualmente marcante e divertida.
- **Ponto de atenção corrigido:** o modal de reserva de compra simulada estava com a tela
  embaçada e o formulário impossível de preencher. O overlay foi ajustado
  (`backdrop-filter: blur(2px)` e opacidade `0.85`) e o posicionamento do modal foi reescrito
  para sobreposição fixa centralizada com `z-index` elevado e `pointer-events: auto`, de modo
  que o formulário fica acima do restante da página e os campos passam a ser clicáveis.
- Testes adicionais e pontuações de itens a arrumar podem ser registrados na pasta `manutencao/`.
- **Ponto de atenção corrigido:** ao preencher o formulário de reserva e submeter, a mensagem de
  confirmação agora informa explicitamente: "A compra/Reserva é fictícia e nada aconteceu, você não
  vai receber nada."
- **Ponto de atenção corrigido:** o painel de controle agora muda a cor do número de energia conforme
  o nível (verde até 49%, amarelo de 50% a 99%, vermelho em 100%). Ao chegar em 100% e tentar
  adicionar mais energia, o reator "explode", exibindo a mensagem "Você explodiu o reator, precisa
  ler o manual novamente..." e bloqueando os botões de reserva até que a página seja reiniciada.
- **Ponto de atenção corrigido:** os botões de reserva ("Quero meu núcleo!", "Reservar meu kit",
  "Comprar (simulada)", "Reservar meu Demon Core") ficam desabilitados enquanto o reator estiver
  explodido.
