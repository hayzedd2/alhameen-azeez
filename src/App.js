import About from "./components/About";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      
      <HomePage />
      <About />
      <Skills/>
    </div>
  );
}

export default App;
