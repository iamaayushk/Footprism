import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/authContext';

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className='text-red-400'>
        Need to Login Again, Redirecting you to login page...
      </div>
    );
  }

  return <>{children}</>;
};

export default Protected;
