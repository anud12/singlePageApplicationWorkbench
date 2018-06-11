module.exports = {
    entry: './src/main.ts',
    watch: true,
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    node: {
        fs: 'empty'
    },
    devtool: 'source-map'
}