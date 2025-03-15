import { findUserJWT } from "../database/prismaClient.database.js";

export const useAuth = async (request, reply) => {
    try {

        if (request.url.startsWith("/protected")) {

            const token = request.headers["authorization"]?.split(" ")[1]; // 

            if (!token) {
                reply.code(401).send({ message: "Token não fornecido" });
                return;
            }

            await request.jwtVerify();

            const user = await findUserJWT(request.user.id, request.user.email);

            

            if (!user) {
                throw new Error("Token inválido");
            }

            request.authUser = user;
        }

    } catch (err) {
        reply.code(403).send({ message: "Token inválido ou expirado" });
    }

}