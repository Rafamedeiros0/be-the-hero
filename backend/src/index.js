const express = require('express'); //importar o módulo pra dentro do index
const cors = require('cors');
const routes = require("./routes")

const app = express();

app.use(cors()); //se for produção passar uma variavel origin...
app.use(express.json()); //aviso ao express que estou usando JSON nas minhas requisições e ele fará a conversão para JS
app.use(routes); //sempre abaixo da lin ha do express.json

app.listen(3333);


/**
 * Rota / Recurso
 * 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   * 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select(*).where() //aceita qualquer banco SQL
     */
