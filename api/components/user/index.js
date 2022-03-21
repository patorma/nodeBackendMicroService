const store = require('../../../store/dummy')

const ctrl = require('./controller')

//transformamos el controlador en funcion inyectamos store
module.exports = ctrl(store)