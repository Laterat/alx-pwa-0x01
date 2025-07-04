## alx-project-0x14

# MoviesDatabase API Integration

This project integrates the [MoviesDatabase API](https://rapidapi.com/SAdrian13/api/moviesdatabase) from RapidAPI Hub. The API offers a wide range of information about movies, TV series, episodes, actors, and crew members.

## API Overview

The MoviesDatabase API provides access to:

- Over **9 million titles**, including movies, series, and episodes.
- Over **11 million actors and crew members**.
- Updated information on **ratings**, **awards**, **trailers**, **cast**, **release dates**, and more.
- Data from IMDb, BoxOfficeMojo, and other sources.
- Support for **searching titles, filtering by genres, year, and type**, and retrieving **detailed metadata** like directors, writers, revenue, and reviews.

## Version

**v1 (current)**

## Available Endpoints

### Titles
- `GET /titles` — Get a list of titles with optional filters (genre, year, titleType, etc.).
- `GET /titles/{id}` — Get detailed info for a specific title by IMDb ID.
- `GET /titles/{id}/ratings` — Get ratings summary (averageRating, numVotes) for a title.
- `GET /titles/x/upcoming` — Get a list of upcoming movies or shows.
- `GET /titles/x/titles-by-ids` — Get multiple titles by passing an array of IMDb IDs.
- `GET /titles/seasons/{seriesId}` — Get the number of seasons in a series.
- `GET /titles/series/{seriesId}` — Get all episodes of a series.
- `GET /titles/series/{seriesId}/{season}` — Get episodes from a specific season.
- `GET /titles/episode/{id}` — Get episode details by IMDb ID.

### Search
- `GET /titles/search/keyword/{keyword}` — Search titles by keyword.
- `GET /titles/search/title/{title}` — Search by exact or partial title.
- `GET /titles/search/akas/{aka}` — Search by AKA (alternate title).

### Actors
- `GET /actors` — List actors (with pagination).
- `GET /actors/{id}` — Get details for a specific actor by IMDb ID.

### Utils
- `GET /title/utils/titleType` — Get available title types.
- `GET /title/utils/genres` — Get available genres.
- `GET /title/utils/lists` — Get available predefined lists (top rated, most popular, etc.).

## Request and Response Format

### Example Request

```http
GET https://moviesdatabase.p.rapidapi.com/titles?genre=Action&limit=5
Headers:
  X-RapidAPI-Key: YOUR_API_KEY
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

📥 Typical Response Format
Most endpoints return a JSON object with a results array. Paginated results include page, next, and entries.

Example Response
{
  "results": [
    {
      "id": "tt1234567",
      "titleText": { "text": "Example Movie" },
      "primaryImage": { "url": "https://..." },
      "titleType": { "text": "movie" },
      "releaseDate": { "year": 2024 },
      "ratingsSummary": { "averageRating": 8.2, "numVotes": 9324 },
      "genres": { "genres": [{ "text": "Action" }] }
    }
  ],
  "page": 1,
  "next": "/titles?page=2"
}



## Authentication
To use the MoviesDatabase API:

Subscribe on RapidAPI.

Add these headers to all requests:
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com


## Error Handling
Status Code	Meaning	Action to Take
401	Unauthorized	Check API key or subscription status.
403	Forbidden	Subscription plan may not allow this request.
404	Not Found	The resource (ID, route) doesn't exist.
429	Too Many Requests	Rate limit exceeded. Use backoff and retry later.
500	Internal Server Error	Temporary error on API provider's side.



## Usage Limits and Best Practices
🚦 Usage Limits
Free/BASIC plan: Limited daily/monthly requests.

Rate Limit: RapidAPI enforces rate limits by plan level.

Hitting your limit returns a 429 Too Many Requests error.

✔️ Best Practices
Use pagination (limit, page) to avoid large payloads.

Use mini_info when you only need basic title info.

Cache responses from static endpoints (e.g., genres, top-rated).

Retry failed requests after short delay if you hit rate limits.

Avoid redundant queries by using titles-by-ids for batch fetches.

🧠 Credits & Support
API by: Adriano Massimo

Support the creator: BuyMeACoffee

Docs: RapidAPI Docs
