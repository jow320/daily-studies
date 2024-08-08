const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 8000,
  },
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // aplica o Babel apenas para arquivos JS
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // transpila o JS moderno para versões mais antigas
          },
        },
      },
      {
        test: /\.css$/, // aplica os loaders para arquivos CSS
        use: ["style-loader", "css-loader"], // carrega o CSS e injeta no DOM
      },
    ],
  },
  resolve: {
    extensions: [".js", ".css"], // resolve arquivos .js e .css sem precisar especificar a extensão
  },
};
