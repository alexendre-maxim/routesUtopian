var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	
	var sponsor = {
		id : req.body.id
	};
	
	res.status(200).json({
		
		message : "Get request to /sponsors",
			
		sponsor : sponsor	
	});
	
});

router.post('/', function(req, res){
	
	var sponsor = {
		id : req.body.id
	};
	
	res.status(200).json({
		
		message : "Post request to /sponsors",
		sponsor : sponsor
		
	});
	
	
	
});

router.get('/:idS', function(req, res){
	
	var id = req.params.idS;
	
	if(id==0){
		res.status(200).json({
		
		message : "This sponsor is the best sponsor"
		});
	
		
	} else {
		res.status(200).json({
		
		message : "This sponsor is normal sponsor"
		});
	}
	
});

router.patch('/:idS', function(req, res){
	
		var id = req.params.idS;
	
		res.status(200).json({
		
		message : "This sponsor "+ id + " was updated"
		
		});
	
});

router.delete('/:idS', function(req, res){
	
		var id = req.params.idS;
	
		res.status(200).json({
		
		message : "This sponsor "+ id + " was deleted"
		
		});
	
});

module.exports = router;
