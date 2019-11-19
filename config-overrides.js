const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    addWebpackAlias
} = require('customize-cra');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
        config.devtool = false; //去掉map文件
        config.plugins.push(
            new webpack.DllReferencePlugin({
                context: process.cwd(),
                manifest: require('./public/vendor/vendor-manifest.json')
            }),
            // 将 dll 注入到 生成的 html 模板中
            new AddAssetHtmlPlugin({
                // dll文件位置
                filepath: path.resolve(__dirname, './public/vendor/*.js'),
                // dll 引用路径
                publicPath: './vendor',
                // dll最终输出的目录
                outputPath: './vendor'
            }),
            // 释放 可以解析项目
            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'static'
            // })
        )
    }
    return config;
}

module.exports = override(
    // fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: true,
    // }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     modifyVars: {
    //         '@primary-color': '#019DE6'
    //     },
    // }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
    }),
    addDecoratorsLegacy(),
    addCustomize()
)