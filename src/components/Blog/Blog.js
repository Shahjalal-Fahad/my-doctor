import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div style={{height:'100vh'}}>
            <h1>Question and Answer</h1>
            <Row>
                {/* qsn 1 */}
                <Col sm={12}>
                    <h3>
                    1. Difference between Authentication & Authorization

                    </h3>
                    <p>
                    Authentication: Authentication defines that the identification of identity. It means ensuring the system, who you are to the system.

                    Authorization: Authorization defines that the power or the responsibility according to your identification. It also defines what can you do according to your identification in the system.


                    </p>
                </Col>
                {/* qsn 2 */}
                <Col sm={12}>
                    <h3>
                    2. Why we use firebase? What other options do you have to implement authentication?

                    </h3>
                    <p>
                    Firebase is a Google's platform/library. Mostly firebase is used for authentication in our system because of it is Google's product, highly secured, easy to use SDKs.

                    Except firebase authentication there are many other third party library to implement. They are -
                    Auth0
                    MongoDB
                    Passport
                    Okta
                    JSON Web Token
                    Supabase
                    Doku
                    Amazon Cognito etc.
                    </p>
                </Col>
                {/* qsn 3 */}
                <Col sm={12}>
                    <h3>
                    3.What other services does firebase provide other than authenticatiion?

                    </h3>
                    <p>
                    Developer's uses Firebase for some other purposes, like -
                    Real time database
                    Remote Config
                    Cloud Messaging
                    Cloud Storage
                    Develop ios
                    Develop android & web
                    </p>
                </Col>
            </Row>
        </div>
        
    );
};

export default Blog;