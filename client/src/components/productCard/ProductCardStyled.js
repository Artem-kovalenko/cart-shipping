import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 47%;
    display: flex;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    padding: 30px 0 50px 0;
    margin-top: 30px;
`;

export const Image = styled.img`
    display: block;
    margin-right: 25px;
    box-shadow: -5px 5px 10px 0 lightgrey;
    width: 100px;
    height: 100px;
    border-radius: 10%;
`;

export const Info = styled.div`
    width: 45%;
    padding-right: 40px;
`;

export const Title = styled.h2`
    margin-top: 0;
    font-size: 23px;
`;

export const Description = styled.p`
    font-size: 14px;
`;

export const Pricing = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28%;
    &:before {
      content: '';
      display: block;
      margin-right: 30px;
      width: 1px;
      height: 100%;
      background-color: lightgray;
    }
`;

export const Price = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const Button = styled.div`
    border: 1px solid black;
    padding: 5px 8px;
    border-radius: 14px;
    cursor: pointer;
    font-size: 14px;
    transition: .5s;
    &:hover {
      background-color: black;
      color: white;
    }
`;
