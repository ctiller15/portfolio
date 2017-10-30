const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/../public'));

// Using bodyparser.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.post('/contactus', function (req, res) {
    // node mailer code
    console.log(req.body);
    console.log("Hey! Email time! :D");

    // Nodemailer stuff
    // Generate test SMTP service account
    nodemailer.createTestAccount((err, account) => {

      // create reusable transporter using default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: account.user, // generated ethereal user
          pass: account.pass  // generated ethereal password
        }
      });

      // setup email data with unicode.
      let mailOptions = {
        from: '"Fred Foo " <foo@blurdybloop.com>', // sender address
        to: 'bar@blurdybloop.com', // list of receivers
        subject: 'Node test!', // subject line
        text: "Hello world!",   // plain text body
        html: '<b>Hello world?</b>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
          return console.log(error);
        }
        console.log('Message send: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });

    });
    // returning the status as OK, JSON.
    res.send({"status": "OK"});
});
 
const server = app.listen(3000, function() {
	console.log(__dirname + '/../public');
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});