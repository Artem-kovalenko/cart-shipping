import styled from "styled-components";

export const AlertMessage = styled.div`
    position: fixed;
    top: 47px;
    left: 45%;
    border: 1px solid ${({type}) => type === 'success' ? '#1aa900' : 'red'};
    padding: 7px 0;
    width: 270px;
    text-align: center;
    background-color: ${({type}) => type=== 'success' ? 'rgba(0, 230, 64, 0.2)' : 'rgba(240, 52, 52, 0.2)'};
    border-radius: 7px;
    color: ${({type}) => type === 'success' ? '#1aa900' : 'red'};
    font-weight: 500;
    font-size: 18px;
    @media screen and (max-width: 992px) {
      top: 83px;
      left: 37%;
    }
    @media screen and (max-width: 768px) {
      width: 228px;
      left: 30%;
    }
`;
