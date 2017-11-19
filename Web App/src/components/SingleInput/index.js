import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (         
        <input
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder} 
        className={props.className}
        id={props.id} 
        required={props.required}
        disabled={props.disabled}
          />
 
);

SingleInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    controlFunc: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: React.PropTypes.string,
};


export default SingleInput;
