const antonym = require('./antonym');
const definition = require('./definition');
const synonym = require('./synonym');
const example = require('./example');
const details = require('./details');

const actions = {
    ant: antonym,
    def: definition,
    syn: synonym,
    ex: example,
    dict: details,
    default: details
}

module.exports = function (actionArgument, word) {

    if (actions[actionArgument]) {
        actions[actionArgument](word);
    } else {
        actions.default(word);
    }
}