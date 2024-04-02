"use strict";
// import mysql from 'promise-mysql';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import keys from './keys'
// const pool = mysql.createPool(keys.database);
// pool.getConnection()
//     .then(connection => {
//         pool.releaseConnection(connection);
//         console.log('DB is connected');
//     });
// export default pool;
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection(function (err, conn) {
    console.log('DB is conected');
    // La conexión se libera automáticamente cuando se resuelve la consulta
});
exports.default = pool;
