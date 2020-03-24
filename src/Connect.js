import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .Connect {
    background-color: #EDD7DE;
    height:100vh;
    width:100%;
    position:relative;
    z-index: -2;
    text-align:center;
    padding-top: 65px;
  }
    
`;


export const Connect = () => (
    <Styles>
    <div className="Connect" id="connect"> 
        <h1>Connect</h1>
        <h2>Let's Connect!</h2>
    </div>
    </Styles>
)
