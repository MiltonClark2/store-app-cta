import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function CryptoEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [crypto, setCrypto] = useState({
        name: "",
        image: "",
        description: "",
        price: 0.00,
        rating: 0,
        featured: true,
    });

    const updateCrypto = (updatedCrypto) => {
        axios
            .put(`${API}/cryptos/${id}`, updatedCrypto)
            .then(
                () => {
                    navigate(`/cryptos/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setCrypto({...crypto, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setCrypto({...crypto, featured: !crypto.featured });
    };

    useEffect(() => {
        axios.get(`${API}/cryptos/${id}`).then(
            (response) => setCrypto(response.data),
            (error) => navigate(`/not-found`)
        );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCrypto(crypto, id);
    };
    return (
        <div className="Edit">
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
                    type="integer"
                    name="price"
                    value={crypto.price}
                    placeholder="0"
                    onChange={handleTextChange}
                />
                <label htmlFor="rating">Rating:</label>
                <input
                    id="rating"
                    type="integer"
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
            <Link to={`/cryptos/${id}`}>
                <button>Just Kidding!</button>
            </Link>
        </div>
    );
};

export default CryptoEditForm;