# Backend (api)

Tecnologias sugeridas: Node.js + TypeScript + NestJS (ou Express) + Prisma.

Scripts (a preencher ao criar o projeto):
- npm install
- npx prisma migrate dev
- npm run dev

Endpoints iniciais sugeridos:
- POST /auth/register
- POST /auth/login
- GET /decks
- POST /decks
- POST /decks/:id/cards
- POST /study/session
- POST /study/review

Configuração do banco: configure DATABASE_URL para conectar ao Postgres rodando no docker-compose.