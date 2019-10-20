const antonym = require('./antonym');
const definition = require('./definition');
const synonym = require('./synonym');
const example = require('./example');
const details = require('./details');
const wordOfTheDay = require('./wordOfTheDay');

const actions = {
    ant: antonym,
    def: definition,
    syn: synonym,
    ex: example,
    dict: details,
    default: details,
    emptyArgs: wordOfTheDay
}

module.exports = function (actionArgument, word) {

    if (actions[actionArgument] && word) {
        actions[actionArgument](word);
    } else if (!actionArgument && word) {
        actions.default(word);
    } else {
        actions.emptyArgs();
    }
}