/* 
Fluxo de autenticação 1:
1. Buscar usuário no banco de dados pelo email
2. Se não encontrar usuário:
   * Retornar erro com mensagem apropriada
3. Verificar se a senha fornecida confere com a senha armazenada
4. Se senha não confere:
    * Retornar erro com mensagem apropriada
5. Se senha confere:
    * Retornar dados do usuário autenticado

Fluxo de autenticação 2 (usado):
1. Buscar usuário no banco de dados pelo email
2. Compara senha fornecida com a senha armazenada
3. Retornar dados do usuário autenticado

obs: se não encontrar usuario ou senha não confere retorna um usuario vazio que sera tratado como erro (email ou senha incorretos)
*/

import { findUserEmail } from "../database/prismaClient.database.js";
import { comparePassword } from "../helper/hash.helper.js";
import { hideSensitiveFields } from "../utils/data.utils.js";

export const auth = async (email, password, reply) => {

    let response = {};
    
    // 1. Buscar usuário no banco de dados pelo email
    const user = await findUserEmail(email);

    // 2. Verifica se o usuario existe e se a senha confere
    if (!user || !(await comparePassword(password, user.password_hash))) {
        response = {
            message: "Usuário ou senha inválidos",
        };

    } else {
        const token = await reply.jwtSign({ id: user.id, email: user.email });

        response = {
            user: hideSensitiveFields(userAuth),
            token: token,
        };
        
    }

    // 3. Retornar dados do usuário autenticado
    return response;
};
