# login-v2-backend

Este repositório foi criado com o objetivo de estudar autenticação com **JWT nos cookies**, além de explorar boas práticas na organização do backend.

## 📚 Temas estudados
- Autenticação com **JWT** armazenado em cookies
- **Organização de pastas** no backend
- **Deploy** de aplicações Node.js
- **Versionamento do Node.js** e dependências
- Uso do **Fastify** como framework backend
- Implementação de **hooks**
- **Hash de senhas** para segurança

## 🛠 Tecnologias utilizadas
- **Node.js**
- **Fastify**
- **Prisma**
- **Bcrypt**
- **JWT**
- **Render (Deploy)**

## 🔄 Rotas da API
| Método | Rota              | Descrição                       |
|--------|------------------|----------------------------------|
| `POST` | `/register`      | Cadastrar um novo usuário        |
| `POST` | `/login`         | Realizar login                   |
| `GET`  | `/protected-user` | Buscar informações do usuário   |

## 📂 Estrutura do Backend

<pre> 
/login-2.0-backend
│── /src 
│ │── /controller # Lógica dos controladores das rotas 
│ │── /database # Funções Prisma para acesso ao banco de dados 
│ │── /helper # Funções auxiliares específicas do programa 
│ │── /hooks # Hooks do sistema 
│ │── /model # Schemas Prisma 
│ │── /routes # Definição das rotas da API 
│ │── /service # Regras de negócio e serviços 
│ │── /utils # Funções genéricas úteis durante o sistema 
│ │── server.js # Arquivo principal do servidor  
</pre>


## 🚀 Como instalar e rodar o projeto

### 1️⃣ Clone este repositório  
```sh
git clone https://github.com/GitDavidJr/login-2.0-backend.git
```

### 2️⃣ Acesse a pasta do projeto
```sh
cd login-2.0-backend
```

### 3️⃣ Instale as dependências

```sh
npm install
```

### 4️⃣ Configure o ambiente
Configure as variáveis de ambiente no arquivo .env na raiz do projeto.

### 5️⃣ Execute as migrations do Prisma
```sh
npx prisma migrate dev
```

### 6️⃣ Inicie o servidor
```sh
npm run dev
```

## 🤝 Como contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch com sua funcionalidade (git checkout -b minha-feature).
3. Commit suas alterações (git commit -m 'Minha nova feature').
4. Faça o push para sua branch (git push origin minha-feature).
5. Abra um Pull Request.

## ⭐ Dê uma estrela!
Se este projeto te ajudou de alguma forma, considere deixar uma estrela ⭐ para apoiar o repositório!

## 🔗 Links relacionados
- Versão anterior do login:[ Login 1.0](https://github.com/GitDavidJr/login-v1-frontend)
- Frontend do Login 2.0: [Login 2.0 - Frontend](https://github.com/GitDavidJr/login-v2-frontend)
- Servidor hospedado (Render): [Acesse aqui](https://login2-0-servidor.onrender.com)
