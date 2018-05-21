const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.(scss|css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: { minimize: true }
                },{
                    loader: 'sass-loader'
                }]
            })
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
        },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;
