import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 47%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    padding: ${props => props.skeleton ? '25px 0 50px 0' : '30px 0 50px 0'};
    margin-top: 30px;
    @media screen and (max-width: 992px) {
         width: 90%;
    }
    @media screen and (max-width: 768px) {
         flex-direction: column;
         align-items: center;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    @media screen and (max-width: 768px) {
         width: 100%;
    }
`;

export const Description = styled.div`
  width: 100%;
`;

export const Image = styled.img`
     display: block;
     margin-right: 25px;
     box-shadow: -5px 5px 10px 0 lightgrey;
     width: 100px;
     height: 100px;
     border-radius: 10%;
`;

export const Line = styled.div`
    margin-left: 27px;
    width: 1px;
    height: 100%;
    background-color: lightgray;
    @media screen and (max-width: 768px) {
         margin:30px 0 0 0;
         height: 1px;
         width: 50%;
    }
 `;

export const Pricing = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width: 1224px) {
         flex-direction: column;
         justify-content: center;
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

export const AmountPrice = styled(Pricing)``;

export const Amount = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 65%;
   @media screen and (max-width: 768px) {
         margin-top: 30px;
    }
`;

export const Plus = styled.div`
    border: 1px solid lightgray;
    padding: 2px 12px;
    cursor: pointer;
    font-size: 27px;
    font-weight: 100;
    border-radius: 5px;
`;

export const Minus = styled(Plus)`
    font-size: 55px;
    line-height: 37px;
    padding: 0 10px;
`;

export const Input = styled.input`
    width: 16px;
    outline: none;
    border: none;
`;
