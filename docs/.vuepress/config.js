module.exports = {
  title: 'TypeScript4 文档',
  description: 'TypeScript4 最新官方文档翻译',
  theme: 'reco',
  themeConfig: {
    logo: '/img/fanyulogo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '烤鱼 博客',
        items: [
          { text: 'Github', link: 'https://github.com/fanyu1994' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/2576910988874808',
          },
        ],
      },
    ],
    sidebar: [
      {
        title: '学前班',
        path: '/',
        collapsable: false, // 不折叠
        children: [{ title: '学前必读', path: '/' }],
      },
      {
        title: '基础学习',
        path: '/basebook/ConditionalTypes',
        collapsable: false, // 不折叠
        children: [
          { title: '条件类型', path: '/basebook/ConditionalTypes' },
          { title: '泛型', path: '/basebook/Generics' },
        ],
      },
    ],
  },
  base: '/vuepress/',
  dest: 'public',
}
