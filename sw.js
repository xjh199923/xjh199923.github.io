/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","dfc5cef60e035f400a1314323d8f567e"],["/archives/2019/10/index.html","f56cf69c19112d4f0fca365bce26589a"],["/archives/2019/11/index.html","18beda3984a295dceec069bd1eecfe9f"],["/archives/2019/12/index.html","5e5c64609367103046b216e15c5626b8"],["/archives/2019/index.html","f92111a19352948302284cb6c58f738c"],["/archives/2020/01/index.html","bc6ff7d61437d6cb688af302de685bbb"],["/archives/2020/index.html","49b6124338e318ecf535a9d713381a38"],["/archives/index.html","f0b3580396e0438e0862037202a45822"],["/archives/page/2/index.html","f048be5a886913702abc19b271ab0cee"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","9ae5449cc1a0522362fd4b85571b0749"],["/categories/Hexo/index.html","4e30e1b08a7b1e51afed4b1f76b8db9b"],["/categories/Mac/Qt/index.html","7443c2780c00b9f0d539a75f23bd21ae"],["/categories/Mac/index.html","79f2e3b5171768e0c5e23fcbb2f0e386"],["/categories/index.html","71b5e9496fafbcb0b956e4a82bcc70db"],["/categories/数据结构/C/Java/Python/index.html","0995f17514385eabb2cc2091c73ce1be"],["/categories/数据结构/C/Java/Python/排序/index.html","367424d0414316dea6efc60c7b680494"],["/categories/数据结构/C/Java/index.html","91b05f352d675e4329bd79ded8b6db6e"],["/categories/数据结构/C/index.html","fab25cc067db6a0a408d65b5073dc179"],["/categories/数据结构/C/双向链表/index.html","6e4a2fe994a7931c00d94c7c84b345ca"],["/categories/数据结构/C/顺序存储结构/index.html","93918efcb1f4c86e5ef4f09d12a81a05"],["/categories/数据结构/index.html","edffe3c7204367540c49e96b208d0cec"],["/categories/数据结构/page/2/index.html","1eb27664baf0d1addfd89f5c59bb6cea"],["/categories/玩转Mac/index.html","82ecc9a21c1498a0d47e7aba53609071"],["/categories/顺序栈/index.html","123aed422ec663dd8cccc60ec5be20a5"],["/categories/顺序栈/数据结构/index.html","3315f96cb46371ee62fed9cf3fea6a9a"],["/css/main.css","25655eb7e073889bc80a6eb6dd427d10"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","336806c3a855d31471d1a1451f54b5fc"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b564f6c4881968c91b4e2aa3f479ed10"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ed1a44fd765f6ad13e2bd0d3d975cdcc"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d2c60d028012162c3af3612ca6c01562"],["/js/src/algolia-search.js","a5e46c5f334599cfaf8791553858910b"],["/js/src/bootstrap.js","dc14cef74da00edca7d94177eac5dafc"],["/js/src/bubble.js","cd87f680c998cf93b2220a4a7cbdebe6"],["/js/src/clipboard-use.js","dc31c542295ba657728152b7a4b04d29"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5cbd18f3a949b9d478bf9a97ddeaebff"],["/js/src/exturl.js","86487ce130df438c43bfe200e630ffa5"],["/js/src/hook-duoshuo.js","52aa6b5159cf592671cc087e119ffedc"],["/js/src/js.cookie.js","9a7b0b562865b4262650ae2099a54896"],["/js/src/linkcard.js","53d97cb44c81c7981775fa6cc579fae5"],["/js/src/motion.js","3905851945d324c98e6d6ee54e2571a9"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","724121f24d2bb73e728aeaee3b3ae3ee"],["/js/src/schemes/pisces.js","99ba077610180764cb0c12b999782551"],["/js/src/scroll-cookie.js","9907e25234d2a595cf5766bb4d66594f"],["/js/src/scrollspy.js","6ee00cc845c7f415683b97e6143a7dd9"],["/js/src/utils.js","bcb09b41a76dd8d0d8ae8b971f6e4dff"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","c545738ca3b48bab72e3ddb28b16810a"],["/lib/Han/dist/han.js","af944d3894a5f0ab5b5f8101edb6c1d7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e6ffb2478eecdec0a81db94c08e9c416"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","148c2821b1286e94e71a029dedfc6072"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","47e2596450f7b85ecb3c2467596aa2b4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","862662fbd40e19da09bab4c1671891e6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e9177800f2d4e90c1e28562adb4f815f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5b4a1332607911a2ef30ff012ae9ac74"],["/lib/fancybox/source/jquery.fancybox.css","8493f486053f1d0ca77daace066178a6"],["/lib/fancybox/source/jquery.fancybox.js","54ef86bdc162aac2a41bc12ac019c81d"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","9dfc310927ca2dfc72bb2f191b834422"],["/lib/fastclick/lib/fastclick.js","dbcf3bcbc5989aeb3dd12dad9d199856"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f2dc1976b6f19cf698ffd305a925983f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","36466d2014dc84ce5ccdc609b23f42d4"],["/lib/jquery_lazyload/README.html","790268bcdb64508fc2346aeeabf0e268"],["/lib/jquery_lazyload/jquery.lazyload.js","3f90e49b755d590b3060846fc8577ee7"],["/lib/jquery_lazyload/jquery.scrollstop.js","24434d103926746dd2fd1195777b23f5"],["/lib/needsharebutton/font-embedded.css","529e15d0402b372982d4717cb29f7c23"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","06f7e2e8cffc30a4e5b47c1c9b46253e"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d388f8de2f0a8771db86e91de25a9fba"],["/lib/velocity/velocity.js","914edba39856a65efd3eb7d34fb152d9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","c11bdd08474d513c37ded71e832f8992"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","811eeefd7ba8b43c29885f535740a1b0"],["/links/index.html","a8c2d7ffd1fb32b5fc95874df0415e9a"],["/live2d-widget/README.html","b4b8d0f0d765ef231f2ff1823dfacea1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","e4a4f2ce1744ca8f4c2a57ebea52efb1"],["/live2d-widget/demo/demo1.html","09fa3216df2aa520055d5e18823f3c3e"],["/live2d-widget/demo/demo2.html","880c16de82c3d70d5650d1276ef92c26"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","ba9477ea08d4c4398e4c2fdb5616fc67"],["/movies/index.html","35409ebdd9fba8b84c796c3def64b368"],["/music/index.html","ed6672125da1ef631551e7414455ef58"],["/page/2/index.html","f62a8631e08a32f5a3acb2adf44efcb6"],["/page/3/index.html","c27203cf72fd876aba61bbc13b12a91e"],["/photos/index.html","54aaee452aa24da0e6184b35fde5dbb6"],["/posts/14311.html","58da5b69460346ddb6b98144de911476"],["/posts/15468.html","f45c8dd9515cde5a8199078b7910781e"],["/posts/16107.html","600313298a09092b2a6c82f772fd9264"],["/posts/201e1121.html","e7ed8a96c33ee88a8b37d9133dab2df3"],["/posts/20352.html","e4c448e3bff86f661512e0caa7fd2c13"],["/posts/21238.html","7fc7f68d646733f09afa2ea796de9768"],["/posts/22281.html","f068a2d153dd432f062b3454c26a3dd4"],["/posts/278598dc.html","ef066e360fc94960f18b7b924c3aec3c"],["/posts/30c404a6.html","d8780d0a7b524c3860a6b5274beec3e0"],["/posts/51203.html","a8a33469077f09376f3b429dd1d53fc0"],["/posts/59037.html","19b8e7d9b4c68f48d6da3d4c0be660f2"],["/posts/60816b5a.html","715324bc60bff583aef7f79657b9de6a"],["/posts/69978469.html","225dca168b83ce5aae1cf7805f1af08b"],["/posts/6a752619.html","38cf17faafc75befcfade24a65a721fa"],["/posts/8cc73e65.html","bc792946d46a1bc548a0e8fd5671b093"],["/posts/beb5106a.html","a3a8e771a8541fbb8bf44fa15a2ea4d2"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","38f438152e0a7de78d9baa3a93e0499d"],["/tags/C/index.html","74131a95894c6a356fd9829cc7ee0a88"],["/tags/C语言/index.html","5bc3fd822382768866f166a7f5ab7529"],["/tags/Hexo/index.html","c372b62bb8ee6a0e0ae5f8850c669704"],["/tags/Java/index.html","5cefa8143c3d4ef5ef3c1bfe6b55f57a"],["/tags/Mac/index.html","5f134adb57ce60f968baa7a725781ac7"],["/tags/Parallels-Desktop/index.html","7d041a0f7e7f86fcbace9cdb2db76763"],["/tags/Python/index.html","a88736b5e57d4f75450a51189e572a9d"],["/tags/Qt/index.html","274ba35a58e1ec3e30b3787f3fcb3064"],["/tags/abbrlink/index.html","866ca64bd64c37686da5f439dfbc75da"],["/tags/index.html","b752cb1fe518afb6c802a68bc14c2ecf"],["/tags/冒泡排序/index.html","97012b45059649a416bcd2bb109d08c0"],["/tags/双向链表/index.html","18be9128a32ec18765f5a70b5168b5b0"],["/tags/希尔排序/index.html","f7c98d3562d482e58cd316245dd4cadb"],["/tags/插入排序/index.html","3a010f4b160b243c781aa2354b31468b"],["/tags/数据结构/index.html","877580d13eb666985f3d020850187862"],["/tags/杨辉三角/index.html","851770511322caad1d2ee4b9b93ef90c"],["/tags/栈/index.html","ab42c9bdf47466079a774db3782d6cab"],["/tags/类模板/index.html","aee32088e9a3dc6faf944b32598c408a"],["/tags/线性表/index.html","b863031b3f7e5ebeb8b92ef51435544c"],["/tags/选择排序/index.html","06b1cd09c8dce6de345a0e31587d704d"],["/tags/队列/index.html","a89d597e5f420945bbf20b77b75bff6b"],["/tags/顺序存储结构/index.html","75190898df2b916bbc634910338670e9"],["/top/index.html","c3419f84e8b3d89fd8573e9c2e208ff5"]];
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
