import React from "react";

function Navbar(props) {

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
            </table>
        </>
    );
};

export default Navbar;