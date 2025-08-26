import { Link } from "react-router-dom"

const EmptyWishlist = () => {
  return(
    <div className="flex flex-col justify-center items-center gap-4">
      <img 
        src="/images/emptyWishlist.png" 
        alt="empty wishlist"
        className="w-[500px] h-[500px]" 
      />
      <h2 className="text-[32px] text-[#242424] font-bold">
        Your Wish List is empty
      </h2>
      <p className="text-[24px] text-[#242424]">
        seems like you don't have wishes here.
      </p>
      <p className="text-[24px] text-[#242424]">
        Make a wish
      </p>
      <Link to="/">
        <button className="w-[250px] h-[40px] text-[22px] bg-[#FCDD06] rounded-[20px] flex items-center justify-center">
          Start Shopping
        </button>
      </Link>
    </div>

  )
}

export default EmptyWishlist