import React from 'react';
import { dateHelper } from '../utils/util';
import moment from 'moment';

const Age = (props) => {
  const {birthday, deathday,
    birthLocation} = props;
  if (birthday) {
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
  } else {
    return(
      <div></div>
    )
  }
}

export default Age;
