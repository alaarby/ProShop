
const Information = () => {
  return(
    <div className="flex xl:flex-row flex-col-reverse pl-6 bg-[#F2F2F2] rounded-[16px] justify-between w-full max-w-[950px]">
      <div className="flex flex-col mt-[45px]">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-[#242424] xl:ml-[37px]">My Profile</h2>
        <ul className="flex flex-col gap-[44px] text-[18px] sm:text-[20px] md:text-[24px] text-[#000000] mt-[65px] xl:ml-[42px]">
          <li className="flex md:flex-row flex-col">
            <span className="text-[#707070] md:mr-[72px]">
              First Name
            </span>
            <span>
              Amy
            </span>
          </li>
          <li className="flex md:flex-row flex-col">
            <span className="text-[#707070] md:mr-[73px]">
              Last Name
            </span>
            <span>
              Mayer
            </span>
          </li>
          <li className="flex md:flex-row flex-col">
            <span className="text-[#707070] md:mr-[136px]">
              Email
            </span>
            <span>
              amymayer@gmail.com
            </span>
          </li>
          <li className="flex md:flex-row flex-col">
            <span className="text-[#707070] md:mr-[99px]">
              Birthday
            </span>
            <span>
              12/04/1991
            </span>
          </li>
        </ul>
        <button className="w-full max-w-[152px] h-[40px] text-[13px] text-[#000000] bg-[#FCDD06] rounded-[6px] flex justify-center items-center md:ml-[38px] mb-[35px] mt-[50px] cursor-pointer">
          Change Password
        </button>
      </div>

      <div className="flex flex-col gap-[30px] mr-[68px] mt-[32px]">
        <img 
          src="" 
          alt="" 
          className="w-[198px] h-[198px] rounded-full object-contain"
        />
        <button className="w-[153px] h-[40px] text-[16px] text-[#000000] bg-[#FCDD06] rounded-[6px] flex justify-center items-center cursor-pointer">
          Upload new photo      
        </button>
      </div>
    </div>
  )
}

export default Information;