import React from 'react';

const Bio = (props) => {
  let {biography} = props;
  biography = biography.split('\n').map((el, idx) => <div key={`par-${idx}`}>{el}<br/></div>)
  
  return(
    <div className="actor-bio-wrapper">
      <span className="biography-label">Biography:</span>
      <div className="card-overview actor-bio">{biography}</div>
    </div>
  )
}

export default Bio;
