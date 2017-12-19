import React from 'react';
import numeral from 'numeral'
import { dateHelper } from './util';
let backdrop;




class MovieCard extends React.Component {

  render() {
    if (this.props.movie) {
      let noData = "-";
      const { movie } = this.props;
      let { budget, genres, overview,
         poster, rating, releaseDate, runtime,
          status, tagline, title, boxOffice } = movie;

      poster = 'https://image.tmdb.org/t/p/w300' + poster;

      title = title.toUpperCase();

      if (budget === undefined || budget === 0) {
        budget = noData
      } else {
        budget = numeral(budget).format('$0,0[.]00');
      }
      if (boxOffice === undefined || boxOffice === 0) {
        boxOffice = noData
      } else {
        boxOffice = numeral(boxOffice).format('$0,0[.]00');
      }

      if (releaseDate === undefined || releaseDate === "") {
        releaseDate = noData
      } else {
        releaseDate = dateHelper(releaseDate);
      }

      genres = genres.map((genre, idx) => {
        return (
          <span key={`genre-${idx}`} className="genre">{genre}</span>
        )
      });

      rating = rating === 0 ? noData : `${rating} / 10`

      return(
        <div className="card-main">
          <img className="card-poster" src={`${poster}`}/>
          <div className="card-details">
            <div className="card-header">
              <div className="card-title">{title}</div>
              <div className="card-tagline">{tagline}</div>
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
                  <span className="property">{rating}</span>
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
            <div>
              <span className="property-label">Genres:</span>
              <div className="genre-wrap">{genres}</div>
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


export default MovieCard;
