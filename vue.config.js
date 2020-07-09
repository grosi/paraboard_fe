process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    publicPath: process.env.NODE_ENV === "production"
        ? "/" 
        : "/",

    pwa: {
        name: 'ParaBoard',
        workboxPluginMode: "GenerateSW",
        themeColor: "#4DBA87",
        msTileColor: "#000000",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black"
    }
};
