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
            res.status(404).json("Error: No cryptos returned from db");
        }
    } catch(err) {
        return err;
    }
});

cryptos.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const crypto = await getCrypto(id);
        if(crypto.id){
            res.status(200).json(crypto);
        } else {
            res.status(404).json("Error: Crypto not found");
        }
    } catch(err) {
        return err;
    }
});



module.exports = cryptos;
