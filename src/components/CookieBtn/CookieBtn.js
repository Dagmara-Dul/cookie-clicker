import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width:100px;
  height:100px;
  border-radius: 50%;
  color:black;
  border: 1px solid black;
  background: url('./cookie.png') !important;
  background-size:cover;
`

const CookieBtn = ( {handleClickFn, children} ) => {

    return(
        <Button onClick={handleClickFn}>
            { children }
        </Button>
    )
}

export default CookieBtn;

