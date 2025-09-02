import ProductForm from "../components/CreateProduct/Form";

const CreateProduct = () => {
  return (
    <div className="flex gap-[30px] flex-col mt-5 mx-5 md:mx-[70px] lg:mx-[100px] md:mt-[32px] xl:ml-[140px] xl:max-mr-[416px]">
      <h2 className="text-[#242424] text-[28px] md:text-[32px] font-bold">Create New Product</h2>
      <ProductForm />
      <button
        form="productForm"
        type="submit"
        className="w-full md:w-[293px] h-[60px] bg-[#4BB543] text-white text-[24px] font-semibold rounded-[6px] self-end">
        Create Product
      </button>
    </div>
  )
}

export default CreateProduct;