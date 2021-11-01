const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const TOKEN = process.env.API_KEY;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send({ hello: "s" });
});

const loginUrl = "http://challenge-react.alkemy.org/";

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await axios.post(loginUrl, {
            email,
            password,
        });
        res.send(token.data.token);
    } catch (error) {
        res.send(error.message);
    }
});

app.get("/search/:hero", async (req, res) => {
    const heroName = req.params.hero;
    console.log(heroName);
    try {
        const heroFound = await axios.get(
            `https://superheroapi.com/api/${TOKEN}/search/${heroName}`
        );
        res.send(heroFound.data);
    } catch (error) {
        res.send(error.message);
    }
});

app.get("/hero/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const hero = await axios.get(
            `https://superheroapi.com/api/${TOKEN}/${id}`
        );
        res.send(hero.data);
    } catch (error) {
        res.send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});
