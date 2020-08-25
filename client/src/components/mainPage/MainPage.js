import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import store from "../../store";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProducts } from "../../actions/getAllProducts";
import {
    CardsWrapper,
    Header,
    CartIcon
} from './MainPageStyled';
import cart from '../../assets/icons/cart.svg'

import SkeletonCard from "../skeleton/SkeletonCard";
import ProductCard from "../productCard/ProductCard";


const MainPage = ({ productsInShop: { products } }) => {

    useEffect(() => {
        store.dispatch(getAllProducts());
    }, [])

    return (
        <>
            <Header>
                <h2>Welcome to the shop!</h2>
                <Link to='/cart'>
                    <CartIcon src={cart} alt=""/>
                </Link>
            </Header>
            <CardsWrapper>
                {products ? <ProductCard products={products}/> : <SkeletonCard/>}
            </CardsWrapper>
        </>
    )
};

MainPage.propTypes = {
    productsInShop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    productsInShop: state.productsInShop
})

export default connect(mapStateToProps)(MainPage);
