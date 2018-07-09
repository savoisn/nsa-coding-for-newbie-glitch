const path = require("path")
const express = require("express")
const webpack = require("webpack")
const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")
const sendMail = require("./mail.js")

const app = express()
const publicPath = path.join(__dirname, "public")
const port = process.env.PORT || 9000

app.use(express.static(publicPath))
app.use(webpackMiddleware(webpack(webpackConfig)))

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get("/email",(req,res)=>{
  var object = {
    email:"nicolas.savois@gmail.com",
    status:"Ok",
  }
  sendMail.mail();
  res.send(object);
  return
})

app.post('/api/sendEmail', function(req, res) {
  console.log(req.body);
  
  var to = req.body.to;
  var title = req.body.title;
  var body = req.body.body;

  const status = sendMail.sendMail(to, title, body);
  res.send(status);
  return
});
