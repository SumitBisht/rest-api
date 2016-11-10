var Seneca  = require("seneca");
var Express = require("express");
var Web     = require("seneca-web");

var seneca = Seneca();
var app = Express();

var config = {
    routes:{
        prefix : "/api",
        pin: "role:api,cmd:*",
        map:{
            bazinga: {
                GET: true
            }
        }
    }
};

seneca.use(function(){
	this.add(Web, { adapter: "express", context: app })
})
seneca.act("role:web", config);
seneca.add("role:api,cmd:bazinga", bazinga);

app.listen(3000);


function bazinga(args, done){

    done(null, {
        bar: "Bazinga!"
    });
}