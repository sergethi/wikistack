//const morgan = require('morgan');
const { db } = require('./models');
const express = require('express');
const morgan = require("morgan");
const Sequelize = require('sequelize');
const path = require("path");
const port = 3000;
const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.get('/',(req, res, next) => {
    res.send('Hello world!');
});
// const init = async () => {
//     await db.User.sync();
//     await db.Page.sync();
//     app.listen(port, () => {
//         console.log("Server is running on localhost:" + port);
//     });
// }

const init = async () => {
    await db.sync () 
        app.listen(port, () => {
        console.log("Server is running on localhost:" + port);
        });
}
init();



// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

// const User = db.define('user', {
//     name: Sequelize.STRING,
//     email: Sequelize.STRING
// });

// const Page = db.define('page', {
//     title: Sequelize.STRING,
//     slug: Sequelize.STRING,
//     content: Sequelize.TEXT,
//     status: Sequelize.STRING
// });

