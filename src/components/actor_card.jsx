import React from 'react';
import numeral from 'numeral'
import { dateHelper } from './util';
import moment from 'moment';



class ActorCard extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    if (this.props.person) {
      const { person } = this.props;
      let { name, picture } = person;

      picture = 'https://image.tmdb.org/t/p/w300' + picture;

      const knownFor = this.props.knownFor.map(el => {
        return {
          movie: el.title,
          poster: el.poster_path,
        }
      })

        return(
          <div className="card-main">
            <img className="card-poster" src={`${picture}`}/>
            <div className="card-details">
              <div className="card-header">
                <div className="card-title">{name}</div>
                  {person.biography && this.renderBio()}
              </div>
              {this.renderAge()}
            </div>
          </div>
        )
      } else {
        return(<div></div>)
      }
  }



  renderBio() {
    const {biography} = this.props.person;
    return(
      <div className="actor-bio-wrapper">
        <span className="biography-label">Biography:</span>
        <div className="card-overview actor-bio">{biography}</div>
      </div>
    )
  }



  renderAge() {
    const {birthday, deathday,
      birthLocation} = this.props.person;

    if (deathday) {
      let b = moment(birthday, 'YYYY-MM-DD');
      let d = moment(deathday, 'YYYY-MM-DD');
      let diff = d.diff(b, 'years');
      let birthdayResult = birthLocation + ', ' + dateHelper(birthday);
      let deathdayResult = dateHelper(deathday) + ` (age ${diff})`
      return(
        <div className="actor-col">
          <div className="actor-property-wrapper">
            <span className="property-label">Born:</span>
            <span className="property">{birthdayResult}</span>
          </div>
          <div className="actor-property-wrapper">
            <span className="property-label">Died:</span>
            <span className="property">{deathdayResult}</span>
          </div>
        </div>
      )
    } else {
        let res = '';
        let parsedBirthday = moment(birthday, 'YYYY-MM-DD').fromNow().split(" ")[0];
        res += birthLocation + ', ' + dateHelper(birthday) + ` (age ${parsedBirthday})`

        return(
            <div className="actor-property-wrapper">
              <span className="property-label">Born:</span>
              <span className="property">{res}</span>
            </div>
        )
    }
  }
}

export default ActorCard;
