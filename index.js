module.exports = {
  extends: ['./javascript', './typescript'].map(
    require.resolve,
  ),
}
