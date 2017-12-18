import React from 'react';
import { movieAutoComplete } from './util_bloodhound_typeahead';





class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchId(76341);
    this.initializeMovieAutoComplete();
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.searchType !== nextProps.searchType) {
      this.suggests.clear();
      switch (nextProps.searchType) {
        case "person":
          this.suggests.remote.url = `https://api.themoviedb.org/3/search/person?query=%QUERY&api_key=37f9aa8b184d38890b9d79b807b3c2a0`;
          this.suggests.remote.transform = (actors) => {
            actors.results.map(actor => {
              return {
                id: actor.id,
                value: actor.name,
              }
            })
          }
          break;
        case "movie":
          this.suggests.remote.url = `https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=37f9aa8b184d38890b9d79b807b3c2a0`;
          this.suggests.remote.transform = (movies) => {
            return movies.results.map(movie => {
              return {
                id: movie.id,
                value: movie.title,
              }
            })
          }
          break;
      }

      this.suggests.initialize(true);
    }
  }

  initializeMovieAutoComplete() {
    const { searchType, fetchId } = this.props;
    movieAutoComplete(searchType, fetchId, this);
  }

  render() {
    return (
      <div className="search-wrapper">
          <input
            placeholder="Search..."
            className="search-input"
            type="text"
            ></input>
        <select
          className='search-select'
          onChange={(e) => this.props.searchTypeSelect(e)}>
          <option className="search-select-option" value="movie">Movie</option>
          <option className="search-select-option" value="person">Actor</option>
        </select>
      </div>
    )
  }
}


export default Search;
