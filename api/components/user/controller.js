

const TABLA = 'user'

module.exports = function(injectedStore){
    let store = injectedStore;
    if(!store){
        //va hacer igual al store de base de datos
        store = require('../../../store/dummy');
    }
    function list(){
        return store.list(TABLA)
    }
    function get(id){
        return store.get(TABLA,id)
    }
    return {
        list,
        get
    }
}
