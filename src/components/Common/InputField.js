import * as React from "react";
import PropTypes from "prop-types";

const InputField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
   <div className="form-floating mb-3">
       <input  className="form-control" {...field} {...props} />
       <label htmlFor={field.name}>{props.placeholder}</label>
   </div>
  );
};

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    props: PropTypes.object,
    touched: PropTypes.object,
    errors: PropTypes.object,
};

export default InputField
