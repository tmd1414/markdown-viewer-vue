import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MarkdownViewer',
      fileName: 'markdown-viewer',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  },
  plugins: [vue()]
})