import ProductsList from "./Components/Product/ProductsList";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";

document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || "light");

function App() {
  return (
    <div className="app-page">
     <Navbar />
     <ProductsList />
    </div>
  )
}

export default App
