const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const fse = require("fs-extra");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let cssConfig = {
    test: /\.css$/i,
    use: [
        // MiniCssExtractPlugin.loader,
        "style-loader",
        {
            loader: "css-loader",
            options: {
                modules: {
                    // localIdentName: "_[path]_[name]_[local]_[hash:base64:5]"
                    localIdentName: "_[local]_[hash:base64:5]"
                }
            }
        }
    ],
    include: /\.module\.css$/
}

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
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new ESLintPlugin()
    ],
    module: {
        rules: [
            cssConfig,
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
            },
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
        path: path.resolve(__dirname),
        publicPath: "/"
    };

    config.devServer = {
        watchFiles: [ "src/**/*" ],
        static: {
            directory: path.join(__dirname, "public"),
            publicPath: "/public",
            watch: false
        },
        // allowedHosts: "all",
        hot: true,
        port: 3000,
        open: true,
        client: {
            logging: "none",
            overlay: true
        },
        compress: true,
        historyApiFallback: true
    }
    config.mode = "development";
}

module.exports = config;