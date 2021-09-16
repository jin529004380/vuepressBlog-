module.exports = {
    title: 'Jasonblog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {   
            text: '前端基础', 
            link: '/accumulate/', 
            items: [
                { text: 'Chinese', link: '/accumulate/chinese/' },
                { text: 'Japanese', link: '/accumulate/japanese/' }
            ]
        },
        {text: '算法题库', link: '/algorithm/'},
        {text: '微博', link: 'https://baidu.com'}      
      ],
      sidebar: {
        '/accumulate/chinese/': [
            '',  //该目录下的README.md文件
            'a', //该目录下的a.md文件
            'b'  //该目录下的a.md文件
        ],
      },
      sidebarDepth: 2, // 侧边栏显示2级
      displayAllHeaders: true
    }
  };