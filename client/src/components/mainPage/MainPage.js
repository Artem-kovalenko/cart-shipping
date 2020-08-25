import React, { Fragment, useEffect, useState } from 'react';
import store from "../../store";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProducts } from "../../actions/getAllProducts";
import {
    CardsWrapper,
    CartButtonWrapper,
    CartButton
} from './MainPageStyled';

import SkeletonCard from "../SkeletonCard";
import ProductCard from "../productCard/ProductCard";


const MainPage = ({ productsInShop: { products } }) => {

    useEffect(() => {
        store.dispatch(getAllProducts());
    }, [])

    return (
        <Fragment>
            {!products && <SkeletonCard/>}
            {products &&
                <Fragment>
                    <CartButtonWrapper>
                        <CartButton>Cart</CartButton>
                    </CartButtonWrapper>
                    <CardsWrapper>
                        <ProductCard products={products}/>
                    </CardsWrapper>
                </Fragment>

            }
        </Fragment>
    )
};

MainPage.propTypes = {
    productsInShop: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    productsInShop: state.productsInShop
})

export default connect(mapStateToProps)(MainPage);