import Background from "./components/Background";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-text">
      <Background />

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
