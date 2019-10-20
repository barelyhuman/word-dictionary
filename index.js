#! /bin/node

const actionHandler = require('./actions');

function main() {

    const actionArg = process.argv[2];
    const word = process.argv[3];

    console.log({ actionArg, word });

    actionHandler(actionArg, word);
}


main();
