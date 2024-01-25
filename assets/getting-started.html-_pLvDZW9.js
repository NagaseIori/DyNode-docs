import{_ as l}from"./project_create-aWgbtcfp.js";import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as s,c as p,a as i,b as e,d as t,w as d,e as n}from"./app-WKfP_XLO.js";const h="/assets/bad-chart-k_XBLsK9.png",m={},k=i("h1",{id:"快速上手",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),e(" 快速上手")],-1),c=i("p",null,"本页面旨在提供让人快速上手 DyNode 编辑谱面的操作方式教程。",-1),u=i("h2",{id:"下载-安装",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#下载-安装","aria-hidden":"true"},"#"),e(" 下载 & 安装")],-1),b=n('<p>如果国内用户访问 Github 存在困难，则可以使用网盘的方式进行下载。</p><p>下载完毕后，解压压缩文件，执行 <code>DyNode.exe</code> 即可打开 DyNode 。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>DyNode 从 0.1.6 版本开始将不支持 32 位系统。若你对此存在需求，目前可以下载 0.1.5 之前的版本并正常使用。</p></div><h2 id="从-dynode-开始" tabindex="-1"><a class="header-anchor" href="#从-dynode-开始" aria-hidden="true">#</a> 从 DyNode 开始</h2><div class="hint-container info"><p class="hint-container-title">提示</p><p>如果你准备创建一个全新的空项目并使用 DyNode 创作新谱面，则此处可以为你快速上手提供指引。</p></div><p>通过以下几个简单的步骤可以快速地开始创作一个谱面的编辑过程。</p>',6),g=i("li",null,"将导出的 .xml 谱面正式发布。",-1),y=n('<p>一个谱面就创作完成了！</p><h2 id="从-dynamaker-开始" tabindex="-1"><a class="header-anchor" href="#从-dynamaker-开始" aria-hidden="true">#</a> 从 Dynamaker 开始</h2><div class="hint-container info"><p class="hint-container-title">提示</p><p>如果你曾使用过 Dynamaker ，了解 Dynamaker 的基本操作方式，并准备从 Dynamaker 中导入已有的项目，则你可以从此开始快速上手 DyNode 。</p></div><h3 id="基本操作方式" tabindex="-1"><a class="header-anchor" href="#基本操作方式" aria-hidden="true">#</a> 基本操作方式</h3><p>DyNode 的大多数基本操作方式是 Dynamaker 的修改与增强。因此，若你熟悉 Dynamaker 的操作，则你应当可以快速上手 DyNode 的基本操作方式。</p><p>下面讲解 DyNode 与 Dynamaker 的主要操作区别。</p><ul><li>音符除了双击吸附，也可以通过鼠标直接拖拽来移动。 <ul><li>Hold 的头尾移动是分离的。若你想进行整体拖动，按住 <kbd>Ctrl</kbd> 后再拖动头部即可。</li><li>目前在多选模式下，Hold 强制为整体拖动。</li></ul></li><li>音符放置时，长按左键拖拽来改变音符的宽度，松开左键进行放置。</li><li>编辑模式共有五个，以数字 <kbd>1</kbd> ~ <kbd>5</kbd> 进行切换。 <ul><li>前四个模式与 Dynamaker 并无区别，第五个模式为预览（Playback）模式。这也是进入编辑器的默认模式。该模式下仅能够对谱面进行预览，所有特效全部开启，所有编辑器效果全部关闭。因此进入编辑器后，需要先选择模式 4 来切入编辑（Edit）模式以进行谱面的编辑。</li></ul></li><li><kbd>C</kbd> / <kbd>V</kbd> 将会改变<strong>节拍线</strong>的密度与细分方式。</li><li>Note 左上角默认情况下显示的并非 Note 的 Bar，而是 Note 所在的时间值（以毫秒为单位）。</li><li>可以使用 <kbd>Ctrl</kbd> 与拖拽框选来进行音符的多选/反选。</li><li>可以使用 <kbd>Ctrl + C/X/V/Z/Y</kbd> 来进行复制/剪切/粘贴/撤销/还原等操作。</li><li>可以使用 <kbd>Ctrl</kbd> + 鼠标滚轮 来进行快速的音符流速调整。若此时选中了音符，则可以进行快速的批量音符宽度调整。</li><li>可以使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> 来复制单个音符的宽度并批量设置选中音符的宽度。</li><li>可以用 <kbd>Ctrl</kbd> + ( <kbd>Shift</kbd> + ) 方向键 来对选中音符进行微调。</li><li>拖拽右键来快速切换编辑侧。</li></ul><p>其它基本操作/键位等与 Dynamaker 基本一致。</p><h3 id="从-dynamaker-中导入谱面" tabindex="-1"><a class="header-anchor" href="#从-dynamaker-中导入谱面" aria-hidden="true">#</a> 从 Dynamaker 中导入谱面</h3><p>DyNode 提供从 Dynamaker 直接导入谱面的方式。</p>',10),_=i("p",null,[i("img",{src:l,alt:"创建项目"})],-1),D=i("p",null,"如果你已经在 Dynamaker 有正在编辑的谱面，则你可以在此创建项目页面中直接导入 Dynamaker 中的谱面。",-1),E=i("p",null,"以此方式你至少需要的文件有：",-1),B=i("li",null,"谱面的 .xml/.dy 文件（从 Dynamaker 中导出）。因为 .dy 文件一般已经包含了谱面所需要的音乐文件，所以若你使用的是 .dy 格式的谱面，你可以无需填写谱面的音乐文件一栏。",-1),f=n('<p>在音乐文件一栏中选择你的谱面音乐文件。在导入谱面文件中选择你的 .xml 文件。如果有需要，你也可以添加背景文件。<strong>所有右侧的谱面配置都将被导入的谱面信息所覆盖</strong>。</p><p>完成后，点击创建项目即可。</p><p>之后你应当可以正常预览从 Dynamaker 中导入的谱面。</p><h3 id="timing-与节拍细分" tabindex="-1"><a class="header-anchor" href="#timing-与节拍细分" aria-hidden="true">#</a> Timing 与节拍细分</h3><p>Timing 在 DyNode 中是与 Dynamaker 中的 Bar 存在差异的概念。详见 Wiki 中的 <a href="/guide/timing">Timing</a> 页面。</p><p>若你已经在 Dynamaker 中正确设置了 BPM，则你可以正常从 Dynamaker 的各个版本中导入 BPM（亦或是多 BPM）信息，并可以直接在 DyNode 中进行编辑。</p><p>在<strong>预览模式</strong>下，节拍线默认不会显示，此时你应当使用数字键 <kbd>1</kbd> ~ <kbd>4</kbd> 来切换到<strong>编辑模式</strong>，并使用<strong>方向键</strong>来切出节拍线。与 Dynamaker 类似，你可以使用 <kbd>Z/C</kbd> 来切换节拍细分，与 Dynamaker 不同的地方在于节拍线的显示会随着你使用的节拍细分而改变。</p><div class="hint-container info"><p class="hint-container-title">提示</p><p>若你已经处于<strong>编辑模式</strong>却没有显示节拍线，则你可以尝试检查：</p><ul><li>你是否选择了导入谱面相关信息？</li><li>你是否在 Dynamaker-modified 中正确配置了 BPM？</li><li>你是否添加了音乐文件？</li></ul></div><p>如果你想对导入的 Timing Point 中的重拍（或第一拍）进行额外的校准，则你可以尝试使用快捷键 <kbd>T</kbd> 。它会将时间上最晚的 Timing Point 复制并添加到你<strong>选中</strong>的<strong>单个音符</strong>上。</p><p>以某谱面为例，正常的编辑界面应当如下（此时节拍细分默认为 1/4）：</p><p><img src="'+h+'" alt=""></p><h3 id="在这之后" tabindex="-1"><a class="header-anchor" href="#在这之后" aria-hidden="true">#</a> 在这之后...</h3><p>想了解更多关于 DyNode 对编辑方式的改动，请前往查看 <a href="/guide/edit">谱面编辑</a> 。</p>',13),N=n('<p>你可以使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面，以用于导入游戏或 Dynamaker 中进行编辑（如果你有正确的 Bar Per Minute 设置）。</p><p>你可以使用 <kbd>F7</kbd> 来切换全屏。如果此时你没有处于粘贴模式，你可以使用 <kbd>Esc</kbd> 来退出 DyNode 。</p><p>如果你更改了音乐或图片文件的位置，则 DyNode 对文件的加载可能会出现错误。此时你可以使用 <kbd>F3</kbd> / <kbd>F4</kbd> 来手动加载音乐和图片文件。</p><p>如果比起蓝色你更喜欢粉色，你可以使用 <kbd>F9</kbd> 来切换主题。</p><p>全部的功能可以查看 <a href="/shortcuts">快捷键</a> 页面。</p><p>你也可以无需通过 Dynamaker 进行谱面的创建。此时你需要手动配置 Timing Points 与所有的谱面信息。如果你通过 osu! 等编辑器对谱面设置 Timing 并无需配合 Dynamaker 使用，则推荐使用这种方式来进行谱面编辑。详见 <a href="/guide/timing#%E4%BB%8E-osu-file-%E4%B8%AD%E5%AF%BC%E5%85%A5-timing-points">Timing</a> 页面。</p><p>如果你有更多其他的问题，可以查看 <a href="/FAQ">FAQ</a> 页面。</p>',7);function x(A,C){const a=o("RouterLink");return s(),p("div",null,[k,c,u,i("p",null,[e("你可以在 "),t(a,{to:"/"},{default:d(()=>[e("主页")]),_:1}),e(" 上选择一个选项下载 DyNode 对应平台的最新版本。")]),b,i("ol",null,[i("li",null,[t(a,{to:"/guide/project.html#%E6%96%B0%E5%BB%BA%E9%A1%B9%E7%9B%AE"},{default:d(()=>[e("新建项目")]),_:1}),e(" 。")]),i("li",null,[e("设置谱面的 Timing。详见 "),t(a,{to:"/guide/timing.html"},{default:d(()=>[e("Timing")]),_:1}),e(" 。")]),i("li",null,[e("切换拍线的显示。详见 "),t(a,{to:"/guide/edit.html#%E7%BD%91%E6%A0%BC%E5%90%B8%E9%99%84%E4%B8%8E%E6%8B%8D%E7%BA%BF"},{default:d(()=>[e("网格吸附与拍线")]),_:1}),e(" 。")]),i("li",null,[e("对谱面进行编辑。详见 "),t(a,{to:"/guide/edit.html"},{default:d(()=>[e("谱面编辑")]),_:1}),e(" 。")]),i("li",null,[t(a,{to:"/guide/project.html#%E4%BF%9D%E5%AD%98%E9%A1%B9%E7%9B%AE"},{default:d(()=>[e("保存项目")]),_:1}),e(" 。")]),i("li",null,[e("导出 .xml 谱面，在 Dynamite 或其他游戏客户端上进行调试。详见 "),t(a,{to:"/guide/export.html"},{default:d(()=>[e("谱面导出")]),_:1}),e(" 。")]),g]),y,i("p",null,[e('在开始界面时，你应当选择“创建项目”而非“打开已有项目”。项目在 DyNode 中是一个独立的概念，所有项目的信息将以 JSON 形式被储存在以 ".dyn" 为后缀结尾的文件中。详见 '),t(a,{to:"/guide/project.html"},{default:d(()=>[e("项目")]),_:1}),e(" 。")]),_,D,E,i("ul",null,[i("li",null,[e("谱面的音乐文件。主流的音乐格式全部都可以使用（如 .mp3/.flac/.wav/.ogg/.mid 等）。关于使用 .mp3 与 .wav 音乐文件的延迟问题，你可以在 "),t(a,{to:"/guide/timing.html#mp3-%E4%B8%8E-wav-%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%BB%B6%E8%BF%9F%E5%A4%84%E7%90%86-%E5%9C%A8-0-1-5-%E4%B9%8B%E5%90%8E"},{default:d(()=>[e("Timing")]),_:1}),e(" 页面中看到更多内容。")]),B]),f,i("p",null,[e("新建项目之后请不要忘记保存项目，否则进度可能会轻易丢失。详见 "),t(a,{to:"/guide/project.html#%E4%BF%9D%E5%AD%98%E9%A1%B9%E7%9B%AE"},{default:d(()=>[e("保存项目")]),_:1}),e(" 。")]),N])}const P=r(m,[["render",x],["__file","getting-started.html.vue"]]);export{P as default};
