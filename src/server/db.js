const mysql = require('mysql');

// Crea una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'davidanim12',
  password: 'UfWpyeLmT1Sr]H](',
  database: 'riela_bd',
});

// Conecta a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});

module.exports = connection;
