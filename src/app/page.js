import Slider from "../Component/Slider/Slider"
import Trending from './../Component/TrendingArea/Trending';
import Catagory from "../Component/Catagory/Catagory"
import Faceleties from "../Component/Faceleties/Faceleties"
import Banner from "../Component/AdsBanner/Banner"
import Eletronic from "../Component/Eletronic/Eletronic"
import BottomSlider from "../Component/BottomSlider/BottomSlider"
function page() {
  return (
    <div>
      <div className="">
         <Slider/>
         <Catagory/>
         <Faceleties/>
         <Trending/>
         <Banner/>
         <Eletronic/>
         <BottomSlider/>
      </div>
    </div>
  )
}

export default page