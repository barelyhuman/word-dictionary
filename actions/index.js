const antonymn = require('./antonym');

const actions = {
    ant: antonymn
}

module.exports = function (actionArgument, word) {
    if (actions[actionArgument]) {
        actions[actionArgument](word);
    }
}