var yelp = require('node-yelp');


var client = yelp.createClient({
  oauth: {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
}
});


function search (req, res, next) {
  console.log('received request')
  var term = req.query.term
  var location = req.query.location

  client.search({terms: term, location: location, limit:5})
    .then(function(data){
      console.log(data);
      res.json(data)
    })
    .catch(function(err){
      console.log(err)
    })
  }


module.exports = {
  search:search
}
