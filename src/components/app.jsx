import React from 'react';
import MovieCard from './movie_card';
import ActorCard from './actor_card';
import Search from './search';




class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchType: "movie",
    }

    this.searchTypeSelect = this.searchTypeSelect.bind(this);
    this.fetchId = this.fetchId.bind(this);
    this.renderCard = this.renderCard.bind(this);
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


  componentWillUpdate(nextProps, nextState) {
    if (this.state.movie && nextState.searchType === 'movie') {
      document.body.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original'
      + nextState.movie.backdrop + ')';
    } else {
      document.body.style.backgroundImage = null;
    }
  }

  renderCard() {
    switch (this.state.searchType) {
      case "movie":
        return(
          <MovieCard movie={this.state.movie} />
        )
        break;
      case "person":
        return(
          <ActorCard person={this.state.person} />
        )
        break;
    }
  }

  render() {
    return(
      <div className="main-wrapper">
        <Search searchTypeSelect={this.searchTypeSelect}
          searchType={this.state.searchType}
          fetchId={(id) => this.fetchId(id)}/>
        {this.renderCard()}
      </div>
    )
  }
}


export default App;
