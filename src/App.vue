<template>
  <div id="app">
    <MarkdownViewer :content="markdownContent" />
  </div>
</template>

<script>
import MarkdownViewer from './components/MarkdownViewer.vue'

export default {
  name: 'App',
  components: {
    MarkdownViewer
  },
  data() {
    return {
      markdownContent: '# Hello Markdown\n\nThis is a **markdown** content example.\n\n- List item 1\n- List item 2\n\n```javascript\nconsole.log("Code block");\n```'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
  max-width: 800px;
}
</style>