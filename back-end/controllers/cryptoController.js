const express = require("express");
const cryptos = express.Router();
const {
    getAllCryptos,
    getCrypto
} = require("../queries/cryptos.js");


cryptos.get("/", async(req, res) => {
    try{
        const allCryptos = await getAllCryptos();
        if(allCryptos[0]){
            res.status(200).json(allCryptos);
        } else {
            res.status(404).json("No cryptos returned from db");
        }
    } catch(err) {
        return err;
    }
});



module.exports = cryptos;
