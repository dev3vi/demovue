module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  // devServer: {
  //     host: "10.118.0.22",
  //     port: 8080
  // }
};