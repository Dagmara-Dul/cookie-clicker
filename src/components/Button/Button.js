import React from 'react';
import styled from 'styled-components';


const Btn = styled.button`
  color: #27556B;
  background-color: #ffffff;
  border-radius:15px;
  font-size:28px;
  font-weight:bold;
  padding:30px;
  border: 5px dashed #EDC87A;
  &:hover{
      color:#E17D77;
      border: 5px dashed #1D85B8;
  }
`

const WizardBtn = styled(Btn)`
    color:#E17D77;
    border: 5px dashed #1D85B8;

    &:hover{
        border: 5px dashed #EDC87A;
    }
`;

export const ButtonContainer = styled.div`
    margin: 100px auto;
    display:flex;
    justify-content:space-around;
    width:100%;
`;


const Button = ( {children, onClickFn, ...props} ) => {

    return(
        <Btn onClick={onClickFn}>
            {children}
        </Btn>
    )
}

export const WizardButton = ( {children, onClickFn,} )=> {
    return(
        <WizardBtn onClick={onClickFn}>
            {children}
        </WizardBtn>
    )
}

export default Button;
