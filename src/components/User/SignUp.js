import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../Hooks/usafirebase/Usefirebase';
import Footer from "../shered/Footer/Footer"

const SignUp = () => {
  const {
    signInWithGoogle,
    handleSignUp,
    handleEmail, 
    handlePassword,
    email,
    password,
    confirmPassword,
    handleConfirmPassword
  } = UseFirebase();

    return (
      <div className="main-width">
        <div className="Signup-form">
            < h1> Please SignUp</h1>
            <form onSubmit={handleSignUp}>
  <div>
    <input type="text"name='name' placeholder='User Name'/>
  </div>
  <div>
              <input
                type="email"
                name='email'
                placeholder='Your Email'
                onBlur={(event) => handleEmail(event.target.value)} />
     </div>
            {email?.error && <p className='error-color'>{email.error}</p> }
            
  <div>
              <input
                type="password"
                name='password'
                placeholder="Password"
                onBlur={(event) => handlePassword(event.target.value)} />
 </div>
            {password?.error && <p className='error-color'>{password.error}</p> }
  <div>
              <input
                type="password"
                name='confirmPassword'
                placeholder=" 
                Confirm Password"
                onBlur = {(event) =>handleConfirmPassword(event.target.value)}/>
   </div>
             {confirmPassword?.error && <p className='error-color'>{confirmPassword.error}</p> }

  <button type="submit" className="btn btn-color">Register</button>
            </form>
            <h5>Already have an Account? <Link to="/login"> LogIn</Link>
          </h5>
            <small>-------------------- OR -------------------- </small>
        <div className = 'social-btn' >
  <button  onClick={signInWithGoogle}>Continue With Google</button>
      </div>
        </div> 
        <Footer/>
       </div>
    );
};

export default SignUp;