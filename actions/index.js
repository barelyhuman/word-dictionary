const antonymn = require('./antonym');
const definition = require('./definition');

const actions = {
    ant: antonymn,
    def: definition
}

module.exports = function (actionArgument, word) {
    if (actions[actionArgument]) {
        actions[actionArgument](word);
    }
}