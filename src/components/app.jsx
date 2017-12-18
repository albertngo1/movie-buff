import React from 'react';
import MovieCard from './card';
import Search from './search';





class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchType: "movie",
    }

    this.searchTypeSelect = this.searchTypeSelect.bind(this);
    this.fetchId = this.fetchId.bind(this);
  }

  searchTypeSelect(evt) {
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

  fetchId(id) {
    const url = `https://api.themoviedb.org/3/${this.state.searchType}/${id}?api_key=37f9aa8b184d38890b9d79b807b3c2a0`;
    this.fetchAPI(url);
  }

  render() {
    return(
      <div className="main-wrapper">
        <Search searchTypeSelect={this.searchTypeSelect}
          searchType={this.state.searchType}
          fetchId={(id) => this.fetchId(id)}/>
        <MovieCard movie={this.state.movie} />
      </div>
    )
  }
}


export default App;
