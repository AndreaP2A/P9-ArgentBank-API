import NavBar from "../../components/NavBar";
import HeroBanner from "../../components/HeroBanner";
import FeatureSection from "../../components/FeatureSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <HeroBanner />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
