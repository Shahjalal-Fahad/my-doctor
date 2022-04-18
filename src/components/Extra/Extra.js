import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Extra = () => {
    return (
    //     
            
    //     
    <Container className='my-3'>
        <h2>Useful info and health tips
    </h2>
    <div>
    <img className='img-fluid' src="http://orionassist.com/services/home-hotel-doctor.jpg" alt="" srcset="" />
    </div>
    {/* <Row>
    <col sm={12}> 
      
      </col>
    </Row> */}
  <Row>
     
    {/* extra 1 */}
    <Col sm={12}>
    
        <h3> Cardiac electrophysiology</h3>
        <p>An electrophysiology (EP) study is a test performed to assess your heart's electrical system or activity and is used to diagnose abnormal heartbeats or arrhythmia. The test is performed by inserting catheters and then wire electrodes, which measure electrical activity, through blood vessels that enter the heart. </p>
    
    </Col>
    {/* extra 2 */}
    <Col sm={12}>
        <h3>Echocardiography </h3>
        <p> 
An echocardiogram checks how your heart's chambers and valves are pumping blood through your heart. An echocardiogram uses electrodes to check your heart rhythm and ultrasound technology to see how blood moves through your heart. An echocardiogram can help your doctor diagnose heart conditions.</p>
    </Col>
    {/* extra 3 */}
    <Col sm={12}>
        <h3>Interventional cardiology
 </h3>
        <p> The most common interventional cardiology procedure (catheterization) involves the insertion of a sheath into the groin or wrist artery and passing a catheter to the heart to open a blocked artery with balloon (angioplasty) or a stent (metal sleeve that is inserted to prop open the artery from within).</p>
    </Col>
    {/* extra 3 */}
    <Col sm={12}> 
        <h3> Nuclear cardiology
</h3>
        <p> 
Nuclear cardiology studies use noninvasive techniques to assess myocardial blood flow, evaluate the pumping function of the heart as well as visualize the size and location of a heart attack. Among the techniques of nuclear cardiology, myocardial perfusion imaging is the most widely used.</p>
    </Col>
  </Row>
 
</Container>

   
    
    
   

        
    );
};

export default Extra;