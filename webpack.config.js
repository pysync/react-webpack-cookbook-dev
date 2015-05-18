/// <reference path="typings/node/node.d.ts"/>
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var path_to_react = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
    entry: ['webpack/hot/dev-server', 
            path.resolve(__dirname, 'app/main.js')],
    resolve: {
      alias: {
          'react': path_to_react
      }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{ 
            test: /\.jsx?$/, // a regexp to test the require path. accepts either js or jsx
            loader: 'babel' // the module to load. 
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }, {
            test: /\.less$/,  // less
            loader: 'style!css!less'   
        }, {
           test: /\.scss$/,  // sass
           loader: 'style!css!sass'
        }, {
            test: /\.(png|jpg)$/,  // image base 64
            loader: 'url?limit=25000'
        }, {
            test: /\.woff$/,  // 1 in 4 types fonts: .woff | .svg .. 
            loader: 'url?limit=100000'
        }],
        noParse: [path_to_react]
    }
};

module.exports = config;