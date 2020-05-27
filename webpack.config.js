const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        'app': './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: [/\.js$/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                ['@babel/env', {
                                    modules: false,
                                    useBuiltIns: "entry",
                                    targets: {
                                        browsers: [
                                            "last 2 Chrome versions",
                                            "last 2 Firefox versions"
                                        ]
                                    }
                                }],
                                '@babel/react'
                            ]
                        }
                    }
                ]
            }
        ]
        
    },
}
