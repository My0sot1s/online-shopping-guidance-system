const path = require("path");
//less文件的路径
const myTheme = path.resolve(__dirname, "./src/assets/less/vantChange.less");

module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import "${myTheme}";`
                }
            },
        }
    },
}
