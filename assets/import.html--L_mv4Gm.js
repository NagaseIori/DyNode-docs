import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as r,c,a as e,b as t,d as o,w as p,e as a}from"./app-e8qKynHo.js";const l={},h=a('<h1 id="谱面导入" tabindex="-1"><a class="header-anchor" href="#谱面导入" aria-hidden="true">#</a> 谱面导入</h1><p>本页面包含谱面导入的相关说明。</p><p>使用 <kbd>F2</kbd> 来导入所有格式的谱面。支持的谱面格式有 .xml / .dyn / .dy / .osu 。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>所有的谱面导入操作都是<strong>不可撤销</strong>的，因此确认操作并保存前请按需备份项目。</p></div><div class="hint-container tip"><p class="hint-container-title">合并谱面</p><p>你可以使用这一功能来合并多张谱面而无需担心谱面具有不同的 BPM 设置。</p><p>即使我们推荐在合并谱面之前，所有的谱面都具有相同的 BPM 设置——因为这样更便于在谱面合并之后进行再次编辑。</p></div><div class="hint-container info"><p class="hint-container-title">关于 Dynamaker-modified</p><p>DyNode 提供对 Dynamaker-modified 谱面格式导入的完整支持。</p></div>',6),m={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"关于早期版本的 Dynamaker 谱面格式",-1),u=e("p",null,"DyNode 目前无法直接读取早期版本的 Dynamaker 谱面格式。",-1),f={href:"https://github.com/jmakxd/dynamaker-modified",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"新建项目时导入-xml-dy-谱面",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#新建项目时导入-xml-dy-谱面","aria-hidden":"true"},"#"),t(" 新建项目时导入 .xml/.dy 谱面")],-1),k=e("kbd",null,"F2",-1),x=a('<p>使用该选项时，导入的谱面信息将覆盖新建项目中所填写的其它信息。</p><p>如果导入的是 .dy 谱面则无需填写音乐文件一项。</p><div class="hint-container tip"><p class="hint-container-title">关于 .dy 谱面格式</p><p>.dy 谱面格式以 Base64 形式储存了谱面的相关文件（音乐、背景文件等）。</p></div><h2 id="导入-osu-谱面" tabindex="-1"><a class="header-anchor" href="#导入-osu-谱面" aria-hidden="true">#</a> 导入 .osu 谱面</h2><p>你可以使用 <kbd>F2</kbd> 来导入 .osu 谱面。</p><p>导入的模式支持 osu! 包含的基础四种模式，针对 osu!mania 有特别的适配，这意味着你可以直接使用 DyNode 来进行 osu!mania 的转谱。导入的信息可以选择包括全部的 Timing Points ，但不会包含谱面所具有的元信息（标题、音乐等）。</p><p>DyNode 目前不支持 .osz 的导入，因为一个 .osz 包含多个谱面难度。目前你可以将 .osz 文件解压（.osz 是一个压缩文件），之后再导入其中包含的 .osu 文件。</p>',7);function v(B,b){const i=n("ExternalLinkIcon"),s=n("RouterLink");return r(),c("div",null,[h,e("div",m,[_,u,e("p",null,[t("若你遇见了相关警告，请尝试将谱面导入最新版的 "),e("a",f,[t("Dynamaker-modified"),o(i)]),t(" 后重新导出再使用 DyNode 进行读取。")])]),y,e("p",null,[t("除了使用 "),k,t(" 来导入 .xml/.dy 谱面，你也可以在 "),o(s,{to:"/guide/project.html#%E6%96%B0%E5%BB%BA%E9%A1%B9%E7%9B%AE"},{default:p(()=>[t("新建项目")]),_:1}),t(" 时选择导入谱面文件。")]),x])}const E=d(l,[["render",v],["__file","import.html.vue"]]);export{E as default};
