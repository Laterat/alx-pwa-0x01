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

