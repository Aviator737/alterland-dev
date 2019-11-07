import React from 'react';

const Input = ({ name, value, placeholder, type, delay, onChange, error }) => {
    return(
        <div className="form-group" style={{ transitionDelay: `${delay}`}}>
            <input
                id={ name }
                name={ name }
                value={ value }
                type={ type }
                onChange={ onChange }
                placeholder={ placeholder }
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                className="form-input form-input-center"
            />

            {error && <span className="form-input-error">{error}</span>}

        </div>
    );
};

export default Input;
