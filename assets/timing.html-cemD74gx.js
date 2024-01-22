import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as m,o as r,c,a as s,b as a,d as n,w as l,e as i}from"./app-e8qKynHo.js";const p={},h=s("h1",{id:"timing",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#timing","aria-hidden":"true"},"#"),a(" Timing")],-1),d=s("p",null,"本页面介绍有关 DyNode 中 Timing（校时） 与 Timing Points 等概念。",-1),g=s("h2",{id:"timing-point",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#timing-point","aria-hidden":"true"},"#"),a(" Timing Point")],-1),u=s("p",null,"Timing Point 包括了一首曲目的 offset, BPM 与节拍等信息。",-1),y=s("li",null,"offset: Timing Point 第一拍的偏置值，以毫秒为单位。通俗来讲，若某一 Timing Point 的 offset 为 100，则该 Timing 的第一拍将出现在歌曲开始播放后的 100ms 上。",-1),x={href:"https://zh.wikipedia.org/zh-hans/%E9%80%9F%E5%BA%A6_(%E9%9F%B3%E6%A8%82)#%E9%87%8F%E5%BA%A6%E9%9F%B3%E6%A8%82%E9%80%9F%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.wikipedia.org/zh-hans/%E8%8A%82%E6%8B%8D",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"x",-1),k=s("code",null,"x/4",-1),_=i(`<p>一首曲目中可能包含多个不同的 BPM 与节拍数，使用 Timing Points 即可分割曲目中不同时间段的不同 BPM ，以更方便地制作变节拍或变 BPM 的曲目。</p><p>编辑器中的纵向网格（节拍线）将以设定的 Timing 为基准。</p><div class="hint-container tip"><p class="hint-container-title">“什么是 Timing ？我还是不懂！”</p><p>以通俗的方式说，如果从歌曲的 <strong>100ms</strong> 开始，歌曲按照 <strong>180 BPM</strong>，<strong>四拍子</strong>的速度去运行，那么与之对应的 Timing 就是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>offset: 100
BPM: 180
meter: 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果从歌曲的 <strong>3000ms</strong> 开始，歌曲按照 <strong>2023 BPM</strong>，<strong>三拍子</strong>的速度去运行，那么与之对应的 Timing 就是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>offset: 3000
BPM: 2023
meter: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把这两个 Timing 作为 Timing Point 加入到同一首曲目中，这样就能把一首曲目中的变速段落用简单的方式分割开来了！</p></div><h2 id="编辑-timing" tabindex="-1"><a class="header-anchor" href="#编辑-timing" aria-hidden="true">#</a> 编辑 Timing</h2><h3 id="添加-timing-point" tabindex="-1"><a class="header-anchor" href="#添加-timing-point" aria-hidden="true">#</a> 添加 Timing Point</h3><p>DyNode 中添加 Timing Point 的方式共有三种。</p><ul><li>按 <kbd>Y</kbd> 来手动添加 Timing Point ，并依次输入 offset，BPM，节拍 三项信息便可直接添加一个 Timing Point。</li><li>按 <kbd>T</kbd> 来复制时间上最末尾的 Timing Point 到你选定的 Note 上。这可能会方便谱面重拍位置的调整以及从 Dynamaker 中导入谱面的校时。</li><li>按 <kbd>F2</kbd> 来从 .osu 中导入谱面所有的 Timing Point。这会覆盖掉之前的设置。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在使用 <kbd>Y</kbd> 来添加 Timing Point 时，你可以先选中<strong>单个</strong> Note ，再使用 <kbd>Y</kbd> 键，则可以直接使用选中的 Note 的时间作为 offset 。</p></div><h3 id="修改-timing-point" tabindex="-1"><a class="header-anchor" href="#修改-timing-point" aria-hidden="true">#</a> 修改 Timing Point</h3><p>在想要修改 Timing Point 的时间点上放置一个 Note 并选中，按下 <kbd>Y</kbd> 即可修改该 Timing Point 的信息。按照提示输入对应格式的字符串以修改 Timing Point 的 offset，BPM 与节拍。</p><h3 id="timing-修正" tabindex="-1"><a class="header-anchor" href="#timing-修正" aria-hidden="true">#</a> Timing 修正</h3><p>修改 Timing Point 的 offset 或 BPM 后，已经放置在该 Timing 区域下的音符很可能将无法对齐到节拍线上，且音符与音乐节奏不符的问题仍旧没有得到解决。如果遇到了此问题，你可以使用 Timing 修正功能尝试解决问题。</p><p>该功能将在你修改 Timing Point 的 offset 或 BPM 后自动询问你是否执行 Timing 修正（在有音符可以修正的情况下）。</p><p>该功能可以修正的错误范围存在极限。如果修正的结果有误，你随时可以撤销修改结果。</p><div class="hint-container tip"><p class="hint-container-title">Timing 修正的额外说明</p><p>此功能将计算 Timing 区域内（区域即为该 Timing Point 的 offset 至下一 Timing Point 的 offset）音符相对于原本 Timing 的<a href="#%E6%97%B6%E9%97%B4%E4%B8%8E%E5%B0%8F%E8%8A%82%E6%95%B0">小节数</a>，在修改 Timing 的 BPM 后根据原本的小节数计算得到新的绝对时间。</p><p>如果 offset 也有更改，音符随后将会增加 offset 的变化量。</p><p>在修正的过程中可能会出现音符修改后进入了其它未修改的 Timing 区域并弹出警告信息的情况，这意味着修正的结果可能并不正确，并需要你进行仔细检查。这个警告通常在以下两种情况下出现：</p><ul><li>BPM 减小幅度过大，导致音符进入了更后面的 Timing 区域。</li><li>offset 减小幅度过大，导致当前 Timing 与上一 Timing 的区域互换，或者出现了其它更复杂的情况。</li></ul></div><h3 id="删除-timing-point" tabindex="-1"><a class="header-anchor" href="#删除-timing-point" aria-hidden="true">#</a> 删除 Timing Point</h3><p>在你想要删除 Timing Point 的时间点上放置一个 Note 并选中，按下 <kbd>Ctrl+Delete</kbd> 即可删除在该时间点上的一个 Timing Point 。</p><h3 id="手动修改" tabindex="-1"><a class="header-anchor" href="#手动修改" aria-hidden="true">#</a> 手动修改</h3><p>你可以直接编辑项目的 .dyn 文件。.dyn 文件以 JSON 形式直接存储 Timing Points 的信息，因此你可以直接对 .dyn 中包含的 Timing Points 信息进行编辑。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;beatLength&quot;</span><span class="token operator">:</span> <span class="token number">324.324324324324</span><span class="token punctuation">,</span>
    <span class="token property">&quot;meter&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">419</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是 Timing Point json 格式的一个样例，其中 <code>beatLength</code> 代表一拍的长度（以毫秒计），<code>meter</code> 代表节拍，<code>time</code> 代表 offset。</p>`,21),w=s("p",null,[a("从 "),s("code",null,"beatLength"),a(" 到 "),s("code",null,"BPM"),a(" 的换算以上方为例有："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"324.324324324324"),s("mo",null,"∗"),s("mn",null,"1000"),s("mo",null,"∗"),s("mn",null,"60"),s("mo",null,"="),s("mn",null,"185")]),s("annotation",{encoding:"application/x-tex"},"1 / 324.324324324324 * 1000 * 60 = 185")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1/324.324324324324"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1000"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"60"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"185")])])]),a("。")],-1),v=i('<p>编辑完成后，你需要手动重新打开该项目的文件。详见 <a href="/guide/file-formats">文件格式</a> 页面。</p><h3 id="撤销-还原" tabindex="-1"><a class="header-anchor" href="#撤销-还原" aria-hidden="true">#</a> 撤销/还原</h3><p>使用 <kbd>Ctrl + Z/Y</kbd> 来进行撤销与还原你对 Timing 做出的改动。</p><h2 id="导入-timing" tabindex="-1"><a class="header-anchor" href="#导入-timing" aria-hidden="true">#</a> 导入 Timing</h2><h3 id="从-osu-file-中导入-timing" tabindex="-1"><a class="header-anchor" href="#从-osu-file-中导入-timing" aria-hidden="true">#</a> 从 Osu File 中导入 Timing</h3>',5),M={href:"https://osu.ppy.sh/wiki/zh/Client/File_formats/Osu_%28file_format%29",target:"_blank",rel:"noopener noreferrer"},T=s("h3",{id:"从-dynamaker-中导入-timing",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#从-dynamaker-中导入-timing","aria-hidden":"true"},"#"),a(" 从 Dynamaker 中导入 Timing")],-1),D=s("p",null,"你可以选择从 Dynamaker 或 Dynamaker-modified 中导入完整的 BPM 信息，而无需再作额外的校正工作。",-1),P=s("h2",{id:"时间与小节数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#时间与小节数","aria-hidden":"true"},"#"),a(" 时间与小节数")],-1),B=s("p",null,[a("类似 Dynamaker 的 Bar，DyNode 也可以通过各种方式查看音符的小节数。在 DyNode 中，小节数代表时间所在的准确小节，这与所在 Timing 的 BPM 与 节拍 (Meter) 都存在关系。举例而言，若当前 Timing 的节拍为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"3"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"3/4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"3/4")])])]),a(" 拍，则节拍数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"13"),s("mo",null,"+"),s("mfrac",null,[s("mn",null,"1"),s("mn",null,"3")]),s("mo",null,"="),s("mn",null,"13.333"),s("mo",null,"…")]),s("annotation",{encoding:"application/x-tex"},"13+\\frac{1}{3}=13.333\\dots")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"13"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1901em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8451em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"3")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"13.333"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"…")])])]),a(" 所在的时间为第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"13")]),s("annotation",{encoding:"application/x-tex"},"13")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"13")])])]),a(" 小节之后的一个四分音符之后，因为这个小节被三个四分音符等分。")],-1),E=s("p",null,[a("在正面节拍线的右侧，形如 "),s("code",null,"X --- Y/4"),a(" 的数字描述了当前时间所在的小节数为第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"X")]),s("annotation",{encoding:"application/x-tex"},"X")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])]),a(" 小节之后的第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Y")]),s("annotation",{encoding:"application/x-tex"},"Y")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.22222em"}},"Y")])])]),a(" 个四分音符处。")],-1),A=s("p",null,[a("在音符信息的右上角，形如 "),s("code",null,"X + Y/Z (D)"),a(" 的数字描述了当前音符在上一次网格吸附后的所在小节数为第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"X"),s("mo",null,"+"),s("mfrac",null,[s("mi",null,"Y"),s("mi",null,"Z")])]),s("annotation",{encoding:"application/x-tex"},"X + \\frac{Y}{Z}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2173em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8723em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07153em"}},"Z")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.22222em"}},"Y")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),a(" 小节，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"D")]),s("annotation",{encoding:"application/x-tex"},"D")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D")])])]),a(" 描述了这个音符为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"D")]),s("annotation",{encoding:"application/x-tex"},"D")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D")])])]),a(" 分音符。这个信息只在特定的情况下能够准确显示。")],-1),L=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"关于 Z 、D 参数与小节数"),s("p",null,[a("在一些情况下 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Z"),s("mo",{mathvariant:"normal"},"≠"),s("mi",null,"D")]),s("annotation",{encoding:"application/x-tex"},"Z\\neq D")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},[s("span",{class:"mrel"},[s("span",{class:"mord vbox"},[s("span",{class:"thinbox"},[s("span",{class:"rlap"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"inner"},[s("span",{class:"mord"},[s("span",{class:"mrel"},"")])]),s("span",{class:"fix"})])])])]),s("span",{class:"mrel"},"=")]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D")])])]),a(" 的原因在于一个小节并不一定为四个四分音符的长度（四拍子），它的长度也可能是三个四分音符（三拍子）。若当前所在的 Timing 为三拍子（三个四分音符为一拍），此时假若你想放置 16 分音符（节拍细分为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"1/4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1/4")])])]),a("，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"D"),s("mo",null,"="),s("mn",null,"16")]),s("annotation",{encoding:"application/x-tex"},"D=16")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"16")])])]),a("），则 12 个 16 分音符的长度与一个小节的长度相等（"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Z"),s("mo",null,"="),s("mn",null,"12")]),s("annotation",{encoding:"application/x-tex"},"Z=12")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"12")])])]),a("）。"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"Z")]),s("annotation",{encoding:"application/x-tex"},"Z")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"Z")])])]),a(" 这一参数表明了一个小节中包含了多少个 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"D")]),s("annotation",{encoding:"application/x-tex"},"D")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"D")])])]),a(" 分音符。")])],-1),N=s("p",null,"在 DyNode 中，一个 Timing Point 的起点一定会是一个新的小节，即使上一个小节没有完全结束。",-1),z=s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"X"),s("mo",null,"+"),s("mfrac",null,[s("mi",null,"Y"),s("mi",null,"Z")])]),s("annotation",{encoding:"application/x-tex"},"X + \\frac{Y}{Z}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2173em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8723em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07153em"}},"Z")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.22222em"}},"Y")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])],-1),F=i('<h2 id="dynamaker-与-bar" tabindex="-1"><a class="header-anchor" href="#dynamaker-与-bar" aria-hidden="true">#</a> Dynamaker 与 Bar</h2><p>Dynamaker 中所使用的 Bar 概念便于在 Dynamaker 中以节拍数方式进行直接编辑。</p><p>类似 osu! ，DyNode 的大部分逻辑皆基于绝对时间进行处理，例如谱面的播放、谱面的读取与导出。以此种方式，DyNode 能够提供灵活的编辑方式与编辑工具。</p><p>在谱面导入或导出时，DyNode 对时间到 Bar 的转换皆进行了完整的处理，因此无需担心谱面的兼容性问题。</p><p>DyNode 中仍旧会显示小节与小节数，但他们与 Dynamaker 所使用的 Bar 概念可能有所不同。</p><h2 id="mp3-与-wav-格式的延迟" tabindex="-1"><a class="header-anchor" href="#mp3-与-wav-格式的延迟" aria-hidden="true">#</a> MP3 与 WAV 格式的延迟</h2><div class="hint-container warning"><p class="hint-container-title">关于旧版本的警告</p><p>针对 .mp3 的延迟处理在 0.1.5 版本之后产生了较大变动。该条目底部详细阐述了你应当如何在 0.1.5 版本之后打开旧版本项目时处理有关 .mp3 文件的延迟。</p></div><p>DyNode 已经力所能及地将音乐对谱面延迟降到了最低，但 MP3 仍旧会与 WAV 格式存在一定的延迟。</p><p>MP3 格式众所周知地不适合用于对音乐延迟、衔接要求较高的游戏开发场合中。其中的一个原因可能在于对音频文件进行编码的编码器会视情况而定对原音频段落添加一定的空白。</p>',9),Z=s("p",null,"Why is a decoded MP3 longer than the original .wav file?",-1),Y=s("p",null,"Because LAME (and all other MDCT based encoders) add padding to the beginning and end of each song. For an explination of why, see the questions below.",-1),q=s("p",null,"LAME embeds the amount of padding in the ancillary data of the first frame of the MP3 file. (LAME INFO tag). The LAME decoder will use this information to remove the leading padding of an MP3 file.",-1),X=s("p",null,"Modifications to the decoder so that it will also remove the trailing padding have not yet been made.",-1),O={href:"https://lame.sourceforge.io/tech-FAQ.txt",target:"_blank",rel:"noopener noreferrer"},C=s("blockquote",null,[s("p",null,"FMOD doesn’t chop the start off .mp3 decodes, a format which has inherent latency in it."),s("p",null,"----brett, FMOD CEO")],-1),j={href:"https://qa.fmod.com/t/fmod-add-air-on-tracks/12073",target:"_blank",rel:"noopener noreferrer"},V=s("p",null,"针对谱面的延迟问题，Dynamite 音乐至谱面的延迟与 osu! 类似，而 DyNode 对 .mp3 类型格式的播放从音乐至谱面的延迟普遍在 30~60ms 左右（因此，如果你从 .osu 导入谱面，不对导入物件添加延迟会感受到明显的音画不同步）。DyNode 对此没有特别好的解决方式，于是 DyNode 在之前的版本默认提供了为 .osu 添加 64ms 延迟的选项（0.1.4.1及以前），导致 Dynamite 中的谱面也会普遍出现 64ms 延迟的问题。",-1),I=s("p",null,"关于现在你应当如何解决此问题，DyNode 提供两种解决方案：",-1),W=s("code",null,"config.json",-1),Q=s("code",null,"FMOD_MP3_DELAY",-1),R=s("li",null,"使用 .wav 格式的文件来减少谱面编辑的延迟。",-1),S=s("p",null,"以及，DyNode 对旧的已经出现错误的延迟谱面也提供两种解决方案：",-1),J=s("ul",null,[s("li",null,"打开旧版本（0.1.4.1及以前）的谱面会出现警告。如果你已经添加了 64ms 的延迟，你可以根据指示将这 64ms 的延迟撤销。"),s("li",null,[a("使用 "),s("a",{href:"/guide/edit#%E5%85%A8%E5%B1%80%E6%97%B6%E9%97%B4%E5%81%8F%E7%A7%BB"},"全局时间偏移"),a(" 手动调整。")])],-1);function G(H,K){const t=m("ExternalLinkIcon"),e=m("RouterLink");return r(),c("div",null,[h,d,g,u,s("ul",null,[y,s("li",null,[s("a",x,[a("BPM"),n(t)]),a(": Beats Per Minute, 即每分钟节拍数，用于度量音乐的快慢。")]),s("li",null,[s("a",f,[a("节拍"),n(t)]),a(" (meter): 指音乐拍子的出现模式。常见如 4/4 拍（四分音符为一拍，一小节四拍），3/4 拍（四分音符为一拍，一小节三拍，也即三拍子）等。此处的节拍为一整数 "),b,a("，表示 "),k,a(" 拍。")])]),_,w,v,s("p",null,[a("DyNode 支持从 "),s("a",M,[a("osu file format v14"),n(t)]),a(" (.osu) 格式的文件中直接导入 Timing Points 信息。这意味着你可以使用 osu! 或 osu!lazer 提供的官方谱面编辑器进行校时。详见 "),n(e,{to:"/guide/import.html#%E5%AF%BC%E5%85%A5-osu-%E8%B0%B1%E9%9D%A2"},{default:l(()=>[a("谱面导入")]),_:1}),a(" 。")]),T,D,P,B,E,A,L,N,s("p",null,[a("你可以使用 "),n(e,{to:"/guide/edit.html#%E5%88%87%E6%8D%A2%E5%B0%8F%E8%8A%82%E6%95%B0-%E6%97%B6%E9%97%B4%E6%98%BE%E7%A4%BA"},{default:l(()=>[a("切换小节数/时间显示")]),_:1}),a(" 将音符信息左上角的时间更改为实数形式的准确小节数 "),z,a("。")]),F,s("blockquote",null,[Z,Y,q,X,s("p",null,[s("a",O,[a("https://lame.sourceforge.io/tech-FAQ.txt"),n(t)])])]),C,s("p",null,[a("更多针对此问题的 FMOD 社区讨论详见："),s("a",j,[a("https://qa.fmod.com/t/fmod-add-air-on-tracks/12073"),n(t)])]),V,I,s("ul",null,[s("li",null,[a("使用 .mp3 格式的文件的时候，DyNode 会默认为 FMOD 播放音乐提供一个 60ms 的延迟。针对不同的设备这可能存在差异，故你也可以在 config.json 中编辑这个延迟（或者完全关闭它）。你只需要更改 "),W,a(" 中 "),Q,a(" 一项的值即可（以毫秒为单位），详见 "),n(e,{to:"/guide/configuration.html#fmod-mp3-delay"},{default:l(()=>[a("配置")]),_:1}),a(" 。")]),R]),S,J])}const ss=o(p,[["render",G],["__file","timing.html.vue"]]);export{ss as default};
