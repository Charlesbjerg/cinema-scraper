// Require src files
const files = require('./src/fs-functions');
const cineworld = require('./src/cineworld-scrape');

const url = 'https://www.cineworld.co.uk/#/buy-tickets-by-cinema?in-cinema=8106';
const cacheFile = "./cache/movie-cache.json";
const rawPageData = "./cache/site-page-cache-test.data";

console.log('Start');
let newHtml = cineworld.scrapeByUrl(url);
console.log(newHtml);

