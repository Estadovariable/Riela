const db = require('./db');

db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('La solución es: ', results[0].solution);
});

// Verifica si el usuario y la contraseña son correctos en la base de datos
const user = 'admin';
const password = 'admin';
db.query(
  `SELECT * FROM users WHERE user = '${user}' AND password = '${password}'`,
  (error, results) => {
    if (error) {
      throw error;
    }

    if (results.length === 0) {
      console.log('Usuario o contraseña incorrectos');
    } else {
      console.log('Usuario autenticado:', results[0].user);
    }
  }
);

db.end();