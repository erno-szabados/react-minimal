const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/env"],
                    plugins: ['react-refresh/babel']
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]

            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public/')
        },
        port: 3000,
        devMiddleware: {
            publicPath: 'http://localhost:3000/dist/'
        },
        hot: "only"
    },
    plugins: [new ReactRefreshWebpackPlugin()]
};