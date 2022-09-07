const express = require('express');
// const multer = require('multer');
const path = require('path');
const url = require('url');
const uploadRouter = require('./routes/upload.routes');
require('dotenv').config();
const PORT = process.env.PORT || 3030

const app = express();
let allowCrossDomain = function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Headers', "*");
	next();
}


app.use(allowCrossDomain);
app.use(express.json());
app.use('/upload', uploadRouter);

app.listen(PORT, () => {
	console.log(`server running on port : ${PORT}`);
})

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});








/*
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function(req, file, cb){
		cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
	}
})

var upload = multer({storage: storage});
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/uploads/:filename', (req, res) => {
	console.log(req.protocol);
	res.sendFile(__dirname + "/uploads/" + req.params.filename);
})

app.post('/', upload.array('multi-files'), (req, res) => {
	var files = req.files;
	var urls = [];
	for (dir in files){
		urls.push(req.protocol + "://" + req.headers.host + "/" + files[dir].path);
	}
	console.log(urls);
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify(urls));
	res.end();
	// res.redirect('/');
});
/
*/
// app.listen(PORT);