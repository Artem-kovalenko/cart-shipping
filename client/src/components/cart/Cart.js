import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getProductsInCart} from '../../actions/cart';
import {CardsWrapper, Header} from '../mainPage/MainPageStyled';
import {Button, Price} from '../productCard/ProductCardStyled'
import {
    CustomLink,
    BuySection,
    BuyButton
} from './CartStyled';
import ProductCard from '../productCard/ProductCard';
import SkeletonCard from '../skeleton/SkeletonCard';

const Cart = ({productsInCart: {cart, totalCartPrice}, getProductsInCart}) => {

    const [requestFinished, setRequestFinished] = useState(false);

    useEffect( () => {
        (async function()  {
            await getProductsInCart();
            setRequestFinished(true);
        })()
    }, []);

    let cardItems;

    if(requestFinished && cart.length === 0) {
        cardItems = <h4>Your cart is empty, please add some products!</h4>
    } else if(requestFinished && cart.length > 0) {
        cardItems = <ProductCard mainPage={false} products={cart} />
    } else {
        cardItems = <SkeletonCard mainPage={false}/>
    }

    return (
        <CardsWrapper>
            <Header>
                <h2>Welcome to your cart!</h2>
                <CustomLink to='/'>
                    <Button>Back to shop</Button>
                </CustomLink>
            </Header>
            {cardItems}
            <BuySection>
                {
                    totalCartPrice > 0 ?
                        <>
                            <Price>{totalCartPrice} €</Price>
                            <CustomLink to='/shipping'>
                                <BuyButton>buy</BuyButton>
                            </CustomLink>
                        </>
                        :
                        null
                }
            </BuySection>
        </CardsWrapper>
    );
};

Cart.propTypes = {
    getProductsInCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    productsInCart: state.productsInCart,
});

export default connect(mapStateToProps, {getProductsInCart})(Cart);
