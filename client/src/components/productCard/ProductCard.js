import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../../actions/addToCart';
import { plusProduct } from '../../actions/plusProduct';
import {getProductsInCart} from '../../actions/getProductsInCart';
import {
    CardWrapper,
    InfoWrapper,
    Description,
    Image,
    Line,
    Pricing,
    Button,
    Price,
    AmountPrice,
    Amount,
    Plus,
    Minus,
    Input
} from './ProductCardStyled'

function ProductCard({ products, addToCart, mainPage, plusProduct }) {

    const addProuctToCart = e => {
        const productId = e.target.getAttribute('value');
        addToCart(productId);
    }

    const addProduct = e => {
        const productId = e.target.getAttribute('value')
        plusProduct(productId);
    }

    const removeProduct = e => {
        console.log(e.target.getAttribute('value'))
    }

    return (

        products.map((product, index) => {
            const { name, description, price, totalPrice, amountInCart, productId } = product;
            return (
                <CardWrapper skeleton={false} key={index}>

                    <InfoWrapper>
                        <Image src="https://via.placeholder.com/100"/>
                        <Description>
                            <h2>{name}</h2>
                            {/*<p>{description}</p>*/}
                            <p>Lorem ipempor incididunt ut labore et dolore magna aliqua.eu fugiat
                                nulla pariatur.</p>
                        </Description>
                    </InfoWrapper>

                    <Line/>

                    {
                        mainPage ?
                            <Pricing>
                                <Price>{price} €</Price>
                                <Button
                                    value={product._id}
                                    onClick={addProuctToCart}
                                >
                                    Add to cart
                                </Button>
                            </Pricing>
                            :
                            <AmountPrice>
                                <Amount>
                                    <Plus value={productId} onClick={addProduct}>+</Plus>
                                    <Input type="number" value={amountInCart} readOnly/>
                                    <Minus value={productId} onClick={removeProduct}>-</Minus>
                                </Amount>
                                <Price>{totalPrice} €</Price>
                            </AmountPrice>
                    }

                </CardWrapper>
            )
        })
    )
}

ProductCard.propTypes = {
    addToCart: PropTypes.func.isRequired,
    plusProduct: PropTypes.func.isRequired,
}

export default connect(null, { addToCart, plusProduct })(ProductCard);
