/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","822bc870c3f61bd9d903b63c6caff2cb"],["/archives/2019/10/index.html","6f88d9e96a9f9a1ce86b362dda523f08"],["/archives/2019/11/index.html","e397eba53d7f63eeaf787eff65cd82d4"],["/archives/2019/12/index.html","2bb15b23b77e2f542ef24d7ad6fa83d7"],["/archives/2019/index.html","858b5b3fb3497e11b44a3b92e6b7a77d"],["/archives/2020/01/index.html","8b763f1fbc1f307349742a4cefa24814"],["/archives/2020/02/index.html","59802f1b11e5b8d660125f5f1c09e08f"],["/archives/2020/index.html","138d4f6fe80c0025aa17f2a0186f63d6"],["/archives/2020/page/2/index.html","0ae3ebf8baf3ee0b34d2f9f0603ea4bb"],["/archives/index.html","0fb6ba35a0d78cc78f7406aa32f5895d"],["/archives/page/2/index.html","dfa95fa5b58b9501db84ee7d1a4eda07"],["/archives/page/3/index.html","853e58c31de5a975f93187605ea3bf07"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","66c96116c022e92af8f49c345c4836ce"],["/categories/C语言/index.html","61e1ec1abdafe50d794dd83df5975bdc"],["/categories/C语言/数据结构/index.html","56d5a03fe179f08792b982e47766da35"],["/categories/Hexo/index.html","d3a9d7e57a13c3465a9ed202fe0b1f31"],["/categories/Mac/Qt/index.html","3872f1e391e5a064bc28ec946a6e1a99"],["/categories/Mac/index.html","7d24847e6c974fd9d32cb13f5de10f1c"],["/categories/index.html","980a8f5bebc97426d0ee00e19f446aed"],["/categories/数据结构/C/Java/Python/index.html","4ed79ac81caaec704157a2cc9515eb18"],["/categories/数据结构/C/Java/Python/排序/index.html","86203652dc5c9b5318f5001ebb621305"],["/categories/数据结构/C/Java/index.html","529b555bfbcd1b264e1801613372f41d"],["/categories/数据结构/C/index.html","d10641e062901fa17cd263fc72c4ce26"],["/categories/数据结构/C/page/2/index.html","57f7c5bd44da8f5e3283bb4e108853d6"],["/categories/数据结构/C/双向循环链表/index.html","327b68c563bb0550716211e536721c97"],["/categories/数据结构/C/双向链表/index.html","53c7e951f4099e2b0319125a5aefb572"],["/categories/数据结构/C/顺序存储结构/index.html","a31b16281e1226b06f3903ed18e565e1"],["/categories/数据结构/index.html","09b82b11f865cca06f642f1ff4840672"],["/categories/数据结构/page/2/index.html","9120a878f1425698eb12ad12d47576d7"],["/categories/玩转Mac/index.html","b513dfb97bad0cd32540f047f277d284"],["/categories/链式栈/index.html","b499d745f5e152a91c3e5846d7e665ab"],["/categories/链式栈/数据结构/index.html","8092db536e8867e721e08d7c17272d19"],["/categories/顺序栈/index.html","bade08315bb887d5cdbb43062c7552f5"],["/categories/顺序栈/数据结构/index.html","a2a9e86d47fc951a6bfd0b3f79ea8638"],["/categories/顺序队列/index.html","5d669e91c71de4d24b0c5b33edff0ea3"],["/categories/顺序队列/数据结构/index.html","ed7a0dd4574a59804fb8e480e94b79db"],["/css/main.css","48fa9714c7041ef2e90ec7e7f4a62c64"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","4b95577847d464a2064dd7883e6201db"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","01acfd6d4fd5c596d3b286c5152a3461"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c19360462dc6d73bdbb94f353afeb759"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","8fcb35375c942995d5488ca28d4bc238"],["/js/src/algolia-search.js","f6696498ad0c9eb53e281e8f3a9d4a9f"],["/js/src/bootstrap.js","fc6bf46cd2f989dcfae72883355f96b8"],["/js/src/bubble.js","74a53720b06a9463404201d84d8508f0"],["/js/src/clipboard-use.js","5f7a881da21664d417a692c70d95b722"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","29e62cdde52ce209595849cd05342634"],["/js/src/exturl.js","d763737579aaf1fe781606885974f594"],["/js/src/hook-duoshuo.js","97916729184999fb0dc01ad88e6c0b03"],["/js/src/js.cookie.js","6bc284b8d5981dc17e8e452572a3b3d7"],["/js/src/linkcard.js","dcc17d40a3446977ad8c55847063521b"],["/js/src/motion.js","678352590f162a19fed39d4b89f14892"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","c6f2c4c705d5c329ee90b96f9eba22e7"],["/js/src/schemes/pisces.js","c3401c10228b6299745e874355e1467d"],["/js/src/scroll-cookie.js","cd6cbe2b0e44d547d8713233f787fcc2"],["/js/src/scrollspy.js","a8527ff1111edb93bcc112d776942691"],["/js/src/utils.js","48114e819a93dbbabd2929fa99ba8661"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9c1bebd464986ae9e6c22ec7769afabc"],["/lib/Han/dist/han.js","f63204e58107423df5184d89624a458c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","40936da9cbf5cf0cb5ca90b07e314a46"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bf784ecf26af7a7c6337c7e90076590a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","81740b576b81a69d5897d150c89364ad"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","847b6c0d2579aac8ecda7cb45491a8ff"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2f8478be2d3a986c84e321b08d493381"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","375ab683060df627d530bc28c6e3d7ab"],["/lib/fancybox/source/jquery.fancybox.css","87a6e10d7b4dc6817e535b70509707b1"],["/lib/fancybox/source/jquery.fancybox.js","900c010250692d3321c6eb3832d56920"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","36f095a86992dbcd97e6141470603cf2"],["/lib/fastclick/lib/fastclick.js","8a2a0ff04a5d335c1e896dcb6eb433b9"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","3128e7680ef4394fa9d41bb9cd33fe6d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4ddf5a6ea246b3c3c556f8811ccceb6b"],["/lib/jquery_lazyload/README.html","40a05bf95dc31f74a086164704a7d44c"],["/lib/jquery_lazyload/jquery.lazyload.js","49817cf0e103b06a504f44a6941b8238"],["/lib/jquery_lazyload/jquery.scrollstop.js","d2cdc802ef7d48f929092c35e3b908cb"],["/lib/needsharebutton/font-embedded.css","054cbeb1b30ea1f4b7764332a0002426"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","587237fdae873fa6b478002a22f0823a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f7398236dbf0eb2d24a97b1ba5847150"],["/lib/velocity/velocity.js","5f2807ea97722078ebf87ad31caa7c9c"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","28096ea75a3967394097c5ab4be4b78a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","246d00f070fa4d3ef9ca3b273a8f7f8e"],["/links/index.html","b24c3f7c248d51f6d8a3767481f5ebca"],["/live2d-widget/README.html","e5c279f361f3872d0a7bdc78e102fb41"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","9370c4759f08878a55a0f676a95bf59e"],["/live2d-widget/demo/demo1.html","1f9528557d2d720b861f9a3afab578bc"],["/live2d-widget/demo/demo2.html","cf54f50756f512fac670b2cc2c87fca4"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1573c5826ed6e8dc03b5496fbcef1c02"],["/movies/index.html","a15768b17cbc6a5b8ccdb51b68ae1234"],["/music/index.html","dba284b7436e1c2ca04a381e490c880c"],["/page/2/index.html","22d09869ab1e64ae9e57afb8c184352c"],["/page/3/index.html","01f73142ab9d5129ed59ca4a48d318ad"],["/page/4/index.html","5b0aefde15880e6fbce41cd5c9f0eff1"],["/photos/index.html","6ef2bff9434a4fa02c2c9ef10ee20395"],["/posts/14311.html","bc1e06b73409aa0af6a9e31cfcbf4c36"],["/posts/15468.html","02021a051281d43a635f744b59c98af8"],["/posts/16107.html","36de5e3cbf0f8489bcd9f622b851eb2c"],["/posts/201e1121.html","acc1607806d8dbc16f4284ee85c6742f"],["/posts/20352.html","44e026c3bf8b0064ac8334bd20d5d522"],["/posts/21238.html","ba79170f7c0a835ffa26d5e0295b9f87"],["/posts/22281.html","2c98923122306a76c4e8774a9f75faa0"],["/posts/278598dc.html","3584b4a697966dcacfb66f5891775128"],["/posts/2d063bc3.html","d0963b93342fe95e3d7bfff772ae39b4"],["/posts/30c404a6.html","2a2f0e1ed3f4fb9c307f2d03c0808049"],["/posts/51203.html","3a29b485cab73d3fb6f97ba17104f563"],["/posts/538e5180.html","54744600a5031bb4dd23c76f0edec7f5"],["/posts/5394fce7.html","05a14b0da134a385e4c2c27075b30122"],["/posts/59037.html","8212c9ca0f67522612babdeac4a56895"],["/posts/60816b5a.html","470558d33d094d44c3f3c6fabf7565bf"],["/posts/6163d4b5.html","ff6bb4dc00cb2d1d3e3e60e160010036"],["/posts/69978469.html","a78699b9f70cab851d03ba058df7119a"],["/posts/6a752619.html","0b9c82524dfc3b1672e84bdecb53343e"],["/posts/8cc73e65.html","f0f7a1fe9a583ee95cd0b8ce772607e0"],["/posts/9b621d6f.html","20bb73cd235c8616f04cb685ef523b31"],["/posts/a530f7f0.html","bd52cb3e5cddefdf34ff48b4fa3cd326"],["/posts/beb5106a.html","a52d55cf8b45f8487c907e096fb0e0e3"],["/posts/dd845106.html","9151bf4f503c53b3379260865aebf9cf"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","e67f893900d35ee57a39d71b809c6984"],["/tags/C-语言/index.html","0ab23560cf6223f0ab4c3d60bab20215"],["/tags/C/index.html","09521ca343301f5a0aa8ef6c952e3423"],["/tags/C/page/2/index.html","48f4bcce2e86e8c480c798d3c7f11d41"],["/tags/C语言/index.html","8cb6c11c1be43dcbd07e6f0874589819"],["/tags/Hexo/index.html","b06015842682092fb8b0ed572c8c5cea"],["/tags/Java/index.html","3c6490e42c2e3c095034cce037295df8"],["/tags/Mac/index.html","67173224d4a0de2f9f5a19a25e9db290"],["/tags/Parallels-Desktop/index.html","2d8fd5240c5e8073fce113b79ecf78b5"],["/tags/Python/index.html","3aaaa9d8bd0b5405a11487c8d7bfd61d"],["/tags/Qt/index.html","a5d1eef8d912c8dbecce330d9d2d3804"],["/tags/abbrlink/index.html","5ea3d5ba65cd810b6b82f25555eda68f"],["/tags/index.html","342f6353ba75f2489980bde04125f69c"],["/tags/冒泡排序/index.html","436321c699c37b5e3a5a4410efb03195"],["/tags/双向循环链表/index.html","e0430190ed9ff6fbb0389f10cb8566df"],["/tags/双向链表/index.html","31a8032fbec6599c6fc56b961538538a"],["/tags/希尔排序/index.html","0b80185fc6bf9199c1b596649b1844cb"],["/tags/插入排序/index.html","d9f80ae4fd4578f9f45f556a34b874cd"],["/tags/数据结构/index.html","553797a0e48e1993bf378113610e64f2"],["/tags/数据结构/page/2/index.html","d94a253fa6f835808c777676af194d72"],["/tags/杨辉三角/index.html","2cd89fbb7f6e0bd61760485e51c7391f"],["/tags/栈/index.html","8e6bfad367d9220945b22fcabf4bbeef"],["/tags/类模板/index.html","d7c6fba93a5383ababae1e582788763c"],["/tags/线性表/index.html","2d31e5b29f84f98b84bbc0d03ef59a00"],["/tags/选择排序/index.html","9f04adca20a128328be8fb33f7a70e45"],["/tags/链式栈/index.html","6b4b7d8f75fec80b9fcae435cc211944"],["/tags/队列/index.html","e8930694436885f4e4129f94eef7807d"],["/tags/顺序存储结构/index.html","f44df5ec80c3ce3a2c52b5a062c4a6c5"],["/top/index.html","d8c04db3c96c6a9829316467c6ac1f95"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
