if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let c={};const t=e=>s(e,r),d={module:{uri:r},exports:c,require:t};a[r]=Promise.all(f.map((e=>d[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-jDKEDw2i.js",revision:"662b164d8fd416f717388a57f3e606da"},{url:"assets/404.html-X6nfp4X4.js",revision:"abb36b446847d298d5bc59de3ae4d4ea"},{url:"assets/about.html-K9YwLtmU.js",revision:"1f0b2f492c466f567eb3e51b5d7aceb6"},{url:"assets/about.html-YYopkwiq.js",revision:"3ff8d5edbb1bd9d0c69cda95ccf408c5"},{url:"assets/advanced-edit.html-CZgnRXU6.js",revision:"6749b7cd64b7e3c7690c3e5eecee9fec"},{url:"assets/advanced-edit.html-LchWI9CU.js",revision:"988a588b8033e17f7e15bc10a4875c71"},{url:"assets/app-6L7b7ElB.js",revision:"0d193233bcbb934019e19a8c754f7580"},{url:"assets/changelog.html-0aXbOU2K.js",revision:"7e1c072e016e440eecd11cc95cf9ca51"},{url:"assets/changelog.html-Y43ciqR-.js",revision:"d321d0abd05322b9f60ce429eee7e4c3"},{url:"assets/configuration.html-6KuJ3VSd.js",revision:"42b4cf5f6fd9913c511217efc8f27e4d"},{url:"assets/configuration.html-lrf3v747.js",revision:"a9f06c69eabe581cf5dcab1443abe141"},{url:"assets/double_click-mNR-0vDa.js",revision:"f9b7cd542f4e16fb42d993108a76669c"},{url:"assets/edit.html-__EhSh_x.js",revision:"a3b2aedb95fce5e0663fcef8099c0cb6"},{url:"assets/edit.html-leSMvHxo.js",revision:"99a658f7ffcc265f93abbd49fcae4cf9"},{url:"assets/export.html-7eCZH9XZ.js",revision:"84f7822e8dcc241c94701e86e5aeab9b"},{url:"assets/export.html-VOJdp8l4.js",revision:"bf489dc299886756a94ddac1639163fd"},{url:"assets/FAQ.html-LUIFINcm.js",revision:"cba868b27339771bbe6a0c1d0fdf2455"},{url:"assets/FAQ.html-rCBMA-VU.js",revision:"5f821e0589513c2e627c814d4b1bad82"},{url:"assets/file-formats.html-Gsom5WVz.js",revision:"78f6352bdf068765bc073e00a8d97309"},{url:"assets/file-formats.html-Hjn67qvC.js",revision:"f03af3829762509782bfed3ebd9d7279"},{url:"assets/getting-started.html-9B4zaYDu.js",revision:"ff427afbe484398103e39ae3478f3077"},{url:"assets/getting-started.html-FLBaKfK5.js",revision:"5892977e91a8e737b7733497390f7117"},{url:"assets/import.html-4NM78foM.js",revision:"9e80c1613c3d61ca036221d600feeaeb"},{url:"assets/import.html-OaqHDZjX.js",revision:"956a8ab422e3a717b623eb133d293db0"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-92tHBKgh.js",revision:"97fce36240527239a9d08c5782f3aa53"},{url:"assets/index.html-mXuiIU8x.js",revision:"aadb7d806e7552199b3c082d1dfd500f"},{url:"assets/index.html-rDaZ4POc.js",revision:"f0c012bfff416277edbbad8632419b6b"},{url:"assets/index.html-YnmWrTcy.js",revision:"72a0cd93348aae414c10d23239479ed9"},{url:"assets/KaTeX_AMS-Regular-0YIAJWTb.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_AMS-Regular-UIXRTGNW.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-zJvWDgGp.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_Caligraphic-Bold-6vyEfazt.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Bold-AE18XbF9.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-RIlxi71x.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Regular-4uo0fsfh.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-k0QPq0y-.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-MF_e1AYw.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-bAz-dThZ.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Bold-i-oP291Y.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-XZxETTVq.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Regular-8XXOHEfX.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Fraktur-Regular-gf8Lq3rE.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-k2IhepQP.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Main-Bold-CZtwCMuf.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-Bold-MGqDlVzd.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-sffOiHVw.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-BoldItalic-88TzJhul.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-8QydwDku.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-EqUi0SPe.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-DVgO3ulm.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-N1npxqDf.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-TCzgZvdR.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-6_eCWgYQ.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-dtjb4qKe.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-MqWbzbVV.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-d10o37uD.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-BoldItalic-ImPtsMme.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-mZ7zbAmZ.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-Italic-H5Tq_9FA.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-LedwBEzP.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-wNP_z16f.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-2yISjogg.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Bold-9bFEtBg9.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-hTHqZ76u.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Italic-Azdo-3Wm.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Italic-GGIydc0p.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-tx9FahgZ.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Regular-kun6lKiW.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-TaO4USHJ.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_SansSerif-Regular-wwQp5Se8.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_Script-Regular--ckFYqpa.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Script-Regular-98CFnxev.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-uSZBlqPg.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Size1-Regular-27J7nvyK.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-Jgg_JgPA.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-tfebZ-uE.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-8uHcfdJu.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size2-Regular-e4ClFoQr.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-KA9bXP1N.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size3-Regular-4KV7NJM_.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-k6uTKqBB.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-1hQb9ONy.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Size4-Regular-5eZcWcVX.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-RfuIJGSk.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Typewriter-Regular-9yG-_x36.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/KaTeX_Typewriter-Regular-juq-IZ9c.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-tMUvZjwd.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/project.html-LsteHKoM.js",revision:"4d8d33acf7ac0a5b839eb4adf034389b"},{url:"assets/project.html-xgN-cxV9.js",revision:"d65a18993e63de3d4375c4c07870be2e"},{url:"assets/SearchResult-f3TVpYk0.js",revision:"10d6f8f83c7d441ca7eb8b38ad5cc373"},{url:"assets/shortcuts.html-huHCvRST.js",revision:"db9897f5c33c9d90e525fc3014a3ee04"},{url:"assets/shortcuts.html-ucAlXIUz.js",revision:"c9691b05393d003cfb90c2581c4ce4e5"},{url:"assets/style-VqUPcMSh.css",revision:"16a343e28e7ba73026472a8780efb6b0"},{url:"assets/timing.html-eMWM7C0f.js",revision:"118a0345f9bd887311dfe6b37c19e321"},{url:"assets/timing.html-OUSFd5-M.js",revision:"653d651607c45a3a1dead3bb84293cf1"},{url:"dragon-scales.svg",revision:"3dfaca8eb1393d90afbe20e2b32f5dfb"},{url:"safari-pinned-tab.svg",revision:"be4cbd53ba1d30c42065f5fcbb26ea16"},{url:"slanted-gradient.svg",revision:"b5ed01a93b6d09437f5e222e4beb0402"},{url:"subtle-prism.svg",revision:"544715b8c062bd05b74bb8d9bc862e7e"},{url:"sun-tornado.svg",revision:"2a93dcc764b63f4b48f62177210f58f4"},{url:"index.html",revision:"44791f6a5d02c10ee5e071f912629407"},{url:"404.html",revision:"e21718943011282e698e7273cc3f6558"},{url:"android-chrome-192x192.png",revision:"997d2e6952747000cc15ef5b6f0a4f43"},{url:"android-chrome-512x512.png",revision:"a6d2a6cb634a916e7facd673f36419e8"},{url:"apple-touch-icon.png",revision:"2e48dc004e7aa5c31c0d7da80350a355"},{url:"assets/double_click-agLVyX_W.gif",revision:"3efb7a8b94f33324845e7e26cfd9a226"},{url:"assets/project_create-mdEiE8tA.png",revision:"c344582595636ec812fbf4748690e007"},{url:"favicon-16x16.png",revision:"3b0dad5780881c5d646e5ca0dc3f5454"},{url:"favicon-32x32.png",revision:"1ceccbff58f7faaacac7725549389b47"},{url:"Icon.png",revision:"4cd948a5dde0a2b846488c2c99f4172d"},{url:"mstile-150x150.png",revision:"3af297743fbb2774a9a355e07d207692"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
