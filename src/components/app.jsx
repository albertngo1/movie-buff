import React from 'react';
import Card from './card';
import Search from './search';





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
          object: {
            movieId: data.id,
            movieTitle: data.title,
            movieGenres: data.genres.map(genre => genre.name),
            movieOverview: data.overview,
            movieRuntime: data.runtime,
            movieStatus: data.status,
            movieTagline: data.tagline,
            movieRating: data.vote_average,
            movieReleaseDate: data.release_date,
            moviePoster: data.poster_path,
            movieBackDrop: data.backdrop_path,
            movieBudget: data.budget,
          }
          })
      })
  }

  componentDidMount() {
    this.fetchAPI();
  }


  render() {
    console.log(this.state);
    return(
      <div>
        <Search searchType={this.searchType} />
        <Card />
      </div>
    )
  }
}


export default App;
