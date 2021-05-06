import React from 'react';
import styled from 'styled-components';


const CButton = styled.button`
  width:200px;
  height:200px;
  border-radius: 50%;
  color:black;
  border:none;
  
  background: url('https://www.clipartmax.com/png/middle/20-206263_valentine-cookie-svg-scrapbook-cut-file-cute-clipart-valentines-cookie-clip-art.png');
    background-size:cover;
    background-size: 240%;
    background-repeat: no-repeat;
    background-position: center;
`




const CookieBtn = ( {handleClickFn} ) => {

    return(
        <CButton onClick={handleClickFn}>
            
        </CButton>
    )
}

export default CookieBtn;

