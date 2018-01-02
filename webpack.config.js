const path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./main.js',
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			}
		]
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
};