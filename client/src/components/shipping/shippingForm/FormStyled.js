import styled from "styled-components";
import {Form} from 'formik';
import {BuyButton} from '../../cart/CartStyled';

export const CustomInput = styled.input`
    height: 35px;
    width: 350px;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: none;
    color: gray;
    cursor: auto;
    &:focus {
        border-color: ${({delivery}) => delivery ? null : '#00a3ff'} 
    }
    @media screen and (max-width: 576px) { 
        width: 200px;
    }
    
`;

export const PayForm = styled(Form)`
    position: relative;
`;

export const Wrapper = styled.div`
    display: flex;
    height: 300px;
    position: relative;
    @media screen and (max-width: 576px) { 
        margin: 0 9px;
     }
`;

export const FormLabels = styled(Wrapper)`
    flex-direction: column;
    justify-content: space-between;
    margin-right: 30px;
`;

export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
  &:nth-child(1){
    margin-top: 11px;
  }
  &:nth-child(2){
    margin-top: 7px;
  }
  &:nth-child(3){
    margin-top: 7px;
  }
  &:nth-child(4){
   margin-top: 10px;
  }
  &:nth-child(5){
    margin-bottom: 10px;
  }
`;

export const InputWrapper = styled.div`
    height: 71px;
    &:nth-child(5){
      height: 45px;
    }
`;

export const Select = styled.select`
    height: 40px;
    width: 357px;
    color: gray;
    text-transform:uppercase;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    outline: none;
    &:focus {
        border-color: #00a3ff;
    }
    @media screen and (max-width: 576px) { 
        width: 205px;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    @media screen and (max-width: 576px) { 
        margin: 30px 9px 0
    }
`;

export const Button = styled.button`
    font-size: 18px;
    position: absolute;
    right: 0;
    width: 115px;
    cursor: pointer;
    height: 40px;
    text-transform: uppercase;
`;

export const BackButton = styled(BuyButton)`
    padding: 9px 24px;
    margin-top: 0;
`;

export const Error = styled.div`
    color: red;
    font-size: 13px;
`;
