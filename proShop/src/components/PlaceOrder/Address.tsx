import Details from "./Details"
import OrderInfo from "./OrderInfo"
import PaymentDetails from "./PaymentDetails"

const Address = () => {
  return (
    <div className="flex flex-col gap-[30pxs] px-8 py-6 md:py-[41px] md:px-[69px] w-full max-w-[950px] bg-[#F2F2F2] rounded-[16px]">
      <OrderInfo />
      <Details />
      <PaymentDetails />
    </div>
  )
}

export default Address