module.exports = {
    printHeaderText: function (header) {
        console.log(`=====${header}=====\n`);
    },
    printWithSeperator: function (text) {
        console.log(text);
        console.log('\n-------------------\n');
    },
    printFooterText: function () {
        console.log('\n---------xxx-------\n');
    },
    formatDate: function (date) {
        return new Date(date).toISOString().split('T')[0];
    }
};