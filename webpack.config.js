const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	context: path.resolve(__dirname,'src'),
	entry: {
		main: './index.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions:['.js', '.json']
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						reloadAll: true
					},	
				},'css-loader']
			},
			{
				test: /\.(png|gif|jpg|jpeg)$/,
				use:['file-loader']
			},
			{
				test: /\.(ttf)$/,
				use: ['file-loader']
			},
			{
				test:/\.xml$/,
				use:['xml-loader']
			},
			{
				test:/\.csv$/,
				use:['csv-loader']
			}
		]
	},
	devServer: {
		port: 4200,
	}
}