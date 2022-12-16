module.exports = {
  presets: ["@babel/preset-env"],

  // Without this, Jest will fail when it encounters a Vite environment variable usage, i.e. import.meta.env.XXX
  // https://github.com/vitejs/vite/issues/1149#issuecomment-775033930
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process')
          }
        }
      }
    }
  ]
}