import type Category from "../../data/categories";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-[380px] h-[392px]">
      <div className="w-full h-[346px] bg-slate-50">
        <img className="max-h-full" src={category.image} alt={category.name} />
      </div>
      <p className="text-neutral-800 test-[24px] h-[30px]">{category.name}</p>
    </div>
  )

}
export default CategoryItem;