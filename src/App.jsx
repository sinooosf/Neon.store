import { CartProvider } from "./context/CartContext.jsx";
import Announcement from "./components/Announcement.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import CategoryGrid from "./components/CategoryGrid.jsx";
import TrendingProducts from "./components/TrendingProducts.jsx";
import PromoBanners from "./components/PromoBanners.jsx";
import InstagramStrip from "./components/InstagramStrip.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <CartProvider>
      <Announcement />
      <Navbar />
      <Hero />
      <Features />
      <CategoryGrid />
      <TrendingProducts />
      <PromoBanners />
      <InstagramStrip />
      <Footer />
    </CartProvider>
  );
}
