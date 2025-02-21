import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as e,a,d as r,e as i,f as n,r as p,o as d}from"./app-DZN9Khw8.js";const m={},h={class:"hint-container tip"};function f(c,t){const o=p("RouteLink");return d(),s("div",null,[t[13]||(t[13]=e("h1",{id:"chart-export",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chart-export"},[e("span",null,"Chart Export")])],-1)),t[14]||(t[14]=e("p",null,"This page explains how to export charts.",-1)),e("div",h,[t[3]||(t[3]=e("p",{class:"hint-container-title"},"Tips",-1)),t[4]||(t[4]=e("p",null,"This feature is generally used when you need to publish or import a chart for real‐device use after completing or testing it, or when switching to another chart editor.",-1)),e("p",null,[t[1]||(t[1]=r("If you only want to save your progress, please see ")),i(o,{to:"/en/guide/project.html#saving-a-project"},{default:n(()=>t[0]||(t[0]=[r("Saving Projects")])),_:1}),t[2]||(t[2]=r("."))])]),t[15]||(t[15]=e("h2",{id:"exporting-xml-charts-for-real-devices",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exporting-xml-charts-for-real-devices"},[e("span",null,"Exporting .xml Charts for Real Devices")])],-1)),t[16]||(t[16]=e("p",null,[r("Press "),e("kbd",null,"F5"),r(" to export a chart in .xml format.")],-1)),t[17]||(t[17]=e("p",null,[r("The exported chart can be played on the Dynamite platform; see "),e("a",{href:"#import-to-dynamite-platform"},"Import to Dynamite Platform"),r(" for details.")],-1)),e("p",null,[t[6]||(t[6]=r("For details on the contents of the .xml chart, see ")),i(o,{to:"/en/guide/file-formats.html#xml"},{default:n(()=>t[5]||(t[5]=[r("File Formats")])),_:1}),t[7]||(t[7]=r("."))]),t[18]||(t[18]=a('<div class="hint-container important"><p class="hint-container-title">Important</p><p><strong>Charts exported using this function are not recommended for re-importing into DyNode, Dynamaker, or other chart editors. If you wish to edit an exported chart in Dynamaker, please see <a href="#export-xml-chart-for-dynamaker-modified">Export XML Chart for Dynamaker-modified</a>.</strong></p><p>Make sure that charts exported using this function will not be re-imported for editing, for example, for review or modification.</p></div><h3 id="error-correction" tabindex="-1"><a class="header-anchor" href="#error-correction"><span>Error Correction</span></a></h3><p>You can choose to use the error correction function when exporting.</p><p>By default, this function aligns consecutive notes with a time difference within 2ms to the earliest note in that group, correcting timing errors within 2ms.</p>',4)),e("p",null,[t[9]||(t[9]=r("You can adjust this value in the ")),t[10]||(t[10]=e("code",null,"offsetCorrection",-1)),t[11]||(t[11]=r(" option in the configuration (see ")),i(o,{to:"/en/guide/configuration.html#offsetCorrection"},{default:n(()=>t[8]||(t[8]=[r("Configuration")])),_:1}),t[12]||(t[12]=r(")."))]),t[19]||(t[19]=a('<p>This function does not affect the chart in editing; only the exported chart is corrected.</p><h3 id="import-to-dynamite-platform" tabindex="-1"><a class="header-anchor" href="#import-to-dynamite-platform"><span>Import to Dynamite Platform</span></a></h3><p>An .xml chart can be directly imported into Dynamite for play. Read <a href="https://www.bilibili.com/read/cv17021429" target="_blank" rel="noopener noreferrer">this article</a> for details on how to import a chart.</p><h2 id="export-xml-chart-for-dynamaker-modified" tabindex="-1"><a class="header-anchor" href="#export-xml-chart-for-dynamaker-modified"><span>Export XML Chart for Dynamaker-modified</span></a></h2><p>Press <kbd>F6</kbd> to export a chart in the XML format tailored for Dynamaker-modified.</p><p>Charts exported in this format will include complete Timing information that can be read by Dynamaker-modified.</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>This chart format is <strong>only for</strong> reading by the Dynamaker-modified chart editor.</p><p>Charts exported in this format cannot be used for real‐device debugging or publishing (e.g., on Dynamite) and may suffer from a certain loss of precision.</p></div>',7))])}const x=l(m,[["render",f],["__file","export.html.vue"]]),y=JSON.parse('{"path":"/en/guide/export.html","title":"Chart Export","lang":"en-US","frontmatter":{"description":"Chart Export This page explains how to export charts. Tips This feature is generally used when you need to publish or import a chart for real‐device use after completing or test...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://dyn.iorinn.moe/guide/export.html"}],["meta",{"property":"og:url","content":"https://dyn.iorinn.moe/en/guide/export.html"}],["meta",{"property":"og:site_name","content":"DyNode"}],["meta",{"property":"og:title","content":"Chart Export"}],["meta",{"property":"og:description","content":"Chart Export This page explains how to export charts. Tips This feature is generally used when you need to publish or import a chart for real‐device use after completing or test..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-08T11:30:39.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-08T11:30:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Chart Export\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-08T11:30:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Exporting .xml Charts for Real Devices","slug":"exporting-xml-charts-for-real-devices","link":"#exporting-xml-charts-for-real-devices","children":[{"level":3,"title":"Error Correction","slug":"error-correction","link":"#error-correction","children":[]},{"level":3,"title":"Import to Dynamite Platform","slug":"import-to-dynamite-platform","link":"#import-to-dynamite-platform","children":[]}]},{"level":2,"title":"Export XML Chart for Dynamaker-modified","slug":"export-xml-chart-for-dynamaker-modified","link":"#export-xml-chart-for-dynamaker-modified","children":[]}],"git":{"createdTime":1706253334000,"updatedTime":1739014239000,"contributors":[{"name":"Rin","email":"31349569+NagaseIori@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"en/guide/export.md","localizedDate":"January 26, 2024","autoDesc":true}');export{x as comp,y as data};
