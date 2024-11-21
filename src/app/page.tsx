import Image from "next/image";
import RestaurantLanding from "./landingpage/page";
import FeaturesSection from "./featuresection/page";
import SpecialOfferSection from "./offer";
import FoodMenu from "./foodmenu";
import SpecialChefs from "./chef/page";
export default function Home() {
  return (
    <div>
     
     <RestaurantLanding/>
     <FeaturesSection/>
     <SpecialOfferSection/>
     < FoodMenu/>
     <SpecialChefs/>
    </div>
  );
}
