module.exports = function (options) {
    return {
        presets: [],
        plugins: [
            require("@zzf-babel/plugins/lib/babel-plugin-remove-console")
        ]
    };
}