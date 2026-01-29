import BestSellingProducts from "./components/BestSellingProducts";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <main>
        <Hero></Hero>
        <Categories></Categories>
        <WhyChooseUs></WhyChooseUs>
        <BestSellingProducts></BestSellingProducts>
      </main>
    </div>
  );
}
