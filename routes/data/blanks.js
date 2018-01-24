var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/blanks';

exports.get = function(req, res) {
	MongoClient.connect(url, function(err, client) {

	var db = client.db('testing')
	var collection = db.collection('documents')
			collection.find({}).toArray(function(err, result) {
				res.send(result[0]);
		 	 db.close();
		   })
	})
};

exports.post = function(req, res) {

  var blakns_paint_gramm = req.body.blakns_paint_gramm;
  var blakns_price_min = req.body.blakns_price_min;
  var blakns_price_newspaper = req.body.blakns_price_newspaper;
  var blakns_price_offsetpaper = req.body.blakns_price_offsetpaper;
  var blakns_price_master = req.body.blakns_price_master;
  var blanks_price_kalka = req.body.blanks_price_kalka;
  var blanks_price_plastina = req.body.blanks_price_plastina;
  var blanks_price_copy_plastin = req.body.blanks_price_copy_plastin;
  var blakns_paint_grammOver = req.body.blakns_paint_grammOver;
  var blakns_price_minOver = req.body.blakns_price_minOver;  

	MongoClient.connect(url, function(err, client) {

	var db = client.db('testing')
	var collection = db.collection('documents')
	collection.remove({}, function (err) {
		collection.insert({
			
		blakns_paint_gramm : blakns_paint_gramm, 
		blakns_price_min : blakns_price_min, 
		blakns_price_newspaper : blakns_price_newspaper,
		blakns_price_offsetpaper : blakns_price_offsetpaper,
		blakns_price_master : blakns_price_master,
	    blanks_price_kalka : blanks_price_kalka,
		blanks_price_plastina : blanks_price_plastina,
		blanks_price_copy_plastin : blanks_price_copy_plastin,
		blakns_paint_grammOver : blakns_paint_grammOver,
		blakns_price_minOver : blakns_price_minOver,

		}, function(err, docs) {
			collection.find({}).toArray(function(err, result) {
				console.log(result[0])
		 	 db.close();
		    })
		})
	 })
  });
};

