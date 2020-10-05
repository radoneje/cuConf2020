const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   // mode:'production',
    mode:'development',
  entry: [
        './src/index.js',
      //  path.resolve(__dirname, 'src/js/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    require.resolve('sass-loader')
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],

};