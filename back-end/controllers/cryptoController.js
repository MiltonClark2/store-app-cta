const express = require("express");
const cryptos = express.Router();
const {
    getAllCryptos,
    getOneCrypto,
    createCrypto
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

cryptos.get("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const oneCrypto = await getOneCrypto(id);
        if(oneCrypto.id){
            res.status(200).json(oneCrypto);
        } else {
            res.status(404).json("Error: Crypto not found");
        }
    } catch(err) {
        return err;
    }
});

cryptos.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdCrypto = await createCrypto(body);
        if(createdCrypto.id){
            res.status(200).json(createdCrypto);
        } else {
            res.status(422).json("Error: Crypto creation error");
        }
    } catch(err) {
        console.log(err);
    }
});





module.exports = cryptos;
