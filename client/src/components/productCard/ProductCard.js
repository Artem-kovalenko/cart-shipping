import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addToCart} from '../../actions/addToCart';
import {
    CardWrapper,
    InfoWrapper,
    Description,
    Image,
    Line,
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
        products.map((product, index) => {
            const {name, description, price, amount} = product;
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

                    <Pricing>
                        <Price>{price} €</Price>
                        <Button
                            value={product._id}
                            onClick={addProuctToCart}
                        >
                            Add to cart
                        </Button>
                    </Pricing>

                </CardWrapper>
            )
        })
    )
}

ProductCard.propTypes = {
    addToCart: PropTypes.func.isRequired,
}

export default connect(null, {addToCart})(ProductCard);
