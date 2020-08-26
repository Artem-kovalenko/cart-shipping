import React from 'react';
import { useField } from 'formik';
import {CustomInput, Error, InputWrapper} from './FormStyled';

export const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <InputWrapper>
            <CustomInput {...field} {...props} />
            {meta.touched && meta.error ? (
                <Error>{meta.error}</Error>
            ) : null}
        </InputWrapper>
    );
};
