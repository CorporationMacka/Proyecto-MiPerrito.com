
module.exports = function(app) {

    const ctrlPaseador = require('../controlador/cpaseador')

    app.route('/psd/getAllPaseadores')
        .get(ctrlPaseador.getAllPaseadores) 
        
    app.route('/psd/getPaseadorXNombre/:pnom')
        .get(ctrlPaseador.getPaseadorXNombre)

    app.route('/psd/getPaseadorXmp')
        .get(ctrlPaseador.addPaseador)
        .post(ctrlPaseador.addPaseadorXmp)

        .get(ctrlPaseador.getPaseadorById)
    


}