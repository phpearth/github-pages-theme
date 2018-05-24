const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { minimize: true }
                },{
                    loader: 'sass-loader'
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    limit: 100000,
                },
            },
        },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
};

module.exports = config;
