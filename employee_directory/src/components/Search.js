import React, { Component } from "react";

const styles = {
    color: {
        backgroundColor: "white"
    }
};

class Search extends Component {
    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {

        const value = event.target.value;
        const name = event.target.name;

        console.log(value);

        this.setState({
            [name]: value
        });
    };

render() {
    return (
        <>
            <nav className="navbar navbar-light" style={styles.color}>
                <div className="container-fluid d-flex justify-content-end">
                    <form className="d-flex">
                        <input className="form-control me-2" 
                        value={this.state.search}
                        name="search" 
                        onChange={this.handleInputChange}
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
};
};

export default Search;