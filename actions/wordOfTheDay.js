const apiService = require('../utils/api.service');
const formatter = require('../utils/formatter');
const detailsAction = require('../actions/details');
const db = require("../sources/storage");

module.exports = async function () {
    try {
        const existingWord = db.get('wordOfTheDay').value();
        const dateNow = new Date(formatter.formatDate(new Date()));
        let wordToUse;

        if (existingWord.word && existingWord.expiry && new Date(existingWord.expiry) > dateNow) {
            wordToUse = existingWord.word;
        } else {
            const word = await apiService.fetchRandomWord();
            wordToUse = word.id;
            const expiryDate = new Date(dateNow).setDate(dateNow.getDate() + 1);
            db.set('wordOfTheDay', {
                word: wordToUse,
                expiry: formatter.formatDate(expiryDate)
            }).write();
        }

        console.log(`Word: ${wordToUse}`);

        await detailsAction(wordToUse);
    } catch (err) {
        throw err;
    }
}