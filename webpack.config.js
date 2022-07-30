const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.[hash].js",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "build"),
		},
		port: 4200,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
			analyzerHost: "localhost",
			analyzerPort: 4201,
		}),
	],
};
