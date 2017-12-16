import React from 'react';





class Search extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Search..."
            className="search-input"
            ></input>
        </form>
        <select onChange={(e) => this.props.searchType(e)}>
          <option value="movie">Movie</option>
          <option value="person">Actor</option>
        </select>
      </div>
    )
  }
}


export default Search;
