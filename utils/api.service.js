const axios = require('axios');
const APIKEY = require('../sources/datasource.json').APIKEY;
const APIURL = require('../sources/datasource.json').APIURL;

const fetchRandomWord = () => {
    const url = APIURL + '/words/randomWord';
    return fetcherWithAdditions(url, 'GET')
        .then(data => {
            return data.data;
        });
};

const fetchWordDefinition = (word) => {
    if (!word) {
        return Promise.reject("No Word");
    }
    const url = APIURL + '/word/' + word + '/definitions';
    return fetcherWithAdditions(url, 'GET')
        .then(data => {
            return data.data;
        });
};

const fetchWordExamples = (word) => {
    if (!word) {
        return Promise.reject("No Word");
    }
    const url = APIURL + '/word/' + word + '/examples';
    return fetcherWithAdditions(url, 'GET')
        .then(data => {
            return data.data;
        });
};

const fetchRelatedWords = (word) => {
    if (!word) {
        return Promise.reject("No Word");
    }
    const url = APIURL + '/word/' + word + '/relatedWords';
    return fetcherWithAdditions(url, 'GET')
        .then(data => {
            return data.data;
        });
};


const fetcherWithAdditions = (url, method) => {
    return axios({
        url,
        method,
        params: {
            "api_key": APIKEY
        }
    });
}


module.exports = {
    fetchRandomWord,
    fetchRelatedWords,
    fetchWordDefinition,
    fetchWordExamples
}