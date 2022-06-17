//import Imports model
const Imports = require('../models/Imports');

async function save(content) {
        const response = await Imports.create({
            rawContent: JSON.stringify(content),
        })
        .then(async function (data) {
                const res = { success: true, data: data, message: "created successful" }
                return res;
            })
            .catch(error => {
                const res = { success: false, error: error }
                return res;
            })
            return response;
       
}





module.exports = { save };