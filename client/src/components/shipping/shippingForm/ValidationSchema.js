import * as Yup from 'yup';
export const validationSchemaJoin = Yup.object().shape({
    fullName: Yup.string()
        .max(70)
        .min(3)
        .required('*This field is required*'),
    address: Yup.string()
        .max(70)
        .min(5)
        .required('*This field is required*'),
    email: Yup.string()
        .email()
        .max(70)
        .min(5),
    phone: Yup.string()
        .matches(/^[0-9+]+$/, '*The field should contain only digits*')
        .nullable(),
});
