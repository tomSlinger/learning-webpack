module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_moduels/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }],
    }
};