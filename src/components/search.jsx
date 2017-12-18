import React from 'react';





class Search extends React.Component {
  constructor(props) {
    super(props);

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
          onChange={(e) => this.props.searchType(e)}>
          <option className="search-select-option" value="movie">Movie</option>
          <option className="search-select-option" value="person">Actor</option>
        </select>
      </div>
    )
  }
}


export default Search;
