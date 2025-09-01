import Head from "../components/ReviewOrder/Head";
import OrderDetails from "../components/ReviewOrder/OrderDetails";
import ShippingAddress from "../components/ReviewOrder/ShippingAddress";

const ReviewOrder = () => {

  return(
    <div className="flex flex-col px-5 md:px-[70px] lg:px-[100px] xl:pl-[140px] xl:pr-[263px] relative mb-[61px] mt-4 md:mt-[44px]">
      <h2 className="text-[28px] md:text-[32px] text-[#242424] font-bold">
        Review Order
      </h2>
      <Head />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[30px] mt-4 md:mt-[32px]">
        <ShippingAddress />
        <OrderDetails />
      </div>
    </div>
  )
}
export default ReviewOrder;