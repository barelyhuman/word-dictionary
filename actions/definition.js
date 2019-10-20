const apiService = require('../utils/api.service');
const formatter = require('../utils/formatter');

module.exports = function (word) {
    apiService.fetchWordDefinition(word)
        .then(details => {
            formatter.printHeaderText('Definitions');
            details.forEach((definition, index) => {
                if (index < details.length - 1) {
                    formatter.printWithSeperator(definition.text);
                } else {
                    console.log(definition.text);
                }
            });
            formatter.printFooterText();
        })
        .catch(err => {
            throw err;
        })
}