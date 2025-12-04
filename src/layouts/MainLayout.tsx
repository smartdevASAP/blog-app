import NavBar from "../components/ui/NavBar";
import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import Trending from "../components/ui/Trending";
function MainLayout() {
  return (
    <div className="p-2">
      <NavBar />
      <Hero />
      <Features />
      <Trending />
    </div>
  );
}

export default MainLayout;
