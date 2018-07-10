var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, //crawl dependency tree
  output: {
    filename: 'bundle.js', //and after craw, produce one bundle
    path: DIST_DIR 
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR, //only things located in this directory will be run by babel
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};

