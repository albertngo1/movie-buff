import React from 'react';

const CreatedBy = (props) => {
  const knownFor = props.createdBy.map(el => {
    return {
      id: el.id,
      value: el.name,
      poster: 'https://image.tmdb.org/t/p/w300' + el.profile_path,
    }
  }).map((el2, idx) => {
    return(
      <div key={`knownFor-${idx}`} className="actor-related-movies-wrap">
        <img className="actor-movie-poster-pic" src={`${el2.poster}`} />
        <span className="actor-movie-poster-title">{el2.value}</span>
      </div>
    )
  });

  return(
    <div className="known-for-main-wrap">
      <div className="property-label">Created By:</div>
      <div className="actor-related-movies-container">
        {knownFor}
      </div>
    </div>
  )
}




export default CreatedBy;
