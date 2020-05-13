module.exports = {
  extends: ['./js rules/base', './js rules/style', './js rules/es2019'].map(
    require.resolve,
  ),
}
