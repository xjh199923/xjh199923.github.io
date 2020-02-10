/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d6aaeb1092c05c7a5349f8216e4ff272"],["/archives/2019/10/index.html","cc0859447a4b96967f0241483b61c982"],["/archives/2019/11/index.html","34d724bb3a1f3afa6dc108a718dbc3fa"],["/archives/2019/12/index.html","5fb5201dc0919d97649a6a9d2ec3a31f"],["/archives/2019/index.html","22cd056c5ff9ae67447ab8b7c20f454d"],["/archives/2020/01/index.html","809895afac5d3ac769a9e71c8cbd5a94"],["/archives/2020/02/index.html","5eca49f01a9334dc91dea87133324af3"],["/archives/2020/index.html","2e627429ba49c714c097e404e93ed5c9"],["/archives/2020/page/2/index.html","e5c998fc4ce624126344c746bc3b6904"],["/archives/index.html","02fb96d2603e9bca1f2e13807e9ec63b"],["/archives/page/2/index.html","15589117eafacc96229e6724fcf0c668"],["/archives/page/3/index.html","25017f88b9b428ab3dae262b471ae2f4"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","a16a01b06f8a4f6af150b0297008c1d4"],["/categories/C语言/index.html","52805a3cccf397543392f1360b06e3c6"],["/categories/C语言/数据结构/index.html","9362413273198481f795290dc6bce2f1"],["/categories/Hexo/index.html","bd6de4965c6613e8da2b1e72ab0dffd7"],["/categories/Mac/Qt/index.html","f63ddc43b7d1f39c3cd0a44f05c3dd24"],["/categories/Mac/index.html","77282223b0c685a99360525e569351e7"],["/categories/index.html","084d9a9e82d69a9f0692346b249b4043"],["/categories/数据结构/C/Java/Python/index.html","a4e600b003b7543fbef7deadeab0c8c6"],["/categories/数据结构/C/Java/Python/排序/index.html","dccd10fdc17470b04bee08305ca413e8"],["/categories/数据结构/C/Java/index.html","281beeda0726f76278914437e4f72c15"],["/categories/数据结构/C/index.html","38c96b81c75bb887437b338fc4d847a4"],["/categories/数据结构/C/page/2/index.html","cbcef6c245343c8162cd17fc469df179"],["/categories/数据结构/C/双向循环链表/index.html","73ab375c112e179256a34c1a68d668de"],["/categories/数据结构/C/双向链表/index.html","c75e4fc566183283c2beccc84c4c610a"],["/categories/数据结构/C/顺序存储结构/index.html","24bf6dc00de7e3fe8227d8b64a313f52"],["/categories/数据结构/index.html","d5692161e55ed3f1be62bd1a5df27242"],["/categories/数据结构/page/2/index.html","14c32b610879af9adef40a875ed88185"],["/categories/玩转Mac/index.html","633f5f61cdf7efc83c912305f297a702"],["/categories/顺序栈/index.html","611041647b5b714eb62d3112a3d67810"],["/categories/顺序栈/数据结构/index.html","c88dc7fe8fbe4da0b887d1446f352d65"],["/css/main.css","ced6c544fd808c12647075ff5e775642"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","19dd88299ca1fbeae5674d015a4a4c69"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","c072275ed7ec4c1c150b2262f3cbcf48"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","a47027ee77a859baca42a09e64e4a925"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","ada5b2590e4fbbfe679d7b19191d80c5"],["/js/src/algolia-search.js","9539539496a2c72b92e1b20180a0b359"],["/js/src/bootstrap.js","ca7df9a7676413f7cb05a527e7df1a4e"],["/js/src/bubble.js","191e6fa4f1f8e1f1bb502411f1f4fcd3"],["/js/src/clipboard-use.js","4877605c2e8e85c794e1a4aa9c92ebb9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7b327569da2983b6d8397459ebeff04e"],["/js/src/exturl.js","704ffa1ca56a31f407346342479a5a9b"],["/js/src/hook-duoshuo.js","abdff8f23fd01a8cedf5acef7a6cde0c"],["/js/src/js.cookie.js","46df25ed7c4c9436d8a96a3460155bff"],["/js/src/linkcard.js","d271f7f7a52be837db07dabe8f2aa9aa"],["/js/src/motion.js","9815c3f19bd992ee21a6d792fb0ed8cb"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","b930ddbb85a9e3d7b519f66938e87bc1"],["/js/src/schemes/pisces.js","678f1323684bc96fe10e7f5f3cde2149"],["/js/src/scroll-cookie.js","a0ce6c16d3a72f02995bc9da3c793814"],["/js/src/scrollspy.js","98949ebf05f2a848d756204a2c93bf16"],["/js/src/utils.js","d16a6a6b49a64ca9e6dd461c528a29ec"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","68133be71d1865507cbf6d941d75f357"],["/lib/Han/dist/han.js","e97ba0000bd036507dfb79edc7ae74bf"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","88ce68e381ac2e44f0c3d55af185fc90"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a6acf83eb32963817bfe19d152fbee3c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6f4b46e248d8881bd178a71870f783f0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4550985a0162775495d22bfdbc7bf249"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bee35e8f2d85b4e3f56608a9e909a32c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c00198b1e52f07680990f3ab77615227"],["/lib/fancybox/source/jquery.fancybox.css","90510d2b82b7d4bd5e355b5bb4a59611"],["/lib/fancybox/source/jquery.fancybox.js","e9d2a460c9bd08856862e97da0177832"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","1781b35b9151d63b984036eee200b45b"],["/lib/fastclick/lib/fastclick.js","6fb5b6a07e092860e74b7b1c0cbcc358"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5b17a33c2a2dfea5d7df85c09233de75"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","ebad9f25a43ddf05b066b831c16b9805"],["/lib/jquery_lazyload/README.html","5af3cf62078e05e81756b050f0f6d170"],["/lib/jquery_lazyload/jquery.lazyload.js","a03c33d80a91329d205759a1f8341493"],["/lib/jquery_lazyload/jquery.scrollstop.js","1a3222eadd6c296a71b08d8665227106"],["/lib/needsharebutton/font-embedded.css","7023d3471f84c8ee035df1ad3f5bfcba"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","52c404ca63cb5c4e472e7cc118ecc44f"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d4d70b4dc169fb5064624bf93e7cd775"],["/lib/velocity/velocity.js","e1053e971d8d0c30e0f1648adc5720a9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f3391e4fc9146dc337612c14c8533cc0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","2a3005d389d57c85656312f3b6c92132"],["/links/index.html","09a1646ade79b384f4edee725621aeed"],["/live2d-widget/README.html","337c57ef8044c3e96450be1af22845a3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","83c30f17fddac85e0ee9b1a9c908cecf"],["/live2d-widget/demo/demo1.html","65d257f88be404f06e47d714523c85a2"],["/live2d-widget/demo/demo2.html","3d40c6a94dd82729d4f1586203f46d7c"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","fd44eca4cce824dfb2b0d9226b90a009"],["/movies/index.html","292f25e98c372d2fc51f70b1d3060d7b"],["/music/index.html","ef5183e062571698742708c7e9818618"],["/page/2/index.html","eee585c8335f98c3b3bbc71c8b1ffe17"],["/page/3/index.html","56f5c279bbc35578f9ffa2e5e675eaf7"],["/photos/index.html","8f991cae970290fefa1b2453ff69dfe9"],["/posts/14311.html","d0781d815cd4bf5bc671cfab7f218a8a"],["/posts/15468.html","58c24160e5a264a2c991a5aa6488986d"],["/posts/16107.html","b6268ab633b2814d930d2f0fc6026441"],["/posts/201e1121.html","22f4d72872ff1170778be3b72501ad9c"],["/posts/20352.html","42e3dd881c9eb3b85d43159fdac7a819"],["/posts/21238.html","7fa501a439b40cce74abaa3662d748bf"],["/posts/22281.html","3eb45e023d288318bd9fa96f62c31e7e"],["/posts/278598dc.html","1cdb4b900f8b5b84517bcb27309c3baf"],["/posts/30c404a6.html","afdf37e28b51246af52794bf647d3668"],["/posts/51203.html","2c99f29c32d5142d70873de1f48a47fd"],["/posts/538e5180.html","9c006fce9344d9a0cb762b9de962e63e"],["/posts/5394fce7.html","195dce65c0b9ca1573340e637496a22b"],["/posts/59037.html","5a70cb2cbf6bd06501d9559d6c8b91be"],["/posts/60816b5a.html","05ed24abb0277d8cfff1214c049c2fd4"],["/posts/69978469.html","b625519c2eab3d806eead1a7fc080843"],["/posts/6a752619.html","1f9608d3fdb6a302439a84960c82bd6e"],["/posts/8cc73e65.html","17b973245119aed5558c0a62b455b302"],["/posts/9b621d6f.html","b347d5106e46355c8f4184ed0d14882e"],["/posts/a530f7f0.html","71defe6b6d66626fa0db58c1ad308586"],["/posts/beb5106a.html","4a22e56de30e313953de286273296d96"],["/posts/dd845106.html","526677a4ff6beef3d21bb951990335f1"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ebccd126a8871ce466ecbdbe50e9be7f"],["/tags/C-语言/index.html","02cce2c3f134fdfbeb9b1759eb68d054"],["/tags/C/index.html","8d6b33ae96a03c62ae313b838a06f6b6"],["/tags/C语言/index.html","8b5d1e7f17d121ea21d52fc800fdfe16"],["/tags/Hexo/index.html","486c51f52ebb74fe6f23a6243a6a0835"],["/tags/Java/index.html","926d430e0021bf168a3722c626761b3f"],["/tags/Mac/index.html","bf921c331e6ecc4bb2f97179f2571be9"],["/tags/Parallels-Desktop/index.html","29dc0ad2fd40fc5751941bb1a5e9e64a"],["/tags/Python/index.html","86800b104f70dec294b278f7f316918a"],["/tags/Qt/index.html","b128343e5108739451eb1a9f841e9c47"],["/tags/abbrlink/index.html","5f684077d25e84328cd51c3589c7b068"],["/tags/index.html","bb384159b124abb1407984b4d7ac8293"],["/tags/冒泡排序/index.html","44610c8760cb2ea934c8ab0e4732a276"],["/tags/双向循环链表/index.html","be0e836c15ebf1d91c7433255c35c899"],["/tags/双向链表/index.html","171e8d3fa689d00e9fdfb89c60f94379"],["/tags/希尔排序/index.html","215b59df3a5fb8b5c6bb96ebbd64fc02"],["/tags/插入排序/index.html","2a5b8c50648808c8a05688f0d30e7bc9"],["/tags/数据结构/index.html","cbc619ac3c88bd7246549d75b7cf36f8"],["/tags/数据结构/page/2/index.html","fb9953cc4363cb92e15637a20316fce0"],["/tags/杨辉三角/index.html","9e7bcbafda541ebc213a079778b5b563"],["/tags/栈/index.html","319bd41eb9348707fb6bfb4bef5508ac"],["/tags/类模板/index.html","c006f47d839770fc9fdf1f6da8af7009"],["/tags/线性表/index.html","c6d717536a9f6122c632ba77f5405c2f"],["/tags/选择排序/index.html","80a39c9121677745e4a028484e6268ae"],["/tags/链式栈/index.html","a5a1989eae809301ea316a89c9b20eb0"],["/tags/队列/index.html","e62a81add5c985354d393fb942b88dea"],["/tags/顺序存储结构/index.html","6e5559015118ed8753936b971348d971"],["/top/index.html","97df29234ae3b3ee85b05b8ed22dc25b"]];
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
