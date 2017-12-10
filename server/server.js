require('./config/config');

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

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          // Temporary junk account. Purely for testing.
          user: 'christillertest@gmail.com',
          pass: process.env.EMAIL_PASSWORD
        }
      });

      // setup email data with unicode.
      let mailOptions = {
        from: 'christillertest@gmail.com', // sender address
        to: 'christiller2015@gmail.com', // list of receivers
        subject: `Curiouschriscodes.com contact request, ${req.body.email}`, // subject line
        text: `Curiouschriscodes.com contact request, ${req.body.email}`,   // plain text body
        html: `
              <p>This is a message from ${req.body.name}:</p>
              <br>
              <p>${req.body.message}</p>
              <p><span>-${req.body.name}</span>,<br><span>-${req.body.email}</span></p>
              ` // html body
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