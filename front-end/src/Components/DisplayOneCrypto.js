// Dependencies
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DisplayOneCrypto = () => {
    const [ crypto, setCrypto ] = useState({});
    const { id } = useParams();

    let API = process.env.REACT_APP_API_URL;

    let navigate = useNavigate();
    useEffect(() => {
        axios.get(API + "/cryptos/" + id)
            .then((res) => {
                setCrypto(res.data);
            });
    }, [API, id]);

    const handleDelete = () => {
        axios
            .delete(API + "/cryptos/" + id)
            .then((res) => {
                navigate("/cryptos");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div>
            <ul>
                <li>{crypto.name}</li>
                <img src={crypto.image} alt={crypto.name} />
                <li>{crypto.description}</li>
                <li>Price: {crypto.price}</li>
                <li>Rating: {crypto.rating}</li>
                <li>Featured: {crypto.featured}</li>
            </ul>

            <Link to={`/cryptos`}>
                <button>Back</button>
            </Link>
            <Link to={`/cryptos/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

};


export default DisplayOneCrypto;