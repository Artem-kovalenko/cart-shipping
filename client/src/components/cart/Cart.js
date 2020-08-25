import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getProductsInCart} from '../../actions/getProductsInCart';
import {
    CardsWrapper
} from "../mainPage/MainPageStyled";
import ProductCard from "../productCard/ProductCard";
import SkeletonCard from "../skeleton/SkeletonCard";

const Cart = ({productsInCart: {cart}, getProductsInCart}) => {
    console.log('render')
    useEffect( () => {
        getProductsInCart()
    }, [])

    return (
        <CardsWrapper>
            {cart ? <ProductCard mainPage={false} products={cart} /> : <SkeletonCard/>}
        </CardsWrapper>
    );
};

Cart.propTypes = {
    getProductsInCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps, {getProductsInCart})(Cart);
