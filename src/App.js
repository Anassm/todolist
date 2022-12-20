import Footer from "./components/footer";
import NavBar from "./components/navbar";
import "./css/style.css";
import Routing from "./utils/routing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
