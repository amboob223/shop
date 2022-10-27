import React from 'react'
import "../App.css";
import { Link } from "react-router-dom"

function Card(props) {
  return (<div>
    <div className="cardC" >
      <img src={props.img} alt="nothing" />
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
      <h3>{props.Description}</h3>
      <Link
        to="/merchform"
      >
        <button>buy now</button>
      </Link>

    </div>

  </div>

  )
}

export default Card