import React from "react";
import PropTypes from "prop-types";

/////////
/* 
    classType: 
        succes: green for app actions (login, link)
        primary: blue for card ADD action
        danger: red for card Delete action     
*/
/////////

function Button({action, label, classType, ...props}) {
    return (
        <button className={`btn btn-${classType} text-center`} onClick={action} {...props}>
            {label}
        </button>
    );
}

Button.propTypes = {
    action: PropTypes.func,
    label: PropTypes.string.isRequired,
    classType: PropTypes.string.isRequired,
};

export default Button;
