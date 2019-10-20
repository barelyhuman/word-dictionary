const apiService = require('../utils/api.service');

const relationshipTypeKey = 'synonym';

module.exports = function (word) {
    apiService.fetchRelatedWords(word)
        .then(details => {
            let synonyms = details.filter(item => item.relationshipType === relationshipTypeKey);
            synonyms = synonyms.length > 0 ? synonyms[0].words : ["None Found"];
            console.log("=====Synonyms=====");
            synonyms.forEach(syn => {
                console.log(syn);
            });
            console.log("-----xxxxxxxx-----");
        })
        .catch(err => {
            throw err;
        })
}