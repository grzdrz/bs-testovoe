const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginsOptions = [];

const pages = [
  { pageName: 'index' },
];
pages.forEach((e) => {
  pluginsOptions.push(
    new HtmlWebpackPlugin({
      filename: `./${e.pageName}.html`,
      template: `./pages/${e.pageName}.html`,
      inject: true,
      chunks: [e.pageName],
    }),
  );
});
pluginsOptions.push(new MiniCssExtractPlugin({
  filename: '[name].css',
}));
const entries = pages.reduce((obj, curEntry) => {
  obj[curEntry.pageName] = `./pages/${curEntry.pageName}.jsx`;
  return obj;
}, {});

module.exports = {
  entry: entries,

  output: {
    path: path.resolve(__dirname, 'bandle'),
    filename: '[name].js?v=[hash]',
  },

  plugins: pluginsOptions,

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
