var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/apinote";

exports.saveNoteApi = function(table, data, callback){
	MongoClient.connect(url, function(err, db){
		if(err){
			console.log(err);
			return;
		}
		var collection = db.collection(table);
		collection.insert(data, function(err, result){
			if(err){
				console.log(err);
				return;
			}
			db.close();
			callback(result);	
		});
	});
};

exports.queryAllNote = function(table, callback){
	MongoClient.connect(url, function(err, db){
		if(err){
			console.log(err);
			return;
		}
		var collection = db.collection(table);
		collection.find().toArray(function(err, docs){
			if(err){
				console.log(err);
				return;
			}
			console.log("query", docs);
			db.close();
			callback(docs);	
		});
	});
};
