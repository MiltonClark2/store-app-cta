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
                {crypto.name},
                {crypto.description}
                <Link to = {`/cryptos/${crypto.id}`}><h4>{crypto.name}</h4></Link>
            </li>
        )
    });

    return(
        <div>
            <h2>Displaying All Cryptocurrencies</h2>
            <ul>
                {cryptosToDisplay}
            </ul>
        </div>
    )

};

export default AllCryptos;