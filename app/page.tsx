import Card from "./components/Card";
import Carousel from "./components/Carousel";
import FeaturedProduct from "./components/FeaturedProduct";

export default function Home() {
  return (
   <div className="gap-20 flex flex-col">
      <Carousel/>
       <FeaturedProduct/>
   </div>
  );
}
