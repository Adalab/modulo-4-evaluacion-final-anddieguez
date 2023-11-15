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

  if (isNaN(parseInt(idBooks))) {
    res.json({
      success: false,
      error: "El id debe ser un número",
    });
    return;
  }
  //select a la db
  let query = "SELECT * FROM books WHERE id = ?";

  //conexión a la db
  const conn = await getConnection();

  //Ejecutar la consulta
  const [results] = await conn.query(query, [idBooks]);
  console.log(results);

  const nunOfElements = results.length;

  if (nunOfElements === 0) {
    res.json({
      success: true,
      message: "No existe ese libro",
    });
    return;
  }

  //Enviar la respuesta
  res.json({
    results: results[0],
  });
});

//Insertar-añadir nuevo libro
app.post("/books", async (req, res) => {
  const dataBook = req.body; //Objeto
  const { title, author, genre, year, synopsis } = dataBook;

  let sql =
    "INSERT INTO `books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES (?, ?, ?, ?, ?);";
  try {
    //conexión a la db
    const conn = await getConnection();

    //Ejecutar la consulta
    const [results] = await conn.query(sql, [
      title,
      author,
      genre,
      year,
      synopsis,
    ]);

    //validación si el libro se ha insertado o no

    if (results.affectedRows === 0) {
      res.json({
        success: false,
        message: "El libro no se ha podido insertar, inténtalo de nuevo",
      });
      return;
    }

    res.json({
      success: true,
      id: results.insertId, //id que generó MYSQL para la nueva fila
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Upps, ha ocurrido un error ${error}`,
    });
  }
});

//Actualizar libros
//POST sirve para insertar y para actualizar (todo lo que sea enviar datos)
//PUT sirve para actualizar

app.put("/books/:id", async (req, res) => {
  //Obtener los valores del req.body
  const dataBook = req.body; //Objeto
  const { title, author, genre, year, synopsis } = dataBook;
  //Obtener el id del req.params
  const idBooks = req.params.id;

  let sql =
    "UPDATE `books` SET title=?, author=?, genre=?, year=?, synopsis=? WHERE id = ?";

  //conexión a la db
  const conn = await getConnection();

  //Ejecutar la consulta
  const [results] = await conn.query(sql, [
    title,
    author,
    genre,
    year,
    synopsis,
    idBooks,
  ]);
  res.json({
    success: true,
    message: "Se ha actualizado correctamente",
  });
});

//Eliminar un libro DELETE

app.delete("/books/:id", async (req, res) => {
  //Obtener el id del req.params
  const idBooks = req.params.id;

  let sql = "DELETE FROM books WHERE id = ?";

  try {
    //conexión a la db
    const conn = await getConnection();

    //Ejecutar la consulta
    const [results] = await conn.query(sql, [idBooks]);

    //validación si el libro se ha insertado o no

    if (results.affectedRows === 0) {
      res.json({
        success: false,
        message: "No existe el libro que buscas, no se puede eliminar",
      });
      return;
    }

    //Ejecutar la consulta

    res.json({
      success: true,
      message: "Se ha eliminado correctamente",
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Error al eliminar el libro ${error}`,
    });
  }
});
