import { useEffect, useState } from "react"
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../../firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {

      const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState({value: "", error: ""})
  const [password, setPassword] = useState({value: "", error: ""})
  const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

  

  const handleEmail = (emailInput) => {
    if (/^\S+@\S+\.\S+$/.test(emailInput)) {
      setEmail({value: emailInput ,error: ""})
    } else {
       setEmail({value: "" ,error: "Invalid Email"})
    }
}

  const handlePassword = (PasswordInput) => {
    if (PasswordInput.length > 7){
       setPassword({value: PasswordInput ,error: ""})
    } 
    else {
       setPassword({value: "" ,error: "Password have Minimum eight characters"})
    }
     }
  const handleConfirmPassword = (confirmPasswordInput) => {
    if (confirmPasswordInput == password.value) {
       setConfirmPassword({value: confirmPasswordInput ,error: ""})
    }
    else {
       setConfirmPassword({value: "" ,error: "Password not match"})
    }
   
}

  const from = location?.state?.from?.pathname || "/"

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
              navigate(from ,{replace: true})
            })
    }
   const handleLogIn = (event) => {
        event.preventDefault();
          const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        
signInWithEmailAndPassword(auth, email, password)
  .then( result => {
      const user = result.user;
      navigate(from ,{replace: true})
    // console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorMessage);
  });
 }

    
    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{})}

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])
    
    const handleSignUp = (event) => {
      event.preventDefault();
      if (email.value == "") {
        setEmail({value: "", error: "Email is required"})
      }
      if (password.value == "") {
        setPassword({value: "", error: "Password is required"})
      }


      if (email.value && password.value && confirmPassword.value == password.value) {
         createUserWithEmailAndPassword(auth, email.value, password.value)
  .then( result => {
      const user = result.user;
     navigate(from ,{replace: true})
    toast.success("Successfull", { id: "success" });
      console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorMessage.includes("already-exists")) {
     toast.error("User Already Exists" , {id: "error"})
    } else {
       toast.error(errorMessage , {id: "error"})
    }
    
  });
      }
      else {
          toast.error("Fillup Form", { id: "error" });
      }
    };

return {
    user,
    signInWithGoogle,
    handleSignOut,
    handleSignUp,
  handleLogIn,
  handleEmail, 
  handlePassword,
  email,
  password,
  confirmPassword,
  handleConfirmPassword
}

}
 
export default UseFirebase;