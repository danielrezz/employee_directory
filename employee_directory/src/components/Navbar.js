import React from "react";

function Navbar(props) {

    return (
        <>

        {/* <p></p> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">BED</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">A-Z</a></li>
                                    <li><a className="dropdown-item" href="#">Z-A</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://www.youtube.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.youtube.com">Action</a></li>
                                    <li><a className="dropdown-item" href="https://www.youtube.com">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="https://www.youtube.com">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input 
                                value={props.searchUsers} 
                                onChange={props.handleInputChange} 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Looking for someone?" 
                                aria-label="Search" 
                            />
                            <button onClick={props.handleFormSubmit} className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;