import React from 'react';
import numeral from 'numeral';
import { dateHelper } from '../utils/util';
import CreatedBy from './created_by';

class TVCard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tv.backdrop) {
      document.body.style.backgroundImage = 'url(http://image.tmdb.org/t/p/original'
      + nextProps.tv.backdrop + ')';
    }
  }

  render() {
    if (this.props.tv) {
      let noData = "N/A";
      const { tv } = this.props;
      let { name, poster, overview,
        createdBy, genres, firstAired,
        lastAired, runTime, networks,
        productionCompanies, seasons,
        rating } = tv;

      poster = 'https://image.tmdb.org/t/p/w300' + poster;

      if (firstAired) {
        firstAired = dateHelper(firstAired);
      } else {
        firstAired = noData;
      }

      if (lastAired) {
        lastAired = dateHelper(lastAired);
      } else {
        lastAired = noData;
      }

      if (runTime) {
        runTime = runTime[0] + " minutes";
      } else {
        runTime = noData;
      }

      if (rating) {
        rating += " / 10";
      } else {
        rating = noData;
      }

      if (seasons.length === 0) {
        seasons = noData;
      }

      genres = genres.map((genre, idx) => {
        return (
          <span key={`genre-${idx}`} className="genre">{genre}</span>
        )
      });

      networks = networks.map((network, idx) => {
        return (
          <span key={`network-${idx}`} className="genre">{network}</span>
        )
      });


      return(
        <div className="card-main">
          <img className="card-poster" src={`${poster}`}/>
          <div className="card-details">
            <div className="card-header">
              <div className="card-title">{name}</div>

                <div className="tv-header-details">
                  <span>First Aired: <p>{firstAired}</p></span>
                  <span>Last Aired: <p>{lastAired}</p></span>
                  <span>Runtime: <p>{runTime}</p></span>
                  <span>Rating: <p>{rating}</p></span>
                </div>
              <div className="card-overview">{overview}</div>
            </div>
            <div className="card-col-container">
              <div className="card-col">
                <div className="card-property-wrapper">
                  <span className="property-label">Networks:</span>
                  <div className="property">{networks}</div>
                </div>
              </div>
              <div className="card-col">
                <div className="card-property-wrapper">
                  <span className="property-label">Seasons:</span>
                  <div className="property">{seasons.length}</div>
                </div>
              </div>
              <div className="card-col">
                <div className="card-property-wrapper">
                  <span className="property-label">Genres:</span>
                  <div className="genre-wrap">{genres}</div>
                </div>
              </div>
            </div>
            <CreatedBy createdBy={createdBy}/>
          </div>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

}


export default TVCard;
