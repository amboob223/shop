import React from 'react'
import "../App.css";

function Card(props) {
  return (<div>
    <div className="cardC" >
        <img src={props.img} alt="nothing"/>
    <h1>{props.name}</h1>
    <h3>{props.price}</h3>
    <h3>{props.Description}</h3>
    <button>buy now</button>
    </div>
    
  </div>

  )
}

export default Card