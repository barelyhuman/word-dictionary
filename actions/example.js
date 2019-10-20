const apiService = require('../utils/api.service');
const formatter = require('../utils/formatter');

module.exports = function (word) {
    apiService.fetchWordExamples(word)
        .then(details => {
            examples = details.examples.length > 0 ? details.examples : ["None Found"];
            formatter.printHeaderText('Examples');
            examples.forEach((example, index) => {
                if (index < examples.length - 1) {
                    formatter.printWithSeperator(example.text);
                } else {
                    console.log(example.text);
                }
            });
            formatter.printFooterText();
        })
        .catch(err => {
            throw err;
        })
}