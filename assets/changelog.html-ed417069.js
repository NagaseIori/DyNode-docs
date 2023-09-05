import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as o,a as e,b as l,d as a,e as t}from"./app-fd77dce1.js";const d="/assets/double_click-c08857c6.gif",h={},c=e("h1",{id:"更新日志",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更新日志","aria-hidden":"true"},"#"),l(" 更新日志")],-1),u=e("p",null,"本页面包含 DyNode 版本更新的详细说明与相关指引。",-1),_={id:"v0-1-12-3-2023-09-05",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#v0-1-12-3-2023-09-05","aria-hidden":"true"},"#",-1),p={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.3",target:"_blank",rel:"noopener noreferrer"},g=t('<p>该版本包含一些问题修复与新特性。</p><h3 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复" aria-hidden="true">#</a> 问题修复</h3><ul><li>尝试修复删除音符可能导致游戏崩溃的问题。</li><li>修复了音乐播放完毕后音乐音量被重置的问题。</li><li>修复了背景光效有时静止的问题。</li></ul><h3 id="视觉改进" tabindex="-1"><a class="header-anchor" href="#视觉改进" aria-hidden="true">#</a> 视觉改进</h3><ul><li>重构了分数板的布局与相关视觉调整，使其更接近原版Dynamix。</li><li>TAB 工具栏中的文字显示优化。</li></ul><h3 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性" aria-hidden="true">#</a> 新特性</h3><ul><li>现在同一时间上的音符将会被方块所高亮。</li><li>现在可以双击吸附音符。 <ul><li>被双击的音符作为吸附的中心。 <img src="'+d+'" alt="双击吸附"></li></ul></li><li>误差修正功能现在替代了毫秒取整功能。 <ul><li>默认的情况下，误差2ms以内的连续音符将被对齐至这些音符中最早的位置。</li></ul></li><li>添加了禁用变调 <strong>（实验性）</strong> 选项至 TAB 工具栏中。<div class="hint-container warning"><p class="hint-container-title">注意</p><p>现阶段的禁用变调选项将显著增加声音延迟，并可能存在较多的隐含问题。</p></div></li><li>现在项目相关的文件将在项目保存时被复制到项目所在的目录下，并默认使用相对路径读取文件。 <ul><li>这些相关的文件包括音乐、背景与视频文件。</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该版本的项目文件将破坏对较低版本的兼容性，在更新前请根据情况备份项目文件。</p></div></li></ul><h3 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h3><ul><li>Gamemaker Runtime 版本更新至 2023.6。</li></ul>',9),f={id:"v0-1-12-2-2023-07-05",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#v0-1-12-2-2023-07-05","aria-hidden":"true"},"#",-1),v={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.2",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"该版本包含一些问题修复。",-1),B=e("ul",null,[e("li",null,[l("移除了一个外部库，因此修复了其带来的一些问题，例如： "),e("ul",null,[e("li",null,"OBS无法通过游戏录制捕获DyNode画面。"),e("li",null,"在对话框出现时点击游戏画面使得游戏响应变慢。"),e("li",null,"前台的 DyNode 被 Windows 识别为后台应用。"),e("li",null,"一些不明原因的卡顿问题。")])]),e("li",null,"修复了“NOTE DELETE ERROR”报错导致的游戏终止问题。"),e("li",null,"Gamemaker Runtime 更新至 2023.6 。")],-1),b={id:"v0-1-12-1-2023-06-17",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#v0-1-12-1-2023-06-17","aria-hidden":"true"},"#",-1),N={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.1",target:"_blank",rel:"noopener noreferrer"},D=t("<p>该版本修复了 v0.1.12 中的一个主要问题。这个问题可能导致输出的谱面无法正常读取。</p><ul><li>修复了 XML 解析器的一个问题，其可能导致导出的谱面有概率无法被正常读取。 <ul><li>这个问题的原因是 XML 文件中第一行 XML Declaration 中 version 与 encoding 的属性顺序发生了错误，正确的写法应当为<code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code>，而 DyNode 使用的 XML 解析器有概率将其输出为 <code>&lt;?xml encoding=&quot;UTF-8&quot; version=&quot;1.0&quot;?&gt;</code>。</li><li>这个问题可能自 <code>v0.1.11.5</code> 版本起就会发生。</li><li>移除了 XML Declaration 中的 encoding 属性。</li></ul></li><li>稍微提高了一点 Hold 的亮度。</li></ul>",2),y={id:"v0-1-12-2023-06-11",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#v0-1-12-2023-06-11","aria-hidden":"true"},"#",-1),F={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12",target:"_blank",rel:"noopener noreferrer"},L=t('<p>DyNode v0.1.12 相对于 v0.1.11 产生的主要变化如下。</p><h3 id="新特性-1" tabindex="-1"><a class="header-anchor" href="#新特性-1" aria-hidden="true">#</a> 新特性</h3><ul><li>新增了三种节拍线样式，详见 <a href="guide/edit#%E8%8A%82%E6%8B%8D%E7%BA%BF%E6%A0%B7%E5%BC%8F">谱面编辑/节拍线样式</a>。</li><li>现在音符中心方块的颜色表现更贴近原版 Dynamaker。</li><li>新增了调整延迟的功能，详见 <a href="guide/edit#%E5%BB%B6%E8%BF%9F%E8%B0%83%E6%95%B4">谱面编辑/延迟调整</a>。</li><li>新增了顶部工具栏与调整音量 / 背景亮度的功能，详见 <a href="guide/edit#%E5%B7%A5%E5%85%B7%E6%A0%8F">谱面编辑/工具栏</a>。</li><li>新增了设置自定义细分的功能，详见 <a href="guide/edit#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E6%8B%8D%E7%BB%86%E5%88%86">谱面编辑/自定义节拍细分</a>。</li><li>新增了实验性的功能：表达式。详见 <a href="guide/advanced-edit#%E8%A1%A8%E8%BE%BE%E5%BC%8F">高级功能/表达式</a>。</li><li>新增了英文/繁体中文的语言。 <ul><li>感谢 @Jmakxd 提供了英语/繁体中文翻译。</li></ul></li><li>现在撤销/重做时编辑界面所在的时间点将会自动移动到撤销/重做发生的时间段。</li><li>新增了撤销操作次数的上限（3000）。</li></ul><h3 id="问题修复-1" tabindex="-1"><a class="header-anchor" href="#问题修复-1" aria-hidden="true">#</a> 问题修复</h3><ul><li>修复了撤销/重做时出界警告未被正确触发的问题。</li><li>修复了视频背景透明度未被正确计算的问题。</li><li>修复了重载配置时粒子系统未被重设的问题。</li><li>修复了设置全局 Bar 不起作用的问题。</li><li>修复了潜在的撤回导致程序崩溃的问题。</li><li>修复了在不同刷新率下滚轮移动谱面速度不同的问题。</li><li>修复了任意一面不存在音符的情况下导入/导出xml崩溃的问题。</li><li>修复了删除 Hold 音符时 SUB 音符可能未被删除的问题。</li><li>修复了在特定情况下 Hold 不会按预期显示的问题。</li><li>修复了背景渐变动画在歌曲开始之前静止的问题。</li><li>修复了错误的音符统计数目。</li><li>修复了节拍线在负数 Bar 下不会正常显示的问题。</li></ul><h3 id="视觉改进-1" tabindex="-1"><a class="header-anchor" href="#视觉改进-1" aria-hidden="true">#</a> 视觉改进</h3><ul><li>现在 Hold 音符的边界不会互相遮挡。 <ul><li>重构了音符绘制的流程。</li></ul></li><li>提高了标题的透明度。</li><li>降低了 Hold 音符背景的亮度。</li></ul><h3 id="性能改进" tabindex="-1"><a class="header-anchor" href="#性能改进" aria-hidden="true">#</a> 性能改进</h3><ul><li>现在节拍线在不必要的时候将不会被绘制。</li><li>其它的性能改进。</li></ul><h3 id="杂项-1" tabindex="-1"><a class="header-anchor" href="#杂项-1" aria-hidden="true">#</a> 杂项</h3>',10),q=e("ul",null,[e("li",null,"新增了“关于”页面。"),e("li",null,"现在流速设置将被保存到项目中。"),e("li",null,[l("你可以使用 "),e("kbd",null,"Ctrl+F6"),l(" 来随机化谱面（0.1.11.1.4.1）。")]),e("li",null,[l("添加了对音符宽度的限制（"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mo",null,">"),e("mn",null,"0.01")]),e("annotation",{encoding:"application/x-tex"},">0.01")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),e("span",{class:"mrel"},">"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"0.01")])])]),l("）。")]),e("li",null,"Gamemaker Runtime 版本更新至 2023.4 。")],-1);function w(M,T){const i=r("ExternalLinkIcon");return s(),o("div",null,[c,u,e("h2",_,[m,l(),e("a",p,[l("v0.1.12.3"),a(i)]),l(" (2023-09-05)")]),g,e("h2",f,[E,l(),e("a",v,[l("v0.1.12.2"),a(i)]),l(" (2023-07-05)")]),x,B,e("h2",b,[k,l(),e("a",N,[l("v0.1.12.1"),a(i)]),l(" (2023-06-17)")]),D,e("h2",y,[A,l(),e("a",F,[l("v0.1.12"),a(i)]),l(" (2023-06-11)")]),L,q])}const H=n(h,[["render",w],["__file","changelog.html.vue"]]);export{H as default};
