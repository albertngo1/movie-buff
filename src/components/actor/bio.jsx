import React from 'react';

const Bio = (props) => {
  const {biography} = props;
  return(
    <div className="actor-bio-wrapper">
      <span className="biography-label">Biography:</span>
      <div className="card-overview actor-bio">{biography}</div>
    </div>
  )
}

export default Bio;
