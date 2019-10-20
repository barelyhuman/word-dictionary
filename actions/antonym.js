const apiService = require('../utils/api.service');

const relationshipTypeKey = 'antonym';

module.exports = function (word) {
    apiService.fetchRelatedWords(word)
        .then(details => {
            let antonyms = details.filter(item => item.relationshipType === relationshipTypeKey);
            antonyms = antonyms.length > 0 ? antonyms[0].words : ["None Found"];
            console.log("=====Antonyms=====");
            antonyms.forEach(ant => {
                console.log(ant);
            });
            console.log("-----xxxxxxxx-----");
        })
        .catch(err => {
            throw err;
        })
}