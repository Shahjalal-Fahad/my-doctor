import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carrosel = () => {
    return (
        <div>
            <Carousel className='mb-5'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.indianexpress.com/2022/04/doctor-759-4-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.usnews.com/dims4/USNEWS/3a2bc47/2147483647/crop/4050x2658%2B0%2B0/resize/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F36%2F7c%2Fe74599764044b520182f06652f44%2F180831hcqatweedy-editorial.qatweedy.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.theprint.in/wp-content/uploads/2022/01/DOCFINAL.jpg?compress=true&quality=80&w=376&dpr=2.6"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carrosel;