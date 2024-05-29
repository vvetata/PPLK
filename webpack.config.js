const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
                {
                  test: /\.s[ac]ss$/i,
                  use: [
                    {
                              loader: 'file-loader',
                              options: { outputPath: 'css/', name: '[name].min.css'}
                          },
                          'sass-loader'
                  ],
                },
                {
                    test: /\.(sass|less|css)$/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                  },
              ],
      },
    
}

