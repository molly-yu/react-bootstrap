import React from 'react'
import me from './assets/me4.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .About {
    background-color: #F9E9EF ;
    // #EDD7DE
    min-height:100vh;
    width:100%;
    position:relative;
    z-index: -2;
    text-align:center;
    padding-top: 50px;
    padding-bottom:20px;
    margin:0;
  }

  .text{
    //background-color:white;
    font-family:"Candara", sans-serif;
    color:#74535D;
    // margin-left: auto;
    // margin-right: auto;
    // width:70%;
    text-align:center;
  }
    
  .portrait{
    width:200px;
    height:200px;
    border-radius: 4%;
    padding:3px;
    display: block;
    // margin-left: auto;
    // margin-right: auto;
    //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 3px solid #D8D5D5;
  }

  ul {
    list-style-type: none;
    font-family:"Candara", sans-serif;
    color:#74535D;
    margin: 0;
    padding: 0;
  }

    .container{
        width:50%;
    }

    .icons{ 
      padding-top:30px;
      padding-bottom:50px;
      padding-left:100px;
      padding-right:100px;
      
      i{
      color:#74535D;
      font-size:70px;
      padding:8px;
    }
  }

`;

export const About = () => (
  <Styles>
    <div className="About" id="about">
      <h1>About Me</h1><hr size="10" width="50%" />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img src={me} alt="Molly" className="portrait"></img>
          </div>

          <div className="col-sm">
            <div className="text">
              <p>Hey there! I'm <b>Molly</b>, a software engineer based in <b>Toronto/Waterloo, Canada.</b> <br />
          I'm studying towards a degree in <b>Software Engineering</b> at the <b>University of Waterloo</b>,
           and I'm seeking internship opportunities for the upcoming Winter term starting <b>January 2021</b>!
          <br /><br /> Always open to chatting or collaborating with other students and professionals in the field!  </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text">
        <h2>
          Areas of Expertise <br></br></h2>
      </div>

      <div className="icons">
        <div className="row">
          <div className="col-sm">
            <i className="fa fa-code" aria-hidden="true" />
            <h3>Programming</h3>
            <ul>
              <li >C/C++</li>
              <li >Java</li>
              <li >JavaScript</li>
              <li>Python</li>
              <li>Go</li>
            </ul>

          </div>
          <div className="col-sm">
            <i className="fa fa-desktop fa-sm" aria-hidden="true" />
            <h3>Web Development</h3>
            <ul>
              <li >HTML/CSS</li>
              <li >React</li>
              <li >Node.js</li>
              <li >Bootstrap</li>
              <li>Electron</li>
              
            </ul>
          </div>
          <div className="col-sm">
            <i className="fa fa-paper-plane" aria-hidden="true" />
            <h3>Machine Learning</h3>
            <ul>
              <li >TensorFlow</li>
              <li >Keras</li>
              <li >Caffe</li>
              <li>PyTorch</li>
              <li>OpenCV</li>
            </ul>
          </div>
          <div className="col-sm">
            <i className="fa fa-keyboard-o" aria-hidden="true" />
            <h3>Other Technologies</h3>
            <ul>
              <li >SQL</li>
              <li >MongoDB</li>
              <li >Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </Styles>
)
