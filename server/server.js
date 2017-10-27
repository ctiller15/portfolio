const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/../public'));


 
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
    console.log("Hey! Email time! :D");
});
 
const server = app.listen(3000, function() {
	console.log(__dirname + '/../public');
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});