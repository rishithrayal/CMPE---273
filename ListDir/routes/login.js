var express = require('express');
var router = express.Router();
var fs = require('fs');
var testFolder = './routes/';

router.get('/test1',function (req,res) {

});

router.post('/test',function (req,res) {
    console.log("Fuck off Ejs");
    // res.write('Fuck off ejs');



});



router.post('/checkPassword', function(req, res)  // '/Login' is the file route to render the ejs file.
{
    // var response = "";
    // testFolder = req.param('dir');
    // console.log(testFolder);
    // fs.readdir(testFolder, function (err, files)
    // {
    //     console.log(files.length);
    //     console.log(files);
    //     for(var i=0;i<files.length;i++)
    //     {
    //         response += files[i]+"<br>";
    //     }
    //     res.send(response);
    // });

    var username = 'admin';
    var password = 123;

    var uname = req.param('uname');
    var pass = req.param('pass').toString();
    // console.log(username);
    console.log(uname);
    // console.log(pass);
    if (username == uname && password == pass){
        res.send(200);
    }
    else{
        res.send(400);
    }





});

module.exports = router;