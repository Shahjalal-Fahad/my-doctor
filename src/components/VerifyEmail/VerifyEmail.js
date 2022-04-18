import React, { useState } from 'react';

import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const [sendEmailVerification, sending, error] = useSendEmailVerification(
    auth
  );

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <p>Sending...</p>;
  }
  return (
    <div className="App">
      <button className=' btn btn-secondary my-2'
        onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}
      >
        Verify email
      </button>
    </div>
  );
};
export default VerifyEmail;