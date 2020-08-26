import React from "react";
import {Formik, Form} from 'formik';
import {Input} from './Input';
import {validationSchemaJoin} from './ValidationSchema';

import {
    Wrapper,
    FormLabels,
    FormInputs,
    Label
} from './FormStyled'

const ShippingForm = () => {

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
                console.log(data);
            }}
        >
            {
                ({isValid}) => (
                    <Form>
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
                                <select>
                                    <option>Free Shipping</option>
                                    <option>Express Shipping</option>
                                    <option>Courier shipping</option>
                                </select>
                            </FormInputs>
                        </Wrapper>


                        <button disabled={!isValid} type="submit" >
                            Pay
                        </button>
                    </Form>

                    // <Form>
                    //     <div>
                    //         <label>Name*</label>
                    //         <Input name="fullName" type="text" placeholder="Full name"/>
                    //     </div>
                    //     <div>
                    //         <label>Address*</label>
                    //         <Input name="address" type="text" placeholder="Address"/>
                    //     </div>
                    //     <div>
                    //         <label>Email</label>
                    //         <Input name="email" type="email" placeholder="E-mail"/>
                    //     </div>
                    //     <div>
                    //         <lable>Phone</lable>
                    //         <Input name="phone" inputMode="tel" type="text"
                    //                placeholder="Your Phone Number"/>
                    //     </div>
                    //     <div>
                    //         <label>Shipping options</label>
                    //         <select>
                    //           <option>Free Shipping</option>
                    //           <option>Express Shipping</option>
                    //           <option>Courier shipping</option>
                    //         </select>
                    //     </div>
                    //     <button disabled={!isValid} type="submit" >
                    //         Pay
                    //     </button>
                    // </Form>
                )
            }


        </Formik>
    )
}

export default ShippingForm

