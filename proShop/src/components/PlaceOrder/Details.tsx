import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import OrederItem from "../ReviewOrder/OrderItem";

const Details = () => {
  const currentUser = useSelector((state: RootState) => state.users.currentUser)
  const cart = useSelector((state: RootState) => currentUser ? state.cart[currentUser.id] ?? null : null);

  return(
    <div className="flex flex-col items-start relative mt-[32px] w-full">
      <h3 className="text-[24px] text-[#242424] font-semibold">
        Order Details
      </h3>
      <span className="underline text-[22px] text-[#707070] absolute top-0 right-0">
        Change
      </span>
      <div className="flex flex-col w-[461px] mt-[16px] gap-[38px]">
        {
          cart?.items.map((item) => (
            <OrederItem {...item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Details;