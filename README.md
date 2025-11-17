# StudyBuddy (Allbooks repo skeleton)

Este repositório contém o esqueleto inicial para o projeto StudyBuddy (nome temporário: Allbooks). O objetivo é organizar um monorepo com frontend, backend e infraestrutura para desenvolvimento local e deploy.

Visão geral
- Frontend: /web (Next.js + TypeScript + Tailwind)
- Backend: /api (Node.js + TypeScript + Prisma)
- Infra: /infra (docker-compose para desenvolvimento)

MVP (estudantes)
- CRUD de decks e cartões (texto e imagem)
- Sessão de estudo com algoritmo SM-2
- Autenticação (JWT)
- PWA (offline básico)

Como rodar localmente (dev rápido)
1. Instale Docker e Docker Compose.
2. Copie .env.example e preencha as variáveis.
3. Inicie serviços de apoio:
   cd infra
   docker-compose up -d
4. Entre nas pastas /api e /web para seguir os READMEs específicos.

Estrutura
- /web: frontend Next.js
- /api: backend Node.js + Prisma
- /infra: docker-compose para Postgres, Redis

Contribuições
- Abra issues para features/bugs.
- Use branch feature/* e envie PRs para revisão.

Contato
- @jjoelcosta

License: MIT
