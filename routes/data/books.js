var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/books';

exports.get = function(req, res) {
	MongoClient.connect(url, function(err, client) {

	var db = client.db('books')
	var collection = db.collection('documents')
			collection.find({}).toArray(function(err, result) {
				res.send(result[0]);
		 	 db.close();
		   })
	})
};

exports.post = function(req, res) {
	
  var books_price_newspaper = req.body.books_price_newspaper;
  var books_price_offsetpaper = req.body.books_price_offsetpaper;
  var books_paint_gramm = req.body.books_paint_gramm;
  var books_price_min = req.body.books_price_min;
  var books_price_master = req.body.books_price_master;
  var books_price_ISBN = req.body.books_price_ISBN;
  var books_price_konsul = req.body.books_price_konsul;
  var books_verstka = req.body.books_verstka;
  var books_korrektura = req.body.books_korrektura;
  var books_change_master1 = req.body.books_change_master1; 
  var books_change_master2 = req.body.books_change_master2;  

	MongoClient.connect(url, function(err, client) {

	var db = client.db('books')
	var collection = db.collection('documents')
	collection.remove({}, function (err) {
		collection.insert({
			
			books_price_newspaper : books_price_newspaper,
			books_price_offsetpaper : books_price_offsetpaper,
			books_paint_gramm : books_paint_gramm, 
			books_price_min : books_price_min, 
			books_price_master : books_price_master,
			books_price_ISBN : books_price_ISBN,
			books_price_konsul : books_price_konsul,
			books_verstka : books_verstka,
			books_korrektura : books_korrektura,
			books_change_master1 : books_change_master1,
			books_change_master2 : books_change_master2,

		}, function(err, docs) {
			collection.find({}).toArray(function(err, result) {
				console.log(result[0])
		 	 db.close();
		    })
		})
	 })
  });
};

