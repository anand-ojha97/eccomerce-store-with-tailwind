import HeroBanner from "./components/Banner/HeroBanner";
import YellowBanner from "./components/Banner/YellowBanner";
import Fact from "./components/Fact/Fact";
import DiscountFeatures from "./components/Features/DiscountFeatures";
import HomeFeatures from "./components/Features/HomeFeatures";
import Footer from "./components/Footer/Footer";
import FruitShop from "./components/Fruits Shop/FruitShop";
import Header from "./components/Header/Header";
import Bestseller from "./components/Seller/Bestseller";
import Testimonial from "./components/Sliders/Testimonial";
import VegitableShop from "./components/Sliders/VegitableShop";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <HomeFeatures />
      <FruitShop />
      <DiscountFeatures />
      <VegitableShop />
      <YellowBanner />
      <Bestseller />
      <Fact />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
