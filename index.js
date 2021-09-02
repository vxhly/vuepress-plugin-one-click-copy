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
      COPY_MESSAGE: copyMessage || 'Copied successfully!',
      DURATION: duration || 3000
    }
  },

  clientRootMixin: resolve(__dirname, './bin/clientRootMixin.js')
})
