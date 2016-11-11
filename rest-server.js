var express = require('express'),
    bodyParser = require('body-parser'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;

var app = express();
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});

var Product = restful.model('product', ProductSchema);
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(app, '/api/v1/products');

app.listen(3000);
console.log('Server is up at port 3000');
