import React from 'react';
import { useField } from 'formik';
import {CustomInput} from './FormStyled';


export const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <CustomInput {...field} {...props} />
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}
        </>
    );
};
