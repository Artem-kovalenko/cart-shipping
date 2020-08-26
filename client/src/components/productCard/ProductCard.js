import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/addToCart';
import { plusProduct } from '../../actions/plusProduct';
import { minusProduct } from '../../actions/minusProduct';
import { deleteFromCart } from '../../actions/cart'
import trashCan from '../../assets/icons/trash-can.svg';
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
    Input,
    TrashCan
} from './ProductCardStyled'

function ProductCard({ products, addToCart, mainPage, plusProduct, minusProduct, deleteFromCart }) {
console.log('products',products);
    const getId = e => e.target.getAttribute('value');

    const addProuctToCart = e => {
        const productId = getId(e);
        addToCart(productId);
    };

    const addProduct = e => {
        const productId = getId(e);
        plusProduct(productId);
    };

    const removeProduct = e => {
        const productId = getId(e);
        minusProduct(productId);
    };

    const deleteProduct = e => {
        const productId = getId(e);
        let totalPrice = null;
        products.map(item => item.productId === productId ? totalPrice = item.totalPrice : null);
        deleteFromCart(productId, totalPrice);
    };

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
                                    {amountInCart > 1 ? <Minus value={productId} onClick={removeProduct}>-</Minus> : null}
                                    <Input
                                        type="number"
                                        value={amountInCart}
                                        readOnly
                                        min="1"
                                        max="50"
                                        step="1"
                                    />
                                    {amountInCart <= 49  ? <Plus value={productId} onClick={addProduct}>+</Plus> : null}
                                </Amount>
                                <Price>{totalPrice} €</Price>
                                <TrashCan
                                    value={productId}
                                    onClick={deleteProduct}
                                    src={trashCan}
                                    alt="trash-can.svg"/>
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
    minusProduct: PropTypes.func.isRequired,
    deleteFromCart: PropTypes.func.isRequired,
};

export default connect(null, { addToCart, plusProduct, minusProduct, deleteFromCart })(ProductCard);
