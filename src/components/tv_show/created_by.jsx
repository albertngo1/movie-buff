import React from 'react';

const CreatedBy = (props) => {
  if (props.createdBy.length > 0) {
    const createdBy = props.createdBy.map(el => {
      return {
        id: el.id,
        value: el.name,
        poster: 'https://image.tmdb.org/t/p/w300' + el.profile_path,
      }
    }).map((el2, idx) => {
      return(
        <div key={`createdBy-${idx}`} className="actor-related-movies-wrap">
          <img className="actor-movie-poster-pic" src={`${el2.poster}`} />
          <span className="actor-movie-poster-title">{el2.value}</span>
        </div>
      )
    });
    return(
      <div className="known-for-main-wrap">
        <div className="property-label">Created By:</div>
        <div className="actor-related-movies-container">
          {createdBy}
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}




export default CreatedBy;
