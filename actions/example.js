const apiService = require('../utils/api.service');

module.exports = function (word) {
    apiService.fetchWordExamples(word)
        .then(details => {
            examples = details.examples.length > 0 ? details.examples : ["None Found"];
            console.log("=====Examples=====");
            examples.forEach((example, index) => {
                console.log(example.text);
                if (index < examples.length - 1) {
                    console.log('--------');
                }
            });
            console.log("-----xxxxxxxx-----");
        })
        .catch(err => {
            throw err;
        })
}