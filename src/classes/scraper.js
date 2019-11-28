// Main scraper class, used to scrape data and return it

module.exports = class Scraper {
    constructor(url) {
        if (typeof url === 'String') {
            this.urlList = [url];
        } else {
            this.urlList = url;
        }
    }
    get urlList() {
        return this.urlList;
    }
    get rawHtml() {
        return this.rawHtml;
    }
    set rawHtml(html) {
        this.rawHtml = html; 
    }
    addUrl(url) {
        this.urlList.push(url);
    }
    scrape() {
        if (this.urlList.length === 0) {
            throw new Error("No URL's specified");
        }

        // ONLY WORKS WITH 1 URL AT THE MOMENT  
        let currentUrl = this.urlList[0];

        puppeteer.launch()
            .then(browser => browser.newPage())
            .then(page => {
                return page.goto(currentUrl).then(function () {
                    return page.content();
                });
            })
            .then(html => {
                this.rawHtml = html;
            })
            .catch(console.error);
    }
}
