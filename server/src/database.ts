// import mysql from 'promise-mysql';

// import keys from './keys'

// const pool = mysql.createPool(keys.database);

// pool.getConnection()
//     .then(connection => {
//         pool.releaseConnection(connection);
//         console.log('DB is connected');
//     });

// export default pool;

import mysql from 'mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection(function(err,conn){
    console.log('DB is conected')
    // La conexión se libera automáticamente cuando se resuelve la consulta
});


export default pool;