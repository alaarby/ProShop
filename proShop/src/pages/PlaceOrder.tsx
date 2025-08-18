import Address from "../components/PlaceOrder/Address"
import Head from "../components/PlaceOrder/Head"
import OrderDetails from "../components/ReviewOrder/OrderDetails"

const PlaceOrder = () => {
  return(
    <>
    <div className="flex flex-col pl-[140px] relative w-[1517px] mb-[61px] mt-[44px]">
      <h2 className="text-[32px] text-[#242424] font-bold">Review Order</h2>
      <Head />
      <div className="flex items-start justify-between mr-[400px] mt-[44px] w-full">
        <Address />
        <OrderDetails />
      </div>
      
    </div>
    </>
  )
}

export default PlaceOrder