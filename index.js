const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/signup",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

const user = new User(
    {
        name: "chilli",
        email: "meow@yougotmail.com",
        password: "giveMeTreats"
    }
);

user.save();

app.listen(port, () => {
    console.log(`You're live on ${port}`)
})