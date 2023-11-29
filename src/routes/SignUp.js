import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <>
    <Navbar/>
   <Hero
   cName="hero-aboutImg"
   heroImg={AboutImg}
   title="Sign Up"
   text=""
   btnClass="hide"
   />
   <SignUpForm/>
      <Footer/>
    </>
  );
}

export default SignUp;
