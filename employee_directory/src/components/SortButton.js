import React from "react";

const styles = {
    color: {
        color: "black",
        height: "14px"
        // width: "2px"
    },
    size: {
        width: 0,
        height: 0,
        border: "none",
        background: "none"
    }
};

function SortButton(props) {
    return (
        <>
        <button style={styles.size} onClick={props.handleFormSubmit}>
        <a href="#">
            <svg style={styles.color} id="i-caret-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M30 10 L16 26 2 10 Z" />
            </svg>
            </a>
            </button>
        </>
    );
};

export default SortButton;