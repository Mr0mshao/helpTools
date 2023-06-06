const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const outputType = process.env.OUTPUT_TYPE
const config = {
  mode: isProduction ? 'production' : 'development',
  entry: outputType === 'esm' ? {
    index: './src/index.ts'
  } : isProduction ? './src/index.ts' : './src/index.ts',
  output: outputType === 'esm' ? {
    path: path.resolve(__dirname, 'es'),
    filename: '[name].esm.js',
    clean: true,
    library: {
      type: 'module',
    },
    chunkFormat: 'module'
  } : {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    clean: true,
    library: {
      name: 'tools',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'globalThis'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    ...(!isProduction ? [new HtmlWebpackPlugin()] : [])
  ]
}


module.exports = config