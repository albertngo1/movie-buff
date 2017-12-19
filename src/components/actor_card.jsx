import React from 'react';
import numeral from 'numeral'
import { dateHelper } from './util';



class ActorCard extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.person) {
      console.log(this.props.person)
      let noData = "-";
      const { person } = this.props;
      let { biography, birthday, deathday,
        birthLocation, name, picture } = person;

        picture = 'https://image.tmdb.org/t/p/w300' + picture;

        return(
          <div className="card-main">
            <img className="card-poster" src={`${picture}`}/>
            <div className="card-details">
              <div className="card-header">
                <div className="card-title">{name}</div>
                <div className="card-overview">{biography}</div>
              </div>
            </div>
          </div>
        )
      } else {
        return(<div></div>)
      }
  }
}

export default ActorCard;
