/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/ParaBoard" : "/",

    pwa: {
        name: 'ParaBoard',
        workboxPluginMode: "GenerateSW",
        themeColor: "#4DBA87",
        msTileColor: "#000000",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black"
    }
};
