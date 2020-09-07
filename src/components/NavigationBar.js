import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import bg2 from '../assets/bg2.jpg'

const Styles = styled.div`
    .navbar{
        position:absolute;
        
        top: 0;
        width: 100%;
        z-index:10;
    }
    .navbar-brand, .navbar-nav, .nav-link {
        color: #CCB6BC;
        font-size: 20 px;
        font-family: "Candara", sans-serif;
        &:hover{
            color: #f2f2f2;
        }
    }

    .navbar a {
        float: left;
        display: block;
        color: #CCB6BC;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
       // border-bottom: 3px solid transparent;

        &:hover {
            border-bottom: 3px;
            color: #EDD7DE;
          }
          
          &.active {
            border-bottom: 3px;
            color: #EDD7DE;
          }
      }   
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Molly Yu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#connect">Connect</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)