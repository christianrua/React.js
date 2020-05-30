import React from "react";
import Detail from "./Detail";
import Avatar from "./Avatar"

function Card(props){
    return (
        <div className="card">
          <div className="top">
              <Detail info={props.id} />
              <h2 className="name">{props.name}</h2>
              <Avatar img={props.image} /> 
          </div>
          <div className="bottom">
            <Detail info={props.phone} />
            <Detail info={props.email} />
          </div>
        </div>
    );
}

export default Card;