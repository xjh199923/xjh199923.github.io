/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7b30bbd4c4c35f032d1b6d4d25a7f037"],["/archives/2019/10/index.html","23c69089301c0c9829d23f8b5ff04ace"],["/archives/2019/11/index.html","289b3fe5069199e2b40f4018bcd50ad9"],["/archives/2019/12/index.html","ca5ea5dc4e5a1274538817e9d10f0cc9"],["/archives/2019/index.html","1ca0fd40ce331fa4a99249410c8664fd"],["/archives/2020/01/index.html","75ff1d5880700c3805ab5a8584cf352a"],["/archives/2020/index.html","a80bfbfc8288c6d52c07b4f0ae8bb716"],["/archives/index.html","88310ab61d633300427a35aea73e273d"],["/archives/page/2/index.html","19ab4207e426f2d8d5ba9384d4aa643d"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","13a31a2f98a51ef89565fcf92d6d33a1"],["/categories/C语言/index.html","4bf283fc5b16407456956f7d47e8b124"],["/categories/C语言/数据结构/index.html","42a1f4568de0f2139f046ee9e5aee91c"],["/categories/Hexo/index.html","69e84a2d6b7c8e65ae2b990573b28af5"],["/categories/Mac/Qt/index.html","1ba6fa28a207aae07fa4719a75f630e7"],["/categories/Mac/index.html","14282945139901e05f353880ada0e8cb"],["/categories/index.html","cb243ecdb3df3325f89053cbd33c45f6"],["/categories/数据结构/C/Java/Python/index.html","346c872991bbc3a5893eb302266a1ada"],["/categories/数据结构/C/Java/Python/排序/index.html","13b31b69c06975dba0696d52a327b9b8"],["/categories/数据结构/C/Java/index.html","29f088bc8168917da5db3f9a91096f6d"],["/categories/数据结构/C/index.html","e4bc8b8c748dc72830d67f7147167192"],["/categories/数据结构/C/双向链表/index.html","f260065313b674f6d1bfe8faaba2af97"],["/categories/数据结构/C/顺序存储结构/index.html","9cfaf65a380d10072f049c180bf54262"],["/categories/数据结构/index.html","7531a37a1ad9948871cb90a7b30b1950"],["/categories/数据结构/page/2/index.html","3a4d08c8c3a97ce9b43812175a370b97"],["/categories/玩转Mac/index.html","a8c3399a65a0ccfcacab430239d8eb11"],["/categories/顺序栈/index.html","3bd650f7929f9644b5e4a577320ee88e"],["/categories/顺序栈/数据结构/index.html","ec8ad85c74c326c689987c1e7527504f"],["/css/main.css","c5ba831044148d910c86da0f5eb73b83"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1dc779d679aef164da7e7aee2c002ff3"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","d0a4e4bc777e99be0daf4b40502f47f8"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","421776055161e3c37d480c7777118315"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","789958c4065f588de049da4d578e13bf"],["/js/src/algolia-search.js","b84aab4801b9ef79453a336b002373b3"],["/js/src/bootstrap.js","cca2bfab4f826e842e22231579ddfbc4"],["/js/src/bubble.js","1bf7cd960ce0b1382f8462bbf7f02f91"],["/js/src/clipboard-use.js","f27a6a53f0d525862fd5a6ddcb3739d7"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","c87f9f8cd24d5bff8214e0eae40a1a87"],["/js/src/exturl.js","34da94287b4e2b7e0a3c22f9ffd91e41"],["/js/src/hook-duoshuo.js","41a6db7cd572269ec05d8be60a08ddcb"],["/js/src/js.cookie.js","1e2183982a0882c8a1eb6a48f3fb8e84"],["/js/src/linkcard.js","025bd1b6177bccaf89d1df737ec9b032"],["/js/src/motion.js","4510903e6d2cfe1e06c4af88021fb3d3"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","35f7b8533b66122bf6b94417c3a8903b"],["/js/src/schemes/pisces.js","fc0d9554148594014af4a63f4d649bea"],["/js/src/scroll-cookie.js","ea0f191d273ece459884cdeb4118b08e"],["/js/src/scrollspy.js","61c808484e5ecd54413d54697c755ef7"],["/js/src/utils.js","0d3194db7c640aaf0c2a45143312da83"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","f08a3b56fd2d45ba632ac159ca2f58c3"],["/lib/Han/dist/han.js","bc61e39b72a47331174a0591d096cbcc"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","90829cfbea4d2664ba700ae26c76244f"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b354ed31fdd1c9c2fee80265a8742eaf"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d54029779db707f5dd5cc3a3a49ef8e1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","36fcd293eab245404b0a0f39a0df18b9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","779400376c5c0e646a22b829a9f13e1e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","0e5dc111495583726dd016e7d2d949c5"],["/lib/fancybox/source/jquery.fancybox.css","6b90130e965ec23cbc5a93903777cb1f"],["/lib/fancybox/source/jquery.fancybox.js","bf97fa4f3f3729808f0c98ef4a50edb1"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5c0e2946c47a5753a033c44bf6b0e9ce"],["/lib/fastclick/lib/fastclick.js","221d66b17e47c85d603f52bed364f8cc"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","bafa2077543b41ca2accac9e4e803108"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","af8fe11cf9df36a9c1d77c786c62386a"],["/lib/jquery_lazyload/README.html","78bcabf9e0bb81a6075b31bfe9d511e4"],["/lib/jquery_lazyload/jquery.lazyload.js","4c0f216dae90c2485dd4484b34454e18"],["/lib/jquery_lazyload/jquery.scrollstop.js","78bae0119b1bf72d3a6f1c58d657f45e"],["/lib/needsharebutton/font-embedded.css","1c41ad03598e4469d313236373bf50fe"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","c976260d84e37742f5d54952bbd3974a"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","482a81468c1d1c1d8787bdfabb5e9227"],["/lib/velocity/velocity.js","6d99faabfbd7758fdaf8abbaa1464aac"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bccbac0190939b8dcaed8ffe35cd03dc"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","487a6635ba9520252b0f837efc8c161f"],["/links/index.html","d961d04387246df147bdb8a61d89ed92"],["/live2d-widget/README.html","b1b7c9f31e4cef9fccfc5b158cc23220"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","49ef2da8b72da575520b885ad03ea8cb"],["/live2d-widget/demo/demo1.html","1a3e9a1656641832f684873ae777b3e2"],["/live2d-widget/demo/demo2.html","c55fc733a430be6b14a3e921994a3bc3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","27d67842348aec4206ab8aa4d733806f"],["/movies/index.html","950ad4f41eb12ae0013555de69050bbf"],["/music/index.html","cb5a7e8bfccb72c47ec98d9a4f7f2c2b"],["/page/2/index.html","c41ad734ed9f192c136171efed5c470c"],["/page/3/index.html","b53b2aeb22015a472687811380fcbdd9"],["/photos/index.html","e7351fd5274eb954e5debe65c124c1b4"],["/posts/14311.html","b76a88e663043dd5b76dfc327a07152c"],["/posts/15468.html","29f68a9a8b4a5d2d052afa5077eb51e9"],["/posts/16107.html","e6398680d174103c9ff605ab7a4d6221"],["/posts/201e1121.html","4b0bb3a412ada13368d81e336541ce99"],["/posts/20352.html","f12a7a427a8fb6c34640e50905747190"],["/posts/21238.html","e2566be966104865fa122902b751aff9"],["/posts/22281.html","b5f7194db337e039b06f9804047b7549"],["/posts/278598dc.html","1a60f3c3be3152aee62f931d97d14ea7"],["/posts/30c404a6.html","7b7ecdc9ae56bf52f9dc0b8cb9ec5612"],["/posts/51203.html","f42784672fca1d7bbc24d203031e093f"],["/posts/538e5180.html","979e36cabcd44afb15c8e158bd1a29fe"],["/posts/59037.html","e27a09ad3eabff9b7caef9a05d2a2d33"],["/posts/60816b5a.html","b93a23cdb584413b89f367aa6216e967"],["/posts/69978469.html","5a36227e6283546df721e95d6de557e5"],["/posts/6a752619.html","e3e29a15f5f79cd293496e69f6104c60"],["/posts/8cc73e65.html","5d1c625ee6155029e51e4531d777a201"],["/posts/beb5106a.html","199f139d35dad0d2b06bbd2ab92190b4"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","795250662b96096bcf0b2cc03a2f5bde"],["/tags/C/index.html","d70b001f783d42626f7ce9ed3726e061"],["/tags/C语言/index.html","aa43a626bbe39aca5ba30e3e63ec6b55"],["/tags/Hexo/index.html","245ba668f791417b6068a6efec0d2842"],["/tags/Java/index.html","ebb5a9b867651fa34713f4b5b424cd40"],["/tags/Mac/index.html","cef142029919e0eff4580d3c16282515"],["/tags/Parallels-Desktop/index.html","7573cf073a55ea77e97562a57b74734d"],["/tags/Python/index.html","78d86d48da2f3e6d6730cd5662589955"],["/tags/Qt/index.html","3c7a3e81b459f748243a1eba0d0fadde"],["/tags/abbrlink/index.html","03dada485d553ea3acf1f02b3f8a38c4"],["/tags/index.html","2cda5d844f8bdff1976834f3bc48a3e3"],["/tags/冒泡排序/index.html","7673424c42cbb6f126521c6e796bdbff"],["/tags/双向循环链表/index.html","b888ede4ffd822ee7f198d166823d5c7"],["/tags/双向链表/index.html","4d33c89478ec7c8f837adfbbf6e6f0c9"],["/tags/希尔排序/index.html","3e13bf7710e19e04fe8d5dbd9a573d70"],["/tags/插入排序/index.html","a2e90534ea3d00d348c4ac65ce4327d2"],["/tags/数据结构/index.html","a805aedb6fbb0d1c6af23e2556aaaa98"],["/tags/杨辉三角/index.html","e037950633a91fe55fa6eb1573ceba07"],["/tags/栈/index.html","d925eff66c1c0b10931ef4145fa9d073"],["/tags/类模板/index.html","9f1984ec2bb0eec59d6db7956c3f1017"],["/tags/线性表/index.html","ab12064006033be967d1e47b09b80a99"],["/tags/选择排序/index.html","9913b47a61dc511873607fe099a0d4cd"],["/tags/队列/index.html","e7513a3f3f621d4f2f6e593acbdc0cb3"],["/tags/顺序存储结构/index.html","d20c903cdb619cfb3d0a87bdc87aee2e"],["/top/index.html","74eb316663e643b3e9c8f3ff1a4c55bc"]];
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
