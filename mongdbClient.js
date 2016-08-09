var MongoClient = require('mongodb').MongoClient;

var insertData = function(db, callback){
	//console.log(db);
	var collection = db.collection('users');
	var data = [{"name":"fly1", "age":"11", sex:true}, {"name":"fly2", "age":"12", sex:true}];
	collection.insert(data, function(err, result){
		if(err){ console.log(err); return ;}
		callback(result);
	});

}


MongoClient.connect("mongodb://106.75.28.20:27017/apinote", function(err, db){
	console.log("connect successfully ...");
	insertData(db, function(result){
		console.log(result);
		db.close();
	})
});