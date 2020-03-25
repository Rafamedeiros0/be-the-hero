const express = require('express'); //importar o módulo pra dentro do index
const cors = require('cors');
const routes = require("./routes")

const app = express();

app.use(Cors()); //se for produção passar uma variavel origin...
app.use(express.json());
app.use(routes); //sempre abaixo da linha do express.json

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
