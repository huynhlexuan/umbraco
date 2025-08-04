const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/listing.jsx',  // Path to the React component entry file
    output: {
        path: path.resolve(__dirname, '../wwwroot/scripts'),  // Output folder for the bundle
        filename: 'listing.bundle.js'  // Name of the bundled file
    },
    resolve: {
        extensions: ['.js', '.jsx']  // Automatically resolve these extensions
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // Match .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']  // Babel presets for modern JavaScript and React
                    }
                }
            }
        ]
    },
    plugins: [
        // Avoid trying to include the .cshtml file as a template
        new HtmlWebpackPlugin({
            template: './index.html',  // Use a plain HTML template instead of the Razor view
        })
    ],
    devServer: {
        contentBase: './wwwroot',  // Static file directory
        //static: {
        //    directory: path.join(__dirname, 'dist'), // Serve files from 'dist' directory
        //},
        port: 3000  // Port for the development server
    }
};