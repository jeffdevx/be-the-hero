/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Aletrar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros noeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para indentificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FORM users
     * Query Builder: table('users').select('*').where()
     */

const express = require('express');
const routes = require('./routes'); //o ./ é para referenciar a mesma pasta do arquivo, se quisesse ser uma pasta antes era só usar ../
const cors = require('cors');

const app =  express();

app.use(cors()); //origin: 'http://meuapp.com.br - hospedagem
app.use(express.json());
app.use(routes);

app.listen(3333);