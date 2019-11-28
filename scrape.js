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
console.log("Outputting movie titles");
console.log(cineworldCinema.outputMovieTitles());



// Need to get the next two weeks in dates as a string - Cineworld only? 
// Loop through each one and fetch moveies with their titles/posters/times
// Cache everything that is found
// Store the cache in a DB
// Repeat for each cinema
// Just do one location for now

// Store all this data and output
// Need to group showings on a per movie basis
// Then show all showings at all cinemas under one movie 
// Colour coded buttons for showings? 
// These should have URL's that go to the cinemas site

// Finish process
process.exitCode = 0;