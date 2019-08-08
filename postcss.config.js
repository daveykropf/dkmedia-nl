module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-modules-values': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      features: {
        'custom-properties': { preserve: false },
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-selectors': true,
        'nesting-rules': true,
        'color-functional-notation': true,
        'color-mod-function': true,
        'font-variant-property': true,
        'all-property': true,
        'any-link-pseudo-class': true,
        'matches-pseudo-class': true,
        'not-pseudo-class': true,
        'overflow-wrap-property': true,
      },
    },
    'postcss-discard-comments': {},
  },
}
