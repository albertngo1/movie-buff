import React from 'react';
import Bio from './bio';
import Age from './birth_death_day';
import KnownFor from './known_for';


class ActorCard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.person) {
      let noData = '-'
      const { person } = this.props;
      const { birthday, deathday, birthLocation,
        biography, name} = person;
      let { picture } = person;
      picture = 'https://image.tmdb.org/t/p/w300' + picture;

        return(
          <div className="card-main">
            <img className="card-poster" src={`${picture}`}/>
            <div className="card-details">
              <div className="card-header">
                <div className="card-title">{name}</div>
                  {!!person.biography && <Bio biography={biography}/>}
              </div>
              <Age birthday={birthday} deathday={deathday} birthLocation={birthLocation}/>

              <KnownFor knownFor={this.props.knownFor} />
            </div>
          </div>
        )
      } else {
        return(<div></div>)
      }
  }
}

export default ActorCard;
