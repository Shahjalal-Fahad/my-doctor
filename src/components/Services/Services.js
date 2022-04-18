import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Services = () => {
  const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate()
    const takeService=()=>{
        navigate('/checkout')
    }
    if(loading ){
      return <Loading></Loading>
  }
    return (
        <div>
          <h1 className='my-3'>
            This is service 

          </h1>
            <CardGroup>
  <Card>
    <Card.Img className='' variant="top" src="https://images.squarespace-cdn.com/content/v1/5b913ac48f51305fb1c3545a/1561968038174-EJFCDQ94J43IOVGSE5SB/primary+care+physician" />
    <Card.Body>
      <Card.Title>Primary Care
</Card.Title>
      <Card.Text>
      You may have been making healthy lifestyle changes, such as working out and eating right, but seeing your primary care doctor regularly can also help you to stay amazing.
      </Card.Text>
      <h6>Price:$170</h6>
    </Card.Body>
    <Card.Footer>
      <button onClick={takeService} type="button" class="btn btn-primary w-50">Take Service</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.scripps.org/sparkle-assets/images/video_visit_with_doctor_1200x750-9d03901155e6f94c8471af72e0a99f76.jpg" />
    <Card.Body>
      <Card.Title>Video Doctor</Card.Title>
      <Card.Text>
        Our video doctor syem is best for busy person.We join meet session with the patient.
        <h6>
        Price: $100 

        </h6>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <button onClick={takeService}  type="button" class="btn btn-primary w-50">Take Service</button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://techflaver.com/wp-content/uploads/2022/03/health-insurance-features.png" />
    <Card.Body>
      <Card.Title>Health Insurance</Card.Title>
      <Card.Text>Our Health Insurance Best! Privacy Friendly. Results & Answers. The Best Resources. Unlimited Access. Always Facts. Types: Best Results, Explore Now, New Sources, Best in Search.

        <h6>
        Price: $1000 

        </h6>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <button onClick={takeService}  type="button" class="btn btn-primary w-50">Take Service</button>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    );
};

export default Services;