const path = require("path");
const { override, 
  fixBabelImports, 
  addLessLoader,
  addWebpackAlias } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modules: true,
    localIdentName: '[local]--[hash:base64:5]',
    modifyVars: { }
  }),
  addWebpackAlias({
    "src": path.resolve(__dirname, "src")
  }),
);
