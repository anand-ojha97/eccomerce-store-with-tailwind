import HeroBanner from "./components/Banner/HeroBanner";
import YellowBanner from "./components/Banner/YellowBanner";
import DiscountFeatures from "./components/Features/DiscountFeatures";
import HomeFeatures from "./components/Features/HomeFeatures";
import Footer from "./components/Footer/Footer";
import FruitShop from "./components/Fruits Shop/FruitShop";
import Header from "./components/Header/Header";
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
      <Footer />
    </>
  )
}

export default App
