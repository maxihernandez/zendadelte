var express = require ('express');
var multer = require ('multer');
var app = express();
var cloudinary = require("cloudinary");

cloudinary.config({
	cloud_name:"dnik28z95",
	api_key:"761811266334573",
	api_secret:"V65gm_DYohswLib_qcOwTPyXFRg"
});



app.set("view engine","jade");

app.use(express.static("public"));
app.use(multer({ dest:"./uploads"}));

app.get("/",function(req,res){
 	res.render("index");

});

app.listen(8080);