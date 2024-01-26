import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as t,c as r,a as d,b as e,d as l,w as c,e as a}from"./app-Z-5e0L8Y.js";const s={},h=a('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><p>This page contains the configuration instructions for DyNode.</p><p>All configurations of DyNode are automatically stored in the file <code>config.json</code> after the first launch and closure.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>To apply changes, use <kbd>F10</kbd> to reload the configuration.</p></div><h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration" aria-hidden="true">#</a> Basic Configuration</h2><h3 id="fullscreen" tabindex="-1"><a class="header-anchor" href="#fullscreen" aria-hidden="true">#</a> fullscreen</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to start in fullscreen mode. It will record the fullscreen status when DyNode was last closed.</p><h3 id="resolutionw-resolutionh" tabindex="-1"><a class="header-anchor" href="#resolutionw-resolutionh" aria-hidden="true">#</a> resolutionW / resolutionH</h3><ul><li>Type: <code>number</code></li><li>Default: <code>1920</code> / <code>1080</code></li></ul><p>The rendering resolution of DyNode.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>DyNode currently does not support other resolutions well.</p><p>Adjusting the resolution may cause unpredictable display issues.</p></div><h3 id="fps" tabindex="-1"><a class="header-anchor" href="#fps" aria-hidden="true">#</a> FPS</h3><ul><li>Type: <code>number</code></li><li>Default: Screen Refresh Rate</li></ul><p>The frame rate at which DyNode runs.</p><h3 id="autosave" tabindex="-1"><a class="header-anchor" href="#autosave" aria-hidden="true">#</a> autosave</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable autosave.</p><h3 id="language" tabindex="-1"><a class="header-anchor" href="#language" aria-hidden="true">#</a> language</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;zh-cn&#39;</code></li></ul><p>The display language of DyNode.</p><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3><ul><li>Type: <code>number</code></li><li>Default: <code>false</code></li></ul><p>The display theme of DyNode.</p><h3 id="autoupdate" tabindex="-1"><a class="header-anchor" href="#autoupdate" aria-hidden="true">#</a> autoupdate</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to enable automatic update checks.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The latest version will bring new features, bug fixes, and performance improvements, and DyNode is still not stable enough. We do not recommend disabling this option.</p></div><h3 id="simplify" tabindex="-1"><a class="header-anchor" href="#simplify" aria-hidden="true">#</a> simplify</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to enable simplified mode.</p><h3 id="graphics" tabindex="-1"><a class="header-anchor" href="#graphics" aria-hidden="true">#</a> graphics</h3><h4 id="graphics-aa" tabindex="-1"><a class="header-anchor" href="#graphics-aa" aria-hidden="true">#</a> graphics.AA</h4><ul><li>Type: <code>0 | 2 | 4 | 8</code></li><li>Default: <code>4</code></li></ul><p>Anti-aliasing multiplier (2x/4x/8x). If <code>0</code>, then anti-aliasing is disabled.</p><h4 id="graphics-vsync" tabindex="-1"><a class="header-anchor" href="#graphics-vsync" aria-hidden="true">#</a> graphics.VSync</h4><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to enable vertical synchronization.</p><h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a> Advanced Configuration</h2><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Unless necessary, it is recommended to keep these items at their default values.</p></div><h3 id="fmod-mp3-delay" tabindex="-1"><a class="header-anchor" href="#fmod-mp3-delay" aria-hidden="true">#</a> FMOD_MP3_DELAY</h3><ul><li>Type: <code>number</code></li><li>Default: <code>60.0</code></li></ul>',42),u=a('<h3 id="announcement-max-limit" tabindex="-1"><a class="header-anchor" href="#announcement-max-limit" aria-hidden="true">#</a> ANNOUNCEMENT_MAX_LIMIT</h3><ul><li>Type: <code>number</code></li><li>Default: <code>7</code></li></ul><p>The maximum limit for the number of reminder messages in the bottom-right corner.</p><h2 id="information" tabindex="-1"><a class="header-anchor" href="#information" aria-hidden="true">#</a> Information</h2><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>These configuration items are auto-generated, and under no circumstances should you modify them.</p></div><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><ul><li>Type: <code>String</code></li></ul><p>Automatically generated, representing the version of DyNode corresponding to the configuration file.</p>',8);function p(f,m){const i=o("RouterLink");return t(),r("div",null,[h,d("p",null,[e("The delay time (in milliseconds) for FMOD to play .mp3 format files. See "),l(i,{to:"/guide/timing.html#mp3-%E4%B8%8E-wav-%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%BB%B6%E8%BF%9F%E5%A4%84%E7%90%86"},{default:c(()=>[e("Timing")]),_:1}),e(" for details.")]),u])}const y=n(s,[["render",p],["__file","configuration.html.vue"]]);export{y as default};
