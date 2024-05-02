const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const fse = require("fs-extra");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// let cssConfig;

console.log(path.resolve(__dirname));

/*
let pages = fse
    .readdirSync("./")
    .filter(function(file) {
        return file.endsWith(".html");
    })
    .map(function(page) {
        return new HtmlWebpackPlugin({
            filename: page,
            template: `./${page}`
        })
    });
*/

let config = {
    entry: "./src/main.jsx",
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    module: {
        rules: [
            // cssConfig,
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }
                },
                resolve: { extensions: [".js", ".jsx"] }
            },
            /*
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }
                }
            }
            */
        ]
    }
}

if (currentTask === "dev") {
    config.output = {
        filename: "bundled.js",
        path: path.resolve(__dirname, "./"),
    };

    config.devServer = {
        watchFiles: [ "*.html" ],
        static: {
            directory: path.join(__dirname, "public"),
            watch: false
        },
        // allowedHosts: [ "all" ],
        hot: true,
        port: 3000
    }

    config.mode = "development";
}

module.exports = config;