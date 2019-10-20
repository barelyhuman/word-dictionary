#! /bin/node

const actionHandler = require('./actions');

function main() {

    const actionArg = process.argv[2];
    const word = process.argv[3];

    console.log(`Word: ${word}`);

    actionHandler(actionArg, word);
}


main();
