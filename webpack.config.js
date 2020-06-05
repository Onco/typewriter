module.exports = {
    // ... 
    module: {
        rules: [
           // ... 
            {
                test: /\.(css|scss|sass|sss)$/;,
                use: [
                    { loader: 'style-loader' },
                    {loader: 'css-loader'},
                    { loader: 'sass-loader' }
                ]
            },
        ]
    },
};