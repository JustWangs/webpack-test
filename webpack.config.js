var webpack  = require('webpack')
module.exports = {
    entry:{
        bundle1:'./a.js',
        bundle2:'./b.js'
    },
    output:{
        filename:'[name].js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                }
            },
            {
                test:/\.css/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    devServer:{
        port:'8088',
        hot:true,
        inline:true
    }
}