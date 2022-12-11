const path = require('path');
const { merge } = require('webpack-merge');

/** @type {import('webpack').Configuration} */
const commonConfig = {
  entry: './src/index.ts',
  /** Most recent Node version supported by Lambda when creating this template */
  target: 'node18',
  /** Inline source map always, to get meaningful stack traces */
  devtool: 'inline-source-map',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs2',
    },
  },

  externals: [
    /** Exclude all `@aws-sdk/*` packages, as those are provided in Lambda Node container. */
    /@aws-sdk\/.*/,
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.mjs', '.ts'],
  },
};

/** @type {import('webpack').Configuration} */
const devOptions = {
  mode: 'development',
};

/** @type {import('webpack').Configuration} */
const prodOptions = {
  mode: 'production',
};

module.exports = (_env, argv) => {
  return merge(commonConfig, argv.mode == 'production' ? prodOptions : devOptions);
};
