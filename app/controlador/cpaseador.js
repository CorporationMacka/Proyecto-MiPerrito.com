const e = require("express");

exports.getAllPaseadores = function(req, res) {


let mispaseadores = [
    
        {
            "id": 1,
            "NombrePaseador": "Juan Pérez",
            "TipoIdentificacion": "Cédula de Ciudadanía",
            "NumeroCelular": "+57 310 123 4567",
            "Email": "juanperez@mail.com",
            "NumeroCelularEmpresa": "+57 300 765 4321",
            "DireccionEmpresa": "Calle 45 # 12-34, Bogotá, Colombia",
            "DireccionPaseador": "Carrera 22 # 9-45, Bogotá, Colombia",
            "ImagenPaseador": "https://example.com/juan.jpg",
            "TarifaPorHora": 25,
            "CalificacionPaseador": 4.7
        },
        {
            "id": 2,
            "NombrePaseador": "María García",
            "TipoIdentificacion": "Cédula de Ciudadanía",
            "NumeroCelular": "+57 311 234 5678",
            "Email": "mariagarcia@mail.com",
            "NumeroCelularEmpresa": "+57 300 876 5432",
            "DireccionEmpresa": "Calle 72 # 15-20, Medellín, Colombia",
            "DireccionPaseador": "Carrera 55 # 10-12, Medellín, Colombia",
            "ImagenPaseador": "https://example.com/maria.jpg",
            "TarifaPorHora": 30,
            "CalificacionPaseador": 4.9
        },
        {
            "id": 3,
            "NombrePaseador": "Carlos López",
            "TipoIdentificacion": "Cédula de Ciudadanía",
            "NumeroCelular": "+57 315 345 6789",
            "Email": "carloslopez@mail.com",
            "NumeroCelularEmpresa": "+57 300 987 6543",
            "DireccionEmpresa": "Avenida 80 # 34-56, Cali, Colombia",
            "DireccionPaseador": "Calle 13 # 7-89, Cali, Colombia",
            "ImagenPaseador": "https://example.com/carlos.jpg",
            "TarifaPorHora": 20,
            "CalificacionPaseador": 4.5
        },
        {
            "id": 4,
            "NombrePaseador": "Ana Martínez",
            "TipoIdentificacion": "Cédula de Ciudadanía",
            "NumeroCelular": "+57 320 456 7890",
            "Email": "anamartinez@mail.com",
            "NumeroCelularEmpresa": "+57 300 654 3210",
            "DireccionEmpresa": "Calle 50 # 10-30, Barranquilla, Colombia",
            "DireccionPaseador": "Carrera 15 # 5-12, Barranquilla, Colombia",
            "ImagenPaseador": "https://example.com/ana.jpg",
            "TarifaPorHora": 28,
            "CalificacionPaseador": 4.8
        },
        {
            "id": 5,
            "NombrePaseador": "Luis Rodríguez",
            "TipoIdentificacion": "Cédula de Ciudadanía",
            "NumeroCelular": "+57 322 567 8901",
            "Email": "luisrodriguez@mail.com",
            "NumeroCelularEmpresa": "+57 300 543 2109",
            "DireccionEmpresa": "Carrera 70 # 20-25, Bucaramanga, Colombia",
            "DireccionPaseador": "Calle 5 # 3-45, Bucaramanga, Colombia",
            "ImagenPaseador": "https://example.com/luis.jpg",
            "TarifaPorHora": 35,
            "CalificacionPaseador": 4.6
        }
    ]

    res.json(mispaseadores);



    exports.getPaseadoreXnombre = (req, res) => {   

        res.end('<html><body><h1>Nombre del paseador: ' + req.params.pnom+ '</h1></body></html>');


}
    exports.addPaseador = (req, res) => {

        console.log("nombrePaseador; " + req.body.nombrepaseador);


        
    }
    



}

