# markdown-viewer-vue

Vue 2.0 轻量级Markdown显示组件

## 安装

```bash
npm install markdown-viewer-vue
```

## 使用

1. 安装依赖
```bash
npm install vue marked
npm install -D vite @vitejs/plugin-vue2
```

2. 在项目中注册组件
```javascript
import Vue from 'vue'
import MarkdownViewer from 'markdown-viewer-vue'

Vue.component('markdown-viewer', MarkdownViewer)
```

3. 在模板中使用
```html
<markdown-viewer :content="yourMarkdownContent" />
```

## 构建
```bash
vite build
```

## 发布
```bash
npm publish
```

## 许可证
MIT