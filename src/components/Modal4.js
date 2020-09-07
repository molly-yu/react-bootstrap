import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Modal.css';
import Carousel4 from './Carousel4';

export class Modal4 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>StudyNotes</h4>
        {/* <img src = {p1} alt="1"/> */}
        <div className="carousel">
          <Carousel4></Carousel4>
          </div>
        <h5><i>React, Flask, MongoDB</i></h5>
        <p>
        A social media platform for collaborative studying. Users can automatically upload their notes, 
        track their productivity, and follow friends!<br/>
      <a href="https://github.com/studynotesapp" target="_blank">Check it out on GitHub!</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
        )
    }
}