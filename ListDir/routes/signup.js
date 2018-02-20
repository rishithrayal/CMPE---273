var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
    console.log('Damma Dakka Dally');

});

router.post('/finished', function (req,res) {
    var user = req.param('uname1');
    var key = req.param('pass1');
    var email = req.param('email');
    console.log(user,email);
    // res.send(200);
    res.send('Signup Successful');

});

module.exports = router;
// router.post('/displayDetails', function (req, res) {
//
//
// });