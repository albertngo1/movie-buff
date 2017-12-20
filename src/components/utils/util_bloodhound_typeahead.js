import Bloodhound from 'bloodhound-js';
import typeahead from 'typeahead.js'
import $ from 'jquery';

export const movieAutoComplete = (searchType, fetchMovieId, search, actorKnownFor) => {
  search.suggests = new Bloodhound({
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: `https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=37f9aa8b184d38890b9d79b807b3c2a0`,
      wildcard: '%QUERY',
      cache: false,
      transform: (movies) => {
        return movies.results.map(movie => {
          return {
            id: movie.id,
            value: movie.title
          }
        })
      }
    }
  })
  search.suggests.initialize(true);


  $('.search-input').typeahead({
      highlight: true,
      minLength: 2,
    },
    {
      display: 'value',
      source: search.suggests.ttAdapter()
    }
  ).bind('typeahead:select', (e, suggest) => {
    fetchMovieId(suggest.id)
    actorKnownFor(suggest.knownFor)
  });
}
