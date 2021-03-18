import React from "react";

const styles = {
    color: {
        color: "black",
        height: "14px"
        // width: "2px"
    }
};

function SortButton(props) {
    return (
        <>
        <a href="#">
            <svg style={styles.color} onClick={props.handleFormSubmit} id="i-caret-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M30 10 L16 26 2 10 Z" />
            </svg>
            </a>
            
        </>
    );
};

export default SortButton;