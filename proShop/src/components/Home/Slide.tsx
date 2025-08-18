import type Product from "../../data/products";

interface SlideProps {
  product: Product;
}

const Slide = ({ product }: SlideProps) => {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex flex-col">
        <p className="text-[32px] text-neutral-800 w-[286px] h-[40px]">
          Save up to ${product.price}
        </p>
        <h2 className="uppercase text-[60px] font-bold text-neutral-800 w-[530px] h-[75px]">
          {product.name}
        </h2>
        <p className="text-[32px] text-neutral-800 w-[431px] min-h-[96px]">
          {product.description}
        </p>
        <button className="w-[220px] h-[56px] rounded-[20px] bg-yellow-300 text-[22px] cursor-pointer">
          Shop Now
        </button>
      </div>
      <div>
        <img className="object-fill w-[627px] h-[644px]" src={product.image} alt={product.name} />
      </div>
    </div>
  );
}
export default Slide;