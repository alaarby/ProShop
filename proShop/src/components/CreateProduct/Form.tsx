import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addProduct } from "../../redux/productsSlice";

export default function ProductForm() {
  const dispatch = useDispatch();
  const [images, setImages] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    productName: "",
    productBrand: "",
    productCategory: "",
    productId: "",
    description: "",
    countInStock: 0,
    price: 0,
  });

  const productSchema = Yup.object({
    productName: Yup.string().required("Product name is required").min(3, "Name too short"),
    productBrand: Yup.string().required("Brand is required"),
    productCategory: Yup.string().required("Category is required"),
    productId: Yup.string().required("Product ID is required"),
    description: Yup.string().min(10, "Description too short").required("Description is required"),
    price: Yup.number().positive("Price must be positive").required("Price is required"),
    countInStock: Yup.number().min(0, "Must be 0 or more").required("Stock count is required"),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setImages(prev => [...prev, ...files].slice(0, 4));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await productSchema.validate(formData, { abortEarly: false });
      const newProduct = {
        id: formData.productId,
        name: formData.productName,
        brand: formData.productBrand,
        category: formData.productCategory,
        description: formData.description,
        price: Number(formData.price),
        quantity: Number(formData.countInStock),
        image: images[0] ? URL.createObjectURL(images[0]) : "",
        images: images.map(file => URL.createObjectURL(file)),
        slug: formData.productName.toLowerCase().replace(/\s+/g, '-'),  
      }
      dispatch(addProduct(newProduct));

      setErrors({});
      setFormData({productName: "",
        productBrand: "",
        productCategory: "",
        productId: "",
        description: "",
        countInStock: 0,
        price: 0,
      });
      setImages([]);
    }
    catch (error) {
      const newErrors: Record<string, string> = {};
      if(error instanceof Yup.ValidationError){
        error.inner.forEach((err) => {
          if(err.path) newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  }

  return (
    <div className=" bg-[#F2F2F2] w-full flex flex-col rounded-[16px] xl:pb-[67px] px-[35px]">
      <form 
        id="productForm"
        onSubmit={handleSubmit}
        className="w-full flex flex-col lg:flex-row gap-[50px]"
      >
        {/* Left: Images */}
        <div className="flex flex-col gap-[16px] w-full max-w-[378px] self-center lg:self-start mt-10 lg:mt-[103px]">
          <label className="block border-[1px] border-dashed border-[#707070] p-6 text-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-[#707070] mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m-9-6h12a2 2 0 002-2V7a2 2 0 00-2-2h-3l-2-2h-4l-2 2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              <span className="text-[#707070] text-[24px]">Product Images 
                <span className="text-[13px]">
                  (4 images allowed)    
                </span>
              </span>
            </div>
          </label>

          {/* Preview */}
          <div className="flex gap-[36px]">
            {images.map((file, index) => (
              <div
                key={index}
                className="w-[102px] h-[93px] border-[1px] border-[#707070] overflow-hidden"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form fields */}
        <div className="flex flex-col gap-[16px] flex-1 lg:mt-[67px]">
          <h2 className="text-[32px] font-semibold text-[#242424]">
            Product Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="flex flex-col gap-[9px] justify-between">
              <label htmlFor="productName"  className="block text-[22px] text-[#707070]">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                onChange={handleChange}
                value={formData.productName}
                className="p-2 rounded-[6px] border-1 border[-#707070] w-full"
              />
              <p className="text-red-500 h-4">
                {errors.productName}
              </p>
            </div>
            <div className="flex flex-col gap-[9px] justify-between">
              <label htmlFor="productBrand"  className="block text-[22px] text-[#707070]">
                Product Brand
              </label>
              <input
                type="text"
                name="productBrand"
                onChange={handleChange}
                value={formData.productBrand}
                className="p-2 rounded-[6px] border-1 border[-#707070] w-full"
              />
              <p className="text-red-500 h-4">
                {errors.productBrand}
              </p>
            </div>
            <div className="flex flex-col gap-[9px] justify-between">
              <label htmlFor="productId"  className="block text-[22px] text-[#707070]">
                Product ID
              </label>
              <input
                type="text"
                name="productId"
                onChange={handleChange}
                value={formData.productId}
                className="p-2 rounded-[6px] border-1 border[-#707070] w-full"
              />
              <p className="text-red-500 h-4">
                {errors.productId}
              </p>
            </div>
            <div className="flex flex-col gap-[9px] justify-between">
              <label htmlFor="productCategory"  className="block text-[22px] text-[#707070]">
                Product Category
              </label>
              <input
                type="text"
                name="productCategory"
                onChange={handleChange}
                value={formData.productCategory}
                className="p-2 rounded-[6px] border-1 border[-#707070] w-full"
              />
              <p className="text-red-500 h-4">
                {errors.productCategory}
              </p>
            </div>
            <div className="flex flex-col gap-[9px] md:col-span-2 justify-between">
              <label htmlFor="description"  className="block text-[22px] text-[#707070]">
                Product Description
              </label>
              <textarea
                rows={3}
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="rounded-[6px] border-1 border[-#707070] p-2 w-full"
              />
              <p className="text-red-500 h-4">
                {errors.description}
              </p>
            </div>
            <div className="flex flex-col gap-[9px] justify-between">
              <label htmlFor="countInStock"  className="block text-[22px] text-[#707070]">
                Count in Stock
              </label>
              <input
                type="number"
                name="countInStock"
                onChange={handleChange}
                value={formData.countInStock}
                className="p-2 rounded-[6px] border-1 border[-#707070] w-full"
              />
              <p className="text-red-500 h-4">
                {errors.countInStock}
              </p>
            </div>
            <div className="flex flex-col gap-[9px] justify-between">
              <label htmlFor="price"  className="block text-[22px] text-[#707070]">
                Price
              </label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={formData.price}
                className="p-2 rounded-[6px] border-1 border[-#707070] w-full"
              />
              <p className="text-red-500 h-4">
                {errors.price}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
