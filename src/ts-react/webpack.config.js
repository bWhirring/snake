const path = require('path');
const mode = process.env.NODE_NEV || "development";
module.exports = {
  mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: 'dist'
  },
  devtool: "source-map",

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
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: 'postcss.config.js'
            }
          }
        }]
      }
    ]
  },
}
