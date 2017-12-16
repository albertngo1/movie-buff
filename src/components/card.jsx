import React from 'react';
import numeral from 'numeral'
import { dateHelper } from './util';
let backdrop;




class Card extends React.Component {

  render() {

    if (this.props.movie) {
      let noData = "-";
      const { movie } = this.props;
      let { budget, genres, overview,
         poster, rating, releaseDate, runtime,
          status, tagline, title, boxOffice } = movie;

      poster = 'https://image.tmdb.org/t/p/w300' + poster;
      title = title.toUpperCase();
      budget = numeral(budget).format('$0,0[.]00');
      boxOffice = numeral(boxOffice).format('$0,0[.]00')
      releaseDate = dateHelper(releaseDate);

      return(
        <div className="card-main">
          <img className="card-poster" src={`${poster}`}/>
          <div className="card-details">
            <div className="card-header">
              <div className="card-title">{title}</div>
              <div className="card-tagline">&quot;{tagline}&quot;</div>
              <div className="card-overview">{overview}</div>
            </div>
            <div className="card-col-container">
              <div className="card-col">
                <div className="card-property-wrapper ">
                  <span className="property-label">Budget:</span>
                  <span className="property">{budget}</span>
                </div>
                <div className="card-property-wrapper">
                  <span className="property-label">Rating:</span>
                  <span className="property">{rating} / 10</span>
                </div>
              </div>
              <div className="card-col">
                <div className="card-property-wrapper">
                  <span className="property-label">Release Date:</span>
                  <span className="property">{releaseDate}</span>
                </div>
                <div className="card-property-wrapper">
                  <span className="property-label">Runtime:</span>
                  <span className="property">{runtime} minutes</span>
                </div>
              </div>
              <div className="card-col">
                <div className="card-property-wrapper">
                  <span className="property-label">Box Office:</span>
                  <span className="property">{boxOffice}</span>
                </div>
                <div className="card-property-wrapper">
                  <span className="property-label">Status:</span>
                  <span className="property">{status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div></div>)
    }




  }

  componentDidUpdate() {
    document.body.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original'
    + this.props.movie.backdrop + ')';
  }

}


export default Card;
