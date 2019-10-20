const apiService = require('../utils/api.service');
const formatter = require('../utils/formatter');

const relationshipTypeKey = 'antonym';

module.exports = function (word) {
    apiService.fetchRelatedWords(word)
        .then(details => {
            let antonyms = details.filter(item => item.relationshipType === relationshipTypeKey);
            antonyms = antonyms.length > 0 ? antonyms[0].words : ["None Found"];
            formatter.printHeaderText('Antonyms')
            antonyms.forEach(ant => {
                console.log(ant);
            });
            formatter.printFooterText();
        })
        .catch(err => {
            throw err;
        })
}