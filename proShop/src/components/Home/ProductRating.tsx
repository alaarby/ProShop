import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface ProductRatingProps{
  rating?: number,
  totalStars?: number
}
const ProductRating = ({ rating = 0, totalStars = 5 }: ProductRatingProps) => {

  const stars = [];
  for(let i = 1; i <= totalStars; i++){
    if(rating > i){
      stars.push(<FaStar key = {i} className="text-yellow-400 w-5 h-5" />);
    } else if((rating >= i - 0.5)){
      stars.push(<FaStarHalfAlt key ={i} className="text-yellow-400 w-5 h-5" />);
      console.log(rating);
    } else{
      stars.push(<FaStar key = {i} className="text-gray-300 w-5 h-5" />);
    }
  }
  return (
    <div className="flex space-x-1">
      {stars}
    </div>
  )
}

export default ProductRating;