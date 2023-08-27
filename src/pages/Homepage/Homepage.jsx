import Banner from '../../components/Banner/Banner';
import Herohome from '../../components/HeroSection/Herohome';
import ProductCard from '../../components/Products/ProductCard/ProductCard';

export default function Homepage() {
  return (
    <section className="bg-[#E0E4E0]">
      <Herohome />
      <Banner />
      <ProductCard />
    </section>
  );
}
