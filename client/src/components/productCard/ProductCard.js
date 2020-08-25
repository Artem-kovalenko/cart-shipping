import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addToCart} from '../../actions/addToCart';
import {
    CardWrapper,
    Image,
    Info,
    Title,
    Description,
    Pricing,
    Button,
    Price
} from './ProductCardStyled'

function ProductCard({ products, addToCart }) {

    const addProuctToCart = e => {
        const productId = e.target.getAttribute('value');
        console.log(productId)
        addToCart(productId);
    }

    return (
        <Fragment>
            {
                products.map((product, key) => {
                    const {name, description, price, amount} = product;
                    return (
                        <CardWrapper key={key}>
                            <Image src="https://via.placeholder.com/100"/>
                            <Info>
                                <Title>{name}</Title>
                                {/*<Description>{description}</Description>*/}
                                <Description>Lorem ipempor incididunt ut labore et dolore magna aliqua.eu fugiat nulla pariatur. </Description>
                            </Info>
                            <Pricing>
                                <Price>{price} €</Price>
                                <Button
                                    name='123'
                                    value={product._id}
                                    onClick={e => addProuctToCart(e)}
                                >
                                    Add to cart
                                </Button>
                            </Pricing>
                        </CardWrapper>
                    )
                })
            }
        </Fragment>
    )
}

ProductCard.propTypes = {
    addToCart: PropTypes.func.isRequired,
}

export default connect(null, {addToCart})(ProductCard);