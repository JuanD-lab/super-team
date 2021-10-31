import React from "react";
import PropTypes from "prop-types";

/////////
/* 
    type: 
        succes: green for app actions (login, link)
        primary: blue for card ADD action
        danger: red for card Delete action     
*/
/////////

function Button(action, label, type) {
    return (
        <button className={`btn btn-${type} text-center`} onClick={action}>
            {label}
        </button>
    );
}

Button.propTypes = {
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Button;
