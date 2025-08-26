import Carousel from "../components/Home/Carousel";
import FeaturedCategories from "../components/Home/FeaturedCategories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import TopRateProducts from "../components/Home/TopRateProducts";
const Home = () => {
  return (
    <div className="flex flex-col bg-white">
      <Carousel />
      <FeaturedCategories />
      <FeaturedProducts />
      <TopRateProducts />
    </div>
  )
}
export default Home;