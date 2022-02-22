// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import AllCryptos from "./Components/AllCryptos";



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/cryptos" element = { <AllCryptos />} />

      </Routes>
    </Router>
   

     
   
  );
};

export default App;


// const [days, setDays] = useState([]);
// useEffect(() => {
//   axios
//     .get(`${API}/test`)
//     .then(
//       (response) => {
//         setDays(response.data);
//       },
//       (error) => console.log("get", error)
//     )
//     .catch((c) => console.warn("catch", c));
// }, []);