import { Toaster } from "sonner";
import NavBar from "../components/ui/NavBar";
import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import Trending from "../components/ui/Trending";
import Categories from "../components/ui/categories";
import Bloggers from "../components/ui/Bloggers";
import SupportCreators from "../components/ui/Subscribe";
import Footer from "../components/ui/Footer";

function MainLayout() {
  return (
    <div className="p-2">
      {/* 🔔 Toast container (ONLY ONCE) */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          className: "z-[9999]",
        }}
      />

      <NavBar />
      <Hero />
      <Features />
      <Trending />
      <Categories />
      <Bloggers />
      <SupportCreators />
      <Footer />
    </div>
  );
}

export default MainLayout;
