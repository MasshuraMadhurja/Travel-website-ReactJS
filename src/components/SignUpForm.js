import "./SignUpFormStyle.css";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className="from-container">
      <h1>Create an Account!</h1>
      <form action="">
        <input type="text"
               placeholder="Name" />
 <input type="email"
               placeholder="Email" />
     <input type="password"
               placeholder="Password" />
       <input type="password"
               placeholder="Confirm Password" />
        <button>Submit Now</button>
        <p className="sign-p"> Already have an account?  
         <Link to="/login" className="login-link" > Login</Link> instead.</p>
      </form>
    </div>
  );
}

export default SignUpForm;
