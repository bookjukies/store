const express = require("express")
const app =  express()
const port = 5000
const connection = require('./database/connect')
const session = require('./middleware/session')
const passport = require('passport');
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')


// -------middleware----------- //
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//this module can be found in the middleware folder
app.use(session(process.env.mongo_url))
//
require('./config/passport')
//initializing passport and allowing it to use sesions
app.use(passport.initialize())
app.use(passport.session())

app.use(routes);


const start =  async () =>{
    try {
        await connection

        app.listen(port, () => {
        console.log(`The server is running on port: ${port}`)
})
    } catch (err) {
        console.log(err);
    }
}
start()

app.use(errorHandler)