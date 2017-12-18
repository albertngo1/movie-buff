import React from 'react';
import Card from './card';
import Search from './search';
import Bloodhound from 'bloodhound-js';
import typeahead from 'typeahead.js'
import $ from 'jquery';





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchType: "movie",
    }

    this.searchType = this.searchType.bind(this);
    this.fetchMovieId = this.fetchMovieId.bind(this);
  }

  searchType(evt) {
    this.setState({searchType: evt.currentTarget.value});
  }

  fetchAPI(url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        this.setState({
          movie: {
            id: data.id,
            title: data.title,
            genres: data.genres.map(genre => genre.name),
            overview: data.overview,
            runtime: data.runtime,
            tagline: data.tagline,
            rating: data.vote_average,
            releaseDate: data.release_date,
            poster: data.poster_path,
            backdrop: data.backdrop_path,
            budget: data.budget,
            boxOffice: data.revenue,
            status: data.status,
          }
          })
      })
  }

  fetchMovieId(movieId) {
    const url = `https://api.themoviedb.org/3/${this.state.searchType}/${movieId}?api_key=37f9aa8b184d38890b9d79b807b3c2a0`;
    this.fetchAPI(url);
  }

  componentDidMount() {
    this.fetchMovieId(76341);

    let suggests = new Bloodhound({
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      remote: {
        url: `https://api.themoviedb.org/3/search/${this.state.searchType}?query=%QUERY&api_key=37f9aa8b184d38890b9d79b807b3c2a0`,
        wildcard: '%QUERY',
        filter: (movies) => {
          return movies.results.map(movie => {
            return {
              id: movie.id,
              title: movie.title
            }
          })
        }
      }
    })
    suggests.initialize();


    $('.search-input').typeahead({
        highlight: true,
        minLength: 2,
      },
      {
        display: 'title',
        source: suggests.ttAdapter()
      }
    ).bind('typeahead:select', (e, suggest) => {
      this.fetchMovieId(suggest.id);
    });
  }


  render() {
    return(
      <div class="main-wrapper">
        <Search searchType={this.searchType} queryChange={this.queryChange}/>
        <Card movie={this.state.movie} />
      </div>
    )
  }
}


export default App;
