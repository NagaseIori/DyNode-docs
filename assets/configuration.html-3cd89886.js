import{_ as d,X as o,Y as n,Z as l,$ as e,a0 as r,a1 as c,a2 as a,E as h}from"./framework-43ac3942.js";const t={},s=a('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><p>本页面包含 DyNode 的配置说明。</p><p>所有 DyNode 的配置都在第一次启动并关闭后自动存储在文件 <code>config.json</code> 中。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>要使改动生效，使用 <kbd>F10</kbd> 来重载配置。</p></div><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h2><h3 id="fullscreen" tabindex="-1"><a class="header-anchor" href="#fullscreen" aria-hidden="true">#</a> fullscreen</h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>启动时是否为全屏模式。将会记录上一次 DyNode 时关闭的全屏状态。</p><h3 id="resolutionw-resolutionh" tabindex="-1"><a class="header-anchor" href="#resolutionw-resolutionh" aria-hidden="true">#</a> resolutionW / resolutionH</h3><ul><li>类型：<code>number</code></li><li>默认值：<code>1920</code> / <code>1080</code></li></ul><p>DyNode 的渲染分辨率。</p><div class="hint-container warning"><p class="hint-container-title">警告</p><p>DyNode 目前没有对其它分辨率作出很好的支持。</p><p>调整分辨率会使界面的显示出现难以预料的问题。</p></div><h3 id="fps" tabindex="-1"><a class="header-anchor" href="#fps" aria-hidden="true">#</a> FPS</h3><ul><li>类型：<code>number</code></li><li>默认值：屏幕刷新率</li></ul><p>DyNode 运行的帧率。</p><h3 id="autosave" tabindex="-1"><a class="header-anchor" href="#autosave" aria-hidden="true">#</a> autosave</h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否开启自动保存。</p><h3 id="language" tabindex="-1"><a class="header-anchor" href="#language" aria-hidden="true">#</a> language</h3><ul><li>类型：<code>string</code></li><li>默认值：<code>&#39;zh-cn&#39;</code></li></ul><p>DyNode 的显示语言。</p><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3><ul><li>类型：<code>number</code></li><li>默认值：<code>false</code></li></ul><p>DyNode 的显示主题。</p><h3 id="autoupdate" tabindex="-1"><a class="header-anchor" href="#autoupdate" aria-hidden="true">#</a> autoupdate</h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>是否开启自动检查更新。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>最新的版本将会带来新的功能、错误修复以及性能改进，且 DyNode 目前仍不够稳定。我们不建议关闭此项。</p></div><h3 id="simplify" tabindex="-1"><a class="header-anchor" href="#simplify" aria-hidden="true">#</a> simplify</h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code></li></ul><p>是否开启简化模式。</p><h3 id="graphics" tabindex="-1"><a class="header-anchor" href="#graphics" aria-hidden="true">#</a> graphics</h3><h4 id="graphics-aa" tabindex="-1"><a class="header-anchor" href="#graphics-aa" aria-hidden="true">#</a> graphics.AA</h4><ul><li>类型：<code>0 | 2 | 4 | 8</code></li><li>默认值：<code>4</code></li></ul><p>抗锯齿倍数（2x/4x/8x）。若为 <code>0</code> 则不开启抗锯齿。</p><h4 id="graphics-vsync" tabindex="-1"><a class="header-anchor" href="#graphics-vsync" aria-hidden="true">#</a> graphics.VSync</h4><ul><li>类型：<code>boolean</code></li><li>默认值：<code>true</code></li></ul><p>是否开启垂直同步。</p><h2 id="进阶配置" tabindex="-1"><a class="header-anchor" href="#进阶配置" aria-hidden="true">#</a> 进阶配置</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>除非必要，否则建议保持这些项目为默认值。</p></div><h3 id="fmod-mp3-delay" tabindex="-1"><a class="header-anchor" href="#fmod-mp3-delay" aria-hidden="true">#</a> FMOD_MP3_DELAY</h3><ul><li>类型：<code>number</code></li><li>默认值：<code>60.0</code></li></ul>',42),u=a('<h3 id="announcement-max-limit" tabindex="-1"><a class="header-anchor" href="#announcement-max-limit" aria-hidden="true">#</a> ANNOUNCEMENT_MAX_LIMIT</h3><ul><li>类型：<code>number</code></li><li>默认值：<code>7</code></li></ul><p>右下角提醒信息条数的最大限制值。</p><h2 id="信息" tabindex="-1"><a class="header-anchor" href="#信息" aria-hidden="true">#</a> 信息</h2><div class="hint-container danger"><p class="hint-container-title">警告</p><p>此项包含的配置皆为自动生成，在任何情况下你都不应当修改这些项目。</p></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><ul><li>类型：<code>String</code></li></ul><p>自动生成，代表配置文件对应的 DyNode 版本。</p>',8);function p(f,m){const i=h("RouterLink");return o(),n("div",null,[s,l("p",null,[e("FMOD 播放 .mp3 格式文件时的延迟时间（以毫秒计）。详见 "),r(i,{to:"/guide/timing.html#mp3-%E4%B8%8E-wav-%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%BB%B6%E8%BF%9F%E5%A4%84%E7%90%86"},{default:c(()=>[e("校时")]),_:1}),e(" 。")]),u])}const x=d(t,[["render",p],["__file","configuration.html.vue"]]);export{x as default};
