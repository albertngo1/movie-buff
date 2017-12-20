import React from 'react';
import numeral from 'numeral'

class TVCard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props)
    return(
      <div></div>
    )
  }

  // componentDidUpdate() {
  //
  //   document.body.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original'
  //   + this.props.tv.backdrop + ')';
  // }

}


export default TVCard;
