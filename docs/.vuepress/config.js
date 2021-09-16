module.exports = {
    title: "Jason",
    description: "我的个人网站",
    head: [
        // 注入到当前页面的 HTML <head> 中的标签
        ["link", { rel: "icon", href: "/favicon1.ico" }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: "/", // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false, // 代码块显示行号
    },
    themeConfig: {
        nav: [
            // 导航栏配置
            { text: "首页", link: "/" },
            {
                text: "前端基础",
                link: "/accumulate/",
                items: [
                    { text: "Chinese", link: "/accumulate/chinese/" },
                    { text: "Japanese", link: "/accumulate/japanese/" },
                ],
            },
            { text: "算法题库", link: "/algorithm/" },
            { text: "工具", link: "/util/" },
            { text: "微博", link: "https://baidu.com" },
        ],
        sidebar: {
            "/accumulate/chinese/": [
                {
                    title: "Group1", //组名
                    collapsable: false,
                    children: [""],
                },
                {
                    title: "Group2",
                    collapsable: false,
                    children: [
                        // { title: 'A', path:'a'},
                        // { title: 'B', path:'b'}
                        "a",
                        "b",
                        // ['a','A'],
                        // ['b','B'],
                    ],
                },
            ],
            "/language/japanese/": [""],
            "/util/": [""]
        },
        sidebarDepth: 1, //默认1,显示h1、h2;设置2,显示h1、h2、h3
        // displayAllHeaders: true //显示所有页面的标题链接
    },
};
