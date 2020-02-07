/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e8ec33cbf6bd6bfa8cc53d629d16e3d0"],["/archives/2019/10/index.html","f0b75d735ddefa4f2d1196f55b5dde41"],["/archives/2019/11/index.html","e6ae7fe2940be56dd6a774c0373ed14d"],["/archives/2019/12/index.html","808d81ad996058c4f16813a15a5a5c0a"],["/archives/2019/index.html","eed14d93c9132a3ba409b1048159dc7c"],["/archives/2020/01/index.html","0faa45a9cecd5d058b736292b47aabb5"],["/archives/2020/02/index.html","8a22c9647d4b8bfbf4606b49d715d756"],["/archives/2020/index.html","184d12a986f27b7284a89b0f9801804f"],["/archives/2020/page/2/index.html","1b64eac74eeb06b9ffa56e2144a0840b"],["/archives/index.html","29fa54b665ca86cb1a24d1102bc364e1"],["/archives/page/2/index.html","b130b9e9de760dd696443aee4ee1ce55"],["/archives/page/3/index.html","8cc6f8b1e0e367bfb01546301cf20678"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f14bae54506d42b074de263d3aab077f"],["/categories/C语言/index.html","cf43974b99bc35198e6b508c379808fe"],["/categories/C语言/数据结构/index.html","26d49fb5a2a20acb842bfe3c5bfb69dd"],["/categories/Hexo/index.html","fe40944218479e41ac43bad6f89bdc8e"],["/categories/Mac/Qt/index.html","7e55f81cc72f98f80eb29dd9d54a1f7c"],["/categories/Mac/index.html","4fc1a959eccd515abb9ea9a26ccb3df5"],["/categories/index.html","27935db932a8562e9dc08460e9640027"],["/categories/数据结构/C/Java/Python/index.html","65a8db4acbbc1c30aadcb7f2b1b74b96"],["/categories/数据结构/C/Java/Python/排序/index.html","1710399bcc99320f98b6c487c149920e"],["/categories/数据结构/C/Java/index.html","5cda14c8a17e93188b0e63f7d8cfa98d"],["/categories/数据结构/C/index.html","ae9ad072359ef9d1dd42854eb3c91370"],["/categories/数据结构/C/page/2/index.html","5dd9afca8554bd2049fc56bbc47167d5"],["/categories/数据结构/C/双向循环链表/index.html","eaed5ee5469344ebb53d731bdbeb9a95"],["/categories/数据结构/C/双向链表/index.html","b13484f3c184034853fc902c9c31d200"],["/categories/数据结构/C/顺序存储结构/index.html","cb62977440ce32c25f18596e7d32d9f7"],["/categories/数据结构/index.html","17b124d5a5fa034b8aa203b23a5f6f72"],["/categories/数据结构/page/2/index.html","fbe3eb2e7c5199ac4e5c43bcf41bc342"],["/categories/玩转Mac/index.html","49704f180ef86ba086f7ae274c1191a0"],["/categories/顺序栈/index.html","31c9f77d583aad9f7e6b2b2bc2b6628e"],["/categories/顺序栈/数据结构/index.html","2eed0f42daf1f805637e0ce789588103"],["/css/main.css","1dd54ebf0083dbdf03f3a4b1960d892c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ec02886b0d4d6f3286431d2b16bb2008"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","284e07d1c79d4dbf2efb717b21ff2fe0"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","0bc658d81b739cb9f9700047e91b81d1"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","1824b52180b51386a43984aee2d897c9"],["/js/src/algolia-search.js","e0fb1cd7e10736f3b20729f319504bdb"],["/js/src/bootstrap.js","04f2a6aa958bd2c40b28c9cb2f48ed81"],["/js/src/bubble.js","33d9083b63d300e647d8ba3f0939fc24"],["/js/src/clipboard-use.js","c5c3b478fc0ffda5cc092272bd751d04"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a3eea3ba87451f55cb0a99f2d7c32a17"],["/js/src/exturl.js","b146c43125fe2281be2783757ba83ebe"],["/js/src/hook-duoshuo.js","92ca6387970f780fb4814c8e0ca030f5"],["/js/src/js.cookie.js","b2c0d3556f5dd76fed6f540c3613ab1e"],["/js/src/linkcard.js","e542e3548fb3a77970a447f356a6336c"],["/js/src/motion.js","13cbb56420de7e7855d343a386437be1"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","dd1922ca3bd51c387882279e975646dd"],["/js/src/schemes/pisces.js","e3b79442800afaea5970cbaf0a8f5364"],["/js/src/scroll-cookie.js","8fc3ec99f396cd6a36c49c4bd49a563e"],["/js/src/scrollspy.js","46cb8b89bf3328ea461aaf1ef5e58093"],["/js/src/utils.js","cb30b3d5bca59b97015e15b904536982"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9b9092e5c5d1849114902c8fb476a37d"],["/lib/Han/dist/han.js","2a591c0765f292e9100029f040899ff8"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","eabeee1adf96b6c0e6603bdb23710178"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0997f68abe820b39a5a6e164e0e23bdf"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d2217d7ae4b29a98869db5cfd45ec0be"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3dfde941efa6f8d0ac7f7985bb5a8f90"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","6570e0363c12da9f082b9490931a2c80"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","95d71a8c2e67afd3e840fcb5d8a8fa50"],["/lib/fancybox/source/jquery.fancybox.css","097b4fe3a83e32a119130fb349690c82"],["/lib/fancybox/source/jquery.fancybox.js","63fb1e09cb7457dd340f622f2653337b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","dcbe14e588eab6ea9de0a903c54387e5"],["/lib/fastclick/lib/fastclick.js","2a70587908c0e371dc73f7bc299179b2"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","e7fa296ab3d6f9f6ccaa1c683bae6c07"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b4ea737e3ecb26d00dc0d2990565d7c2"],["/lib/jquery_lazyload/README.html","828d93f50651643698b810bca8733735"],["/lib/jquery_lazyload/jquery.lazyload.js","a845976726392e105b52e70dd1ad34aa"],["/lib/jquery_lazyload/jquery.scrollstop.js","70fb2f10203504a7fd10e02777051219"],["/lib/needsharebutton/font-embedded.css","879f8b244593c0de08f75f7e4ecbb96d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","53c3a9d82eeb12b02f7e6ed91b3a3f42"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3634e0dee3331a568fab273b49195ecb"],["/lib/velocity/velocity.js","732974a2314cbc1e8769844553ad6a7a"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bf9e3ed0a91bab7e4d76509d554f8a95"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","53c52b484696b09fc3253999b825de73"],["/links/index.html","3aee2b0368d2fcf485951fe94aac922a"],["/live2d-widget/README.html","a0d8ca9548bcf5a1f00bdd89251a2882"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","22114ee8e403b22094c9e4b71c11b9a0"],["/live2d-widget/demo/demo1.html","c38fa6cd47c2041eba584bc011d7d994"],["/live2d-widget/demo/demo2.html","f135d1d29740f7b6be5298a2bb45f848"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","4688c36f9a4322008c1d2be7ebb929be"],["/movies/index.html","3263663528b48b8b3b98d0b407eccdf2"],["/music/index.html","0d600e769ea2b8d3fdb3b7011ed6cab5"],["/page/2/index.html","400dfe42a842376b432d1063727366a7"],["/page/3/index.html","f83ba33d9be5fe8e0b6ec10ef48f13f0"],["/photos/index.html","e641b60f9cd18ad1bba1bfdf8db9f744"],["/posts/14311.html","5693b291f4a711bed42e6fb9e644f9ca"],["/posts/15468.html","be2c47f0746c4853c6db5f7230b1f094"],["/posts/16107.html","83595530a2b5751d832fed515954605c"],["/posts/201e1121.html","6dd7c07f041ca217e1539ae744c4ecab"],["/posts/20352.html","45cc77e2c2cda133384a725753f9224c"],["/posts/21238.html","b8bdd1a874b81b3db3003b698ad0666e"],["/posts/22281.html","b79a49ee1f865035a39c75152be756a4"],["/posts/278598dc.html","1b8d6c8970a4b930c3542e9d913f0db8"],["/posts/30c404a6.html","9b5672e22513601291f323af572e0362"],["/posts/51203.html","945909c48eeba9713cef368e45876baf"],["/posts/538e5180.html","4a0dc01b3c9c169f75e2889d64522065"],["/posts/5394fce7.html","077c0590dd0661a2f22f1f86ac249a13"],["/posts/59037.html","f1dff009bb98ef975dec97a5c9b23459"],["/posts/60816b5a.html","fd42bf8cfc2022b641ebcd2cf3af6e82"],["/posts/69978469.html","1eea0318b19200d61384072eaf46455b"],["/posts/6a752619.html","96fe6d26f71f76c6b17f63119f869993"],["/posts/8cc73e65.html","9951379adab598accf83d91d263dd6b9"],["/posts/9b621d6f.html","d76a18393583bfca71b68b658e92f3bb"],["/posts/a530f7f0.html","0ac969b073740f04cb20a72f1abb828c"],["/posts/beb5106a.html","c2db627b36a43e4a9909de546e70833f"],["/posts/dd845106.html","ad6f93802d9d622562472d6816deaf76"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a33c5ffddf024dafa9e370cbb2ca16f5"],["/tags/C-语言/index.html","ba9d6fcb850ebea19a7c536df99fa490"],["/tags/C/index.html","0996755136c5da6cf73f529e536aa767"],["/tags/C语言/index.html","97bb59ce8375767c15a8a32079d02e90"],["/tags/Hexo/index.html","be7b4091978fe474aa1291c118a9dca3"],["/tags/Java/index.html","9361c9a7489b36c1a1266f57cdf52cdf"],["/tags/Mac/index.html","bebfedb997c9834238c64dc3b5677431"],["/tags/Parallels-Desktop/index.html","1e26248816585a3f4f270d685986fe1f"],["/tags/Python/index.html","52664aee0079e8ba1eac51d30a946f3f"],["/tags/Qt/index.html","9b1c10ba3bad33bfdfb1681fb6032e41"],["/tags/abbrlink/index.html","aded4f1480b65c589e9d7e2a38d975dd"],["/tags/index.html","772e50a07e2635bbcbdcdfc54ee52b66"],["/tags/冒泡排序/index.html","bf9fd70aa59635bc17f994869c5dfb9c"],["/tags/双向循环链表/index.html","bdc2d143a6d3561c9f9d3e56e6ae26a8"],["/tags/双向链表/index.html","861e5742bb81889281d4b52341727c21"],["/tags/希尔排序/index.html","4de3c10ef08eef7562c1e83544147d34"],["/tags/插入排序/index.html","0b3ab40515eb52850bb9b002e7377460"],["/tags/数据结构/index.html","f73720d7cd1239966e01ef17ba676491"],["/tags/数据结构/page/2/index.html","ea01c22ffb31df47e38fe020c1f485e9"],["/tags/杨辉三角/index.html","c723c192c99862017544de8626b27cd2"],["/tags/栈/index.html","17131186313740bba3e49df2023cca83"],["/tags/类模板/index.html","b61a2385cf00e790139c477b295552a0"],["/tags/线性表/index.html","b67716ad75996e963bb57975a2ff0ca8"],["/tags/选择排序/index.html","fcbfb2affeecb44fe2564dc2134df8e4"],["/tags/链式栈/index.html","3e6b2c1f46b8f35201bac0a718e2e779"],["/tags/队列/index.html","ed6017a27ad2d9898d0fbdfcddada4e2"],["/tags/顺序存储结构/index.html","ea0cfadc2f154715d041a1e9fb763d58"],["/top/index.html","e17532be1115d0e558efda3cb31f1edf"]];
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
