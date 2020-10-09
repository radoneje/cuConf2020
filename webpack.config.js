const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    // TODO: Add common Configuration
    module: {},
};

var prodConfig=Object.assign({}, config,{
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

});
var adminConfig=Object.assign({}, config,{
    mode:'development',
    entry: [
        './src/admin.js',
        //  path.resolve(__dirname, 'src/js/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'admin.js'
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
                ],

            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    // style-loader
                    { loader: 'style-loader' },
                    // css-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            import:true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],

});

module.exports =[prodConfig, adminConfig]