const db = require("../db/dbConfig.js");

const getAllCryptos = async() => {
    try{
        const allCryptos = await db.any("SELECT * FROM cryptos");
        return allCryptos;
    } catch(err) {
        return err;
    }
};

const getOneCrypto = async(id) => {
    try{
        const oneCrypto = await db.one("SELECT * FROM cryptos WHERE id=$1", id);
        return oneCrypto;
    } catch(err) {
        return err;
    }
};

const createCrypto = async(crypto) => {
    try{
        if(!crypto.image){
            crypto.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
        };
        const newCrypto = await db.one(
            "INSERT INTO cryptos (name, image, description, price, rating, featured) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                crypto.name,
                crypto.image,
                crypto.description,
                crypto.price,
                crypto.rating,
                crypto.featured
            ]
        );
        return newCrypto;
    } catch(err) {
        return err;
    }
};


module.exports = {
    getAllCryptos,
    getOneCrypto,
    createCrypto,



};