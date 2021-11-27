import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [],
  server: {
    host: 'localhost',
    hmr: {
      host: 'localhost',
      port: 3000
    }
  }
}
