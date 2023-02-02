// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const config = {
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};

const fooConfig = {
  entry: './src/index.ts',
  ...config,
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: path.join(__dirname, './dist'),
    compress: true,
    port: 4000
  }
};

const barConfig = {
  entry: './src/beforeLoading/index.ts',
  ...config,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/beforeLoading'),
    clean: true
  }
};

module.exports = [fooConfig, barConfig];
