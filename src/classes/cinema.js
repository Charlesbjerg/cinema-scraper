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
    buildShowingsData() {

        const $ = cheerio.load(this.rawHtml);
        let showings = [];

        let cinema = this;

        $('.qb-movie').each(function() {
            showings.push(cinema.getShowingsData($(this)));
        });

        return showings;

    }
    getShowingsData(elem) {

        // Setup cheerio
        const $ = cheerio.load(this.rawHtml);
        
        // Get individual showings and their data
        let showings = [];

        $(elem).find('.qb-movie-info-column > a').each(function() {

            let time = $(this).text().trim();
            let showing = {};
            
            // If showing has no :, it is perorder only
            if (time.includes(':')) {
                showing.state = 'Out Now';
                showing.time = time;
                showing.bookingUrl = $(this).attr('data-url');
                showing.info = $(this).attr('data-attrs');
            } else {
                showing.state = 'Preorder';
                showing.availableDate = $(this).text();
                showing.bookingUrl = $(this).attr('href');
            }

            showings.push(showing);
        });

        // Return all data as one object
        return {
            'title': $(elem).find('.qb-movie-name').text(),
            'posterUrl': $(elem).find('.movie-poster-container > img').attr('data-src'),
            'showings': showings
        };
    }
}