const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {

                test: /\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: path.join(__dirname, "public")
    }
}