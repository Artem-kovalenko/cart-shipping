import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products';
import {
    CardsWrapper,
    Header,
    CartIcon
} from './MainPageStyled';
import cart from '../../assets/icons/cart.svg'

import SkeletonCard from '../skeleton/SkeletonCard';
import ProductCard from '../productCard/ProductCard';

const MainPage = ({ productsInShop: { products }, getProducts }) => {

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <>
            <Header>
                <h2>Welcome to the shop!</h2>
                <Link to='/cart'>
                    <CartIcon src={cart} alt=""/>
                </Link>
            </Header>
            <CardsWrapper>
                {products ? <ProductCard mainPage={true} products={products}/> : <SkeletonCard mainPage={true}/>}
            </CardsWrapper>
        </>
    )
};

MainPage.propTypes = {
    productsInShop: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    productsInShop: state.productsInShop
});

export default connect(mapStateToProps, {getProducts})(MainPage);
