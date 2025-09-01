import FeaturedProducts from "../components/Home/FeaturedProducts"
import PaymentSuccess from "../components/SuccessPayment/PaymentSuccess"


const SuccessPayment = () => {
  return(
    <div className="flex flex-col gap-5 md:gap-[44px]">
      <PaymentSuccess/>
      <FeaturedProducts />
    </div>
  )
}

export default SuccessPayment
