import React from "react";

function Employee(props) {

    return (

        // <ul className="list-group">
        //     <li className="list-group-item">Name: {JSON.stringify(`${props.name.first} ${props.name.last}`).replace(/['"]+/g, '')}</li>
        //     <li className="list-group-item">Email: {JSON.stringify(props.email).replace(/['"]+/g, '')}</li>
        //     <li className="list-group-item">
        //         Location: {JSON.stringify(
        //             `${props.location.city}, ${props.location.state} - ${props.location.country}`).replace(/['"]+/g, '')}</li>
        // </ul>

<table className="table table-hover">
{/* <thead>
  <tr>
    <th scope="col">Photo</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Location</th>
  </tr>
</thead> */}
<tbody>
  <tr>
    <th scope="row"><img alt={props.name} src={props.picture.thumbnail}/></th>
    <td>{JSON.stringify(`${props.name.first} ${props.name.last}`).replace(/['"]+/g, '')}</td>
    <td>{JSON.stringify(props.email).replace(/['"]+/g, '')}</td>
    <td>{JSON.stringify(`${props.location.city}, ${props.location.state} - ${props.location.country}`).replace(/['"]+/g, '')}</td>
    <td></td>
  </tr>
</tbody>
</table>

    );

}

export default Employee;