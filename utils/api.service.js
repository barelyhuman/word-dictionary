const axios = require('axios');
const APIKey = process.env.APIKey;
const APIURL = require('../sources/datasource.json').APIURL;

const fetchRandomWord = () => {
    const url = APIURL + '/words/randomWord';
    return fetcherWithAdditions(url, 'GET')
        .then(data => {
            return data.data;
        });
};

const fetchWordDefinition = (word) => {
    const url = APIURL + '/word/' + word + '/definitions';
    return fetcherWithAdditions(url, 'GET')
        .then(data => {
            return data.data;
        });
};

const fetchWordExamples = (word) => {
    const url = APIURL + '/word/' + word + '/examples';
    return fetcherWithAdditions(url, 'GET')
        .then(data => {
            return data.data;
        });
};

const fetchRelatedWords = (word) => {
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
            "api_key": APIKey
        }
    });
}


modules.exports = {
    fetchRandomWord,
    fetchRelatedWords,
    fetchWordDefinition,
    fetchWordExamples
}