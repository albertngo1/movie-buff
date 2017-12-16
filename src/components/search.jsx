import React from 'react';





class Search extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <input
          placeholder="Search..."

          ></input>
        <select onChange={(e) => this.props.searchType(e)}>
          <option value="movie">Movie</option>
          <option value="actor">Actor</option>
        </select>
      </div>
    )
  }
}


export default Search;
