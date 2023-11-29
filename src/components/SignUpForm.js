import "./SignUpFormStyle.css";

function SignUpForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form action="">
        <input type="text"
               placeholder="Name" />
 <input type="email"
               placeholder="Email" />
     <input type="text"
               placeholder="Subject" />
       <input type="text"
               placeholder="Message"
               rows="4" />
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default SignUpForm;
