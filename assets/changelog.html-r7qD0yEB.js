import{_ as d}from"./double_click-mNR-0vDa.js";import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as h,c as u,a as l,b as i,d as e,w as r,e as t}from"./app-GJW1Yvxo.js";const c={},_=l("h1",{id:"更新日志",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#更新日志","aria-hidden":"true"},"#"),i(" 更新日志")],-1),g=l("p",null,"本页面包含 DyNode 版本更新的详细说明与相关指引。",-1),m={id:"v0-1-15-2024-07-25",tabindex:"-1"},f=l("a",{class:"header-anchor",href:"#v0-1-15-2024-07-25","aria-hidden":"true"},"#",-1),b={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.15",target:"_blank",rel:"noopener noreferrer"},p=t("<p>该版本包含新功能与一些问题修复。</p><ul><li>修复了安装路径包含空格时自动更新无法正常工作的问题。</li><li>减小了项目文件的体积。 <ul><li>因为 .dyn 文件使用了新的保存方法，之前的版本无法读取这一版本下的 .dyn 文件。</li></ul></li><li>现在自动保存功能会将项目进行备份。</li><li>现在可以使用 <kbd>Ctrl+D</kbd> 快速复制音符到下一节拍线上。</li><li>修复了一些过时的错误信息。</li><li>修复了提醒信息有时候间隔过大的问题。</li><li>现在当 VSync 启用时，最大 FPS 将锁定在屏幕刷新率上。</li><li>一些其它的改进。</li></ul>",2),v={id:"v0-1-14-2024-07-22",tabindex:"-1"},E=l("a",{class:"header-anchor",href:"#v0-1-14-2024-07-22","aria-hidden":"true"},"#",-1),x={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.14",target:"_blank",rel:"noopener noreferrer"},k=t('<p>该版本包含新功能、问题修复与性能改进。</p><h3 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性" aria-hidden="true">#</a> 新特性</h3><ul><li>为统计页面添加了新的功能。 <ul><li>添加了项目用时。</li><li>添加了KPS统计。</li><li>添加了当前BPM显示。</li></ul></li><li>添加了项目另存为功能。 <ul><li>使用<kbd>Ctrl+Shift+S</kbd>另存项目。</li></ul></li><li>添加了自动更新功能。 <ul><li>现在可以在 DyNode 中直接获取之后的更新。</li></ul></li><li>优化了撤销/还原操作的描述。 <ul><li>现在对操作的描述变得更加具体。</li></ul></li><li>现在全选功能仅针对屏幕内的可见音符使用。</li><li>现在导出到 DyM 格式的谱面功能被移动至<kbd>F6</kbd>。</li><li>添加了两个新的配置项。 <ul><li><code>autoSaveTime</code> 用于调整自动保存的间隔。新的默认值为180秒。</li><li><code>VIDEO_UPDATE_FREQUENCY</code> 用于调整视频播放的刷新率。新的默认值为60Hz。</li></ul></li></ul><h3 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复" aria-hidden="true">#</a> 问题修复</h3><ul><li>暂时缓解了部分全局操作撤销时导致的严重内存泄漏问题。</li></ul><h3 id="性能优化-杂项" tabindex="-1"><a class="header-anchor" href="#性能优化-杂项" aria-hidden="true">#</a> 性能优化 / 杂项</h3><ul><li>优化了项目保存时的性能。</li><li>移除了配置重载功能。</li></ul>',7),B={id:"v0-1-13-4-2024-05-12",tabindex:"-1"},N=l("a",{class:"header-anchor",href:"#v0-1-13-4-2024-05-12","aria-hidden":"true"},"#",-1),D={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.13.4",target:"_blank",rel:"noopener noreferrer"},y=l("p",null,"该版本包含一些小的问题修复。",-1),A=l("ul",null,[l("li",null,"修复了罕见情况下的精度损失可能导致左右侧的同一时间的音符放置不对齐的问题。"),l("li",null,"修复了误差修正功能可能忽略谱面结尾音符的问题。"),l("li",null,[i("新增了对误差修正功能的配置"),l("code",null,"offsetCorrection"),i("，你可以使用此配置调整该功能的修正范围。")]),l("li",null,"Gamemaker Runtime 版本更改至 2024.4 。")],-1),C={id:"v0-1-13-3-2024-04-12",tabindex:"-1"},F=l("a",{class:"header-anchor",href:"#v0-1-13-3-2024-04-12","aria-hidden":"true"},"#",-1),I={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.13.3",target:"_blank",rel:"noopener noreferrer"},T=t("<p>该版本包含一些问题修复。</p><ul><li>修复了双侧编辑模式下粘贴音符时待粘贴音符下落侧可能未被同步的问题。</li><li>改进了音符出界的提示。 <ul><li>现在音符只在完全不可见的情况下被警告。</li><li>修复了音符出界警告多次重复的问题。</li></ul></li><li>修复了潜在的剪切 / 吸附音符可能导致应用崩溃的问题。</li><li>对 MP3 文件音乐延迟（FMOD_MP3_DELAY）的默认设置现在被更改为 0。 <ul><li>该改动只影响全新安装的 DyNode 。</li></ul></li><li>修复了潜在的多个关于视频播放的问题。</li><li>Gamemaker Runtime 版本更改至 2024.2 。</li></ul>",2),M={id:"v0-1-13-2-2024-02-21",tabindex:"-1"},L=l("a",{class:"header-anchor",href:"#v0-1-13-2-2024-02-21","aria-hidden":"true"},"#",-1),R={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.13.2",target:"_blank",rel:"noopener noreferrer"},w=l("p",null,"该版本包含一些小的问题修复与优化。",-1),S=l("ul",null,[l("li",null,"优化了对拖动鼠标修改音符宽度的阈值处理。现在在触发阈值之后才开始计算宽度的变化量。"),l("li",null,"现在你可以在配置文件中修改音符宽度的触发阈值。"),l("li",null,"修复了导入较早版本的Dynamaker谱面文件可能导致崩溃的问题。"),l("li",null,"从这一版本开始，对每个版本的自动更新提示只会出现一次。")],-1),q={id:"v0-1-13-1-2024-01-28",tabindex:"-1"},O=l("a",{class:"header-anchor",href:"#v0-1-13-1-2024-01-28","aria-hidden":"true"},"#",-1),H={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.13.1",target:"_blank",rel:"noopener noreferrer"},P=l("p",null,"该版本包含一个问题修复。",-1),V=l("ul",null,[l("li",null,"修复了拖动 Hold 音符尾部导致游戏崩溃的问题。")],-1),G={id:"v0-1-13-2024-01-23",tabindex:"-1"},U=l("a",{class:"header-anchor",href:"#v0-1-13-2024-01-23","aria-hidden":"true"},"#",-1),X={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.13",target:"_blank",rel:"noopener noreferrer"},Y=l("p",null,"该版本包含新特性与问题修复。",-1),z=l("h3",{id:"新特性-1",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#新特性-1","aria-hidden":"true"},"#"),i(" 新特性")],-1),J=t("<li>现在在视觉一致的默认宽度模式下，粘贴/吸附的音符也会自动调整宽度。</li><li>支持了 .dy 谱面格式的导入。</li><li>现在对粒子效果的设置将被保存在项目中。</li><li>现在按住 <kbd>Shift</kbd> 能加速 <kbd>A/D</kbd> 的调整速度。</li><li>现在粘贴音符时调整宽度不会使音符的宽度还原。 <ul><li>你仍可以使用 <kbd>Ctrl+V</kbd> 来手动将其还原。</li></ul></li><li>现在可以按住 <kbd>Alt</kbd> 键来显示全部音符的信息。</li><li>在放置音符时添加了触发宽度调整的阈值。 <ul><li>以此避免放置音符时对音符宽度调整的误操作。</li></ul></li>",7),K=t('<h3 id="本地化" tabindex="-1"><a class="header-anchor" href="#本地化" aria-hidden="true">#</a> 本地化</h3><ul><li>补充/改进了英语翻译。</li></ul><h3 id="错误修复与改进" tabindex="-1"><a class="header-anchor" href="#错误修复与改进" aria-hidden="true">#</a> 错误修复与改进</h3><ul><li>修复了过低帧率导致错误的 I/O 清空。</li><li>添加了针对早期版本 Dynamaker 谱面格式的导入警告并修复了相关的崩溃问题。</li><li>对多处过渡动画进行了修正与改进。 <ul><li>避免了不必要的过渡。</li><li>修正了部分不自然的闪烁。</li></ul></li><li>修复了一些多语言的错误。</li><li>一些其它的改进。</li></ul><h3 id="功能移除" tabindex="-1"><a class="header-anchor" href="#功能移除" aria-hidden="true">#</a> 功能移除</h3><ul><li>移除了手动修改 Bar 设置的选项。 <ul><li>移除了全局 Bar/Offset 设置。</li><li>移除了覆盖 Bar 设置之后的提示信息。</li></ul></li></ul><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3><ul><li>现在文档将会在本地自动缓存，离线的状况下也可以进行访问。</li><li>现在你可以在页面的右上角对文档进行在线搜索。</li><li>多个条目进行了更新与修正。</li></ul>',8),Q={id:"v0-1-12-5-2024-01-03",tabindex:"-1"},W=l("a",{class:"header-anchor",href:"#v0-1-12-5-2024-01-03","aria-hidden":"true"},"#",-1),j={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.5",target:"_blank",rel:"noopener noreferrer"},Z=l("p",null,"该版本包含一些问题修复。",-1),$=l("ul",null,[l("li",null,"修复了 Chain 类型音符材质缺少像素的问题。"),l("li",null,[i("现在各帧率下过渡动画的表现将保持一致。 "),l("ul",null,[l("li",null,"不包含粒子动画。")])]),l("li",null,"修复了潜在的视频无法正常播放的问题。"),l("li",null,[i("Gamemaker Runtime 更改至 v2023.11.1.160 。 "),l("ul",null,[l("li",null,"此更新能够带来一些问题修复与效率改进。")])])],-1),ll={id:"v0-1-12-4-2023-11-24",tabindex:"-1"},il=l("a",{class:"header-anchor",href:"#v0-1-12-4-2023-11-24","aria-hidden":"true"},"#",-1),el={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.4",target:"_blank",rel:"noopener noreferrer"},al=t('<p>该版本包含一些问题修复与特性改动。</p><h3 id="问题修复-1" tabindex="-1"><a class="header-anchor" href="#问题修复-1" aria-hidden="true">#</a> 问题修复</h3><ul><li>修复了英文左括号 <code>[</code> 无法正确显示在标题的问题。</li><li>修复了 DyCore.dll 在旧系统无法正常加载的情况下游戏无法启动的问题。</li><li>修复了在复制模式下 <code>Ctrl+C</code> 后导致游戏崩溃的问题。</li><li>修复了视频播放相关的潜在崩溃问题。</li><li>修复了 IO 在窗口失去焦点时因时间阈值过高而没有被正确清空的问题。</li><li>移除了 libfilesystem 扩展以尝试修复其带来的一些问题。</li></ul><h3 id="特性改动" tabindex="-1"><a class="header-anchor" href="#特性改动" aria-hidden="true">#</a> 特性改动</h3><ul><li>现在新建项目时默认的节拍线透明度为 50%, 0%, 0% （正面，左侧，右侧）。</li><li>现在项目的节拍线透明度设置会被保存。</li><li>优化了 Mixer 模拟对多押的处理。</li><li>现在导出至 Dynamaker-modified 的功能被分离至快捷键 <kbd>Ctrl+F5</kbd> 。</li><li>现在多选 Note 时会出现强调色提示拖拽的中心点。</li><li>修复了多选 Note 时拖拽中心点优先级选择的问题。</li><li>现在两侧 Note 的位置高亮会同时显示。</li></ul>',5),tl={id:"v0-1-12-3-2023-09-05",tabindex:"-1"},nl=l("a",{class:"header-anchor",href:"#v0-1-12-3-2023-09-05","aria-hidden":"true"},"#",-1),rl={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.3",target:"_blank",rel:"noopener noreferrer"},ol=t('<p>该版本包含一些问题修复与新特性。</p><h3 id="问题修复-2" tabindex="-1"><a class="header-anchor" href="#问题修复-2" aria-hidden="true">#</a> 问题修复</h3><ul><li>尝试修复删除音符可能导致游戏崩溃的问题。</li><li>修复了音乐播放完毕后音乐音量被重置的问题。</li><li>修复了背景光效有时静止的问题。</li></ul><h3 id="视觉改进" tabindex="-1"><a class="header-anchor" href="#视觉改进" aria-hidden="true">#</a> 视觉改进</h3><ul><li>重构了分数板的布局与相关视觉调整，使其更接近原版Dynamix。</li><li>TAB 工具栏中的文字显示优化。</li></ul><h3 id="新特性-2" tabindex="-1"><a class="header-anchor" href="#新特性-2" aria-hidden="true">#</a> 新特性</h3><ul><li>现在同一时间上的音符将会被方块所高亮。</li><li>现在可以双击吸附音符。 <ul><li>被双击的音符作为吸附的中心。 <img src="'+d+'" alt="双击吸附"></li></ul></li><li>误差修正功能现在替代了毫秒取整功能。 <ul><li>默认的情况下，误差2ms以内的连续音符将被对齐至这些音符中最早的位置。</li></ul></li><li>添加了禁用变调 <strong>（实验性）</strong> 选项至 TAB 工具栏中。<div class="hint-container warning"><p class="hint-container-title">注意</p><p>现阶段的禁用变调选项将显著增加声音延迟，并可能存在较多的隐含问题。</p></div></li><li>现在项目相关的文件将在项目保存时被复制到项目所在的目录下，并默认使用相对路径读取文件。 <ul><li>这些相关的文件包括音乐、背景与视频文件。</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该版本的项目文件将破坏对较低版本的兼容性，在更新前请根据情况备份项目文件。</p></div></li></ul><h3 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h3><ul><li>Gamemaker Runtime 版本更新至 2023.6。</li></ul>',9),dl={id:"v0-1-12-2-2023-07-05",tabindex:"-1"},sl=l("a",{class:"header-anchor",href:"#v0-1-12-2-2023-07-05","aria-hidden":"true"},"#",-1),hl={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.2",target:"_blank",rel:"noopener noreferrer"},ul=l("p",null,"该版本包含一些问题修复。",-1),cl=l("ul",null,[l("li",null,[i("移除了一个外部库，因此修复了其带来的一些问题，例如： "),l("ul",null,[l("li",null,"OBS无法通过游戏录制捕获DyNode画面。"),l("li",null,"在对话框出现时点击游戏画面使得游戏响应变慢。"),l("li",null,"前台的 DyNode 被 Windows 识别为后台应用。"),l("li",null,"一些不明原因的卡顿问题。")])]),l("li",null,"修复了“NOTE DELETE ERROR”报错导致的游戏终止问题。"),l("li",null,"Gamemaker Runtime 更新至 2023.6 。")],-1),_l={id:"v0-1-12-1-2023-06-17",tabindex:"-1"},gl=l("a",{class:"header-anchor",href:"#v0-1-12-1-2023-06-17","aria-hidden":"true"},"#",-1),ml={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.1",target:"_blank",rel:"noopener noreferrer"},fl=t("<p>该版本修复了 v0.1.12 中的一个主要问题。这个问题可能导致输出的谱面无法正常读取。</p><ul><li>修复了 XML 解析器的一个问题，其可能导致导出的谱面有概率无法被正常读取。 <ul><li>这个问题的原因是 XML 文件中第一行 XML Declaration 中 version 与 encoding 的属性顺序发生了错误，正确的写法应当为<code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</code>，而 DyNode 使用的 XML 解析器有概率将其输出为 <code>&lt;?xml encoding=&quot;UTF-8&quot; version=&quot;1.0&quot;?&gt;</code>。</li><li>这个问题可能自 <code>v0.1.11.5</code> 版本起就会发生。</li><li>移除了 XML Declaration 中的 encoding 属性。</li></ul></li><li>稍微提高了一点 Hold 的亮度。</li></ul>",2),bl={id:"v0-1-12-2023-06-11",tabindex:"-1"},pl=l("a",{class:"header-anchor",href:"#v0-1-12-2023-06-11","aria-hidden":"true"},"#",-1),vl={href:"https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12",target:"_blank",rel:"noopener noreferrer"},El=t('<p>DyNode v0.1.12 相对于 v0.1.11 产生的主要变化如下。</p><h3 id="新特性-3" tabindex="-1"><a class="header-anchor" href="#新特性-3" aria-hidden="true">#</a> 新特性</h3><ul><li>新增了三种节拍线样式，详见 <a href="guide/edit#%E8%8A%82%E6%8B%8D%E7%BA%BF%E6%A0%B7%E5%BC%8F">谱面编辑/节拍线样式</a>。</li><li>现在音符中心方块的颜色表现更贴近原版 Dynamaker。</li><li>新增了调整延迟的功能，详见 <a href="guide/edit#%E5%BB%B6%E8%BF%9F%E8%B0%83%E6%95%B4">谱面编辑/延迟调整</a>。</li><li>新增了顶部工具栏与调整音量 / 背景亮度的功能，详见 <a href="guide/edit#%E5%B7%A5%E5%85%B7%E6%A0%8F">谱面编辑/工具栏</a>。</li><li>新增了设置自定义细分的功能，详见 <a href="guide/edit#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%8A%82%E6%8B%8D%E7%BB%86%E5%88%86">谱面编辑/自定义节拍细分</a>。</li><li>新增了实验性的功能：表达式。详见 <a href="guide/advanced-edit#%E8%A1%A8%E8%BE%BE%E5%BC%8F">高级功能/表达式</a>。</li><li>新增了英文/繁体中文的语言。 <ul><li>感谢 @Jmakxd 提供了英语/繁体中文翻译。</li></ul></li><li>现在撤销/重做时编辑界面所在的时间点将会自动移动到撤销/重做发生的时间段。</li><li>新增了撤销操作次数的上限（3000）。</li></ul><h3 id="问题修复-3" tabindex="-1"><a class="header-anchor" href="#问题修复-3" aria-hidden="true">#</a> 问题修复</h3><ul><li>修复了撤销/重做时出界警告未被正确触发的问题。</li><li>修复了视频背景透明度未被正确计算的问题。</li><li>修复了重载配置时粒子系统未被重设的问题。</li><li>修复了设置全局 Bar 不起作用的问题。</li><li>修复了潜在的撤回导致程序崩溃的问题。</li><li>修复了在不同刷新率下滚轮移动谱面速度不同的问题。</li><li>修复了任意一面不存在音符的情况下导入/导出xml崩溃的问题。</li><li>修复了删除 Hold 音符时 SUB 音符可能未被删除的问题。</li><li>修复了在特定情况下 Hold 不会按预期显示的问题。</li><li>修复了背景渐变动画在歌曲开始之前静止的问题。</li><li>修复了错误的音符统计数目。</li><li>修复了节拍线在负数 Bar 下不会正常显示的问题。</li></ul><h3 id="视觉改进-1" tabindex="-1"><a class="header-anchor" href="#视觉改进-1" aria-hidden="true">#</a> 视觉改进</h3><ul><li>现在 Hold 音符的边界不会互相遮挡。 <ul><li>重构了音符绘制的流程。</li></ul></li><li>提高了标题的透明度。</li><li>降低了 Hold 音符背景的亮度。</li></ul><h3 id="性能改进" tabindex="-1"><a class="header-anchor" href="#性能改进" aria-hidden="true">#</a> 性能改进</h3><ul><li>现在节拍线在不必要的时候将不会被绘制。</li><li>其它的性能改进。</li></ul><h3 id="杂项-1" tabindex="-1"><a class="header-anchor" href="#杂项-1" aria-hidden="true">#</a> 杂项</h3>',10),xl=l("ul",null,[l("li",null,"新增了“关于”页面。"),l("li",null,"现在流速设置将被保存到项目中。"),l("li",null,[i("你可以使用 "),l("kbd",null,"Ctrl+F6"),i(" 来随机化谱面（0.1.11.1.4.1）。")]),l("li",null,[i("添加了对音符宽度的限制（"),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mo",null,">"),l("mn",null,"0.01")]),l("annotation",{encoding:"application/x-tex"},">0.01")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),l("span",{class:"mrel"},">"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"0.01")])])]),i("）。")]),l("li",null,"Gamemaker Runtime 版本更新至 2023.4 。")],-1);function kl(Bl,Nl){const a=o("ExternalLinkIcon"),n=o("RouterLink");return h(),u("div",null,[_,g,l("h2",m,[f,i(),l("a",b,[i("v0.1.15"),e(a)]),i(" (2024-07-25)")]),p,l("h2",v,[E,i(),l("a",x,[i("v0.1.14"),e(a)]),i(" (2024-07-22)")]),k,l("h2",B,[N,i(),l("a",D,[i("v0.1.13.4"),e(a)]),i(" (2024-05-12)")]),y,A,l("h2",C,[F,i(),l("a",I,[i("v0.1.13.3"),e(a)]),i(" (2024-04-12)")]),T,l("h2",M,[L,i(),l("a",R,[i("v0.1.13.2"),e(a)]),i(" (2024-02-21)")]),w,S,l("h2",q,[O,i(),l("a",H,[i("v0.1.13.1"),e(a)]),i(" (2024-01-28)")]),P,V,l("h2",G,[U,i(),l("a",X,[i("v0.1.13"),e(a)]),i(" (2024-01-23)")]),Y,z,l("ul",null,[l("li",null,[i("添加了 Timing 修改与修正的功能。详见 "),e(n,{to:"/guide/timing.html#%E4%BF%AE%E6%94%B9-timing-point"},{default:r(()=>[i("Timing/修改 Timing Point")]),_:1}),i(" 与 "),e(n,{to:"/guide/timing.html#timing-%E4%BF%AE%E6%AD%A3"},{default:r(()=>[i("Timing/Timing 修正")]),_:1}),i("。")]),l("li",null,[i("现在支持多选不同侧面的音符并对其进行批量操作。详见 "),e(n,{to:"/guide/edit.html#%E5%BC%82%E4%BE%A7%E5%A4%9A%E9%80%89"},{default:r(()=>[i("谱面编辑/异侧多选")]),_:1}),i("。")]),l("li",null,[i("现在支持同时对左右两侧的音符进行编辑操作。详见 "),e(n,{to:"/guide/edit.html#%E5%8F%8C%E4%BE%A7%E7%BC%96%E8%BE%91"},{default:r(()=>[i("谱面编辑/双侧编辑")]),_:1}),i("。")]),l("li",null,[i("现在切换小节数/时间显示将显示准确的小节数。详见 "),e(n,{to:"/guide/timing.html#%E6%97%B6%E9%97%B4%E4%B8%8E%E5%B0%8F%E8%8A%82%E6%95%B0"},{default:r(()=>[i("Timing/时间与小节数")]),_:1}),i("。")]),J]),K,l("h2",Q,[W,i(),l("a",j,[i("v0.1.12.5"),e(a)]),i(" (2024-01-03)")]),Z,$,l("h2",ll,[il,i(),l("a",el,[i("v0.1.12.4"),e(a)]),i(" (2023-11-24)")]),al,l("h2",tl,[nl,i(),l("a",rl,[i("v0.1.12.3"),e(a)]),i(" (2023-09-05)")]),ol,l("h2",dl,[sl,i(),l("a",hl,[i("v0.1.12.2"),e(a)]),i(" (2023-07-05)")]),ul,cl,l("h2",_l,[gl,i(),l("a",ml,[i("v0.1.12.1"),e(a)]),i(" (2023-06-17)")]),fl,l("h2",bl,[pl,i(),l("a",vl,[i("v0.1.12"),e(a)]),i(" (2023-06-11)")]),El,xl])}const Cl=s(c,[["render",kl],["__file","changelog.html.vue"]]);export{Cl as default};
