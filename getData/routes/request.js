var express = require('express');
var router = express.Router();

router.use(function(req,res, next) {
    var data = '';
    req.setEncoding='UTF-8';
    req.on('data', function(chunk) {
        data +=chunk;
    });
    req.on('end', function() {
        req.body= data;
        next();
    });
});

/* POST. */
router.post('/', function(req, res, next) {
    var reqData = JSON.parse(req.body);
    ctrl.insertModule(reqData, function(response){
     res.send(response)
     } )       
});


module.exports = router;
