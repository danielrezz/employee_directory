import React from "react";

const styles = {
    table: {
      marginBottom: 0
    },
    text: {
        display: "flex",
        justifyContent: "space-between"
    },
    border: {
        border: "none"
    }
};

function Employee(props) {

    return (

        // <ul className="list-group">
        //     <li className="list-group-item">Name: {JSON.stringify(`${props.name.first} ${props.name.last}`).replace(/['"]+/g, '')}</li>
        //     <li className="list-group-item">Email: {JSON.stringify(props.email).replace(/['"]+/g, '')}</li>
        //     <li className="list-group-item">
        //         Location: {JSON.stringify(
        //             `${props.location.city}, ${props.location.state} - ${props.location.country}`).replace(/['"]+/g, '')}</li>
        // </ul>

<table className="table table-hover" style={styles.table}>

<tbody>
  <tr style={styles.text}>
    <th style={styles.border} scope="row"><img alt={props.name} src={props.picture.thumbnail}/></th>
    <td style={styles.border}>{JSON.stringify(`${props.name.first} ${props.name.last}`).replace(/['"]+/g, '')}</td>

    <td style={styles.border}>{JSON.stringify(props.email).replace(/['"]+/g, '')}</td>
    <td style={styles.border}>{JSON.stringify(`${props.location.city}, ${props.location.state} - ${props.location.country}`).replace(/['"]+/g, '')}</td>
  </tr>
</tbody>
</table>

    );

}

export default Employee;