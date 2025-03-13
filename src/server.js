import Fastify from "fastify";
import fastifyJwt from "fastify-jwt";
import loginRoutes from "./routes/login.routes.js";

const app = Fastify();

app.register(fastifyJwt, {
  secret: process.env.SECRET_KEY,
  sign: {
    expiresIn: "1h",
  },
});

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

app.addHook("onRequest", async (request, reply) => {
  try {
    // Verifica se a rota requer autenticação (métodos específicos ou prefixos de rota podem ser filtrados)
    if (request.url.startsWith("/api/protected")) {
      // Verifica o token JWT no cabeçalho
      const token = request.headers["authorization"]?.split(" ")[1]; // "Bearer token"

      if (!token) {
        reply.code(401).send({ message: "Token não fornecido" });
        return;
      }

      // Decodifica e valida o token
      await request.jwtVerify(); // Verifica o token usando o fastify-jwt
    }
  } catch (err) {
    reply.code(403).send({ message: "Token inválido ou expirado" });
  }
});

app.register(loginRoutes, { prefix: "/login" });

app.listen({ host: "0.0.0.0", port: port }, () =>
  console.log(`Servidor Fastify rodando na porta ${port}`)
);
