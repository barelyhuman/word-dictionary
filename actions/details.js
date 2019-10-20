const antonym = require('./antonym');
const definition = require('./definition');
const synonym = require('./synonym');
const example = require('./example');


const printOrder = [definition, synonym, antonym, example];

module.exports = async function (word) {
    try {
        printOrder.forEach(printer => {
            printer(word);
        });
    } catch (err) {
        throw err;
    }
}
