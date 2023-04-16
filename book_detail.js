const express = require('express')
const app = express()
const port = 3000
const bodyparser = require("body-parser")
const mysql_connector = require("mysql");
const dotenv = require("dotenv")



dotenv.config();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

const connection = mysql_connector.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "sys",
})
connection.connect()

app.get("/detail", (req, res) => {
    try {
        connection.query(`select * from comic_book where book_name = '${req.query.book_name}'`, function (error, result) {
            res.send(result)
            console.log(error)
        })
    } catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
    console.log("I am on !" + port)
})