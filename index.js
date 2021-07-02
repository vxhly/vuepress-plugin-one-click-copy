const {
  resolve
} = require('path')

module.exports = (options, context) => ({
  define() {
    const {
      copySelector,
      copyMessage,
      duration
    } = options

    return {
      COPY_SELECTOR: copySelector || ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      COPY_MESSAGE: copyMessage || 'Copy successfully and then paste it for use.',
      DURATION: duration || 3000
    }
  },

  clientRootMixin: resolve(__dirname, './bin/clientRootMixin.js')
})
