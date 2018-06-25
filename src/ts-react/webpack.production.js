const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    publicPath: 'dist'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader!less-loader?javascriptEnabled=true'
      },
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]",
            }
        },{
            loader: "less-loader", // compiles Less to CSS
            options: {
              javascriptEnabled: true
            }
        }]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('dist'),
    new ManifestPlugin(),
  ]
}
