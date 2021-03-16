import React from "react";

const styles = {
    image: {
      width: "5rem",
      height: "auto"
    }
};

function Table(props) {
    return (
        <>
            <table className="table table-hover">
                {/* <thead>
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <th scope="row"><img alt={props.name} src={props.image} style={styles.image}/></th>
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