import React, { useState } from 'react';

function Place({ id, image, name, price, info, removePlace }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <img src={image} alt={name}/>
      
      <footer>
        <div className="info">
          <h4>
            {name}
          </h4>
          <h4 className="price">$ {price}</h4>
        </div>

        <p className="description">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="btn-read" onClick={() => setReadMore(!readMore)}> {readMore ? 'Show Less' : 'Read More'}</button>
        </p>

        <button className="btn-remove" onClick={() => removePlace(id)}>Not Interested</button>

      </footer>
    </>
  )
}

export default Place;
