import Actions from "../components/ProfilePage/Actions";
import Information from "../components/ProfilePage/Information";

const Profile = () => {
  return(
    <div className="flex flex-col lg:flex-row gap-[32px] px-5 md:px-[70px] lg:px-[100px] xl:pl-[140px] mt-10 md:mt-[129px]">
      <Actions/>
      <Information/>
    </div>
  )
}

export default Profile;