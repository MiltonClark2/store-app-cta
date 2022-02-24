import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <ul>
            <li>
                <Link to = "/">
                    Home
                </Link>
            </li>
            <li>
                <Link to = "/cryptos">
                    Cryptocurrencies
                </Link>
            </li>
            <button>
                <Link to="/cryptos/new">
                    New Cryptocurrency
                </Link>
            </button>
        </ul>
    )
};

export default NavBar;