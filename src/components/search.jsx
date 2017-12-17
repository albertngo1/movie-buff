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
        <select onChange={(e) => this.props.searchType(e)}>
          <option value="movie">Movie</option>
          <option value="person">Actor</option>
        </select>
      </div>
    )
  }
}


export default Search;
