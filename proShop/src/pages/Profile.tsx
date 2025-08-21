import Actions from "../components/ProfilePage/Actions";
import Information from "../components/ProfilePage/Information";

const Profile = () => {
  return(
    <div className="flex gap-[32px] pl-[140px] pt-[129px]">
      <Actions/>
      <Information/>
    </div>
  )
}

export default Profile;