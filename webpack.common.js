const path = require('path')

module.exports = {
    entry: {
        game: './src/client/index.js',
    },
    output: {
        filename: '[name].[contenthash].js]',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/client/html/index.html',
        }),
    ],
};
