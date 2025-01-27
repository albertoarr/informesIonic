const express = require('express')
const postgres = require('postgres')
const cors = require('cors')

const app = express()
const port = 3002
app.use(cors())

var con = postgres({
  host: "localhost",
  user: "tarde",
  password: "5206",
  database: 'matriculaAlberto'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("DB Connected!");
});

app.get('/api/productos', (req, res) => {
    const sql_query = ' SELECT * FROM alumnos';

    con.query(sql_query, function (err, result) {
        if (err) throw err;
        console.log("Resultado: " + result);

        res.json(result);
      });
})

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`)
})
