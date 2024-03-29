// Cineworld scrape and import functions

const Cinema = require('./classes/cinema'); 
const scraper = require('./classes/scraper');
const files = require('./fs-functions');
const useCache = true;

module.exports = {
    scrapePage: function(url) {
        if (typeof url === 'object') {
            throw new TypeError("Must be a single URL");
        }

        let html = "";

        if (useCache) {
            html = files.fetchCacheData('./cache/site-page-cache.data');
        } else {
            // const scraper = new Scraper(url);
            // scraper.scrape();
            html = scraper.scrapePage(url);
        }

        return html;

    },
    importData: function(html) {
        const cineworld = new Cinema(html);
        return cineworld;
    },


    scrapeByUrl(url) {
        let html = scraper.scrapeUrl(url);
        return html;
    }










};

