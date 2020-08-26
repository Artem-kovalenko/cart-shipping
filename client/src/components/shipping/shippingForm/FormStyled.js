import styled from "styled-components";

export const CustomInput = styled.input`
    height: 35px;
    width: 400px;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: none;
    &:focus {
        border-color: #00a3ff;
    }
`;


export const Wrapper = styled.div`
  display: flex;
  height: 300px;
`;

export const FormLabels = styled(Wrapper)`
  flex-direction: column;
  justify-content: space-between;
  
`;

export const FormInputs = styled(FormLabels)`

`;

export const Label = styled.label`
  &:nth-child(1){
    margin-top: 11px;
  }
  &:nth-child(2){
    margin-top: 15px;
  }
  &:nth-child(3){
    margin-top: 10px;
  }
  &:nth-child(4){
    margin-top: 18px;
  }
  //margin: 11px 0;
`;
