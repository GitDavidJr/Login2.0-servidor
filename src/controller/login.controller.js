import { auth } from "../service/auth.service.js";

export const postLogin = async (request, reply) =>{

    console.log("Tentativa de login")

    const dadosLogin = request.body; 

    const result = await auth(dadosLogin.email, dadosLogin.password, reply);

    if(result.mensage){
        return reply.status(401).send(result)
    }

    return reply.status(200).send(result)
}

