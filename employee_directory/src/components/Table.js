import React from "react";

function Table(props) {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><img alt={props.name} src={props.image}/></th>
                        <td>{props.name}</td>
                        <td>{props.occupation}</td>
                        <td>{props.location}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Table;