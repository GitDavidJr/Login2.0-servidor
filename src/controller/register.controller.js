import { register } from "../service/register.service.js";

export const postRegister = async (request, reply) =>{

    const dadosRegister = request.body;

    const result = await register(dadosRegister.name, dadosRegister.email, dadosRegister.password, dadosRegister.gitHub, reply);

    if(result.message){
        return reply.status(result.status).send(result.message)
    }

    return reply.status(200).send(result)
}

