import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Modal.css';
import Carousel6 from './Carousel6';

export class Modal6 extends Component{
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
        <h4>ARBSUtility</h4>
        {/* <img src = {p1} alt="1"/> */}
        <div className="carousel">
          <Carousel6></Carousel6>
          </div>
        <h5><i>React, Electron, Go</i></h5>
        <p>
        Desktop application for automated hardware testing through network communication with IP Cameras, Switches,
        and I/O Controllers.<br/>
      <a href="https://github.com/molly-yu/ARBSUtility" target="_blank">Check it out on GitHub!</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
        )
    }
}