import Head from "../components/ReviewOrder/Head";
import OrderDetails from "../components/ReviewOrder/OrderDetails";
import ShippingAddress from "../components/ReviewOrder/ShippingAddress";

const ReviewOrder = () => {

  return(
    <div className="flex flex-col pl-[140px] relative w-[1517px] mb-[61px] mt-[44px]">
      <h2 className="text-[32px] text-[#242424] font-bold">Review Order</h2>
      <Head />
      <div className="flex items-start justify-between mr-[400px] mt-[44px] w-full">
        
        <ShippingAddress />
        <OrderDetails />
      </div>
      
    </div>
  )
}
export default ReviewOrder;