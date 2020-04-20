module.exports = {
  extends: ['./js rules/base', './js rules/style', './js rules/es2018'].map(
    require.resolve,
  ),
}
