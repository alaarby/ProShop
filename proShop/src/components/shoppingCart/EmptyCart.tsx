
const EmptyCart = () => {

  return(
    <div className="flex flex-col items-center justify-center gap-4 p-4 w-full">
      <h2 className="text-[32px] text-[#242424] font-semibold">Your shopping cart is empty</h2>
      <img 
        src="/images/emptycart.png" 
        alt="emptycart"
        className=""
      />
    </div>
  )
}

export default EmptyCart;