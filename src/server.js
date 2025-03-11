import Fastify from "fastify";

const app = Fastify();

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

// app.register(Routes, { prefix: '/route' });

app.listen({ host: '0.0.0.0', port: port }, () => console.log(`Servidor Fastify rodando na porta ${port}`));