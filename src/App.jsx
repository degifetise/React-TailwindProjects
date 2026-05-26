import "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
