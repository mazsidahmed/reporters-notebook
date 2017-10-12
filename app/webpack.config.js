const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/app') 
  },
  module: {
	  rules: [
	    {
	      test: /\.js$/,
	      include: [
	      	path.resolve(__dirname, 'src')
	      ],
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader?cacheDirectory=true',
	        options: {
	          	presets: ['env']
	        }
	      }
	    }
	  ]
	}
};