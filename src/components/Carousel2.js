import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import p1 from '../assets/11.PNG';
import p2 from '../assets/6.PNG';
import p3 from '../assets/7.PNG';
import p4 from '../assets/8.PNG';
import styled from 'styled-components';

const Styles = styled.div`
.car1 {
    width:500px;
    height:333px;
    position:relative;
  }
  image {
    width:500px;
    height:333px;
    position:relative;
 
  }
    
`;

const Carousel2 = () => {
  return (
      <Styles>
      <div className="car1">
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
                <div className="image">
              <img
                className="d-block w-100"
                src={p1}  alt="First slide"
              />
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={p2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={p3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={p4}
                alt="Fourth slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
    </Styles>
  );
}

export default Carousel2;