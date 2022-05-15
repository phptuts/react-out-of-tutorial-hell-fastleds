import React from 'react';

const Led = ({ color, position, connectionClass = '' }) => {
  return (
    <div className={`led ${connectionClass}`}>
      <div
        style={{
          backgroundColor: color,
        }}
        className="light"
      >
        {position}
      </div>
    </div>
  );
};

export default Led;