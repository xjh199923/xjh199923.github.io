/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f640b52d02eb1fe93ca8662de807531e"],["/archives/2019/10/index.html","adab596219c89a4cd8121dd081b5cfcf"],["/archives/2019/11/index.html","87f0a1ef327e2491f7d24ea6d3ec506e"],["/archives/2019/12/index.html","2cc731e3bcc70249c01e4dca21c0afd6"],["/archives/2019/index.html","5a12de7ab6ad71666b55dabea59307da"],["/archives/2020/01/index.html","2324e79016fca540e2f281b8507fd332"],["/archives/2020/index.html","4019610fade8286ee7a2edad579fce1a"],["/archives/index.html","d194f5c33c57f4b633961fba4e1b20e1"],["/archives/page/2/index.html","fbea328d5c129a06140b73683860f0c2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e8c93d5afef357c26c80fcccf011b066"],["/categories/C语言/index.html","76e2adfb934f51d63ed6f79b58ccfeed"],["/categories/C语言/数据结构/index.html","74df3abec1a7e85af903e1119f3a8689"],["/categories/Hexo/index.html","30a0b1fc1ba2d08523d95a00efc99c4b"],["/categories/Mac/Qt/index.html","1061d3ecd115e4490bf13c02c0664d41"],["/categories/Mac/index.html","31ab93b098b09a9811d9afde11c661d7"],["/categories/index.html","976e2f20b83bbb5a406355335cf2f86d"],["/categories/数据结构/C/Java/Python/index.html","e412e8bc18e4a31c37f8c52e69f7e628"],["/categories/数据结构/C/Java/Python/排序/index.html","27e3257d43bbf3f303a0cd6e8cd18807"],["/categories/数据结构/C/Java/index.html","79161d6d5884e66748e2d7bcdb479f0f"],["/categories/数据结构/C/index.html","1475e0e7de92819ba2c72a3a40956954"],["/categories/数据结构/C/双向链表/index.html","920381697df75a05f904b628def67617"],["/categories/数据结构/C/顺序存储结构/index.html","a31c9bff46e62fad046a3a382f04fe9f"],["/categories/数据结构/index.html","33972ed65172adbfa78be52626d067b7"],["/categories/数据结构/page/2/index.html","9843e0de87bab4e408021d992b1fe1d4"],["/categories/玩转Mac/index.html","b080c3fd8b53c294471adbfe6a232df1"],["/categories/顺序栈/index.html","43db3b7467668bdadcac11c797d9796d"],["/categories/顺序栈/数据结构/index.html","0efcbb42d130cc624ce68cb3e50fdb6d"],["/css/main.css","79883246f88a9dcce8c37b9453cda5b9"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","6d6733461772ead8b519a321e4e478f1"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","811ddae22ee8824b64c18fcca8ebacc6"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","d56d8cabba443c5f85fcb6e6b2e82c3d"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","bceddedbfb6cf22ada799de109a70d8d"],["/js/src/algolia-search.js","483dde32ab6fb5adffa3d255111b2aa0"],["/js/src/bootstrap.js","c4a53d4c9994163d62a1e353a591fd42"],["/js/src/bubble.js","fe279810d241bdf769671f1011805dd6"],["/js/src/clipboard-use.js","3bfe66ce37852b40ae7d89778969507f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7c8ef9bf1719955554369807e0794c64"],["/js/src/exturl.js","ee0d68b1de20c1b0bf795fee0ae9cc50"],["/js/src/hook-duoshuo.js","f05d8a941f15fdb0ae2c87d4882ea04f"],["/js/src/js.cookie.js","d8a3a2a4fb87b99c875a641ae683253d"],["/js/src/linkcard.js","46ca694f3d7d7967439c0e79086179cf"],["/js/src/motion.js","a972a40b3c85bcace6cb595181684a93"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f316de1d57c39879d0d2c7744e1ef8cd"],["/js/src/schemes/pisces.js","c7f6109dac6b0320c680720c31f952c1"],["/js/src/scroll-cookie.js","5bf5716bc93852f8adb66ffded0fd966"],["/js/src/scrollspy.js","ba8f0b62db0e508a4ae063ddf741c655"],["/js/src/utils.js","a56d757a587e3810db536801260eabb7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","1a683446a14a7fcb95c806edec0518d1"],["/lib/Han/dist/han.js","7d47e274a206c4051bd93fed6449a28c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e6d25ccbb208959dc64702f48f249e22"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","e0bdd602cef0b4ea0fe745c49c4f85ef"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1b360fbefc05769f2335785c62b38dea"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1b5f70582feced0a8b098fa9bc8b317c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","37f6af6d6670fa6a39e932fb77a9717d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d3a56866a80a35ae15b82133c64da0d8"],["/lib/fancybox/source/jquery.fancybox.css","67c55e73bb45cbf629b2bfd8ad63d129"],["/lib/fancybox/source/jquery.fancybox.js","29b66c373f7455cbc29bf127d6381ade"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","97a8204597263465f9c56a4249c59791"],["/lib/fastclick/lib/fastclick.js","9b5536a1aae4a61496caf372f88fe369"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97e62d68b4dbb974c96641c1e6e2c85"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","001e8eca300168f7a7aadac3286a5b0c"],["/lib/jquery_lazyload/README.html","7b3188f2d5400c274b56175fc598dbd9"],["/lib/jquery_lazyload/jquery.lazyload.js","81feba2d40ea318e536b31e24ca65c9b"],["/lib/jquery_lazyload/jquery.scrollstop.js","d347f6d6873a30079b73fd4e94fed979"],["/lib/needsharebutton/font-embedded.css","f89d95e995fac409470e9c459a7fa22b"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","5b87700886450729673e7f1d5ed50de8"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d705e7bb7598c698dfdcbe6ef0ac5c79"],["/lib/velocity/velocity.js","d294fb7c60c636d6a259469c84ee49b1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5208007447b8da0b4edaa9778c4cb6dc"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","07bf2cb5830ff3065b63faae0206a895"],["/links/index.html","ba9cc394d98f180c50f11ec4039e76c4"],["/live2d-widget/README.html","a2f3b208beccac1d005a67e6e46e1e32"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","b133448cd504973da889b82256de399b"],["/live2d-widget/demo/demo1.html","bb5f88b0e7dd89684679db3b72337c3a"],["/live2d-widget/demo/demo2.html","7a537ace4cef2c8d583cf2f00c9a1ba6"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","9867ca51126c1a758401c51befb80138"],["/movies/index.html","a53e5fac3eed1edfc1b4ac17465d79da"],["/music/index.html","39be2d28330f26f79163359c2ffd8096"],["/page/2/index.html","d37d6e3d95f585bc398b87d32cb38b4a"],["/page/3/index.html","056085c04c1caf6e853453038d702bd9"],["/photos/index.html","da3bc85b41b63b27d8026517f5cfe304"],["/posts/14311.html","3db3ef7623be579b5901b9f66414816c"],["/posts/15468.html","d17ad330223445b5aad08e69191efa4c"],["/posts/16107.html","c7d767579e237bf4f87043297f70058c"],["/posts/201e1121.html","0aa6911b46637c715acc9bd2f0b673e8"],["/posts/20352.html","f498580fdbca6ea06cf1cb8f8a0cf3df"],["/posts/21238.html","cce725ff96fcc46839b3aaed21a74bc6"],["/posts/22281.html","9c4ebfba2ecc8ec97ff520426a9b3d02"],["/posts/278598dc.html","1da1ce7007414bd38160ad9172b0c26d"],["/posts/30c404a6.html","cf80895d92540649e6a35173f1f85c27"],["/posts/51203.html","695f477a63937c93ad1c6f11ecff9ff4"],["/posts/538e5180.html","9b221d0688a71bd3107669ac576b068a"],["/posts/59037.html","5f562901ddfbbc4b690f78da70e98d7c"],["/posts/60816b5a.html","4791882a10e3c729bcfd7b1a50bcbdfe"],["/posts/69978469.html","7b7284eb1a199767a9893252ae01f3e1"],["/posts/6a752619.html","163a7f3a14bec0c21652082f9e74d079"],["/posts/8cc73e65.html","495c2528f01423cc63142547a3b98a09"],["/posts/beb5106a.html","5b3196eb80879cb16dd4867107d64659"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","0ecd8073e0f3c2d1e4cc1ef74b2630b5"],["/tags/C/index.html","2b0770bc79c056d1982067b8c3277e8d"],["/tags/C语言/index.html","8316212bf786f5dbf7a00510be127c2f"],["/tags/Hexo/index.html","4844e960ddd4dd1901acd0b2ecb27832"],["/tags/Java/index.html","ec4e17ae2a1b76e1d7c731a9d4c7dc8a"],["/tags/Mac/index.html","f3dedbeb754537c75b21e21b8e6beae8"],["/tags/Parallels-Desktop/index.html","8df227e92fc8402ce856845bf2e37cb1"],["/tags/Python/index.html","c95fd552b9acb9e0bcc35132f4416f34"],["/tags/Qt/index.html","4e15b727879d03bdf0d9ed5612f6afd8"],["/tags/abbrlink/index.html","0898ef2126b214bed47e324413efa149"],["/tags/index.html","ba6fbfe1d60655cf1304fe1000f3a557"],["/tags/冒泡排序/index.html","3e34926f31a08f54568abbdd32ac295c"],["/tags/双向循环链表/index.html","b2cfe57543d3e981c5ef5207e4504a7f"],["/tags/双向链表/index.html","afe9292096860404fc524888a38758f4"],["/tags/希尔排序/index.html","a60c89b1c0196b2e065a7b99b70f4a40"],["/tags/插入排序/index.html","4947e0b3093e9ceae65d6e210e0d8e34"],["/tags/数据结构/index.html","b5a275d7e8e5f1d1d6288abd2a277027"],["/tags/杨辉三角/index.html","682ff27e64ebb9ef4751ac192f4098f6"],["/tags/栈/index.html","3d2b2275fb338de5c74928fcdaff9b0f"],["/tags/类模板/index.html","231b27516341012253b072246a8316b8"],["/tags/线性表/index.html","317b1090a61dc182e3eee301680a06e4"],["/tags/选择排序/index.html","8fed80dc81f86c2aa48275c410fa3863"],["/tags/队列/index.html","5cc94df5ce1d09a8076ab5e50e41f524"],["/tags/顺序存储结构/index.html","411b275cc532c0239a1a3452081ec954"],["/top/index.html","dd616d0c335841b2e346206cc8f70206"]];
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
