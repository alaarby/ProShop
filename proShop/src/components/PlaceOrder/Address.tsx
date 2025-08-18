import Details from "./Details"
import OrderInfo from "./OrderInfo"
import PaymentDetails from "./PaymentDetails"

const Address = () => {
  return (
    <div className="flex flex-col items-start py-[41px] w-[950px] bg-[#F2F2F2] rounded-[16px]">
      <OrderInfo/>
      <Details/>
      <PaymentDetails/>
    </div>
  )
}

export default Address