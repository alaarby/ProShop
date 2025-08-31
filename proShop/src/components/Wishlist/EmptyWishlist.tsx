import { Link } from "react-router-dom"

const EmptyWishlist = () => {
  return(
    <div className="flex flex-col justify-center items-center gap-4">
      <img 
        src="/images/emptyWishlist.png" 
        alt="empty wishlist"
        className="max-w-[500px] max-h-[500px]" 
      />
      <h2 className="text-[28px] md:text-[32px] text-[#242424] font-bold">
        Your Wish List is empty
      </h2>
      <p className="text-[20px] md:text-[24px] text-[#242424]">
        seems like you don't have wishes here.
      </p>
      <p className="text-[20px] md:text-[24px] text-[#242424]">
        Make a wish
      </p>
      <Link to="/">
        <button className="w-6/12 md:w-[250px] h-[40px] text-[20px] md:text-[24px] bg-[#FCDD06] rounded-[20px] mx-auto">
          Start Shopping
        </button>
      </Link>
    </div>

  )
}

export default EmptyWishlist