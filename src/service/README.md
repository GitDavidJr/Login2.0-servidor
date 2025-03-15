
# Services

Esta pasta contém os serviços da aplicação, que são responsáveis por implementar a lógica de negócio.

## Conceitos

Os serviços são uma camada intermediária entre os controllers e os repositories, tendo como principais responsabilidades:

- Implementar regras de negócio
- Orquestrar chamadas entre diferentes repositories
- Validar dados
- Tratar erros
- Transformar dados entre diferentes formatos

## Estrutura

Cada serviço deve:

- Ser uma classe com nome terminado em "Service"
- Ter suas dependências injetadas via construtor
- Implementar uma interface que define seus métodos públicos
- Ter responsabilidade única
- Não acessar diretamente o banco de dados (usar repositories)
- Retornar DTOs ao invés de entidades

## Boas Práticas

- Manter os serviços focados e coesos
- Evitar lógica de negócio nos controllers
- Usar injeção de dependência
- Documentar os métodos públicos
- Implementar tratamento de erros
- Criar testes unitários


