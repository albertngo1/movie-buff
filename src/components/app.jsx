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
  }

  searchType(evt) {
    this.setState({searchType: evt.currentTarget.value});
  }

  fetchAPI() {

    const url = "https://api.themoviedb.org/3/movie/76341?api_key=37f9aa8b184d38890b9d79b807b3c2a0";

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

  componentDidMount() {
    this.fetchAPI();

    let suggests = new Bloodhound({
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: `https://api.themoviedb.org/3/search/${this.state.searchType}?query=dun&api_key=37f9aa8b184d38890b9d79b807b3c2a0`,
        filter: (movies) => {
          console.log(movies)
          console.log(movies.results)
        }
      }
    })
    suggests.initialize();


    $('.search-input').typeahead({
        hint: true,
        highlight: true,
        minLength: 2,
      },
      {source: suggests.ttAdapter()});
  }


  render() {
    return(
      <div>
        <Search searchType={this.searchType} />
        <Card movie={this.state.movie} />
      </div>
    )
  }
}


export default App;
