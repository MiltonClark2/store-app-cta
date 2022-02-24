import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCryptos = () => {
    const [ cryptos, setCryptos ] = useState([]);

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API + "/cryptos")
        .then((res) => {
            setCryptos(res.data);
        })
    }, []);

    let cryptosToDisplay = cryptos.map((crypto, index) => {
        return(
            <li key = { index }>
                <h3>{crypto.name}</h3>
                <img src={crypto.image} alt={crypto.name}/>
                <div>{crypto.description}</div>
                <Link to = {`/cryptos/${crypto.id}`}><h4>{crypto.name}</h4></Link>
            </li>
        )
    });

    return(
        <div>
            <h1>Displaying All Cryptocurrencies</h1>
            <ul>
                {cryptosToDisplay}
            </ul>
        </div>
    );
};

export default AllCryptos;