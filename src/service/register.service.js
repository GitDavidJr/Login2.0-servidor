import { createUser } from "../database/prismaClient.database.js";
import { hashPassword } from "../helper/hash.helper.js";
import { hideSensitiveFields } from "../utils/data.utils.js";

// essa função possui multiplas saidas diferentemente do auth que foi ultilizado da boa pratica de ter apenas uma saida, pois aqui se mostrou bem coveniente, entretanto em um projeto real deve se usar apenas uma das duas praticas, porem deixarei das duas maneiras para ser possivel ver a diferença entre elas.
export const register = async (name, email, password, gitHub, reply) => {

    let user;

    // 1. Criar hash da senha
    const hash = await hashPassword(password);
    
    // 2. Criar usuário no banco de dados
    try {

        user = await createUser(name, email, hash, gitHub);

        
    
    } catch (err) { 
        if (err.code === "P2002") {
            return { status: "409", message: "Usuário já existe" }; // Status HTTP: 409 Conflict
        }

        return { status: "500", message: err.message }; // 500 Internal Server Error
    }

    console.log(user);

    // 3. Retornar dados do usuário cadastrado
    const token = await reply.jwtSign({ id: user.id, email: user.email });

    return {
        user: hideSensitiveFields(user),
        token: token,
    };
};
