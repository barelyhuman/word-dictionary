const apiService = require('../utils/api.service');
const formatter = require('../utils/formatter');

const relationshipTypeKey = 'synonym';

module.exports = function (word) {
    apiService.fetchRelatedWords(word)
        .then(details => {
            let synonyms = details.filter(item => item.relationshipType === relationshipTypeKey);
            synonyms = synonyms.length > 0 ? synonyms[0].words : ["None Found"];
            formatter.printHeaderText('Synonyms');
            synonyms.forEach(syn => {
                console.log(syn);
            });
            formatter.printFooterText();
        })
        .catch(err => {
            throw err;
        })
}