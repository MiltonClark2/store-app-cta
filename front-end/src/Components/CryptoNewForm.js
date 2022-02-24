import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function CryptoNewForm() {
    let navigate = useNavigate();

    const [crypto, setCrypto] = useState({
        name: "",
        image: "",
        description: "",
        price: 0.00,
        rating: 0,
        featured: true,
    });

    const addCrypto = () => {
        axios 
            .post(`${API}/cryptos`, crypto)
            .then(
                () => {
                    navigate(`/cryptos`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setCrypto({...crypto, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setCrypto({...crypto, featured: !crypto.featured});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCrypto();
    };
    return(
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    id="name"
                    value={crypto.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Cryptocurrency"
                    required
                />
                <label htmlFor="image">Image:</label>
                <input 
                    id="image"
                    type="text"
                    pattern="http[s]*://.+"
                    required
                    value={crypto.image}
                    placeholder="http://"
                    onChange={handleTextChange}
                />
                <label htmlFor="description">Description:</label>
                <input 
                    id="description"
                    type="text"
                    name="description"
                    value={crypto.description}
                    placeholder="Ticker Symbol"
                    onChange={handleTextChange}
                />
                <label htmlFor="price">Price:</label>
                <input 
                    id="price"
                    type="numeric"
                    name="price"
                    value={crypto.price}
                    placeholder="0"
                    onChange={handleTextChange}
                />
                <label htmlFor="rating">Rating:</label>
                <input 
                    id="rating"
                    type="numeric"
                    name="rating"
                    value={crypto.rating}
                    placeholder="0"
                    onChange={handleTextChange}
                />
                <label htmlFor="featured">Featured:</label>
                <input 
                    id="featured"
                    type="checkbox"
                    name="featured"
                    onChange={handleCheckboxChange}
                    checked={crypto.featured}
                />

                <br />
                <input type="submit" />
            </form>
            <Link to={`/cryptos`}>
                <button>Back</button>
            </Link>
        </div>
    );
};

export default CryptoNewForm;