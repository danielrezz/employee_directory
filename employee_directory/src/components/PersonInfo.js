import React from "react";

function PersonInfo(props) {
  return (
    <div className="text-center">
      <img alt={props.name} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} />
      <h3>Name: {props.name}</h3>
      <h3>Location: {props.location}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default PersonInfo;
