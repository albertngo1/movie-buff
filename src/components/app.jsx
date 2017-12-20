import React from 'react';
import MovieCard from './movie_card';
import ActorCard from './actor/actor_card';
import TVCard from './tv_show/tv_card';
import Search from './search';
import { fetchAPI } from './utils/util_api';
import _ from 'lodash';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchType: "movie",
      history: [],
    }

    this.searchTypeSelect = this.searchTypeSelect.bind(this);
    this.fetchId = this.fetchId.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.actorKnownFor = this.actorKnownFor.bind(this);
  }

  searchTypeSelect(evt) {
    this.setState({searchType: evt.currentTarget.value});
  }

  fetchId(id) {
    const url = `https://api.themoviedb.org/3/${this.state.searchType}/${id}?api_key=37f9aa8b184d38890b9d79b807b3c2a0`;
    fetchAPI(url, this);
  }

  actorKnownFor(movies) {
    if (this.state.searchType === 'person') {
      const nextState = _.merge({}, this.state);
      nextState.knownFor = movies;
      this.setState(nextState);
    }
  }


  componentWillUpdate(nextProps, nextState) {
    if (this.state.movie && nextState.searchType === 'movie') {
      document.body.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original'
      + nextState.movie.backdrop + ')';
    } else if (this.state.tv && nextState.searchType === 'tv') {
        document.body.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original'
        + nextState.tv.backdrop + ')';
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
          <ActorCard person={this.state.person}
                     knownFor={this.state.knownFor}/>
        )
        break;
      case "tv":
        return(
          <TVCard tv={this.state.tv} />
        )
    }
  }

  render() {
    return(
      <div className="main-wrapper">
        <Search searchTypeSelect={this.searchTypeSelect}
          searchType={this.state.searchType}
          fetchId={(id) => this.fetchId(id)}
          actorKnownFor={this.actorKnownFor}
          />
        {this.renderCard()}
      </div>
    )
  }
}


export default App;
