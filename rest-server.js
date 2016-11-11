var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;

var app = express();

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
