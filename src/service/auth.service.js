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

export const auth = async (email, password, reply) => {

  // 1. Buscar usuário no banco de dados pelo email
  const user = await findUserEmail(email);

  // 2. Compara senha fornecida com a senha armazenada
  const userAuth = (await comparePassword(password, user.password_hash))
    ? {
        name: user.name,
        email: user.email,
        avatar_url: user.gitHub,
      }
    : null;

  // 3. Retornar dados do usuário autenticado
  let response = {};

  if (!userAuth) {
    response = {
      message: "Usuário ou senha inválidos",
    };

  } else {
    const token = await reply.jwtSign({ id: user.id, email: user.email });

    response = {
      user: userAuth,
      token: token,
    };

    return response
  }
};
