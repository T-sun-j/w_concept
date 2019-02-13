// const path = require('path')

const {
    override,
    fixBabelImports,
} = require("customize-cra");

// const resolve = (url) => {
//     return path.resolve(__dirname,'./',url)
// }

// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//       config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
//     return config;
// };
module.exports = override(
    fixBabelImports(["import", {
        libraryName: 'antd-mobile', style: 'css'
    }])
   
  
);
