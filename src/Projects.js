import React, { Component } from 'react'
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Modal1 } from './components/Modal1';
import project1 from './assets/5.jpg';
import project2 from './assets/11.PNG';
import project3 from './assets/13.PNG';
import project4 from './assets/2.JPG';
import project5 from './assets/image3.png';
import project6 from './assets/3.JPG';

// import "./styles.css";

const Styles = styled.div`
  .Projects {
    background-color: #EDD7DE;
    min-height:100vh;
    width:100%;
    position:relative;
    z-index: -2;
    text-align:center;
    padding-top: 65px;
  }
    
  .projects-grid{
    width:100%;
    padding: 5vh;
  }

  .project{
      width: 337.5px;
      height: 225px;
      margin:20px;
      transition: transform 2s;
  }
  .project:hover{
      transform: scale(1.2);
      opacity:0.6;
      cursor: pointer;
  }
    
  .overlay2{
    position: absolute;
    background-color:#74535D;
    opacity:0.6;
    top: 60px;
    left: 0;
    right: 0;
    height:5px;
    z-index = -1;
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

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { addModalShow: false };
    }
    handleEvent = event => {
        alert("I was clicked");
    };

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <Styles>
                <div className="projects" id="projects">
                    <Button
                        variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}
                    >Click on me</Button>

                    <Modal1
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                    <h1>Projects</h1>
                    <p>I've worked on several projects and tasks involving robotics,
        object-oriented programming, and graphic user interface. Here are some of my recent ones!</p>

                    <section className="projects-grid">
                        <div className="row">
                            <div className="col-sm">
                                <img src={project1} alt="Robotic Soil Sampler" className="project cursor" />
                            </div>
                            <div className="col-sm">
                                <img src={project2} alt="Rubiks Cube Solver" className="project cursor"></img>
                            </div>
                            <div className="col-sm">
                                <img src={project3} alt="InvFind" className="project cursor"></img>
                            </div>
                            <div className="col-sm">
                                <img src={project4} alt="Ant Farm Simulation" className="project cursor"></img>
                            </div>
                            <div className="col-sm">
                                <img src={project5} alt="Dabble" className="project cursor"></img>
                            </div>
                            <div className="col-sm">
                                <img src={project6} alt="Conways" className="project cursor"></img>
                            </div>
                        </div>
                    </section>

                </div>
            </Styles>
        );
    }
}

export default Projects;

const rootElement = document.getElementById("root");
ReactDOM.render(<Projects />, rootElement);
