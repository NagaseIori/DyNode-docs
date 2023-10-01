import{_ as s}from"./double_click-e35788ac.js";import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as l,a,b as e,d as i,w as c,e as d}from"./app-5caf016b.js";const o={},b=d('<h1 id="谱面编辑" tabindex="-1"><a class="header-anchor" href="#谱面编辑" aria-hidden="true">#</a> 谱面编辑</h1><p>本页面讲解 DyNode 谱面编辑的基本要素。</p><h2 id="编辑模式" tabindex="-1"><a class="header-anchor" href="#编辑模式" aria-hidden="true">#</a> 编辑模式</h2><p>DyNode 共有五种编辑模式，以数字键 <kbd>1</kbd> ~ <kbd>5</kbd> 来进行切换。</p><ul><li>放置模式：数字键 <kbd>1</kbd> ~ <kbd>3</kbd> 来放置音符。详见 <a href="#%E6%94%BE%E7%BD%AE%E9%9F%B3%E7%AC%A6">放置音符</a> 。</li><li>编辑模式：数字键 <kbd>4</kbd> 来编辑音符。例如选中音符、编辑音符、删除音符等。详见 <a href="#%E9%9F%B3%E7%AC%A6">音符</a>。</li><li>预览模式：数字键 <kbd>5</kbd> 来对谱面进行预览。所有的特效在此模式都将默认开启，所有的编辑功能都将在此模式下关闭。</li></ul><h2 id="音符" tabindex="-1"><a class="header-anchor" href="#音符" aria-hidden="true">#</a> 音符</h2><p>音符共有三种类型。</p><ul><li>Note (Tap): 单点音符，最基本的音符</li><li>Chain (Slide): 滑键，只要手指有放置就能判定的音符</li><li>Hold: 长按直至尾部判定完全再松开的音符</li></ul><p>除此以外，在 xml 格式数据的储存中也有额外的类型：</p><ul><li>Sub: Hold 的尾部音符，仅所在时间具有有意义的数据</li></ul><h3 id="放置音符" tabindex="-1"><a class="header-anchor" href="#放置音符" aria-hidden="true">#</a> 放置音符</h3><ol><li>数字键 <kbd>1</kbd> ~ <kbd>3</kbd> 切换至你想放置的音符。</li><li>找到你想放置的位置，长按 Note 拖拽调整长度，松开放置。</li><li>如果你放置的是 Hold，下一步继续选择 Hold 的尾端并点按放置。</li></ol><p>最后一次手动放置单个音符的宽度将作为下一次放置音符的 <em>默认宽度</em> 。</p><div style="text-align:center;"><p><img src="https://user-images.githubusercontent.com/31349569/184546816-cc813b1b-844b-4eef-a959-e69022702f50.gif" alt="Drop a note" width="400"></p><p><img src="https://user-images.githubusercontent.com/31349569/184546887-17f5d3d3-b9dc-4a36-a0b1-ab13a10130e2.gif" alt="Drop_a_hold" width="400"></p></div><h3 id="移动音符" tabindex="-1"><a class="header-anchor" href="#移动音符" aria-hidden="true">#</a> 移动音符</h3><p>拖拽。</p><p>若想整体拖拽 Hold ，则在单个 Hold 被选中的情况下按住 <kbd>Ctrl</kbd> 拖动头部即可。在多选的情况下 Hold 将默认被整体拖拽。</p><div style="text-align:center;"><p><img src="https://user-images.githubusercontent.com/31349569/184546984-f9bae40d-f543-4544-ab07-1902c2a80dd3.gif" alt="Drag a note" width="400"></p></div><h3 id="选中音符" tabindex="-1"><a class="header-anchor" href="#选中音符" aria-hidden="true">#</a> 选中音符</h3><p>拖拽并框选。</p><p>你可以按住 <kbd>Ctrl</kbd> 键来多选音符或反选音符。</p><div style="text-align:center;"><p><img src="https://user-images.githubusercontent.com/31349569/184547121-032231e9-4c4a-4a7b-9cc1-b6c5c3e4e122.gif" alt="Multiselect" width="400"></p></div><h3 id="吸附音符" tabindex="-1"><a class="header-anchor" href="#吸附音符" aria-hidden="true">#</a> 吸附音符</h3><p>双击音符。</p><p>当吸附多个被选中的音符时，以被双击的音符作为吸附的中心。</p><p>再次单击鼠标将被吸附的音符放置。</p><div style="text-align:center;"><p><img src="'+s+'" alt="Attach" width="400"></p></div><h3 id="批量操作" tabindex="-1"><a class="header-anchor" href="#批量操作" aria-hidden="true">#</a> 批量操作</h3><h4 id="批量移动音符-吸附音符" tabindex="-1"><a class="header-anchor" href="#批量移动音符-吸附音符" aria-hidden="true">#</a> 批量移动音符 / 吸附音符</h4><p>在选中音符后，使用鼠标拖拽 / 吸附被选中的音符。</p><h4 id="批量删除音符" tabindex="-1"><a class="header-anchor" href="#批量删除音符" aria-hidden="true">#</a> 批量删除音符</h4><p>在选中音符后，按下 <kbd>Backspace</kbd> 或 <kbd>Delete</kbd> 即可。</p><h4 id="批量调节音符宽度" tabindex="-1"><a class="header-anchor" href="#批量调节音符宽度" aria-hidden="true">#</a> 批量调节音符宽度</h4><p>在选中音符后，按下 <kbd>Ctrl</kbd> 并使用鼠标滚轮来快速调节音符宽度，或使用 <kbd>Ctrl</kbd> + <kbd>V</kbd> 来快速粘贴 <em>默认宽度</em> 。</p><h4 id="复制音符宽度" tabindex="-1"><a class="header-anchor" href="#复制音符宽度" aria-hidden="true">#</a> 复制音符宽度</h4><p>在选中 <strong>单个</strong> 音符后，使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> 来将此音符的宽度作为 <em>默认宽度</em> 。</p><h4 id="复制音符" tabindex="-1"><a class="header-anchor" href="#复制音符" aria-hidden="true">#</a> 复制音符</h4><p>在选中音符后，按下 <kbd>Ctrl</kbd> + <kbd>C</kbd> ，右下角即会提示复制音符数量。</p><div style="text-align:center;"><p><img src="https://user-images.githubusercontent.com/31349569/184547227-bbb12d78-0f0e-40b9-b0c2-77e69e3b8887.gif" alt="Copy" width="400"></p></div><h4 id="粘贴音符" tabindex="-1"><a class="header-anchor" href="#粘贴音符" aria-hidden="true">#</a> 粘贴音符</h4><p>在复制音符后，按下 <kbd>Ctrl</kbd> + <kbd>V</kbd> ，在适当的位置像放置普通音符那样放置复制音符即可。</p><p>粘贴音符的时候，默认使用时间最早的音符当做选择的中心。如果你想更换这个中心（比如，你想以末尾的音符作为中心），用 <kbd>Ctrl</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> 来切换。</p><p>可以用 <kbd>Esc</kbd> 来退出粘贴，也可以直接使用数字键切换模式。</p><p>可以用 <kbd>Up</kbd> 或 <kbd>鼠标右键</kbd> 来切换你想要粘贴到的下落面。</p><p>可以用 <kbd>Ctrl</kbd> + <kbd>1</kbd>/<kbd>2</kbd> 来批量转换你想粘贴的音符。</p><div style="text-align:center;"><p><img src="https://user-images.githubusercontent.com/31349569/184547335-9d6a2e4e-d2f1-4908-92d8-038683a371f4.gif" alt="Paste" width="400"></p></div><h3 id="对称-镜像音符" tabindex="-1"><a class="header-anchor" href="#对称-镜像音符" aria-hidden="true">#</a> 对称 / 镜像音符</h3><p>选中音符后，使用 <kbd>M</kbd> 来以该编辑侧的中心为准镜像音符。使用 <kbd>Ctrl+M</kbd> 来镜像复制音符。</p><p>选中<strong>侧面</strong>音符后，使用 <kbd>R</kbd> 来将音符对称移动到另一侧面。使用 <kbd>Ctrl+R</kbd> 来对称复制音符。</p><h3 id="撤销与还原" tabindex="-1"><a class="header-anchor" href="#撤销与还原" aria-hidden="true">#</a> 撤销与还原</h3><p>使用 <kbd>Ctrl</kbd> + <kbd>Z</kbd>/<kbd>Y</kbd> 来撤销与还原。</p><h2 id="默认宽度" tabindex="-1"><a class="header-anchor" href="#默认宽度" aria-hidden="true">#</a> 默认宽度</h2><p>默认宽度是你在放置 <strong>单个音符</strong> 时的设置宽度。</p><h3 id="设置默认宽度" tabindex="-1"><a class="header-anchor" href="#设置默认宽度" aria-hidden="true">#</a> 设置默认宽度</h3><p>你可以在放置 <strong>单个音符</strong> 时，横向（或纵向）拖动鼠标来简单的更改默认宽度。</p><p>你也可以使用 <kbd>K</kbd> 来直接输入你想要的默认宽度值。它会修改<strong>当前编辑侧</strong>的默认宽度值。</p><p>你也可以选中 <strong>单个音符</strong> 后，使用 <kbd>Ctrl+C</kbd> 来将此音符的宽度作为默认宽度。</p><h3 id="设置默认宽度模式" tabindex="-1"><a class="header-anchor" href="#设置默认宽度模式" aria-hidden="true">#</a> 设置默认宽度模式</h3><p>DyNode 提供四种设置默认宽度的模式，因为在 Dynamix 中，正侧面设置的同一宽度下，侧面的音符宽度以像素计为正面的一半。例如，正面与侧面的音符在宽度皆为 <code>1.0</code> 的情况下，正面的音符宽度为 <code>300</code> 像素，而侧面的音符宽度只为 <code>150</code> 像素。这同样也体现在游戏的判定上。</p><p>使用 <kbd>L</kbd> 来更改设置默认宽度的模式。一共有四种设置默认宽度的模式，这四种模式的默认宽度设置是全部分离的（通俗来讲，你在一个模式下改变了默认宽度，它不会影响到任何其它模式下的默认宽度设置），因此你可以根据情况来灵活切换默认宽度模式。</p><h4 id="宽度一致" tabindex="-1"><a class="header-anchor" href="#宽度一致" aria-hidden="true">#</a> 宽度一致</h4><p>这是 DyNode 默认的设置默认宽度模式。在该模式下，正侧面的默认宽度实时绑定并完全相等。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这同样也是 Dynamaker 默认使用的处理正侧面默认宽度的方式。如果你感觉此功能过于复杂且可能对你没有帮助，则你无需更改设置默认宽度模式。</p></div><h4 id="视觉一致" tabindex="-1"><a class="header-anchor" href="#视觉一致" aria-hidden="true">#</a> 视觉一致</h4><p>在该模式下，正侧面的默认宽度实时绑定，且侧面的默认宽度一定为正面的两倍。</p><p>例如，如果你在正面修改默认宽度为 1.0，则侧面的默认宽度也会同步修改为 2.0。相反同理。</p><p>这个模式可以保证你在三面上放置的音符在视觉上是完全等宽的。</p><h4 id="正侧面分离" tabindex="-1"><a class="header-anchor" href="#正侧面分离" aria-hidden="true">#</a> 正侧面分离</h4><p>在该模式下，正侧面的默认宽度是分离的，而左右侧面的默认宽度是实时绑定的。</p><p>通俗来讲，你在正面设置默认宽度时，侧面的默认宽度不会更改。相反同理。</p><h4 id="三面分离" tabindex="-1"><a class="header-anchor" href="#三面分离" aria-hidden="true">#</a> 三面分离</h4><p>在该模式下，所有编辑侧的默认宽度是全部分离的。</p><p>通俗来讲，你在任何一个编辑侧设置默认宽度时都不会影响到其它编辑侧的默认宽度。</p><h2 id="编辑侧" tabindex="-1"><a class="header-anchor" href="#编辑侧" aria-hidden="true">#</a> 编辑侧</h2><h3 id="切换编辑侧" tabindex="-1"><a class="header-anchor" href="#切换编辑侧" aria-hidden="true">#</a> 切换编辑侧</h3><p>用 <kbd>Up</kbd> 或 <kbd>鼠标右键</kbd> 拖拽来切换编辑侧。</p><p>亮起的判定线代表你正在编辑的侧面。</p><div style="text-align:center;"><p><img src="https://user-images.githubusercontent.com/31349569/184547647-4e148234-543a-413e-bdcb-b0498ca618be.gif" alt="Switch side" width="400"></p></div><h3 id="透明化非编辑侧音符" tabindex="-1"><a class="header-anchor" href="#透明化非编辑侧音符" aria-hidden="true">#</a> 透明化非编辑侧音符</h3><p>按下 <kbd>F</kbd> 即可隐去非编辑侧音符。</p><div style="text-align:center;"><p><img src="https://user-images.githubusercontent.com/31349569/184547770-ef9add4d-0300-4a1e-89d1-dcd6af67d599.gif" alt="Fade side" width="400"></p></div><h3 id="切换侧面下落类型" tabindex="-1"><a class="header-anchor" href="#切换侧面下落类型" aria-hidden="true">#</a> 切换侧面下落类型</h3><p>将编辑侧切换到左侧或右侧后，按下 <kbd>Ctrl</kbd> + <kbd>F</kbd> 来切换此侧面的下落类型。</p><ul><li>MULTI: 可以放置 Note, Hold 与 Chain 三种类型的音符</li><li>PAD: 可以放置 Note 与 Hold 两种类型的音符。</li><li>MIXER: 可以放置 Chain 类型的音符，带有滑板</li></ul><p>目前的版本实际上对三种模式的音符放置都不带有严格限制。</p><h2 id="网格吸附与拍线" tabindex="-1"><a class="header-anchor" href="#网格吸附与拍线" aria-hidden="true">#</a> 网格吸附与拍线</h2><p>开启纵向网格吸附与拍线的前提是正确配置 Timing Point ，详看 <a href="/guide/timing">Timing</a> 页面。</p><h3 id="节拍线" tabindex="-1"><a class="header-anchor" href="#节拍线" aria-hidden="true">#</a> 节拍线</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>若不存在任何 Timing Point ，则拍线不会被显示。</p></div><p>使用 <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> 来调整对应编辑侧的节拍线透明度。共三档：0% / 50% / 100% 。</p><h3 id="节拍线样式" tabindex="-1"><a class="header-anchor" href="#节拍线样式" aria-hidden="true">#</a> 节拍线样式</h3><p>使用 <kbd>J</kbd> 来修改节拍线的样式。共四种样式：默认 / 等长 / 单色 / 经典。</p><p>在等长模式下，所有的节拍线的长度都是相同的。在单色模式下，节拍线不具有颜色。</p><p>经典模式同时启用了等长模式与单色模式。</p><h3 id="节拍细分-组" tabindex="-1"><a class="header-anchor" href="#节拍细分-组" aria-hidden="true">#</a> 节拍细分（组）</h3><p>使用 <kbd>C</kbd> / <kbd>V</kbd> 来切换节拍细分的细密程度。</p><p>使用 <kbd>G</kbd> 来切换节拍分组。</p><p>目前支持的节拍细分有：</p><ul><li>A 组：1/2，1/3 为基础的细分组，包括 1/4, 1/8, 1/6, 1/12 等。</li><li>B 组：比较少见的 1/5，1/7 为基础的细分组，包括 1/10, 1/14, 1/20 等。</li></ul><h3 id="自定义节拍细分" tabindex="-1"><a class="header-anchor" href="#自定义节拍细分" aria-hidden="true">#</a> 自定义节拍细分</h3>',100),k=a("p",null,[e("使用 "),a("kbd",null,"`"),e(" 来设置自定义节拍细分"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"1"),a("mi",{mathvariant:"normal"},"/"),a("mi",null,"x")]),a("annotation",{encoding:"application/x-tex"},"1/x")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord"},"1/"),a("span",{class:"mord mathnormal"},"x")])])]),e("。其中 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"x")]),a("annotation",{encoding:"application/x-tex"},"x")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"x")])])]),e(" 可以为任意合法（"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mo",null,"≥"),a("mn",null,"1")]),a("annotation",{encoding:"application/x-tex"},"\\geq 1")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),a("span",{class:"mrel"},"≥"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"1")])])]),e("）的正整数。")],-1),u=d('<h3 id="网格吸附的开关" tabindex="-1"><a class="header-anchor" href="#网格吸附的开关" aria-hidden="true">#</a> 网格吸附的开关</h3><div class="hint-container warning"><p class="hint-container-title">关于防糊机制</p><p>由于 Dynamix 的防糊机制，我们不建议在关闭纵向网格吸附的情况下手动放置双押，因为放置的音符的时间可能会出现小数点级的误差导致防糊机制被意外地触发。</p><p>如果你需要这么做，你可以先确保音符对齐再进行放置，或者选择在导出时选择整数时间转换。详见 <a href="/guide/export">谱面导出</a> 。</p></div><p>使用 <kbd>Z</kbd> 来开关纵向（时间）网格吸附。</p><p>使用 <kbd>X</kbd> 来开关横向（位置）网格吸附。</p><h2 id="编辑界面" tabindex="-1"><a class="header-anchor" href="#编辑界面" aria-hidden="true">#</a> 编辑界面</h2><h3 id="回放预览" tabindex="-1"><a class="header-anchor" href="#回放预览" aria-hidden="true">#</a> 回放预览</h3><p>使用 <kbd>Enter</kbd> 来从头开始预览你的谱面。</p><p>这会将你的编辑模式设置为预览模式。详见 <a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F">编辑模式</a> 。</p><h3 id="设置背景图片" tabindex="-1"><a class="header-anchor" href="#设置背景图片" aria-hidden="true">#</a> 设置背景图片</h3><p>使用 <kbd>F4</kbd> 来设置背景图片。</p><p>背景图片可以是常用图片格式，如 JPG/JPEG/PNG 文件。</p><h3 id="设置背景视频" tabindex="-1"><a class="header-anchor" href="#设置背景视频" aria-hidden="true">#</a> 设置背景视频</h3><p>使用 <kbd>F4</kbd> 来导入背景视频。导入的背景视频将不会播放声音，且只在 <a href="#%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F">预览模式</a> 下进行播放。</p>',13),m={href:"https://osu.ppy.sh/wiki/zh/Guides/Compressing_files#video",target:"_blank",rel:"noopener noreferrer"},f={href:"https://ffmpeg.org/",target:"_blank",rel:"noopener noreferrer"},g=d(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-i</span> input <span class="token parameter variable">-c:v</span> libx264 <span class="token parameter variable">-crf</span> <span class="token number">20</span> <span class="token parameter variable">-preset</span> fast <span class="token parameter variable">-an</span> <span class="token parameter variable">-sn</span> <span class="token parameter variable">-map_metadata</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">-map_chapters</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">-vf</span> <span class="token assign-left variable">scale</span><span class="token operator">=</span>-1:720 output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你已经安装好了 FFmpeg 并将其安装路径设置到 PATH 中，则可以将该命令存储到 <code>.bat</code> 后缀名的文本文件中并保存执行。</p><p>你应当将上方命令中的 <code>input</code> 替换成你想要转码的视频文件名（如 <code>video.mp4</code> ），命令将会在同一文件夹下导出转换后的视频文件 <code>output.mp4</code>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在设置背景视频之前，请确认你已经将视频文件按照上方指南转码成受支持的格式。</p><p>如果你使用背景视频出现了包括但不限于以下问题，请尝试保存项目并<strong>重启应用</strong>，若问题依旧，你可以选择<strong>重设背景</strong>来删除已经设置的图片与视频，或尝试更换背景视频文件：</p><ul><li>特定视频导入超时（你的视频文件格式可能不受支持）</li><li>所有视频导入超时</li><li>视频卡顿、音画严重不同步</li></ul></div><h3 id="重设背景" tabindex="-1"><a class="header-anchor" href="#重设背景" aria-hidden="true">#</a> 重设背景</h3><p>使用 <kbd>Ctrl+F4</kbd> 来重设所有背景，包括图片与视频。</p><p>重设背景将不会影响硬盘上的文件。</p><h2 id="bar" tabindex="-1"><a class="header-anchor" href="#bar" aria-hidden="true">#</a> Bar</h2>`,8),x={class:"hint-container info"},v=a("p",{class:"hint-container-title"},"提示",-1),_=d('<h3 id="设置-删除全局-bar-信息" tabindex="-1"><a class="header-anchor" href="#设置-删除全局-bar-信息" aria-hidden="true">#</a> 设置/删除全局 Bar 信息</h3><p>若你的谱面并非从 Dynamaker 导入，你可以使用 <kbd>F6</kbd> 来设置/删除全局 Bar 信息。这些信息包括 Bar Per Minute 与 Bar Offset 。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>大多数情况下，你无需手动配置该信息。</p></div><h3 id="切换-bar-time-显示" tabindex="-1"><a class="header-anchor" href="#切换-bar-time-显示" aria-hidden="true">#</a> 切换 Bar / Time 显示</h3><p>使用 <kbd>Ctrl+B</kbd> 将音符显示的信息从毫秒切换至与 Dynamaker 相同的 Bar 显示。</p><h2 id="延迟调整" tabindex="-1"><a class="header-anchor" href="#延迟调整" aria-hidden="true">#</a> 延迟调整</h2><p>你可以在 DyNode 中分别调整音乐播放与谱面音符的延迟。</p><h3 id="谱面音符延迟调整" tabindex="-1"><a class="header-anchor" href="#谱面音符延迟调整" aria-hidden="true">#</a> 谱面音符延迟调整</h3><p>使用 <kbd>-/=</kbd> 来快速调整当前编辑谱面音符的延迟。</p><p>使用 <kbd>U</kbd> 来手动输入延迟进行精准的调整。</p><div class="hint-container info"><p class="hint-container-title">提示</p><p>该延迟调整的对象为谱面中<strong>已经存在</strong>的所有音符与Timing Points。</p></div><h3 id="全局音乐延迟调整" tabindex="-1"><a class="header-anchor" href="#全局音乐延迟调整" aria-hidden="true">#</a> 全局音乐延迟调整</h3><p>使用 <kbd>Ctrl + -/=</kbd> 来快速调整全局音乐播放的延迟。</p><div class="hint-container info"><p class="hint-container-title">提示</p><p>该延迟将与 MP3 固有的延迟 <code>FMOD_MP3_DELAY</code> 进行叠加，并且会作为配置保存在 DyNode 中。</p><p>该配置仅影响 DyNode 本身播放音乐时添加的延迟，<strong>不会对导出的谱面结果产生任何影响</strong>。</p><p>你可以在 <a href="timing#mp3-%E4%B8%8E-wav-%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%BB%B6%E8%BF%9F">Timing</a> 与 <a href="configuration">配置</a> 中看到更详细的说明。</p></div><h2 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏" aria-hidden="true">#</a> 工具栏</h2><p>使用 <kbd>Tab</kbd> 来切换顶部工具栏的显示。</p><h3 id="音乐-打击音" tabindex="-1"><a class="header-anchor" href="#音乐-打击音" aria-hidden="true">#</a> 音乐 / 打击音</h3><p>使用 Main Volume 与 Hitsound Volume 来调整音乐音量与打击音效音量。</p><p>使用 <kbd>Ctrl+H</kbd> 来开启 / 关闭打击音。</p><h3 id="背景亮度" tabindex="-1"><a class="header-anchor" href="#背景亮度" aria-hidden="true">#</a> 背景亮度</h3><p>使用 Background Dim 调整背景亮度。</p><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><h3 id="全屏模式" tabindex="-1"><a class="header-anchor" href="#全屏模式" aria-hidden="true">#</a> 全屏模式</h3><p>使用 <kbd>F7</kbd> 来切换无边框全屏。</p><h3 id="更改谱面标题" tabindex="-1"><a class="header-anchor" href="#更改谱面标题" aria-hidden="true">#</a> 更改谱面标题</h3><p>使用 <kbd>Ctrl+T</kbd> 来更改谱面标题。</p><div class="hint-container tip"><p class="hint-container-title">想要使用 Scribble 的格式标签？</p><p>在标题的任意位置处加入 <code>[_scribble]</code> 来使用 Scribble 的格式标签，此时标题将会以 Scribble 字符串格式进行解析。</p></div>',27);function C(B,E){const r=t("ExternalLinkIcon"),n=t("RouterLink");return p(),l("div",null,[b,k,u,a("p",null,[e("DyNode 对导入的背景视频格式有一定要求，我们建议在使用视频文件时对视频文件作一定的转码与压缩处理。你可以在 "),a("a",m,[e("这篇指南"),i(r)]),e(" 中看到详细的处理视频的方法。")]),a("p",null,[e("如果你使用 "),a("a",f,[e("FFmpeg"),i(r)]),e(" 对视频进行处理，则可以参考以下命令行：")]),g,a("div",x,[v,a("p",null,[e("如果你不了解什么是 "),i(n,{to:"/guide/timing.html#bar"},{default:c(()=>[e("Bar")]),_:1}),e(" 且你不打算使用 Dynamaker ，则你很可能无需使用到与 Bar 相关的任何功能。")])]),_])}const F=h(o,[["render",C],["__file","edit.html.vue"]]);export{F as default};