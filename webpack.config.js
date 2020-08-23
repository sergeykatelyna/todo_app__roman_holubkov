const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function generateHtmlPlugins(fileNames) {
  return fileNames.map((filename) => new HtmlWebpackPlugin({
    filename,
    template: path.join(__dirname, `src/${filename}`),
  }));
}

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    overlay: true,
  },
  plugins: [
    ...generateHtmlPlugins(['index.html', 'task1.html', 'task2.html']),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/public'),
          to: path.join(__dirname, 'dist/public'),
        },
      ],
    }),
  ],
};
