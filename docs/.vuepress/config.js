module.exports = {
  base: '/vuepress-ui/',
  title: 'Vuepress-UI',
  description: '一个好用的UI框架',
  head: [['link', { rel: 'icon', href: '/cy.png' }]],
  themeConfig: {
    logo: '/cy.png',
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/get-started/'},
      {text: 'Github', link: 'https://github.com/center4/vuepress-ui'}
    ],
    sidebar: [
      {
        title: '入门',
        // collapsable: false,
        children: [
          '/introduce/',
          '/get-started/'
         ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/cascader',
          '/components/collapse',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/slides',
          '/components/tabs',
          '/components/toast'
        ]
      }

    ]
  }
}