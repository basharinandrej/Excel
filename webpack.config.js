const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ENV = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}

const isProd = process.env.NODE_ENV === ENV.PRODUCTION
const isDev = !isProd

module.exports = {
    mode: isDev ? ENV.DEVELOPMENT : ENV.PRODUCTION,
    devtool: isDev ? 'source-map' : false,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        port: 4200,
    },
    resolve: {
        alias: {
            '@STYLES': path.resolve(__dirname, 'src/styles'),
        },
    },
    module: {
        rules: [
            {
                test: /\.sass$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: isDev ? 'server' : 'disabled',
            openAnalyzer: false,
            analyzerHost: 'localhost',
            analyzerPort: 4201,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/images'),
                    to: path.resolve(__dirname, 'build/images'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: './styles/index.[contenthash].css',
        }),
    ],
}
