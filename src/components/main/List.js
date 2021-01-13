import React from 'react';

const List = ({ img, title, price, description }) => {
  return (
    <article className="card">
      <img src={img} alt={title}/>
      
      <footer>
        <div className="info">
          <h4>
            {title}
          </h4>
          <h4 className="price">$ {price}</h4>
        </div>

        <p className="description">
          {description}
          <button className="btn-read"> Read More</button>
        </p>

        <button className="btn-remove">Not Interested</button>

      </footer>
    </article>
  )
};

export default List;