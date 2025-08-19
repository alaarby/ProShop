import Details from "./Details"
import OrderInfo from "./OrderInfo"
import PaymentDetails from "./PaymentDetails"

const Address = () => {
  return (
    <div className="flex flex-col py-[41px] gap-[30pxs] px-[69px] w-[950px] bg-[#F2F2F2] rounded-[16px]">
      <OrderInfo/>
      <Details/>
      <PaymentDetails/>
    </div>
  )
}

export default Address