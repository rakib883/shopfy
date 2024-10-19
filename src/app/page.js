import Slider from "../components/slider/Slider"
import Trending from "../components/trendingArea/Trending";
import Catagory from "../components/catagory/Catagory"
import Faceleties from "../components/faceleties/Faceleties"
import Banner from "../components/adsBanner/Banner"
import Eletronic from "../components/eletronic/Eletronic"
import BottomSlider from "../components/bottomSlider/BottomSlider"
import NewAraval from "../components/newArrival/NewAraval"
import Feture from "../components/fetureArea/Feture";
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
         <NewAraval/>
         <Feture/>
      </div>
    </div>
  )
}

export default page