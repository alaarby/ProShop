import { Link } from "react-router-dom"

const SignupForm = () => {
  return (
    <div className="flex flex-col w-[474px] justify-between">
      <h2 className="text-[60px] text-[#242424]">Signup.</h2>
      <p className="text-[32px] text-[#707070] mt-[16px]">Sign up and get exclusive offers from us</p>
      <form action="" className="w-[398px] flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="name" className="text-[22px] text-[#242424]">Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Your name"
            className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="email" className="text-[22px] text-[#242424]">Enter your email address</label>
          <input type="email" name="email" placeholder="name@example.com" className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"/>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="password" className="text-[22px] text-[#242424]">Enter your password</label>
          <input type="password" name="password" className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"/>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="confirmPassword" className="text-[22px] text-[#242424]">Confirm your password</label>
          <input type="password" name="confirmPassword" className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"/>
        </div>
        <button className="flex flex-col justify-center items-center rounded-[6px] bg-[#FCDD06] w-full h-[40px] text-[22px] text-[#242424]">
          Sign up
        </button>
        <hr className="border-[1px] border-[#707070] w-full"/>
      </form>
      <p className="text-[22px] text-[#707070] ml-[70px] mr-[138px] mt-[60px]">Have an account ? 
        <Link to="/login">
          <button className="text-[#242424] hover:underline">Login
          </button>
        </Link>
    </p>
    </div>
  )
}

export default SignupForm