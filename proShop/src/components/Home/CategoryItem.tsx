import type Category from "../../data/categories";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col items-center justify-between max-w-[380px] max-h-[392px]">
      <div className="w-full h-[346px] bg-[#F7F8FC] rounded-[16px]">
        <img className="max-h-full" src={category.image} alt={category.name} />
      </div>
      <p className="text-[#242424] text-[24px] font-semibold">{category.name}</p>
    </div>
  )
}

export default CategoryItem;