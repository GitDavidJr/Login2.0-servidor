
# Controller

Esta pasta contém os controladores (controllers) da aplicação, que são responsáveis por:

- Receber as requisições HTTP vindas das rotas
- Processar os dados recebidos
- Coordenar a lógica de negócio chamando os serviços necessários
- Retornar as respostas apropriadas para o cliente e status da requisição

Os controllers atuam como intermediários entre as rotas da API e a camada de serviços, garantindo:

- Validação dos dados de entrada
- Tratamento de erros
- Formatação das respostas
- Controle de acesso e autenticação
- Orquestração das regras de negócio

Cada arquivo controller é dedicado a um recurso específico da aplicação, mantendo o código organizado e seguindo o princípio da responsabilidade única.
