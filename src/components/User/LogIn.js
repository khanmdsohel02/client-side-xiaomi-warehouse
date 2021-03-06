import React from 'react';
import "./styleform.css"
import {Link} from 'react-router-dom';
import Footer from '../shered/Footer/Footer';
import UseFirebase from '../Hooks/usafirebase/Usefirebase';
import { Button } from 'react-bootstrap';

const LogIn = () => {

  const { signInWithGoogle, handleLogIn, signInWithFacebook, handlePasswordReset} = UseFirebase();

    return (
      <div className="main-width">
        <div className="login-form">
            <h1>Please LogIn</h1>
            <form form onSubmit = {handleLogIn}>
  <div className="mb-2">
    <input type="email" name='email' placeholder='Your Email' required/>
  </div>
  <div className="mb-2">
    <input type="password" name='password' placeholder="Password" required/>
  </div>

  <button type="submit" className="btn btn-color">Login</button>
            </form>
            <h5>Are You New? <Link to="/signup"> SignUp</Link>
          </h5>
           <Button onClick={handlePasswordReset} variant="link" className='ms-5 text-decoration-none'>Forget Password?</Button>
          <small>-------------------- OR -------------------- </small>
      <div className = 'social-btn' >
            <button onClick={signInWithGoogle}>Continue With Google</button>
            <button onClick={signInWithFacebook}>
              Continue With FaceBook</button>
      </div>
        </div>
        <Footer/>
        </div>
    );
};

export default LogIn;