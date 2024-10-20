import Slider from "../components/slider"
import Trending from "../components/Trending";
import Catagory from "../components/Catagory"
import Faceleties from "../components/Faceleties"
import Banner from "../components/Banner"
import Eletronic from "../components/Eletronic"
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