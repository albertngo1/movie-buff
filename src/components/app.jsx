import React from 'react';
import MovieCard from './movie_card';
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
    switch (this.state.searchType) {
      case "movie":
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
          break;
      case "person":
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then(data => {
            this.setState({
              person: {
                id: data.id,
                biography: data.biography,
                birthday: data.birthday,
                deathday: data.deathday,
                birthLocation: data.place_of_birth,
                name: data.name,
                picture: data.profile_path,
              }
            })
          })
        break;

    }
  }

  fetchId(id) {
    const url = `https://api.themoviedb.org/3/${this.state.searchType}/${id}?api_key=37f9aa8b184d38890b9d79b807b3c2a0`;
    this.fetchAPI(url);
  }

  renderCard() {

  }

  render() {
    console.log(this.state)
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
