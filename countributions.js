var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
	res.status(200).json({
		message : "List of contributions"
	});
});
router.post('/', function(req, res){
	res.status(200).json({	
		message : "Contributions was created"		
	});
});
router.get('/:idC', function(req, res){
	var id = req.params.idC;
		res.status(200).json({
		message : "This is the contribution number " + id
		});	
	
});
module.exports = router;