/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e58573ee57bf8fa1e434c95d5bde2a9d"],["/archives/2019/10/index.html","ae51960145ef912f00cd87dd0768849c"],["/archives/2019/11/index.html","c4b0e71fd0880b4817ecd55216b5f69e"],["/archives/2019/12/index.html","28137172cbe2426e059f12db0c1518e0"],["/archives/2019/index.html","3cbfc36e1fa4cae16405736e7d11a46a"],["/archives/index.html","626b6505ed0690a0e9f914ad99ff3c16"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","b6f6e53a439b898ce841bf0d455c676a"],["/categories/Hexo/index.html","837293505ee24a53feae3c508b09c8b1"],["/categories/Mac/Qt/index.html","f1d0fe573714cfe95d4bc5ff8bbc5795"],["/categories/Mac/index.html","118a5cd5cea0fb1af97614dc1f61b69d"],["/categories/index.html","fa6ea6f00830472bc732ab2ce23186fd"],["/categories/数据结构/C/Java/Python/index.html","3269d893fac2c0dad792b444c22e7246"],["/categories/数据结构/C/Java/Python/排序/index.html","988560f76ebc8b465294914678a1d1fe"],["/categories/数据结构/C/Java/index.html","89d261ecb2780b638af404c0eb5f896f"],["/categories/数据结构/C/index.html","f69aaf6dec3a1069255cdcd6980fae70"],["/categories/数据结构/index.html","82f6a29b0e607405c6b42c78ac8b49ca"],["/css/main.css","a2e0caae67385fa7842324557e4cd54d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","927e231249603889c87969ca9ae7100a"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b7ecef5117d288127a0f1d258f97a055"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8ec87d7fd5c971e614ce440ce0a448e3"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","dc835c6d59aeae85b997c37ecf3a1e06"],["/js/src/algolia-search.js","05c1dbabeccfcdae88b1fa9504235f1f"],["/js/src/bootstrap.js","08bc06d25c30edcf8025f3af431d5b33"],["/js/src/bubble.js","e99ab5f6248b8d5e0cf9af9f0a176df7"],["/js/src/clipboard-use.js","3f60b46886024083811c9e22bd76e8eb"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","c94b28b3acadfd33e56e12b3776cf110"],["/js/src/exturl.js","70b8a968fd4150977fe5360f2a580a71"],["/js/src/hook-duoshuo.js","7e364506c0192d01b34af25f29833726"],["/js/src/js.cookie.js","25c0ed9269e5b754a6e601a255f1bbd6"],["/js/src/linkcard.js","f48b93b440c2f2efc591f783e944f81b"],["/js/src/motion.js","9cde8e15c756b8fed90ca56a924bb0d9"],["/js/src/post-details.js","a121ae6f5d3442394bcda0fc71efaf06"],["/js/src/schemes/pisces.js","1c5cbaaf180852b4f49507399bdf2796"],["/js/src/scroll-cookie.js","195d98bdd6963d5fdc56f3d24f730c67"],["/js/src/scrollspy.js","a0bf2957d685526ff7a1241084aae6fd"],["/js/src/utils.js","a9148920d86880d46c4834f72f5dc7c4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","d2503e14d77125a3e97dc628ce839b28"],["/lib/Han/dist/han.js","b3ff7cb6d534e14a149b7f5689e41bf1"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c033a626699dfbdf5f0f12c4887c50f2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1cff714cd4c63bcaaff0219519056132"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d4b7c54a1e5e97a2ed326b5e551048df"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","0d5f128b382e3ad18bf576d8a64428c7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","377e00dd5ff243c6457be492d89a7f2c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","15032c4d69e832fed0ac524abefe7e4f"],["/lib/fancybox/source/jquery.fancybox.css","5ae2bc5df85b4b79fc8f55cf0d82b844"],["/lib/fancybox/source/jquery.fancybox.js","d53c8f3248fb2078d5eb39cdbde67612"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d32728cf9c109dbd9f2cdc6967959713"],["/lib/fastclick/lib/fastclick.js","deee107e22b20cf51bea7ece8453ff64"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","361c5f78a9c3c7bbd93bcc27d34d32ae"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5e3b3d7fb0e113285cece84171c7f0d9"],["/lib/jquery_lazyload/README.html","f9dc7da286110aab98e3489bfb75e3c3"],["/lib/jquery_lazyload/jquery.lazyload.js","7689f0d0522fcbe6e48c36598d2d6c9d"],["/lib/jquery_lazyload/jquery.scrollstop.js","ea79d970a1bdc0e23d625a9b7ed359e0"],["/lib/needsharebutton/font-embedded.css","9431bc749f0dbc242dda5e03a34bf0af"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","c80dd380df05d30238660e7dc4fe00b5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e9aa4e0c48be318c0278c4e4ad5969b5"],["/lib/velocity/velocity.js","6afeea7fbc04f017025a8b99ee9c5409"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f258f5f7e89712c4712f2cafa835422f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","856459499f874734cc9c7553c0c07081"],["/links/index.html","5f765465daf7c282c7a111f756d72e24"],["/live2d-widget/README.html","9df655686c5e8420be6a7e4eb27f707b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","7f4116e778376c79c903ab99734809f9"],["/live2d-widget/demo/demo1.html","0e49342f882eb18a85ced271d5575bd2"],["/live2d-widget/demo/demo2.html","130d7a9b182b849af57f4d674c3de66f"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","94182b8200c1f77bbd3a69cda86d5a85"],["/movies/index.html","867f05341bd30a567f4dc5df0ba8ff48"],["/music/index.html","3d8675fe190854acc42231c8f13ebf3d"],["/page/2/index.html","8870d979bce67ead23d40fc49b254fd5"],["/photos/index.html","203111728ebea82541a9ecdd84d07a3d"],["/posts/10528.html","b66aea0627c0095245b43f2a5203959b"],["/posts/14311.html","a2114b984c48121af079d62c8640c522"],["/posts/15468.html","595298a8ac2b433b80b08615aa337ffa"],["/posts/16107.html","6d5cebe4f1f13441ddb41bdbaebeaf64"],["/posts/20352.html","6f995c67afbee2dc41c105fcffab8022"],["/posts/21238.html","2345d314a43980ddaa6f14a40a49a02c"],["/posts/22281.html","e97c6b06ef6a7af3bfa10c6d1a0f7b86"],["/posts/51203.html","bb7ece8ff2b68c4955456f08f261cb22"],["/posts/59037.html","6f8aeb305eb50e940e3028a02b0c9440"],["/posts/69978469.html","5090dba395ce6c94b4aa1ad102274fe7"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","dd5b485303bdfd547baa5b47a0f709f7"],["/tags/C/index.html","401c078bda47498f0fe5e5de73aeb823"],["/tags/Hexo/index.html","a406b723c3ca809d4aac63621a773824"],["/tags/Java/index.html","f86a4ade9d4caf661ec174c93df23691"],["/tags/Mac/index.html","5c4aad75ef829c4bb3943be2f8bb2c22"],["/tags/Python/index.html","be83bfc72006f3f823b5a6fcca02089a"],["/tags/Qt/index.html","d76542fbcc1af1174ba6d376b6e6105b"],["/tags/abbrlink/index.html","bef37aa1a80ad205018367d3aa1406a5"],["/tags/index.html","77e0e9e66d15880af328752910226539"],["/tags/冒泡排序/index.html","733646a09839b7dc6478d1d1af25c85f"],["/tags/希尔排序/index.html","96fa5d949c32ce5db8e3d48a72bb8492"],["/tags/插入排序/index.html","33c586a3228229ca805d363c38a9d3e3"],["/tags/数据结构/index.html","bcbc62e44d9ed3edb2b23585354aca87"],["/tags/杨辉三角/index.html","d00fb25485dcfa83be9333ef27a28664"],["/tags/栈/index.html","01bdf441bd0a17fb505202e2812bda5b"],["/tags/类模板/index.html","c5b7294bfa075203ee0ef32e8e9b1e43"],["/tags/线性表/index.html","68870d9680dbfac6a3881fcf1ae13ce6"],["/tags/选择排序/index.html","3c967ff24acc0b85af0c7ffd43e00c7a"],["/tags/队列/index.html","74a1fc66c31fe712c26750b302304c49"],["/top/index.html","3276f88d4ce866a04a79298a259f660c"]];
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
