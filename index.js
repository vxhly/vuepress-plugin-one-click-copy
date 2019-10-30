const {
  resolve
} = require('path')

module.exports = (options, context) => ({
  define: {
    COPY_SELECTOR: options.copy_selector || ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
    COPY_MESSAGE: options.copy_message || 'Copy successfully and then paste it for use.',
    DURATION: options.duration || 3000
  },
  clientRootMixin: resolve(__dirname, './bin/clientRootMixin.js')
})
