import HomeBanner from "./components/Banner/HomeBanner";
import DiscountFeatures from "./components/Features/DiscountFeatures";
import HomeFeatures from "./components/Features/HomeFeatures";
import Footer from "./components/Footer/Footer";
import FruitShop from "./components/Fruits Shop/FruitShop";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
       <Header />
       <HomeBanner />
       <HomeFeatures />
       <FruitShop />
       <DiscountFeatures />
       <Footer />
    </>
  )
}

export default App
