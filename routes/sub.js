var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://127.0.0.1:27017/papy';

//var subscriber_email_container = [];

var _db;
MongoClient.connect(url, function(err, db) {
  
  console.log("connect to user mongodb successfully");

  _db = db;
  
});


var insert_doc = function(coll, doc, callback) {
  _db.createCollection(coll, function(err, collection) {
    if (!err) {
      collection.insert(doc, function(err, result) {
	if (!err) {
	  callback(null, result[0]);
	} else {
	  callback(err, 'failed to insert documnet');
	}
      });
    } else {
      callback(err, 'failed to select collection');
    }
  });
};


router.get('/', function(req, res) {

  var email = 'bb@gmail.com';

  var subs = [];
  
  var collection = _db.collection('sub');
  collection.find({},{_id:0, email: 1}).toArray(function(err, docs) {
    if(err) {
      console.log('[error] 유저 email 가져오다가 문제발생');
      console.log(err);
    }

    for(var i=0; i<docs.length; i++) {
      subs.push(docs[i].email);
    }

    res.end(subs.toString());
    //var rtn = docs;
    //res.end(JSON.stringify(rtn));
  });

  //res.end(JSON.stringify(subscriber_email_container));  
});

router.get('/add/:email', function(req, res) {
  var rtn = {};
  var email = req.params.email;


  var collection = _db.collection('sub');
  collection.find({email: email}).toArray(function(err, docs) {
    if(err) {
      console.log('[error] find 문제발생');
      console.log(err);
      
      rtn.result = false;
      res.end(JSON.stringify(rtn));
      return;
    }

    if(docs.length > 1) {
      console.log('[debug] email 이미 존재함');
      rtn.result = false;
      res.end(JSON.stringify(rtn));
    }


    var doc = {email: email};

    insert_doc('sub', doc, function(err, docs) {

      if(err) {
	console.log('[error] insert 문제발생');
	console.log(err);

	rtn.result = false;
	res.end(JSON.stringify(rtn));
      }
      
      rtn.result = true;
      res.end(JSON.stringify(rtn));
    });
    

  });

});

module.exports = router;



/*
router.get('/a/:uuid/:pid', function(req, res) {

  var uuid = req.params.uuid;
  var pid = req.params.pid;

  var collection = _db.collection('pid_android');

  collection.find({pid: pid}).toArray(function(err, docs) {
    
    if(docs.length > 0) {
      var rtn = {};
      rtn.result = true;
      res.end(JSON.stringify(rtn));
    } else {
      insert_doc('pid_android', {is_sub: true, uuid: uuid, pid: pid}, function(err, rtn) {
	var r = {};
	if(err) {
	  r.result = false; 
	}
	
	r.result = true; 
	res.end(JSON.stringify(r));
      });
    }
  });
  
});
*/
