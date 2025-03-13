import { auth } from "../services/auth.service.js";

export const postLogin = async (request, reply) =>{
    const dadosLogin = request.body; 

    console.log(dadosLogin)

    const user = await auth(dadosLogin.email, dadosLogin.password)

    let statusCode = 200;
    let responseBody = {}

    if(!user){
        statusCode = 401;
        responseBody = {
            message: "Usuário ou senha inválidos"
        }
    }else{

        const token = await reply.jwtSign({ id: user.id, email: user.email });
        responseBody = {
            user: {
                name: user.name,
                email: user.email,
                avatar_url: user.gitHub
            },
            token: token
        }
    }

    return reply.status(statusCode).send(responseBody)
}

