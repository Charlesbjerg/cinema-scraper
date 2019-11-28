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

Other Notes
============
- Need to get the next two weeks in dates as a string - Cineworld only? 
- Loop through each one and fetch moveies with their titles/posters/times
- Cache everything that is found
- Store the cache in a DB
- Repeat for each cinema
- Just do one location for now

- Store all this data and output
- Need to group showings on a per movie basis
- Then show all showings at all cinemas under one movie 
- Colour coded buttons for showings? 
- These should have URL's that go to the cinemas site