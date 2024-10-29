import Slider from "../components/Slider"
import Trending from "../components/Trending";
import Catagory from "../components/Category"
import Faceleties from "../components/Faceleties"
import Banner from "../components/Banner"
import Eletronic from "../components/Eletronic"
// import BottomSlider from "../components/BottomSlider"
// import NewAraval from "../components/NewAraval"
// import Feture from "../components/Feture";
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
          {/* 
         
         <BottomSlider/>
         <NewAraval/>
         <Feture/>  */}
      </div>
    </div>
  )
}

export default page