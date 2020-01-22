/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4ef8066fcb558eb17e94a6b7b30cd9c3"],["/archives/2019/10/index.html","08ade2d475e8957f90e2a33d80101682"],["/archives/2019/11/index.html","a408cbf63a11df6020624a804d5ebdc1"],["/archives/2019/12/index.html","0af66035bf61ce2294b99734b31486b8"],["/archives/2019/index.html","8b007dd475623c24e12ecd98edd972d4"],["/archives/2020/01/index.html","6ac2a8533fe9df8c1b965e4605103417"],["/archives/2020/index.html","1945f12ac2e66e2e5f46e62b4028d783"],["/archives/index.html","5170db50ef11069be01c42316bfa42c7"],["/archives/page/2/index.html","bf1b130c0491de6ad78f69e07850d8e9"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","65ae50f39f55265407245f8d22127e8c"],["/categories/Hexo/index.html","116d7ddd7e441cb467b21607a8947667"],["/categories/Mac/Qt/index.html","8f137edd580e0092ba8d97762cfa539d"],["/categories/Mac/index.html","be015a766a71587f26748c621fc675a7"],["/categories/index.html","ae9514be9368c9920214f81f61686722"],["/categories/数据结构/C/Java/Python/index.html","b524fdaa637c4c37a3b4ef99f0cdbf6e"],["/categories/数据结构/C/Java/Python/排序/index.html","13e4c38225bffb1390e3f5aec1ed786b"],["/categories/数据结构/C/Java/index.html","c2abb16a967b9e750e865b421de41c11"],["/categories/数据结构/C/index.html","7e0f08af250fb6aab198533ca7e3b7ef"],["/categories/数据结构/C/双向链表/index.html","e9c45e2a71a7536896138eff48637739"],["/categories/数据结构/C/顺序存储结构/index.html","08150177a0eddfb54d1869b3a4eb1906"],["/categories/数据结构/index.html","650a9c3f18529d71e388d8b089db5ffc"],["/categories/数据结构/page/2/index.html","b13747d6b0f2f09abc1d0ae04042a938"],["/categories/玩转Mac/index.html","55663ac39aef2be702f288e82ce99372"],["/css/main.css","198a75bb4a3fdae0cb2a4188ca89a100"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","cf4481f43c2db7df7b17528e18b31028"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","85b63625ebb7890e77763d5d7de23d05"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","b956fa9781f9a093b76acc561be44559"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","910b6f550e3ef7f4aedf2b853d912f8c"],["/js/src/algolia-search.js","60b0cd734c8f9f167ff552f3ce17d20e"],["/js/src/bootstrap.js","24decebaf82e3735b618e9dfdd56fbd0"],["/js/src/bubble.js","1b9a6c558ceb563a4ebab73a86cf130e"],["/js/src/clipboard-use.js","31f7254a33750d9a9526454c8e17722d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","58c7189d9325be32fb5092304626ce84"],["/js/src/exturl.js","98f59c8b3f9fcea1a4bb715f04160461"],["/js/src/hook-duoshuo.js","081f2c753e578400a8d72e32b1cdec24"],["/js/src/js.cookie.js","6bfa0b300ca4e469f1808ba2dea161f9"],["/js/src/linkcard.js","c39169120f94fc6085c5d17539cc721f"],["/js/src/motion.js","145a817506e2af7ae15184725529c8c0"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","ff298901f66a83b2c7afd7be5cfda5c4"],["/js/src/schemes/pisces.js","8523e0dd1c4bba98d44300793973f8ea"],["/js/src/scroll-cookie.js","ccf40e31cded2cc7b8139ccadfa980e8"],["/js/src/scrollspy.js","8acf125a3d9c4177029161905c32e0bb"],["/js/src/utils.js","c86ea890b1b70086bbb11ed04f493c06"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","5b8b6d2654215bf2e44b8d3b154a9703"],["/lib/Han/dist/han.js","8c42c3115b8a4476ef246a2e6e2270c0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","6cbfa60bed1ae6fbad19652315f22ad1"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2fc92f24708ada43ce626446d18b3f76"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b7746a80e8db22929b0422d99ac996d2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4d1e3e1b87dc273a73b8a38fd2552b8a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","bcffd3e6bb7a9ba218b3298e46fdc52a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cec7cdf616da9e03e6a9c65c704acfcb"],["/lib/fancybox/source/jquery.fancybox.css","6c7200d7516bad2300af30fbc41df43d"],["/lib/fancybox/source/jquery.fancybox.js","666d46eb14ab8cb877f0eaf7f09d27a6"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f124521c95320f463a23ba765acc0cc3"],["/lib/fastclick/lib/fastclick.js","651ae3312a0e80051e3fe149f93d3653"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","0aac213047c519e389ba8e6eb3a0edd9"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","0518e78d05bcbe94fa9d27cb5cca089b"],["/lib/jquery_lazyload/README.html","f02dbd1ece3513e11599ad3dbf61c1ff"],["/lib/jquery_lazyload/jquery.lazyload.js","789807b2d9dd6831edfb6bc1be7d24fa"],["/lib/jquery_lazyload/jquery.scrollstop.js","a240a57d5fb59ea72c9ab7a281ccd1fe"],["/lib/needsharebutton/font-embedded.css","ed4a04a2db716e13eaaa053a1984533e"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","dc8628e2aee4f16e0e0e8be9a3a3b8ec"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","75d3e3f6537834b553ab675e1c9fae9f"],["/lib/velocity/velocity.js","e62917a9eb995da12d57c54ef8a68fb4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a60190d85a96fa0f53c1f199fa2622d6"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","d949295936ee48fd1e2fb0e774458724"],["/links/index.html","5b1249a63d387ea323e8ffbc5763c233"],["/live2d-widget/README.html","f1d3c510f7cf355062863f39ad941e59"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a6f2eafbe49bf63919afd06a1b7b4d1f"],["/live2d-widget/demo/demo1.html","9580757c61bb0bed7be9ecd020cf7d6b"],["/live2d-widget/demo/demo2.html","5716711e410dc446c2d50e9699ff1101"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1af6b7d6dfa06c18319973f898d849e3"],["/movies/index.html","aa75a8f4d76cefd6cab59876526b792a"],["/music/index.html","2dccaf1db8e5f505f11335a7269d6df7"],["/page/2/index.html","6a264274b995f68d4249ca9485cfa039"],["/page/3/index.html","2fcb993b66d23e015f1561fd15a0f001"],["/photos/index.html","b765f401b254138f6cd071cf0e024ea9"],["/posts/14311.html","e8e960f88925bc40e2387539eee5aadd"],["/posts/15468.html","54d9ebc08652381e8eb06e4bfbbcc484"],["/posts/16107.html","88a70ec2942286462528814851b72111"],["/posts/201e1121.html","824d0563952eddbe543f5bd308e8da8b"],["/posts/20352.html","bdfe1961041095e1afc95ea978c37897"],["/posts/21238.html","c70fa2b902a2036632d53b4babb83dae"],["/posts/22281.html","8e622ba307f21bb983364717c6e5c8e1"],["/posts/30c404a6.html","dd56d62a0f8011e33b1d03b8b52f394e"],["/posts/51203.html","173733eef53db1995fb478a5c861542f"],["/posts/59037.html","e3fbc4e4254841554d005a5b67694a90"],["/posts/60816b5a.html","7d5e7c2f42a23e4c2725deab027971ce"],["/posts/69978469.html","dcb701bd6cc34a28bcf2c75157b00f4a"],["/posts/6a752619.html","a2d593f09664d76a7d84f6c79e5ed78a"],["/posts/8cc73e65.html","46d22cbecc9f3bc37a0dc6a7c43dfce9"],["/posts/beb5106a.html","3b745d592765c70882a1c6ecd96ddd31"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","fde7fc0b9d5aaf55a6489a7aa55de9c7"],["/tags/C/index.html","c405d4fd232f972f54a68b3899eeb087"],["/tags/Hexo/index.html","3669dc9c3f3ab538df490ba3b9e73db3"],["/tags/Java/index.html","12a1879caf5340e53e506f377e0f0192"],["/tags/Mac/index.html","b8ccf866850f7fc55cabfd0a0263c3c7"],["/tags/Parallels-Desktop/index.html","9119ca88fcf6eea9175255ed0e589709"],["/tags/Python/index.html","4bc3a5d8328e1f90d9d5cb6dd9267a74"],["/tags/Qt/index.html","fb85c8fad2da8497bab39c2f0dbae09c"],["/tags/abbrlink/index.html","8b1f5887ccb7949fe1530e9af4bf670f"],["/tags/index.html","80c52c1d24e8e043d0df14a5de0666fe"],["/tags/冒泡排序/index.html","5fb9dd9ed2391bf0fd0cb668a287483e"],["/tags/双向链表/index.html","a3fd8adc33f3596bcaf6e3c5003a083e"],["/tags/希尔排序/index.html","c0cda4666b925c1911c790e421b0173c"],["/tags/插入排序/index.html","b2c65a26ac92b067936aad58158e7642"],["/tags/数据结构/index.html","9b370ab17c610ae2f8f2f48a3eb6f7f6"],["/tags/杨辉三角/index.html","f6760bf11b9f6fde5050e3a4fa1d44bc"],["/tags/栈/index.html","64f776dce51bad35e49472345c11ac23"],["/tags/类模板/index.html","8179badaae5ff925cf85884894756d34"],["/tags/线性表/index.html","1e8d0d45e8f5e74bc7591302f4096921"],["/tags/选择排序/index.html","757b6a6b186281322e53ec06493a20e7"],["/tags/队列/index.html","8765394a8c48e482271397a9acadc3be"],["/tags/顺序存储结构/index.html","bea8000a74d8f540d11ff860df697634"],["/top/index.html","5673b592c801ac5757c87331cfea67cc"]];
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
