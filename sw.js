/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","05c11f56d4721e57ffc493bfe2c17c97"],["/archives/2019/10/index.html","54f1c168be12f4a0a712e8b6f0b0f803"],["/archives/2019/11/index.html","30d7006870d9e425f6ea206e462bac2e"],["/archives/2019/12/index.html","bd98b9cb32888b19f203824163e643ae"],["/archives/2019/index.html","067f7f63ffd3ca150e2c2d9d25996bda"],["/archives/2020/01/index.html","76a24720157b534dec07f6a1afce1c67"],["/archives/2020/index.html","005d6b9636991dd64b2f31c25ecf7012"],["/archives/index.html","bf9c75e02df3356e1288103269bcaded"],["/archives/page/2/index.html","588799c10597e20e504d9512438a51a7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","d3536cacacfd4ef115504566d2bae1fc"],["/categories/Hexo/index.html","2a02e874a06ef1341b3a6ead2b6428d1"],["/categories/Mac/Qt/index.html","636b69351ad07a76446d4eba3999ffd0"],["/categories/Mac/index.html","3e2df61b6e6be3778c94fec119f390b8"],["/categories/index.html","0c4dc9ae93de05f7d6a8ac5b2f180ab9"],["/categories/数据结构/C/Java/Python/index.html","2de16896c1418a359bfc4215e478e587"],["/categories/数据结构/C/Java/Python/排序/index.html","5ecfef6b081e16e29065113c8e9591ab"],["/categories/数据结构/C/Java/index.html","85a7fe3212c6e5dee9f2a3a93b6c415b"],["/categories/数据结构/C/index.html","e6f189df11073dc546a48cfb5baeb742"],["/categories/数据结构/C/双向链表/index.html","86dd06ebb61fd564c118b59e67df2c08"],["/categories/数据结构/C/顺序存储结构/index.html","720821a5705adc822c3cee78ce412024"],["/categories/数据结构/index.html","cb62e9e7a6e917e6bf72263482c55a58"],["/categories/数据结构/page/2/index.html","fee78943e3ca787e5e3ea4231e18d6a2"],["/categories/玩转Mac/index.html","1668ca3f1d2fc077875a6ee5e8c0146a"],["/css/main.css","aeda8b21a7c7caf2164255da32fd5725"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7b785c01b1f65548ce87d8f3a44c376d"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","aa8904f791fbeadc2ee6fa8927549b54"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fe39943c1ccedf093b094923f8bcd729"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","13c01e1c69b0e60fae56449d5f0c9911"],["/js/src/algolia-search.js","a4749894ce5dfcf57bddcee719d566a0"],["/js/src/bootstrap.js","c4cb3251ae04677341e726e6ba3e1c5b"],["/js/src/bubble.js","80f3cee6a1ca43cbe9043a7c82b49064"],["/js/src/clipboard-use.js","57627a1ab6715f8d37fe15cba2e360f4"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","988c5f11c3bf7c5e06f2eaacfcb696eb"],["/js/src/exturl.js","4bd79fa956dcacb9dfd43f23b33fa650"],["/js/src/hook-duoshuo.js","b6fbecf72877a2b7b3007b8cbcdf3767"],["/js/src/js.cookie.js","8986b8280bbaf16059505d5e7e915555"],["/js/src/linkcard.js","7c8f58c7e2f830d636aded8f5404f335"],["/js/src/motion.js","a5d6a6ffd91e303aeea240614f6a21ca"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","b6974d985d0d8dede9bf6a265c54e10a"],["/js/src/schemes/pisces.js","08d346ceba1a3d4fe634a3d9b89a5fc5"],["/js/src/scroll-cookie.js","83aeeb07ee0d85dfb3c3a129de4c287c"],["/js/src/scrollspy.js","2407da64b1e5b7b5656c7ad2579e3f1b"],["/js/src/utils.js","63df2842f8cf4bbde28602b1a21b25ad"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","6dcd3d53daff4e331ae235c88eca01d5"],["/lib/Han/dist/han.js","c1221ac657987cdd030a262daf3abb25"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","bcef83c243fb0c3499c0e24c71b0c68d"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2b8e80d6851500d73e5fab8734a2594b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","8cfb40d9dcf00c3f4b2b52a81558e11e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4c38f01b2a56ad850d2d5c6b509b4507"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","9b7e17fcd97e831fae88354a47b6454c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","996b6708dea4573450220f83892dbef9"],["/lib/fancybox/source/jquery.fancybox.css","b1b9a1d223f95fb50c989b9e1d28a626"],["/lib/fancybox/source/jquery.fancybox.js","dfb6ec57f2b45e2bb8abc869ef9eec44"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5598546c35ba771bb85697fc36d318fd"],["/lib/fastclick/lib/fastclick.js","5506585b7f30025c98e4d8c080cb8e6a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a77fa01688e01033643d38f2492969fb"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","fd4be4db7912503ac578a354212d794c"],["/lib/jquery_lazyload/README.html","410f4447b777b823b30788bf490e627f"],["/lib/jquery_lazyload/jquery.lazyload.js","1c4d733a987e08352436fc20e4e0ccf8"],["/lib/jquery_lazyload/jquery.scrollstop.js","9d1abae04f2f4e604f25ccb1eb3c0cf3"],["/lib/needsharebutton/font-embedded.css","1f29d9c66e6fbdd0c98ec6e2ac93471d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","08e2949c068265a83440542add4f1a4b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9e1ca5fe7b9d5c9358d470d9a891b8fb"],["/lib/velocity/velocity.js","7751fb4392da03cec6ff8759e717dc17"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f99bbdcadbd0b45bf3fc99b1f68de7a8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b37a77a457f99362322e6631b35b2074"],["/links/index.html","0f23096c6c41d2f8529956f31351590e"],["/live2d-widget/README.html","68d4a404212fb1e30c4cb1ea4ba8f03d"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","e314decca9f15a69f1c7009b5eff799c"],["/live2d-widget/demo/demo1.html","1fd8e8f34884aa3b3c78b884d65865d2"],["/live2d-widget/demo/demo2.html","be3223b20ae3dc3823841d525034a2f9"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","a920fa3962cc31b6d161ca5ea46d21e6"],["/movies/index.html","e9924e54ebc483119118e9e46a5ff739"],["/music/index.html","70bb89c034ba4b8bec1c82c9690a4dd5"],["/page/2/index.html","4d4e0ef3de003ea9b1f90d32d14a6ce3"],["/page/3/index.html","6125cb4b16b30216af3ed22dd0ea58bd"],["/photos/index.html","e40ae84e60f86be1aac2758f79a68d9d"],["/posts/14311.html","ba94d32922956d0e461d52a89ac44872"],["/posts/15468.html","3b3c455150ad8b14658de8e4f7a625eb"],["/posts/16107.html","e4bc8da6d7cff3b1aea3db49199e82f7"],["/posts/201e1121.html","dfb4029ed4cdba251a92632fe5d7cef2"],["/posts/20352.html","1e19572bf681614e02800399dd569ce8"],["/posts/21238.html","febec06eeee55511ee7080747011e5d8"],["/posts/22281.html","db1145b81492695edf6d99b4ec659af9"],["/posts/30c404a6.html","02fb39738ddff804bb2407ee0ed2a0c6"],["/posts/51203.html","19a4f603a9a864a497de244c8bb9f310"],["/posts/59037.html","674147dd84c1f500f5d0941d33d90a63"],["/posts/60816b5a.html","bf0b65534b05ae0d5d44d35e7cfd3236"],["/posts/69978469.html","dc011723280bc49eb059378eb66e90d2"],["/posts/6a752619.html","1c8533b238c076bb90cdfb6bb7bb0998"],["/posts/8cc73e65.html","be4e1e9d7847d617a37359ead5cc1d67"],["/posts/beb5106a.html","52822aec639c0655b14aeeaea9db334a"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","5c872458ed546c067fab20fefb7d7e9d"],["/tags/C/index.html","6641603cc30261421f36f6bcd3c7a06e"],["/tags/Hexo/index.html","b0f0754fb1d33a2b360b0e553e919084"],["/tags/Java/index.html","00fa7be4b5368b3eace5c1f7936a98e4"],["/tags/Mac/index.html","c04000048b3a0a4fc6b367720219bdc2"],["/tags/Parallels-Desktop/index.html","ec3a7723781ade0d0ea626ce679bdfae"],["/tags/Python/index.html","b5a7ddba3692503cf7d8663a9bf766f2"],["/tags/Qt/index.html","f5f8173de2156f04c39f8ec8fc48c7d2"],["/tags/abbrlink/index.html","b9cfbd2c71593fb25e4e8a3619813f02"],["/tags/index.html","fbe050c2992b51e3ee9d4bd0d0ea1032"],["/tags/冒泡排序/index.html","130f8cbc70af0407dcbbc54f4fe58d84"],["/tags/双向链表/index.html","2a4433cde53edd06c0ba86e102efeaa9"],["/tags/希尔排序/index.html","1f3756001c5a33d6fdb59fe487d698fa"],["/tags/插入排序/index.html","1be9bec8aa6200002ef975005fa81319"],["/tags/数据结构/index.html","a2b59508c63fdfc3e10f03866b81923e"],["/tags/杨辉三角/index.html","0dc7ebb177306c864aae65031a70f700"],["/tags/栈/index.html","e7760b14102898bfeaee957d62490809"],["/tags/类模板/index.html","5931701d06aaee5ae982c1131be79cef"],["/tags/线性表/index.html","b3e80404b39161153844b448f885034b"],["/tags/选择排序/index.html","124d892385c36481a0370d45717e1117"],["/tags/队列/index.html","a8e52dedcc870784ff2bcccb1f6a9989"],["/tags/顺序存储结构/index.html","2fa15b701f2207bb3eef037f404feb1a"],["/top/index.html","bded4561169ceb532f94bb11cee3c6aa"]];
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
