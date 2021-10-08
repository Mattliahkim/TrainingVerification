
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
    disableHostCheck: true,
    //public: 'https://evening-peak-09339.herokuapp.com/'
  },
};