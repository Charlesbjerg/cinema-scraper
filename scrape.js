// Require Libraries
const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');

// Require src files
const files = require('./src/fs-functions');
const cineworld = require('./src/cineworld-scrape');

const url = 'https://www.cineworld.co.uk/#/buy-tickets-by-cinema?in-cinema=8106';
const cacheFile = "./cache/movie-cache.json";
const rawPageData = "./cache/site-page-cache.data"

console.log("Starting scrape");
console.log("Scrape finished | Importing data into object");
let rawHtml = cineworld.scrapePage(url);
let cineworldCinema = cineworld.importData({ rawHtml: rawHtml });
console.log("Class setup");

let showingsData = cineworldCinema.buildShowingsData();
files.writeJsonToFile('./cache/showings.json', showingsData);
console.log("Showings data written to json")

// Make sure process finishes
process.exitCode = 0;