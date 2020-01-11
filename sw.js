/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","597ccf39e905567f87f33b8ca3275605"],["/archives/2019/10/index.html","5560c25c418836a94bf80db898445241"],["/archives/2019/11/index.html","2fd5e64d1a98f686da0fe68cd39e1a62"],["/archives/2019/12/index.html","ad4b79b95e06a44f4adaa89e61d756c2"],["/archives/2019/index.html","419ebddcc9ddca394914b98d5fad8667"],["/archives/index.html","847431a801ea522a32945dbdfedcb32e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","27ed421b8b2518ef61c21760cbdb9020"],["/categories/Hexo/index.html","f0198f041b390697010750a08139bace"],["/categories/Mac/Qt/index.html","df33d07a6bec64376ff4512148223c7d"],["/categories/Mac/index.html","16beafc704e660906303e37827246904"],["/categories/index.html","71f56476aff92669c7b2c0069567175c"],["/categories/数据结构/C/Java/Python/index.html","1d42e15e70d8c002d23a9af2a8be031d"],["/categories/数据结构/C/Java/Python/排序/index.html","8e9bb768c20b2761a4a07c3727ca7e4e"],["/categories/数据结构/C/Java/index.html","19dc13c19b60e33346ef5a73b36c6df4"],["/categories/数据结构/C/index.html","f0172d5677b47518cb29403418b1cacc"],["/categories/数据结构/index.html","215be4be6c366a289d18e644833b59a2"],["/css/main.css","353bf6a22e26cfcb4c9115ac7cfe314d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","878321b55c58e8587bf15c62be813eee"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","bec276e605f0a3dfa872c134ce79b16d"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","4d5b1f3c471e8d4b3473d13477870477"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","13e6d9cbaafc2f495b920b7fa901ef4f"],["/js/src/algolia-search.js","caa86df72f118f39deb51efe0c1b739b"],["/js/src/bootstrap.js","6946e89dfd332d97647fbf7c574fa2e0"],["/js/src/bubble.js","2e063c646db5280685eebea2266f68f8"],["/js/src/clipboard-use.js","c678eb588665c72773022cc56467f6e1"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","afe911c822c39bd7ce035faa25fb50c0"],["/js/src/exturl.js","463bcc39368c8994e1b0adc1605077df"],["/js/src/hook-duoshuo.js","0c3761769276771df05690834430b8bb"],["/js/src/js.cookie.js","a9f7e93d2fa71583a4d1deb6ce30f381"],["/js/src/linkcard.js","56f2ec891b5ee6e9c9238b96c55246c6"],["/js/src/motion.js","23efe54716041ef6c5159f882bb8abca"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","64756f312eec2b9e7b52d7407e684093"],["/js/src/schemes/pisces.js","1f7af2efc7eb2ab17be323cec8266468"],["/js/src/scroll-cookie.js","b7694f9d2ba6cac616cf88a011e18d39"],["/js/src/scrollspy.js","a8b24aeb3b71ddbd94d8f8f66bc0763f"],["/js/src/utils.js","7b8506ef601f34fe4ed3104e1bf7a0d3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","ab8f097ff8d68d31856112dd3af63cd7"],["/lib/Han/dist/han.js","a6ea23a1bf50b811bd1e6fae3edc23cf"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","5f30943d712127a853431daa12b4b908"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","afed418797539b227898109799fe5b39"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","596f09d6f98d1ddfa64b63d8236e7d55"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","ea21c30c4dc0f58710d4ea23feea751e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","0985b0b2509af5856ba2aa844e25a2f9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","88bd32828d14dcd42a1b1b94a3944381"],["/lib/fancybox/source/jquery.fancybox.css","486a35816c367c61bd4f51e5cd895109"],["/lib/fancybox/source/jquery.fancybox.js","fdd1664c5c80bedce23598e9c718c367"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","1dff2031bfb9b450a629650a84ccb896"],["/lib/fastclick/lib/fastclick.js","b9b66da3e61ea1490f46007836e0cfad"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f59c06d80b9b3516826ff9fe3b59ab0e"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f93f79dda0fc215f26ccd5a0b34249ec"],["/lib/jquery_lazyload/README.html","823a441ae11b7e9a9bfa2ffd27b4096c"],["/lib/jquery_lazyload/jquery.lazyload.js","86ceee77b8dbb4200c35f3f7bf977ab3"],["/lib/jquery_lazyload/jquery.scrollstop.js","a22b8013d4cfcef1acd2382e362b21a3"],["/lib/needsharebutton/font-embedded.css","d78b27a822f20111212b4195eb4225a2"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","cffd807bb85183bffd4c7b95f94edda2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d09a6c8595c3d564d0cb5d4ee70b363c"],["/lib/velocity/velocity.js","6b5a97327d2646e964f63788a5c251f3"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","530f6d0fd2f95e3323a34eecdb3c66ff"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1a93e84dd8a9be8cef97f37d924f5aea"],["/links/index.html","1a7ee633457cd0e43896704c2641463a"],["/live2d-widget/README.html","d6b1a7bcb154c5cdb8aea05d3355b22b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","9c20c025bdbf6b2117beca507502dc15"],["/live2d-widget/demo/demo1.html","54ce662bef025abcac4dc7761369f5e4"],["/live2d-widget/demo/demo2.html","42837f6ae8f77ee89a7cf50038b1ecee"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","d4661ae0b8d0578e1e6d529df443ebf6"],["/movies/index.html","789e1abfb1795ec9b64b68a46c91e97a"],["/music/index.html","2b63efaf72f7b6c4b01b76b65f642e86"],["/page/2/index.html","6e4fe037443028dec6063b4185602d98"],["/photos/index.html","45644beb865484d1caaa838b364a339e"],["/posts/10528.html","c237a7a6e7759bedc68234b86ffdd4a2"],["/posts/14311.html","30c6386b89b6280390059f09bf513294"],["/posts/15468.html","ee714efcbf5daf8cb028d56f1007af50"],["/posts/16107.html","935a307c901d4511c447ce25a5dc0229"],["/posts/20352.html","ea112f1223fa82e568a35f6b2f09c9f1"],["/posts/21238.html","d0be06ed9ca8bc049f671a271e8105a6"],["/posts/22281.html","978cac70cd17bbb55e723847ef2e36d9"],["/posts/51203.html","c4b22605e0a04a0ad695ca440a768d80"],["/posts/59037.html","c142f931e20f459f69280ac9a94aeff3"],["/posts/69978469.html","b0ef2dbb657ef47b4cd80eebabf8499c"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","360a84ebcc2f3d51a0bfc65999cd97de"],["/tags/C/index.html","d3f270139dacaf04c2f49f57e45191d7"],["/tags/Hexo/index.html","ef6cd04f586521104c67a60a2ee3db57"],["/tags/Java/index.html","299ff5a4d61d03e9af0744a5f976dae9"],["/tags/Mac/index.html","663e027db4e9b276d73d41b73be82be7"],["/tags/Python/index.html","045a17f26ebf640a896e08308d3220a0"],["/tags/Qt/index.html","4cb04ae2f228f7d34cd2d2357bfe05fa"],["/tags/abbrlink/index.html","f17dd756064ae2e8ce381e6394807838"],["/tags/index.html","de894d6ef3cacddbfd1c17c296619410"],["/tags/冒泡排序/index.html","a3f34ba966f10c9e21286871ff63f3ac"],["/tags/希尔排序/index.html","ebd4cadda883c8b00de0b901a57a3623"],["/tags/插入排序/index.html","b188ec569814292c7d03644e2d89757b"],["/tags/数据结构/index.html","ff59540b1c14c648937539168cff7789"],["/tags/杨辉三角/index.html","5967dcb97f7f97e7e2b414a1d5533f1c"],["/tags/栈/index.html","7301a6c5cd7b0fac0c010002aad57d43"],["/tags/类模板/index.html","911ef8d8826b535fede6e0b0a0a83b76"],["/tags/线性表/index.html","54f1d96cf9581f8405f98b16bc31131d"],["/tags/选择排序/index.html","7c964c57847c95496acaf894c680547d"],["/tags/队列/index.html","11d40dabbfb604b5b9f65589475e5136"],["/top/index.html","1875126410c8d3073b57b8e242ef5559"]];
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
