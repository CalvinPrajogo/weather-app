const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your main JS file — where Webpack starts bundling
  output: {
    filename: 'bundle.js', // The name of the output file after bundling
    path: path.resolve(__dirname, 'dist'), // Output folder (absolute path)
    clean: true, // Clean the output folder before each build
  },
  mode: 'development', // Use 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all .js files
        exclude: /node_modules/, // Except files inside node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS files
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Base HTML template to inject the bundle into
      inject: 'body', // Inject <script> tag at the end of <body>
    }),
  ],
  devServer: {
    static: './dist', // Serve files from the dist folder
    open: true, // Automatically open the browser when server starts
    hot: true,  // Enable Hot Module Replacement (live reloading)
    port: 3000, // Port for the dev server (default 8080 if not specified)
  },
};
