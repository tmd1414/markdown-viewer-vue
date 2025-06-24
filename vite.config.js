import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
      // 添加构建分析插件
      import { visualizer } from 'rollup-plugin-visualizer';
      // plugins: [visualizer({ open: true })]
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MarkdownViewer',
      fileName: 'markdown-viewer',
      formats: ['es', 'umd']
    },
    minify: 'terser',
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      },

    }
  },
  plugins: [vue(),visualizer({ open: true })],
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov']
    }
  }
})