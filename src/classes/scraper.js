// Main scraper class, used to scrape data and return it
const puppeteer = require('puppeteer');

// module.exports = class Scraper {
//     constructor(url) {
//         this.url = url;
//     }
//     get url() {
//         return this._url;
//     }
//     set url(url) {
//         this._url = url;
//     }
//     get urlList() {
//         return this._urlList;
//     }
//     get rawHtml() {
//         return this._rawHtml;
//     }
//     set rawHtml(html) {
//         this._rawHtml = html; 
//     }
//     addUrl(url) {
//         this._urlList.push(url);
//     }
//     addMultipleUrls(urlList) {
//         this._urlList.concat(urlList);
//     }
//     scrape() {

//         // ONLY WORKS WITH 1 URL AT THE MOMENT  
//         let currentUrl = this.url;
//         console.log("Running puppeteer");
//         this.runScraper();
//         console.log("After puppeteer");


//     }
//     runScraper() {
        
//     }
// }

module.exports = {
    scrapePage: function(url) {
        console.log(url);

        let html = this.runScraper(url);

        return html;

    },
    runScraper: function(url) {
        console.log("Run Scraper");
        puppeteer.launch()
            .then(browser => browser.newPage())
            .then(page => {
                console.log("Navigating to URL")
                return page.goto(url).then(function () {
                    return page.content();
                });
            })
            .then(html => {
                console.log("finished running, returning html");
                return html;
            })
            .catch(err => {
                reject(err);
            });
    },
    scrapeUrl: function(url) {

        
        console.log('scrapeUrl');
        let rawHtml = '';
        
        void (async() => {
            try {

                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(url);
                await page.content((html) => {
                    rawHtml = html;
                    console.log("Got the HTML!");
                })
                
                await browser.close();
            } catch (err) {
                console.error(err);
            }

            
        });
        
        return rawHtml;

    }
}