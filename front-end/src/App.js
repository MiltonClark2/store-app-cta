// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import AllCryptos from "./Components/AllCryptos";
import DisplayOneCrypto from "./Components/DisplayOneCrypto";
import CryptoEditForm from "./Components/CryptoEditForm";
import CryptoNewForm from "./Components/CryptoNewForm";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptos" element={<AllCryptos />} />
            <Route path="/cryptos/new" element={<CryptoNewForm />} />
            <Route exact path="/cryptos/:id" element={<DisplayOneCrypto />} />
            <Route path="/cryptos/:id/edit" element={<CryptoEditForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;



