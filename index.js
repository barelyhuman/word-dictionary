#! /bin/node

const actionHandler = require('./actions');

function main() {

    let actionArg, word;

    if (process.argv.length === 4) {
        actionArg = process.argv[2];
        word = process.argv[3];
    } else {
        word = process.argv[2];
    }

    console.log(`Word: ${word}`);

    actionHandler(actionArg, word);
}


main();
