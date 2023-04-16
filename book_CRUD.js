const express = require('express')
const app = express()
const port = 3000
const bodyparser = require("body-parser")
const mysql_connector = require("mysql");
const dotenv = require("dotenv")

dotenv.config();
const connection = mysql_connector.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "sys",
})


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("test")
})

app.post("/insert", (req, res) => {
    connection.connect()

    try {
        connection.query(`Insert into comic_book (book_name,author,year_published,price,discount,pages,book_condition) values ('${req.body.book_name}','${req.body.author}','${req.body.year_published}',${req.body.price},${req.body.discount}, ${req.body.pages},'${req.body.book_condition}' )`,
            function (error, result) {
                res.send(result)
                console.log(error)
                connection.end()
            })
    } catch (e) {
        console.log(e)
    }
})


//Endpoint to delete a book through the name given in the body 
app.delete("/delete", (req, res) => {
    console.log(req.query)
    connection.connect()
    try {
        connection.query(`DELETE FROM comic_book WHERE book_name = '${req.query.book_name}' `,
            function (error, result) {
                res.send(result)
                console.log(error)
                connection.end()
            })
    } catch (e) {
        console.log(e)
    }
})


//endpoint to update the book attribute
app.get("/update", (req, res) => {
    console.log(req.query)
    connection.connect()
    try {
        connection.query(`update comic_book set ${req.query.attribute} = ${req.query.value} `,
            function (error, result) {
                res.send(result)
                console.log(error)
                connection.end()
            })
    } catch (e) {
        console.log(e)
    }
})
app.listen(port, () => {
    console.log("I am on !", + port)
})
