import React from 'react';

const KnownFor = (props) => {

  const knownFor = props.knownFor.map(el => {
    if (el.media_type === 'movie') {
      return {
        value: el.title,
        poster: 'https://image.tmdb.org/t/p/w300' + el.poster_path,
      }
    } else if (el.media_type === 'tv'){
      return {
        value: el.name,
        poster: 'https://image.tmdb.org/t/p/w300' + el.poster_path,
      }
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
      <div className="actor-related-movies-label">Known for:</div>
      <div className="actor-related-movies-container">
        {knownFor}
      </div>
    </div>
  )
}




export default KnownFor;
