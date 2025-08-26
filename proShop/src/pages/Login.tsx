import LoginForm from "../components/Login/LoginForm";


const Login = () =>{
  return(
    <div className="flex mt-[44px] ml-[140px] gap-[174px]">
      <LoginForm />
      <img 
        src="/images/login.png" 
        alt="Login" 
        className="w-[857px] h-[729px]"
      />
    </div>
  )
}

export default Login;