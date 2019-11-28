// Contains the cinema class
const cheerio = require('cheerio');

module.exports = class Cinema {
    constructor(args) {
        this.rawHtml = args.rawHtml || '';
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    get rawHtml() {
        return this._rawHtml;
    }
    set rawHtml(rawHtml) {
        this._rawHtml = rawHtml;
    }
    saveParsedData() {

    }
    outputMovieTitles() {

        const $ = cheerio.load(this.rawHtml);
        let titles = [];

        $('.qb-movie-name').each(function() {
            titles.push({
                title: $(this).text(),
            });
        })

        return titles;

    }
}