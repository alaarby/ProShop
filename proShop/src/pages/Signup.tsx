import SignupForm from "../components/Signup/SignupForm";

const Signup = () => {
  return(
    <div className="flex justify-center lg:justify-between mt-[44px] px-5 md:px-[70px] lg:px-[100px] xl:px-[140px]">
    <SignupForm />
    <img 
      src="/images/signup.png" 
      alt="signup" 
      className="hidden lg:block max-w-6/12 w-[1183px] max-h-[787px]"
    />
    </div>
  )
}

export default Signup;