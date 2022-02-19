const db = require("../db/dbConfig.js");

const getAllCryptos = async () => {
    try{
        const allCryptos = await db.any("SELECT * FROM cryptos");
        return allCryptos;
    }catch(err) {
        return err;
    }
};

const getCrypto = async (id) => {
    try {
        const crypto = await db.one("SELECT * FROM cryptos WHERE id=$1", id);
        return crypto;
    } catch(err) {
        return err;
    }
};


module.exports = {
    getAllCryptos,
    getCrypto,
    


};