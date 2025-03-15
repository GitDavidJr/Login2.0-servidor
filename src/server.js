import Fastify from "fastify";
import fastifyCors from "@fastify/cors"; // Use @fastify/cors (versão mais atual)
import fastifyJwt from "fastify-jwt";
import userRoutes from "./routes/user.routes.js";
import loginRoutes from "./routes/login.routes.js";
import {useAuth} from "./hooks/useAuth.hook.js";
import indexRoutes from "./routes/index.routes.js";

const app = Fastify();

console.log("Iniciando o servidor...");

// Adicionando CORS corretamente
app.register(fastifyCors, {
  origin: "*", // Permitir requisições de qualquer origem (para teste)
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Permitir cabeçalhos
  credentials: true, // Permite envio de cookies/tokens
});

app.register(fastifyJwt, {
  secret: process.env.SECRET_KEY,
  sign: {
    expiresIn: "1h",
  },
});

const port = process.env.PORT ? Number(process.env.PORT) : 3333;
app.addHook("onRequest", useAuth);

app.register(loginRoutes, { prefix: "/login" });
app.register(userRoutes, { prefix: "/protected-user" });
app.register(indexRoutes, { prefix: "/" });

app.listen({ host: "0.0.0.0", port: port }, () => {
  console.log(`Servidor Fastify rodando na porta ${port}`);
});
