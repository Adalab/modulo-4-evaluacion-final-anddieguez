//imports

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//arrancar el servidor
const app = express();

//configurar

app.use(cors());
app.use(express.json()); //si voy a cargar imagenes poner el límite (no es el caso ahora)

//conexión con mi base de datos: MYSQL

async function getConnection() {
  //crear y configurar la conexion
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Izanfuriass12",
    database: "mybooks_db",
  });

  connection.connect();
  return connection;
}

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`servidor iniciado en http://localhost:${port}`);
});

//ENPOINTS

//Obtener todos los libros

app.get("/books", async (req, res) => {
  //select a la db
  let query = "SELECT * FROM books";

  //conexión a la db

  const conn = await getConnection();

  //Ejecutar la consulta
  const [results] = await conn.query(query);
  console.log(results);

  const nunOfElements = results.length;

  //Enviar la respuesta
  res.json({
    info: { count: nunOfElements },
    results: results,
  });
});

//obtener un libro por su ID
app.get("/books/:id", async (req, res) => {
  //obtener el ID (url params)
  const idBooks = req.params.id;

  //select a la db
  let query = "SELECT * FROM books WHERE id = ?";
});
