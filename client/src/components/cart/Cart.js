import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getProductsInCart} from '../../actions/getProductsInCart';
import {
    CardsWrapper
} from "../mainPage/MainPageStyled";
import ProductCard from "../productCard/ProductCard";
import SkeletonCard from "../skeleton/SkeletonCard";

const Cart = ({productsInCart: {cart}, productsInShop:{products}, getProductsInCart}) => {

    useEffect( () => {
        getProductsInCart()
    }, [])

    return (
        <CardsWrapper>
            {cart ? <ProductCard products={products} /> : <SkeletonCard/>}
        </CardsWrapper>
    );
};

Cart.propTypes = {
    getProductsInCart: PropTypes.func.isRequired,
    productsInShop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    productsInCart: state.productsInCart,
    productsInShop: state.productsInShop
})

export default connect(mapStateToProps, {getProductsInCart})(Cart);
