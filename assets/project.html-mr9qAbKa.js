import{_ as o}from"./project_create-aWgbtcfp.js";import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c,a as t,b as e,d as a,w as i,e as l}from"./app-e8qKynHo.js";const h={},p=l('<h1 id="项目" tabindex="-1"><a class="header-anchor" href="#项目" aria-hidden="true">#</a> 项目</h1><p>本页面讲解 DyNode 有关项目的概念。</p><h2 id="项目所包含的" tabindex="-1"><a class="header-anchor" href="#项目所包含的" aria-hidden="true">#</a> 项目所包含的</h2><p>DyNode 的项目包含制作谱面所需的全部信息。如难度、标题、音乐、背景文件、校时与具体的谱面内容等。</p><p>项目将被以 JSON 格式的纯文本方式存储在后缀为 .dyn 的文件当中。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这个文件不包含音乐与背景的文件内容，而只包含它们在计算机中存储的<strong>相对路径</strong>。</p><p>与谱面关联的音乐、背景与视频文件将在项目被保存的时候复制到项目所处的同级目录下。当这些文件被删除或移动时，相关联的音乐、背景与视频可能无法正常加载，但这不会影响你的谱面内容。你只需要手动重新加载音乐与背景文件并保存即可。</p></div><h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h2><p>在开始界面点击“新建项目”或在谱面编辑界面使用 <kbd>Ctrl+N</kbd> 来新建项目。</p><p><img src="'+o+'" alt=""></p><p>依次填写项目的所有信息即可，其中星号代表此为必填项目。</p>',10),_=t("strong",null,"音乐文件*",-1),u=t("strong",null,"必填项目，选择制谱的音乐文件。",-1),m=t("ul",null,[t("li",null,"如果你选择从 .dy 文件导入谱面，则无需填写该项。")],-1),f=t("li",null,"背景文件：选择背景文件。支持主流的图片格式（.jpg/.jpeg/.png），若不选默认为白色纯色背景。",-1),b=t("li",null,[e("下落类型：选择左侧与右侧的下落类型。 "),t("ul",null,[t("li",null,"MULTI: 可以放置 Note, Hold 与 Chain 三种类型的音符"),t("li",null,"PAD: 可以放置 Note 与 Hold 两种类型的音符。"),t("li",null,"MIXER: 可以放置 Chain 类型的音符，带有滑板。")])],-1),g=t("li",null,"谱面难度：选择谱面的难度。",-1),k=t("li",null,"谱面标题：输入谱面的标题。",-1),x=t("li",null,"导入谱面文件：如果你想导入 .xml/.dy 谱面文件，则你可以直接在此处选择该谱面文件。如果你选择导入谱面文件，则你无需填写 下落类型/谱面难度/谱面标题 等信息。",-1),E=t("p",null,"填写完所有信息后，即可进入编辑界面。",-1),B={class:"hint-container tip"},N=t("p",{class:"hint-container-title"},"提示",-1),v=l('<h2 id="打开项目" tabindex="-1"><a class="header-anchor" href="#打开项目" aria-hidden="true">#</a> 打开项目</h2><p>在开始界面选择“打开已有的项目”或在谱面编辑界面中使用 <kbd>F1</kbd> 来打开已有的项目。</p><h2 id="保存项目" tabindex="-1"><a class="header-anchor" href="#保存项目" aria-hidden="true">#</a> 保存项目</h2><p>使用 <kbd>Ctrl+S</kbd> 来保存项目。</p><p>使用 <kbd>F8</kbd> 来启用自动保存功能。自动保存将会以 5 分钟为间隔自动保存谱面（启用自动保存功能至少需要手动保存一次），默认关闭。</p>',5);function C(w,y){const n=s("RouterLink");return r(),c("div",null,[p,t("ul",null,[t("li",null,[_,e(" : "),u,e(" 支持大部分主流文件格式（.mp3/.wav/.ogg/.flac等），关于 .mp3 与 .wav 的延迟问题详见 "),a(n,{to:"/guide/timing.html#mp3-%E4%B8%8E-wav-%E6%A0%BC%E5%BC%8F%E7%9A%84%E5%BB%B6%E8%BF%9F%E5%A4%84%E7%90%86"},{default:i(()=>[e("校时")]),_:1}),e(" 。 "),m]),f,b,g,k,x]),E,t("div",B,[N,t("p",null,[e("在开始编辑谱面之前，你应当正确配置 "),a(n,{to:"/guide/timing.html"},{default:i(()=>[e("校时")]),_:1}),e(" 。")])]),v])}const V=d(h,[["render",C],["__file","project.html.vue"]]);export{V as default};
