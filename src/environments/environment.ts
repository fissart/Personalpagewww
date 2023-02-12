export const environment = {
  production: false,
  title: 'Local Environment Heading',
  apiURL: 'http://localhost:8000'
  //apiURL:  'https://wwwwwwww.tk:8000'
};
/*

//db.integers.deleteMany({user:ObjectId('62cf3499f1443acd8c3dc41e')})//teacher amanda as std

//Cambiar contenido de campos
db.averages.updateMany({nota:"00"}, {"$set": {"nota": "0"}})

//


db.averages.find({nota: ''}).count()
db.averages.find({nota:'R'}).count()
db.averages.find({nota:'L'}).count()


db.averages.aggregate([
    {$group : {_id:"$user", count:{$sum:1}}},
    {$sort:{"count":1}}
])

db.averages.aggregate([
    {
        $match: {
          $and: [
               {ciclo: "I"},
               {especialidad: "ED"}
           ]
        },
    },
    {$group : {
      _id:{user:"$user"}, cursos:{$sum:1},
      Puntaje: { $sum: { $multiply: [ 3, {$toInt:'$nota'} ] } },
    }},
    {$lookup: {from: "users", localField: "_id.user", foreignField: "_id", as: "www"}},
    {$sort:{"Puntaje":-1}}
]).pretty()


db.averages.aggregate([
    {
        $match: {
          $and: [
               {ciclo: "I"},
               {especialidad: "ED"}
           ]
        },
    },
    {$group : {
      _id:{user:"$title"}, estudiantes:{$sum:1},
      Puntaje: { $sum: { $multiply: [ 3, {$toInt:'$nota'} ] } },
    }},
    {
          $lookup: {
            from: "averages",
            let: { www: "$_id.user" },
            pipeline: [
               { $match: { $expr: { $eq: ["$title", "$$www"] } } },
               {
                     $lookup: {
                       from: "users",
                       let: { www: "$user" },
                       pipeline: [
                          { $match: { $expr: { $and: [{ $eq: ["$_id", "$$www"] }, { $eq: ["$especialidad",  "ED"] },] } }},
                       ],
                       as: "cursew",
                     },
               },

            ],
            as: "cursew",
          },
    },
    {$sort:{"Puntaje":-1}}
]).pretty()


$multiply:['$quantity',{$toInt:'$product.prize'}]

{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:00:00Z") }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : ISODate("2014-02-03T09:00:00Z") }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity" : 5, "date" : ISODate("2014-02-03T09:05:00Z") }
{ "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10, "date" : ISODate("2014-02-15T08:00:00Z") }
{ "_id" : 5, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : ISODate("2014-02-15T09:05:00Z") }


Ecosistema
Fundamentos Visuales III
Comunicación Visual I
Historia del Arte II
Dibujo III
Geometria Descriptiva
Psicologia del Arte
Taller Principal III - Grabado y Diseño Gráfico

db.example.insertMany(
[
{ "_id" : 1, "city" : "Berkeley, CA", "qty" : 648 },
{ "_id" : 2, "city" : "Bend, OR", "qty" : 491 },
{ "_id" : 3, "city" : "Kensington, CA", "qty" : 233 },
{ "_id" : 4, "city" : "Eugene, OR", "qty" : 842 },
{ "_id" : 5, "city" : "Reno, NV", "qty" : 655 },
{ "_id" : 6, "city" : "Portland, OR", "qty" : 408 },
{ "_id" : 7, "city" : "Sacramento, CA", "qty" : 574 },
)]
db.example.aggregate([
  { $project : { city_state : { $split: ["$city", ", "] }, qty : 1 } },
  { $unwind : "$city_state" },
  { $group : { _id: { "state" : "$city_state" }, total_qty : { "$sum" : "$qty" } } },
  { $match : { city_state : /[A-Z]{2}/ } },
  { $sort : { total_qty : -1 } }
]);

db.example.aggregate([
  { $project : { city_state : { $split: ["$city", ", "] }, qty : 1 } },
  { $unwind : "$city_state" },
  { $match : { city_state : /[A-Z]{2}/ } },
  { $group : { _id: { "state" : "$city_state" }, total_qty : { "$sum" : "$qty" } } },
]);


//1
db.users.updateMany( {"carreramension" : "ARTISTA PROFESIONAL /GRABADO - DISEÑO GRÁFICO" }, {$set:{'mension':'G'}} );
db.users.updateMany( {"carreramension" : "ARTISTA PROFESIONAL /PINTURA" }, {$set:{'mension':'P'}} );
db.users.updateMany( {"carreramension" : "ARTISTA PROFESIONAL /ESCULTURA" }, {$set:{'mension':'E'}} );
db.users.updateMany( {"carreramension" : "EDUCACIÓN ARTÍSTICA"}, {$set:{'mension':'ED'}} )
//2
db.users.updateMany( {"ciclo" : "I CICLO" }, {$set:{'ciclo':'I'}});
db.users.updateMany( {"ciclo" : "III CICLO" }, {$set:{'ciclo':'III'}});
db.users.updateMany( {"ciclo" : "V CICLO" }, {$set:{'ciclo':'V'}});
db.users.updateMany( {"ciclo" : "VII CICLO" }, {$set:{'ciclo':'VII'}});
db.users.updateMany( {"ciclo" : "IX CICLO" }, {$set:{'ciclo':'IX'}});
...5

//4
db.averages.updateMany( {"title" : "Ecosistema" }, {$set:{'title':'Ecosistema	'}} );
db.averages.updateMany( {"title" : "Fundamentos Visuales III" }, {$set:{'title':'Fundamentos Visuales III	'}} );
db.averages.updateMany( {"title" : "Comunicación Visual I" }, {$set:{'title':'Comunicación Visual	'}} );
db.averages.updateMany( {"title" : "Historia del Arte II" }, {$set:{'title':'Historia del Arte II	'}} );
db.averages.updateMany( {"title" : "Psicologia del Arte" }, {$set:{'title':'Psicología del Arte'}} );
db.averages.updateMany( {"title" : "Geometria Descriptiva" }, {$set:{'title':'Geometría Descriptiva I	'}} );
db.averages.updateMany( {"title" : "Taller Principal III - Grabado y Diseño Gráfico" }, {$set:{'title':'Taller Principal III (PEG)	'}} );
db.averages.updateMany( {"title" : "Dibujo III" }, {$set:{'title':'Dibujo III'}} );
...



{
       $group:
         {
           _id: { day: { $dayOfYear: "$date"}, year: { $year: "$date" } },
           totalAmount: { $sum: { $multiply: [ "$price", "$quantity" ] } },
           count: { $sum: 1 }
         }
     }

     { "_id" : { "day" : 46, "year" : 2014 }, "totalAmount" : 150, "count" : 2 }
     { "_id" : { "day" : 34, "year" : 2014 }, "totalAmount" : 45, "count" : 2 }
     { "_id" : { "day" : 1, "year" : 2014 }, "totalAmount" : 20, "count" : 1 }
     db.wwws.insertMany(
[
	{name:"75869653",email: "75869653@w",  size: { h: 14, w: 21, uom: "cm" }, password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")},
	{name:"75869653",email: "75869653@w", password:"75869653",rol:"3",foto:"uploads/cf0802fd-d079-4eb4-bc60-e0d31ae7c939.jpg",createdAt:ISODate("2021-08-16T20:28:22.674Z"),updateAt:ISODate("2021-08-16T20:28:22.674Z")}])
-//Actualizar e ingresar documentos nested
db.users.update( {_id: ObjectId('623cd42f0ad9cfb39677310e')}, { '$set': {"size.h" : 'www'} });
//Actualizar e ingresar documentos nuevos
db.wwws.update( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')}, {$set:{'role':'New MongoDB Tutorial', 'rolewww':'New MongoDB Tutorial'}} )

//Actualizar y agregar documentos nuevos a toda la collección
db.curses.updateMany( { }, {$set:{'ciclo':'V', 'credito':'3', 'especialidad':'G'}} )
db.averages.updateMany( { }, {$set:{'year':'2022' }})
//borrar un campo de todo los documentos
db.averages.updateMany( { }, { $unset: { year: "" } })
---------------------
//Actualizar y aumentar campos
db.curses.update( { '_id':ObjectId('62dfeb1e3715ea8dcc8fcddf') }, {$set:{'name':'Comunicación I', 'number':'39', 'ciclo':'I', especialidad:"ED", credito:"4"}})

//insertar nuevo campo a toda la colleccion con dato en particular
db.averages.updateMany({}, {"$set": {"filosophy": "wwwwwwwwwwwwwwwww"}})

//insertar nuevo campo a algunos datos de la colleccion con un dato en particular
db.users.update( { 'carreramension':'EDUCACIÓN ARTÍSTICA' }, {$set:{'mension':'ED'}} )

//rename field
db.users.updateMany({}, {$rename:{"identificacion_nacional":"dni"}}, false, true)

//eliminar un campo. Only one with ID
db.averages.updateMany({},{"$unset":{"year":1}});
db.averages.updateMany({},{"$unset":{"filosophy":1}});

db.wwws.update( {'_id':ObjectId('623bcd104e6f90b190a6d1d7')}, { $unset: { type: "" } } )

//All with field "type"
db.wwws.updateMany( { }, { $unset: { type: "" } } )

//Remover collection
db.users.deletemany( {'rol':3} )


mongodump --out w1.json --db fismart --host localhost  //descargar
mongodump --out ww.json --db fgpa --host localhost  //descargar
mongorestore --db fismart ww.json/fismart  //subir
mongorestore --db fgpa ww.json/fgpa//subir

mongodump --out w1.json --db fismart --collection wwws --host localhost
mongorestore --db namedatabase --collection namecollectionqueenviar w1.json/fisart //restaurar coleccion.




*/
