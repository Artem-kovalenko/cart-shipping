import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Input } from './Input';
import { validationSchemaJoin } from './ValidationSchema';
import { payForProudcts } from '../../../actions/shipping';
import {
    Wrapper,
    FormLabels,
    FormInputs,
    Label,
    Select,
    PayForm,
    Button
} from './FormStyled'

const ShippingForm = ({ totalCartPrice }) => {

    return (
        <Formik
            validationSchema={validationSchemaJoin}
            initialValues={{
                fullName: '',
                address: '',
                email: '',
                phone: '',
            }}
            onSubmit={(values) => {
                const data = {
                    name: values.fullName,
                    address: values.address,
                    email: values.email.toLowerCase(),
                    phone: values.phone,
                };
                payForProudcts(data);
                console.log(data);
            }}
        >
            {
                ({ isValid }) => (
                    <PayForm>
                        <Wrapper>
                            <FormLabels>
                                <Label>Name*</Label>
                                <Label>Address*</Label>
                                <Label>Email</Label>
                                <Label>Phone</Label>
                                <Label>Shipping options</Label>
                            </FormLabels>

                            <FormInputs>
                                <Input name="fullName" type="text" placeholder="Full name"/>
                                <Input name="address" type="text" placeholder="Address"/>
                                <Input name="email" type="email" placeholder="E-mail"/>
                                <Input name="phone" inputMode="tel" type="text" placeholder="Your Phone Number"/>
                                {
                                    totalCartPrice >= 300 ?
                                        <Input name="shipping" value='FREE EXPRESS SHIPPING' type="text" readOnly/>
                                        :
                                        <Select>
                                            <option>Free Shipping</option>
                                            <option>Express shipping - additional 9.99 €</option>
                                            <option>Courier shipping - additional 19.99 €</option>
                                        </Select>
                                }
                            </FormInputs>
                        </Wrapper>
                        <Button disabled={!isValid} type="submit">
                            Pay
                        </Button>
                    </PayForm>
                )
            }
        </Formik>
    )
}

ShippingForm.propTypes = {
    totalCartPrice: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
    totalCartPrice: state.productsInCart.totalCartPrice
})

export default connect(mapStateToProps)(ShippingForm)

