# AGENTS.md

## Visão geral
- Landing page fictícia do kit de ciências **"Meu Primeiro Demon Core"** (Vite + React 19 + oxlint).
- Fluxo: `index.html` -> `src/main.jsx` -> `src/App.jsx` -> `src/pages/Home.jsx`.
- Tema escuro/radioativo; imagens do produto em `src/assets/` (importadas via ESM, não em `public/`).

## Comandos (npm)
- `npm install` — obrigatório antes de rodar qualquer coisa
- `npm run dev` — servidor de desenvolvimento (Vite)
- `npm run build` — build de produção em `dist/`
- `npm run lint` — oxlint
- `npm run preview` — serve o build de produção

## Convenções
- Componentes em `src/componentes/` com **named exports**; estilo por componente via `*.module.css`.
- Textos de UI em português (pt-BR).
- Sem router e sem framework de testes; estado local com hooks do React.
- Referências de estilo em `../meu-primeiro-projeto` e `../academico/template-exercicio`.

## Ambiente (Windows)
- PowerShell 5.1 não aceita `&&` — encadeie com `;` ou `if ($?) { ... }`.
- `npm`/`npm.ps1` pode ser bloqueado por ExecutionPolicy; use `npm.cmd`.
- Caminhos contêm espaços e acentos (`Área de Trabalho`) — sempre entre aspas.
