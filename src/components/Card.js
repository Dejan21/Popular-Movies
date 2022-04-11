import React from 'react';

const Card = (props) => {
    return (
        <div className="card" >
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
    );
};

export default Card;

