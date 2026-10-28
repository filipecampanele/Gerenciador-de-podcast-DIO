# 🎙️ Gerenciador de Podcasts

API em **Node.js + TypeScript** usando apenas o módulo nativo `http` (sem Express).

## Arquitetura

```
src/
├── controllers/   # Recebe req/res e devolve a resposta
├── services/      # Regras de negócio
├── repositories/  # Acesso aos dados (podcasts.json)
├── models/        # Interfaces/tipos
├── routes/        # Roteamento
├── enums/         # Status code, métodos HTTP, rotas, content-type
├── utils/         # Helpers de resposta HTTP
├── app.ts         # Aplicação + tratamento de erros
└── server.ts      # Criação do servidor
```

## Como rodar

```bash
npm install
npm run start:dev     # desenvolvimento
npm run start:watch   # com reload automático
npm run build && npm run start:dist   # produção
```

## Endpoints

| Método | Rota                  | Descrição                         |
|--------|-----------------------|-----------------------------------|
| GET    | `/api/list`           | Lista todos os episódios          |
| GET    | `/api/episode?p=flow` | Filtra episódios por nome do podcast |

- `200` com dados · `204` sem conteúdo · `404` rota inexistente · `500` erro interno.

## Teste rápido

```bash
curl http://localhost:3333/api/list
curl "http://localhost:3333/api/episode?p=flow"
```
