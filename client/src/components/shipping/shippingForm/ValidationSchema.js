import * as Yup from 'yup';
const regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const validationSchemaJoin = Yup.object().shape({
    fullName: Yup.string()
        .max(70)
        .min(3)
        .required('This field is required'),
    address: Yup.string()
        .max(70)
        .min(5)
        .required('This field is required'),
    email: Yup.string()
        .email()
        .max(70)
        .min(5)
        .required('This field is required'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'The field should contain only digits')
        .length(10, 'The field should contain 10 characters')
        .nullable(),
});
