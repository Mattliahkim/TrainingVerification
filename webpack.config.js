
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.jsx', '.js', '.scss', '.json'],
  },
  devServer: {
    compress: true,
    public: 'store-client-nestroia1.c9users.io' // That solved it
  },
};