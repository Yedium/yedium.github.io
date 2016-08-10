import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const paths = {
    root: `/`,
    source: {
        root: `./src/`,
        scripts: `./src/js/`,
    },
    dist: {
        root: `./dist/`,
        scripts: `./dist/js/`,
    },
};

export default {
    entry: {
        'app': `${paths.source.root}index.js`,
    },
    output: {
        path: paths.dist.root,
        filename: `js/[name].js`,
        publicPath: `./`,
    },
    resolve: ['', '.js', '.jsx'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss'),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style!css'),
            },
            {
                test: /\.(gif|jpg|jpeg|png)$/,
                loader: 'file?limit=5120&name=images/[name].[ext]',
            },
        ],
    },
    postcss: function() {
        return [
            precss,
            autoprefixer,
        ];
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('css/style.css'),
    ],
}
