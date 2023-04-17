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
//1.attribute 
//2.value to the attribute
// 3.attribute which is to be sorted
// 4.asc or desc sorting

app.get("/display", (req, res) => {

    if (req.query.sort) {
        try {
            connection.query(`select * from comic_book order by ${req.query.attribute} ${req.query.sort}`, function (error, result) {
                res.send(result)
                console.log(error)

            })
        } catch (e) {
            console.log(e)
        }
    }
    else {
        try {
            connection.query(`select * from comic_book`, function (error, result) {
                res.send(result)
                console.log(error)
            })
        } catch (e) {
            console.log(e)
        }
    }
})

app.get("/display/filter", (req, res) => {
    try {
        connection.query(`select * from comic_book where ${req.query.attribute} = '${req.query.value}'`, function (error, result) {
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