import SignupForm from "../components/Signup/SignupForm";

const Signup = () => {
  return(
    <div className="flex mt-[44px] ml-[140px]">
    <SignupForm />
    <img 
      src="/images/signup.png" 
      alt="signup" 
      className="object-cover w-[1183px] h-[787px]"
    />
    </div>
  )
}

export default Signup;