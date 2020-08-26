import styled from "styled-components";
import {Link} from "react-router-dom";
import {Header} from '../mainPage/MainPageStyled'

export const CustomLink = styled(Link)`
  color: black;
  text-decoration:none;
`;

export const BuySection = styled(Header)`
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  margin: 50px 100px 0 0;
`;

export const BuyButton = styled.div`
  font-size: 16px;
  cursor: pointer;
  border: 1px solid gray;
  padding: 9px 41px;
  text-transform:uppercase;
  background-color: lightgray;
`;
