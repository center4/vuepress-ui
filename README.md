# vuepress-ui 一个基于Vue的UI组件库
[![Build Status](https://www.travis-ci.org/Horry233/xixi-demo.svg?branch=main)](https://www.travis-ci.org/Horry233/xixi-demo)

## 介绍
我在学习Vue的过程中做的一个UI框架，希望对你有帮助

目前已经有 按钮(Button)、折叠面板(Collapse)、网格(Grid)、输入框(Input)、布局(Layout)、弹出框(Popover)、标签页(Tabs)、提示(Toast) 8个组件

## 开始使用

1. 添加 CSS 样式
使用本框架前，请在 css 中开启 border-box
```
*, *::before, *::after {box-sizing: border-box}
```
IE 8 及以上浏览器支持此样式


2. 安装vuepress-ui
```
npm i --save vuepress-ui
```

3. 引入 vuepress-ui
```
import {Button,Icon} from 'vuepress-ui'
import 'vuepress-ui/dist/index.css'

export default {
  name: 'App',
  components: {
    'x-button':Button,
    'x-Icon':Icon
  }
}
```



## 文档
[前往文档](https://center4.github.io/vuepress-ui/)

