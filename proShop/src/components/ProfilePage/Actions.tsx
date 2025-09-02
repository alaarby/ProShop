import { useDispatch } from "react-redux"
import { logout } from "../../redux/usersSlice";
import { Link, useNavigate } from "react-router-dom";

const Actions = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (() => {
    dispatch(logout());
    navigate("/login")  
  })
  return(
    <div className="w-full max-w-[398px] rounded-[16px] bg-[#F2F2F2] pl-6">
      <div className="flex flex-col sm:flex-row gap-[19px] md:ml-[16px] mt-[20px] items-center justify-center">
        <img 
          src="" 
          alt=""
          className="w-[137px] h-[137px] rounded-full border-[1px] border-[#FCDD06]"
        />
        <h2 className="text-[28px] md:text-[32px] font-semibold text-[#242424]">
          Amy Mayer
        </h2> 
      </div>
      <ul className="flex flex-col gap-[30px] items-start justify-between mt-[33px] mb-[38px] md:ml-[13px] text-[24px] text-[#242424] cursor-pointer">
        <li>
          My Orders
        </li>
        <li>
          Wishlist
        </li>
        <li>
          Notifications
        </li>
        <li>
          Settings
        </li>
        <li>
          <Link to="/productsList">
            Manage Products
          </Link>
        </li>
        <hr className="border-[1px] border-[#707070]"/>
        <li onClick={handleLogout}>
          Logout
        </li>
      </ul>
      
    </div>
  )
}

export default Actions