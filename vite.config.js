import vue from '@vitejs/plugin-vue'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  }
}

module.exports = {
  pages: {
    index: {
      entry: "./src/pages/main.js",
      template: "index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    faq: {
      entry: "./src/pages/faq/main.js",
      template: "index.html",
      title: "Faq",
      chunks: ["chunk-vendors", "chunk-common", "faq"],
    }
  }
}
