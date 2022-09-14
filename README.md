<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    
 
# API-ENDEREÇOS

## Sobre este projeto

Este projeto tem por principal objetivo o desenvolvimento de uma api de endereços que seráconsumida pelo front-emd commerce suite, disponivel em: https://github.com/matheusgit1/commerce-suit


## Autores

- [Matheus Alves Pereira](https://www.linkedin.com/in/matheus-alves-pereira-4b3781222/)

## Stack utilizada


**Back-end:**
Node,
Express,
nestjs,
typescript,
javascrip,
aws,
Sql,
banco de dados postgress

**Ferramentas de teste:**
jest, postman




## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

no diretorio raíz copie e cole as chaves do arquivo ".env.example" em seu ".env" com os valores adequados

- exemplo
PORT = 3000



## Rodando localmente

### requisitos

nodejs na versao 15.x ou superior

pode ser baixado aqui: https://nodejs.org/pt-br/download/

verifique se o node foi instalado corretamente com o seguinte comendo no cmd ou powerShell

```bash
  node --version
```
#### em caso de comando não reconheciod, reinicie seu computador

#### baixe o aplicativo "expo" na playstore ou apple store.


####  (opcional) instale o yarn para o usar a cli do yarn
no seu cmd ou powerShell use o comando


```bash
  npm install yarn --global
```
verifique se o yarn foi instalado corretamente com o seguinte comendo no cmd ou powerShell

```bash
  yarn --version
```

Clone o projeto com o  seguinto comando no cmd, powerShell, wsl ou qualquer gerenciador
de sub sistemas de sua preferência


```bash
  git clone https://github.com/matheusgit1/api-enderecos.git
```

Entre no diretório do projeto

```bash
  cd api-enderecos
```

Instale as dependências

```bash
  yarn install
```

ou

```bash
  npm install
```

Inicie o servidor

```bash
  yarn start:dev
```
ou

```bash
  npm run yarn start:dev
```

## Condições iniciais

#### para o funcionamento adequado é necessario que suas variaveis de ambientes estejam corretas

# Documentação da api

a collection postman dessa api está idisponivel dentro desse repositório: em: https://github.com/matheusgit1/api-enderecos/blob/main/adress.api.docs

### variaveis

#### URL_API_ENDERECOS: variavel onde a api estará rodando localmente

#### TOKEN: token de auenticação (você só consegue ele na rota de login da api de dutenticação)

### Retornos padronizados

status 400 - Bad request

status 404 - Recurso não encontrado

status 500 - erro interno

stauts 200 - ok

## Rotas


#### Criar um novo recurso no contexto de endereços

```http
  POST /adress/create
```

| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação - {Bearer token} |

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `city` | `string` | **Obrigatório**. nome da cidade|
| `reference` | `string` | **Obrigatório**. referencia de encontro|
| `district` | `string` | **Obrigatório**.  bairro|
| `zipCode` | `string` | **Obrigatório**.  cep-|
| `number` | `string` | **Obrigatório**.  número |
| `block` | `string` | **Obrigatório**.  quadra |
| `state` | `string` | **Obrigatório**.  estado |
| `state` | `string` | **Obrigatório**.  unidade federativa no formato de siglas. ex: ES, DF, MG... |

#### Retorna status 201 caso tudo esteja no formato esperado



#### Listagem de todos os recursos criados pelo usuario

```http
  GET /adress/list
```
| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação - {Bearer token} |

#### Retorna staus 200 e um array de objetos com alistagem de todos os endereços do usuarios n oseguinte formato:

```JSON
[
    {
        "id": "3dc81c46-a7bf-450b-9f90-4ae34739d00a",
        "city": "cidade",
        "userId": "7d15a6fb-69df-4af8-ac29-5b75ab634d88",
        "street": "nome da rua",
        "district": "nome do bairro",
        "zipCode": "cep",
        "number": numero,
        "block": quadra,
        "state": "estado",
        "uf": "uf",
        "reference": "uma referencia qualquer aqui",
        "createdAt": "2022-08-10T18:40:24.786Z",
        "updatedAt": "2022-08-10T18:40:24.786Z"
    },
    ...
]
```

#### Atualiza um recurso

```http
  PUT /adress/edit
```
| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação - {Bearer token} |

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `city` | `string` | **Obrigatório**. nome da cidade|
| `reference` | `string` | **Obrigatório**. referencia de encontro|
| `district` | `string` | **Obrigatório**.  bairro|
| `zipCode` | `string` | **Obrigatório**.  cep|
| `number` | `string` | **Obrigatório**.  número |
| `block` | `string` | **Obrigatório**.  quadra |
| `state` | `string` | **Obrigatório**.  estado |
| `state` | `string` | **Obrigatório**.  unidade federativa no formato de siglas. ex: ES, DF, MG... |
| `adressId` | `string` | **Obrigatório**.  id do encdereço que já foi cadastrado mas quer ser atualizado |


#### Deleta um recurso

```http
  DELETE /adress/delete
```

| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação - {Bearer token} |

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `adressId` | `string` | **Obrigatório**.  id do endereço que já foi cadastrado mas quer ser deletado |


#### Recupera um recurso especifico


```http
  GET /adress/list-one
```

| Headers   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. token de autenticação - {Bearer token} |

| Body   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `adressId` | `string` | **Obrigatório**.  id do endereço que já foi cadastrado |

#### Retorna staus 200 e um objeto no oseguinte formato:

```JSON
{
    "id": "3dc81c46-a7bf-450b-9f90-4ae34739d00a",
    "city": "cidade",
    "userId": "7d15a6fb-69df-4af8-ac29-5b75ab634d88",
    "street": "nome da rua",
    "district": "nome do bairro",
    "zipCode": "cep",
    "number": numero,
    "block": quadra,
    "state": "estado",
    "uf": "uf",
    "reference": "uma referencia qualquer aqui",
    "createdAt": "2022-08-10T18:40:24.786Z",
    "updatedAt": "2022-08-10T18:40:24.786Z"
}
```
