Cinema Scraper Notes
=====================

Potential schema for a cinema record - not sure if going with mysql or nosql
```
let jsonExample = {
    "cineworldData": {
        "location": "Stoke",
        "url": "https://example.com",
        "movies": [
            {
                "title": "Movie Title",
                "poster": "path/to/img.jpg",
                "showings": [
                    {
                        "date": "28/11/2019",
                        "time": "17:30",
                        "type": 1,
                        "bookingUrl": "https://example.com"
                    }
                ]
            }
        ]
    }
};
```