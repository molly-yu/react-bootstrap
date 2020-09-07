import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .Connect {
    background-color: #F9E9EF;
    height:100vh;
    width:100%;
    position:relative;
    text-align:center;
    padding-top: 25px;
  }
    h2{
      font-family: "Candara", sans-serif;
      font-weight:500;
      padding:30px;
      text-align:center;
      color:#74535D;
      font-size:15px;
    }
    
    p{
      width:50%;
      margin:auto;
    }

    .social-links{
      display:flex;
      justify-content:space-between;
      width:50%;
      margin:auto;
    }

    .social-links i{
      color:#74535D;
      font-size:5em;
      padding:8px;
    }

`;


export const Connect = () => (
    <Styles>
    <div className="Connect" id="connect">
        <h1>Connect</h1><hr size="10" width="50%" />
        <p>Feel free to contact me through GitHub, LinkedIn, or by email. </p>
        <div className="social-links">
        <a href="https://github.com/molly-yu" rel="noopener noreferrer" target="_blank" >
            <i className="fa fa-github-square" aria-hidden="true"/>
          </a>
          <a href="https://www.linkedin.com/in/molly-yu-/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square" aria-hidden="true"/>
          </a>
          <a href="mailto:m234yu@edu.uwaterloo.ca" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope-square" aria-hidden="true"/>
          </a>
        </div>
    </div>
    </Styles>
)
