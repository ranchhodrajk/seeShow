import React, { useState } from "react";
import "../CarouselData/CarouselData.scss";
import Carousel from "react-bootstrap/Carousel";
import star from '../../Assets/star.svg';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CarouselData = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mainCarouselData">
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} className='py-5 px-5'>
        <Carousel.Item className='text-center '>
          <div className="star">
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
          </div>
            <div className="desSlider px-md-5 py-5 fs-5 fw-light fst-italic">
                <Row>
                    <Col xs={{offset:2,span:8}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, velit 
                        voluptatibus qui dolor accusamus ab inventore atque excepturi vero cumque?
                    </Col>
                </Row>
            </div>
            <div className='text-secondary'>
                  - Licaa Jhon
            </div>
        </Carousel.Item>
        <Carousel.Item className='text-center '>
          <div className="star">
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
          </div>
            <div className="desSlider px-md-5 py-5 fs-5 fw-light fst-italic">
                <Row>
                    <Col xs={{offset:2,span:8}}>
                        Mileno Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, numquam labore. Vero, nemo! Earum vel vitae tempora ad voluptatibus temporibus?
                    </Col>
                </Row>
            </div>
            <div className='text-secondary'>
                  - John Doe
            </div>
        </Carousel.Item>
        <Carousel.Item className='text-center '>
          <div className="star">
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
              <img src={star} alt="" className='px-1'/>
          </div>
            <div className="desSlider px-md-5 py-5 fs-5 fw-light fst-italic">
                <Row>
                    <Col xs={{offset:2,span:8}}>
                        Norgaot Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error omnis quod non, placeat voluptates in quasi eius assumenda voluptatum natus?
                    </Col>
                </Row>
            </div>
            <div className='text-secondary'>
                  - Alvero Moreno
            </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselData;
