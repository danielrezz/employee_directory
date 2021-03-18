import React from "react";

const styles = {
    margin: {
        marginBottom: 0
    }
};

function Header() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid" style={styles.margin}>
                <div className="container">
                    <h1 className="display-4">The Best Employee Directory</h1>
                    <p className="lead">All your peers. All right heres.</p>
                </div>
            </div>
        </>
    );
};

export default Header;