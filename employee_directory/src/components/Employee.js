import React from "react";

function Employee(props) {

    return (

        <ul className="list-group">
            <li className="list-group-item">Name: {JSON.stringify(props.name)}</li>
            <li className="list-group-item">Email: {props.email}</li>
            <li className="list-group-item">Location {props.location}</li>
        </ul>

    );

}

export default Employee;