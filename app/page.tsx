import AcetateCollection from "./components/AcetateCollection";
import Achievements from "./components/Achievements";
import AwardVideo from "./components/AwardVideo";
import Box from "./components/Box";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import CoundDownTimer from "./components/CircleCountDown";
import CountDownDigital from "./components/CountDownDigital";
import CustomerReview from "./components/CustomerReview";
import FeaturedProduct from "./components/FeaturedProduct";
import FlippingVideo from "./components/FlippingVideo";
import Frames from "./components/Frames";
import GlassesPlusSign from "./components/GlassesPlusSign";
import MaterialFrame from "./components/MaterialFrame";
import SaleTimer from "./components/SaleTimer";

export default function Home() {
  return (
   <div className="gap-20 flex flex-col">
      <Carousel/>
       <FeaturedProduct/>
       <Category/>
       <AwardVideo/>
       <AcetateCollection/>
       <FlippingVideo/>
       <GlassesPlusSign/>
       <Frames/>
       <SaleTimer/>
       <Achievements/>
       <Box/>
       {/* <MaterialFrame/> */}
       {/* <CoundDownTimer/> */}
       {/* <CountDownDigital/> */}
       <CustomerReview/>
   </div>
  );
}
