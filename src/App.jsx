import { Background } from "./components/Background";
import FavoritesDrawer from "./components/FavoritesDrawer";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-text">
      <Background />
      <FavoritesDrawer />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
