import type { DefaultTheme } from "vitepress";

export default function getNavs() {
  return [
    { text: "home", link: "/en" },
    { text: "document", link: "/en/introduce" },
    {
      text: "Go",
      items: [{ text: "Gin", link: "/en/gin/introduce" }],

      activeMatch: "/en/gin/introduce", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
    },
  ];
}
