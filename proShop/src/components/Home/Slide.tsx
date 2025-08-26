import type Product from "../../data/products";


const Slide = (product: Product) => {
  return (
    <div className="flex justify-between items-center px-5 lg:pl-[140px] md:px-[70px] lg:pr-[193px] text-[#242424]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[32px] mt-[173px] h-[40px]">
          Save up to ${product.price}
        </p>
        <h2 className="uppercase text-[60px] font-bold max-w-[700px]">
          {product.name}
        </h2>
        <p className="text-[32px] max-w-[700px]">
          {product.description}
        </p>
        <button className="max-w-[220px] h-[56px] rounded-[20px] bg-[#FCDD06] text-[22px] cursor-pointer">
          Shop Now
        </button>
      </div>
      <div>
        <img 
          className="object-fill w-[627px] h-[644px]"   
          src={product.image} 
          alt={product.name} 
        />
      </div>
    </div>
  );
}
export default Slide;