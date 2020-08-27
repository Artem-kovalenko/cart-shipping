import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Input } from './Input';
import { validationSchemaJoin } from './ValidationSchema';
import { payForProudcts } from '../../../actions/shipping';
import { setAlert } from '../../../actions/alert';
import {CustomLink} from '../../cart/CartStyled';
import {
    Wrapper,
    FormLabels,
    FormInputs,
    Label,
    Select,
    PayForm,
    ButtonsWrapper,
    Button,
    BackButton
} from './FormStyled'

const ShippingForm = ({ totalCartPrice, setAlert }) => {

    const [selectValue, setSelectValue] = useState('FREE SHIPPING')

    const selectChange = e => {
        const {value} = e.target
        setSelectValue(value)
    }

    return (
        <Formik
            validationSchema={validationSchemaJoin}
            initialValues={{
                fullName: '',
                address: '',
                email: '',
                phone: ''
            }}
            onSubmit={async (values) => {
                const data = {
                    name: values.fullName,
                    address: values.address,
                    email: values.email.toLowerCase(),
                    phone: values.phone,
                    shippingOptions: selectValue
                };
                console.log(data)
                const {status} = await payForProudcts(data);
                status === 200 && setAlert('Order successful ', 'success');
                setTimeout(() => {
                    window.location = '/';
                }, 1500);
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
                                        <Input delivery name="shipping" value='FREE EXPRESS SHIPPING' type="text" readOnly/>
                                        :
                                        <Select onChange={selectChange} name="shipping">
                                            <option>Free Shipping</option>
                                            <option>Express shipping - additional 9.99 €</option>
                                            <option>Courier shipping - additional 19.99 €</option>
                                        </Select>
                                }
                            </FormInputs>
                        </Wrapper>
                        <ButtonsWrapper>
                            <CustomLink to='/cart'>
                                <BackButton>back to cart</BackButton>
                            </CustomLink>
                            <Button disabled={!isValid} type="submit">
                                Pay
                            </Button>
                        </ButtonsWrapper>

                    </PayForm>
                )
            }
        </Formik>
    )
};

ShippingForm.propTypes = {
    totalCartPrice: PropTypes.number.isRequired,
    setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    totalCartPrice: state.productsInCart.totalCartPrice
});

export default connect(mapStateToProps, {setAlert})(ShippingForm)

