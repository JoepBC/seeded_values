const path = require('path');

module.exports = {
	mode: 'development',
    devtool: 'inline-source-map', //only use devtool in development, it explodes the js source file size
	//mode: 'production',

   entry: './src/main.ts',

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        //path: path.resolve(__dirname, 'dist'),
		filename: 'pack.js',
		libraryTarget: 'var',
		library: 'JBCLib'
    },

//added later:
stats: {
//        assets: false,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
//        timings: false,
        version: false,
        warnings: true
    },

  };
