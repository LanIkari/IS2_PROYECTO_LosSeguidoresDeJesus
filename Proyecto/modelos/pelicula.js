var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PeliculaSchema=Schema({
    id:Number,
    titulo:String,
    anno:Number,
    genero:String,
    duracion:String,
    sinopsis:String,
    director:String,
    reparto:String,


})
module.exports=mongoose.model('Peliculas',PeliculaSchema)