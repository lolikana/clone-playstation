/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = () => {
  return {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    entry: {
      main: './src/index.ts',
      'js/swiper': './src/ts/swiper.ts',
      'js/config': './src/ts/config/config.ts',
      'js/resizeStopper': './src/ts/beforeLoading/resize.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      assetModuleFilename: 'assets/[hash][ext][query]'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin(),
      new DotenvWebpackPlugin({
        path: './.env',
        safe: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
      static: './dist',
      compress: true,
      port: 4000
    },
    stats: {
      errorDetails: true
    }
  };
};
