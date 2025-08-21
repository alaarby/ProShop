import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { login } from "../../redux/usersSlice";

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(login(form));
      setError(null);
      setForm({ email: "", password: "" })
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return(
    <div className="flex flex-col w-[474px] justify-between">
      <h2 className="text-[60px] text-[#242424]">Login.</h2>
      <p className="text-[32px] text-[#707070] mt-[16px]">Login with your data that you entered during registration</p>
      <form onSubmit={handleLogin} className="flex flex-col gap-[30px] w-[398px]">
        <div className="flex flex-col gap-[10px] mt-[52px]">
          <label htmlFor="email" className="text-[22px] text-[#242424]">Enter your email address</label>
          <input 
            type="text" 
            placeholder="name@example.com" 
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-[40px] py-[10px] pl-[11px] text-[20px] border-[1px] border-[#242424] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label htmlFor="password" className="text-[22px] text-[#242424]">Enter your password</label>
          <input 
            type="password" 
            name="password" 
            value={form.password}
            onChange={handleChange}
            className="w-full h-[40px] py-[10px] pl-[11px] text-[20px] border-[1px] border-[#242424] rounded-[6px]"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button className="w-full h-[40px] rounded-[6px] flex justify-center items-center text-[22px] text-[#242424] bg-[#FCDD06] cursor-pointer" >
          Login
        </button>
        <div className="flex items-center justify-center">
          <input type="checkbox" className="w-[18px] h-[18px]" name="rememberme"/>
          <label htmlFor="rememberme" className="ml-[13px] text-[22px] text-[#707070]">Remember me</label>
        </div>
        <button className="text-[22px] text-[#242424]">
          Forgot your password?
        </button>
        <hr className="border-[1px] bg-[#707070]"/>
      </form>
      <Link to="/signup">
        <button className="w-[220px] h-[56px] rounded-[20px] border-[3px] border-[#FCDD06] text-[22px] text-[#242424] mt-[82px] ml-[89px] mr-[165px]">
          Sign Up Now
        </button>
      </Link>
    </div>
  )
}

export default LoginForm;