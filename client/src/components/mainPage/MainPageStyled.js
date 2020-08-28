import styled from "styled-components";

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`;

export const CartIcon = styled.img`
    width: 50px;
    transform: scale(-1, 1);
    cursor: pointer;
`;
