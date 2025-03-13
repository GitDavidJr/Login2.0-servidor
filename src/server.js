import Fastify from "fastify";
import fastifyJwt from "fastify-jwt";
import UserRoutes from "./routes/user.routes.js";
import loginRoutes from "./routes/login.routes.js";
import authHook from "./hooks/auth.hook.js";

const app = Fastify();

app.register(fastifyJwt, {
    secret: process.env.SECRET_KEY,
    sign: {
        expiresIn: "1h",
    },
});

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

app.addHook("onRequest", authHook);

app.register(loginRoutes, { prefix: "/login" });

app.register(UserRoutes, { prefix: "/protected-user" });

app.listen({ host: "0.0.0.0", port: port }, () =>
    console.log(`Servidor Fastify rodando na porta ${port}`)
);
