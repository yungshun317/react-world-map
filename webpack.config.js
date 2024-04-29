const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
// let cssConfig;
// let pages;

let config = {
    entry: "./app/assets/scripts/App.js",
    // plugins: pages,
    module: {
        rules: [
            // cssConfig,
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            }
        ]
    }
}

if (currentTask === "dev") {
    config.output = {
        filename: "bundle.js",
        path: path.resolve(__dirname, "app")
    };

    config.devServer = {
        watchFiles: [ "app/**/*.html" ],
        static: {
            directory: path.join(__dirname, "app"),
            watch: false
        },
        hot: true,
        port: 3000
    }

    config.mode = "development";
}

module.exports = config;