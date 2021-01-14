import React from 'react';
import Place from '../place/Place';

const List = ({ places, removePlace }) => {
  return (
    <>
      {places.map(place => {
        return (
          <article className="card">
            <Place key={place.id} {...place} removePlace={removePlace} />
          </article>
          )
        })}
    </>
  )
};

export default List;
