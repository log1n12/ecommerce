import React from 'react';

import './form-input.style.scss';

const FormInput = ({ label, ...otherFormProps }) => (
    <div className="form">
        <input className="form-input" {...otherFormProps} />
        {
            label ?
                (
                    //pag may value na yung .value magkakaron ng shrink yung classname so hindi siya bababa pag may value
                    <label className={`${otherFormProps.value.length ? 'shrink' : null} form-input-label`}>
                        {label}
                    </label>
                )
                : null
        }
    </div>
)

export default FormInput;