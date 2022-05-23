const mongoose = require('mongoose');
// colocamos la url de conexión local y el nombre de la base de datos
module.exports = mongoose.connect('mongodb+srv://admin:admin@isg.hzi4f.mongodb.net/Tienda?retryWrites=true&w=majority').then(() => {
    console.log('Conectado a la base de datos');
}).catch(() => {
    console.log('Conexion fallida');
});