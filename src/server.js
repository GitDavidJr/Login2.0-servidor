import Fastify from "fastify";
import fastifyJwt from "fastify-jwt";
import userRoutes from "./routes/user.routes.js";
import loginRoutes from "./routes/login.routes.js";
import authHook from "./hooks/auth.hook.js";
import indexRoutes from "./routes/index.routes.js";
import fastifyCors from 'fastify-cors';

const app = Fastify();

console.log("Iniciando o servidor...");


/* so consigo ter acesso ao back end pelo mesmo dominio usando terminal, thunder client e insomnia, mas não consigo acessar pelo front end, não sei se é por causa do cors, mas quando adiciono o cors no app.register, nem pelo mesmo dominio consigo acessar o back end. */

/* app.register(fastifyCors, {
  origin: "*",
}); */
 

app.register(fastifyJwt, {
  secret: process.env.SECRET_KEY,
  sign: {
    expiresIn: "1h",
  },
});

console.log("Fastify configurado com CORS e JWT");

const port = process.env.PORT ? Number(process.env.PORT) : 3333;
app.addHook("onRequest", authHook);

console.log("Registrando rotas...");

app.register(loginRoutes, { prefix: "/login" });
app.register(userRoutes, { prefix: "/protected-user" });
app.register(indexRoutes, { prefix: "/" });

app.listen({ host: "0.0.0.0", port: port }, () => {
    console.log(`Servidor Fastify rodando na porta ${port}`);
});
