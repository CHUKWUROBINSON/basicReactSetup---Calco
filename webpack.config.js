const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "index"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    mode: 'development',
    module: {
        rules: [
            {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        } ,
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}