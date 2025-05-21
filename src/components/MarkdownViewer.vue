<template>
  <div class="markdown-viewer" v-html="compiledMarkdown"></div>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'MarkdownViewer',
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.content);
    }
  }
};
</script>

<style scoped>
.markdown-viewer {
  line-height: 1.6;
}
.markdown-viewer >>> h1,
.markdown-viewer >>> h2,
.markdown-viewer >>> h3 {
  margin: 1em 0 0.5em;
}
.markdown-viewer >>> p {
  margin: 1em 0;
}
.markdown-viewer >>> code {
  background-color: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}
.markdown-viewer >>> pre {
  background-color: #f5f5f5;
  padding: 1em;
  border-radius: 3px;
  overflow-x: auto;
}
</style>