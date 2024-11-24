import type { DefaultTheme } from "vitepress";
//     nav: [
//       { text: "Home", link: "/" },
//       { text: "Go", items: [{ text: "Gin", link: "/gin/gin/introduce" }] },
//     ],
export default function getNavs() {
  return [
    { text: "主页", link: "/zh" },
    { text: "文档", link: "/zh/introduce" },
    {
      text: "Go",
      items: [{ text: "Gin", link: "/zh/gin/introduce" }],

      activeMatch: "/zh/gin/introduce", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
    },
  ];
}
