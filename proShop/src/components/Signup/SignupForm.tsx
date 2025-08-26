import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup' 
import { login, registerUser } from "../../redux/usersSlice";
const SignupForm = () => {  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  
  let userSchema = Yup.object({
    name: Yup.string().required("Name is requiered")
      .min(3,"Name must not be less than 3 characters"),
    email: Yup.string().email("Invalid email format").required("Email is requiered"),
    password: Yup.string()
    .required("Password is requiered")
    .min(8,"Password must not be less than 8 characters"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")],"Passwords must match")
    .required("Confirm password is required"),  
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await userSchema.validate(formData, {abortEarly: false});
      dispatch(registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }));
      dispatch(login({
        email: formData.email,
        password: formData.password,
      }))
      setErrors({});
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
      navigate("/");
    } catch (error) {
      const newErrors: Record<string, string> = {};

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          if (err.path) newErrors[err.path] = err.message;
        });
      setErrors(newErrors);
      }
    }
  }
  return (
    <div className="flex flex-col w-[474px] justify-between">
      <h2 className="text-[60px] text-[#242424]">
        Signup.
      </h2>
      <p className="text-[32px] text-[#707070] mt-[16px]">
        Sign up and get exclusive offers from us
      </p>
      <form 
        onSubmit={handleSubmit}
        className="w-[398px] flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <label 
            htmlFor="name" 
            className="text-[22px] text-[#242424]"
          >
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            placeholder="Your name"
            onChange={handleChange}
            value={formData.name}
            className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-[10px]">
          <label 
            htmlFor="email" 
            className="text-[22px] text-[#242424]"
          >
            Enter your email address
          </label>
          <input 
            type="email" 
            name="email" 
            placeholder="name@example.com" 
            onChange={handleChange}
            value={formData.email}
            className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-[10px]">
          <label 
            htmlFor="password" 
            className="text-[22px] text-[#242424]"
          >
            Enter your password
          </label>
          <input 
            type="password" 
            name="password" 
            onChange={handleChange}
            value={formData.password}
            className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="flex flex-col gap-[10px]">
          <label 
            htmlFor="confirmPassword" 
            className="text-[22px] text-[#242424]"
          >
            Confirm your password
          </label>
          <input 
            type="password" 
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword} 
            className="w-full h-[40px] border-[1px] border-[#242424] rounded-[6px] text-[18px] py-[10px] pl-[11px]"
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
        </div>
        <button className="flex flex-col justify-center items-center rounded-[6px] bg-[#FCDD06] w-full h-[40px] text-[22px] text-[#242424]">
          Sign up
        </button>
        <hr className="border-[1px] border-[#707070] w-full"/>
      </form>
      <p className="text-[22px] text-[#707070] ml-[70px] mr-[138px] mt-[60px]">
        Have an account ? 
        <Link to="/login">
          <button className="text-[#242424] hover:underline">
            Login
          </button>
        </Link>
      </p>
    </div>
  )
}


export default SignupForm