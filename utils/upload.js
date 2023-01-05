require('dotenv').config()
const uploadRouter = require('express').Router();
const passport = require('passport');
const multer = require('multer');
const { memoryStorage } = require('multer')
const storage = memoryStorage()
const upload = multer({ storage })
const uploadAudio = require('./aws')


uploadRouter.get('/upload', async (req, res) => {

    if (req.isAuthenticated()) {
    
        const form = '<h1>Upload page</h1><form method="POST" action="/login">\
    Enter FileName:<br><input type="text" name="username">\
    <br>upload file:<br><input type="file" name="password">\
    <br><br><input type="submit" value="upload"></form>';

    res.send(form)
       
    } else {
        res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
    }

    

    

})

uploadRouter.post('/upload', async (req, res) => {
    res.json({data: "success"})
})

module.exports = uploadRouter




// uplaods post route. posts to s3 bucket
// uploadRouter.post('/upload',upload.single('beat'), async (req, res) => {
//     const filename = 'tcct';
//     const bucketname = 'beatsnipet';
//     const file = req.file.buffer
//     // link is the returned object URL from S3
//     const link = await uploadAudio(filename, bucketname, file)
//     res.send(link)
// })