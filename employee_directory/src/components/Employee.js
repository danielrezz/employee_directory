import React from "react";

function Employee(props) {

    return (

        <ul className="list-group">
            <li className="list-group-item">Name: {JSON.stringify(`${props.name.first} ${props.name.last}`).replace(/['"]+/g, '')}</li>
            <li className="list-group-item">Email: {JSON.stringify(props.email).replace(/['"]+/g, '')}</li>
            <li className="list-group-item">
                Location: {JSON.stringify(
                    `${props.location.city}, ${props.location.state} - ${props.location.country}`).replace(/['"]+/g, '')}</li>
        </ul>

    );

}

export default Employee;