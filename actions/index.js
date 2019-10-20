const antonymn = require('./antonym');
const definition = require('./definition');
const synonym = require('./synonym');
const example = require('./example');

const actions = {
    ant: antonymn,
    def: definition,
    syn: synonym,
    ex: example
}

module.exports = function (actionArgument, word) {
    if (actions[actionArgument]) {
        actions[actionArgument](word);
    }
}