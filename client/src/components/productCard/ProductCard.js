import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart, plusProduct, minusProduct, deleteFromCart } from '../../actions/cart';
import {setAlert} from '../../actions/alert';
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

function ProductCard({ mainPage, products, addToCart, plusProduct, minusProduct, deleteFromCart, setAlert }) {

    const getId = e => e.target.getAttribute('value');

    const addProuctToCart = async e => {
        const productId = getId(e);
        const res = await addToCart(productId);
        res.status === 200 ? setAlert('Product added to cart', 'success') : setAlert(`${res}`, 'danger')
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
                            <p>{description}</p>
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
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { addToCart, plusProduct, minusProduct, deleteFromCart, setAlert })(ProductCard);
