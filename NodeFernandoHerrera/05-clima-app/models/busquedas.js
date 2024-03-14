const axios = require('axios')
class Busquedas {
    historial = ['Madrid', 'Bogota']

    constructor() {
        //TO DO: Leer DB si existe
    }

    async ciudad(lugar = '') {
        try {
            const resp = await axios.get('https://reqres.in/api/users?page=2')
            console.log(resp.data)
        } catch (error) {
            return [] 
        }
    }
}

module.exports = Busquedas