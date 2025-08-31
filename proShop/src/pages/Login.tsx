import LoginForm from "../components/Login/LoginForm";


const Login = () =>{
  return(
    <div className="flex justify-center lg:justify-between mt-[44px] px-5 md:px-[70px] lg:px-[100px] xl:px-[140px] gap-[174px]">
      <LoginForm />
      <img 
        src="/images/login.png" 
        alt="Login" 
        className="hidden lg:block max-w-7/12 w-[857px] max-h-7/12 h-[729px]"
      />
    </div>
  )
}

export default Login;