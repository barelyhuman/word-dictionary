const apiService = require('../utils/api.service');

module.exports = function (word) {
    apiService.fetchWordDefinition(word)
        .then(details => {
            console.log("=====Definitions=====");
            details.forEach((definition, index) => {
                console.log(definition.text);
                if (index < details.length - 1) {
                    console.log("--------------");
                }
            });
            console.log("-----xxxxxxxx-----");
        })
        .catch(err => {
            throw err;
        })
}