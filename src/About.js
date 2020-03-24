import React from 'react'
import me from './assets/me4.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .About {
    background-color: #EDD7DE;
    min-height:100vh;
    width:100%;
    position:relative;
    z-index: -2;
    text-align:center;
    padding-top: 65px;
    margin:0;
  }

  h1{
    font-family: "Candara", sans-serif;
    font-weight:500;
    padding:30px;
    text-align:center;
    color:#74535D;
  }
  p{
    width:80%
    align:center;
  }

  .overlay{
    position: absolute;
    background-color:#74535D;
    top: 0;
    left: 0;
    right: 0;
    height:65px;
    z-index = -1;
  }
  .overlay2{
    position: absolute;
    background-color:#EDD7DE;
    opacity:0.6;
    top: 13px;
    left: 0;
    right: 0;
    height:39px;
    z-index = -0;
  }
    
  .portrait{
    width:250px;
    height:250px;
    border-radius: 50%;
    padding:0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const About = () => (
  <Styles>
    <div className="About" id="about">
    <div className="overlay"></div>
    <div className="overlay2"></div>
        <h1>About Me</h1>
        <img src={me} alt="Molly" className="portrait"></img>
        <p>Hello! My name is Molly Yu and I am a software engineer based
      in Toronto, Canada. I am currently studying Software Engineering at the University of Waterloo, seeking a Summer
      2020 Co-op position. I have a strong passion for software development, particularly in Artificial Intelligence and
      Machine Learning.
      <br></br><br></br>Having participated in the International Biology Olympiad, I love all aspects of biology and am very passionate about
      improving healthcare through computer science, mathematics, and engineering.  <br></br> 
    From self-learning through online resources to creating projects of
      my own, I am always trying to learn about the newest technologies and acquiring new skills. <br></br> <br></br>
      Some of the technologies I've used include: <br></br>
      <section class="container">
          <ul>
            <li >C</li>
            <li >C++</li>
            <li >Java</li>
            <li >Python</li>
          </ul>
        </section>
        <section class="container">
          <ul>
            <li>HTML/CSS</li>
            <li >JavaScript</li>
            <li >Arduino</li>
            <li >Geneious</li>
          </ul>
        </section>
      </p>
    </div>
    </Styles>
)
