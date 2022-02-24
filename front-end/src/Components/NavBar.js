import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavBar = () => {
    return(
        <ul className="NavBar">
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
            <Button type="button" class="btn btn-info">
                <Link to="/cryptos/new">
                    New Cryptocurrency
                </Link>
            </Button>
        </ul>
    )
};

export default NavBar;