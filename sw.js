/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","73cff2b1e4a876ae35d9da1a968d32d8"],["/archives/2019/10/index.html","a2daf261242662d176ed3651efde7075"],["/archives/2019/11/index.html","0ce1a88696ed8f2ff2039cb894a2ef55"],["/archives/2019/12/index.html","9ab536c674b75dd4cac5ddb2676b6247"],["/archives/2019/index.html","1a6abd785ed1a8ccf5cbfe08c2632967"],["/archives/index.html","1658c8ba20d01f6517b07d2a2d42ade5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","a7ea254205d6151c72da97307f9ad7e5"],["/categories/Hexo/index.html","ec747e1106069588f99ae66b1e9fcd36"],["/categories/Mac/Qt/index.html","c103527dc9fcf0b98f723ebf279cc5d2"],["/categories/Mac/index.html","a43361e1ef01908b69553fb9d0b39937"],["/categories/index.html","0aa0236d9bf53b5973506c48ac0d095f"],["/categories/数据结构/C/Java/Python/index.html","3861ca850aea9031730bd4e323f3aea8"],["/categories/数据结构/C/Java/Python/排序/index.html","3ff4f0345e44010bb1c1c0cb4981ec61"],["/categories/数据结构/C/Java/index.html","e2c3dde8f58b1af79120fcb751e8cc3e"],["/categories/数据结构/C/index.html","e6f4a0f1c6d95e518035f6ce13126030"],["/categories/数据结构/index.html","921b58644abec240a7c151b47d812c51"],["/css/main.css","c5b18fa7b24ff9aa4733bfbd1ca8f4bc"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7a0b9c6929b7cb1e1fc8258a81e64153"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","a09832038fff80a0717f6d379fe2eb45"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","37f9c373acd72740460df8fd7739cad4"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","50f001898ec847d34bbbef04c88611a8"],["/js/src/algolia-search.js","2348c507452caf7d19af51cb30788b0b"],["/js/src/bootstrap.js","4b8a9954ae5cbd069fd07243a5ff6187"],["/js/src/bubble.js","efa7beb6bb7d89a2585def91026068e9"],["/js/src/clipboard-use.js","fb935680e84542d2760b1ff778d415ed"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","67f2cd2e4cf5ec77043189f1a8de139e"],["/js/src/exturl.js","240e22d467cd5c7e953005c32dd664b5"],["/js/src/hook-duoshuo.js","92e410b2931d7b244e0d42ed513f96e4"],["/js/src/js.cookie.js","6464aecd66b478f5676558625a750b21"],["/js/src/linkcard.js","b78b402a68364a4241c2e1706d4de417"],["/js/src/motion.js","72921e8448a3b922f963944bbcab31c0"],["/js/src/post-details.js","9cf3becadf2087f18e49ee9dc8fe6083"],["/js/src/schemes/pisces.js","62ea21fe064c59cc671c0fc7fa49c7e4"],["/js/src/scroll-cookie.js","304f20583afce0b9705f636e486b7b51"],["/js/src/scrollspy.js","d10f08eb01186786288f2eef76db966a"],["/js/src/utils.js","c056a183594a5dc57bd190c28c630708"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","2f1180f9c1025870bba86b46787b07eb"],["/lib/Han/dist/han.js","94e7564e075532c86d9f3b1eb37fc764"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","286319c5e3b2fd15652682774ef3e3d9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","4c978b48eb2125f03654c6145a61a15c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","c1ebd3bf2698731a73584da58694c633"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a62ec49ae5f2e469675e6c0ed24b9283"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","eb37695d74130f068567097a53087ba9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1be3e83bf35080d0bb7a86f5f51bc817"],["/lib/fancybox/source/jquery.fancybox.css","142e30a092e1d52ad796d895fb8f3a30"],["/lib/fancybox/source/jquery.fancybox.js","cb8c195845268a642487fd513dd6cc88"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","6e78c9c3b2cb00a5ef6fa73033e847be"],["/lib/fastclick/lib/fastclick.js","9d8d9a15a2c43c073bf9cfdb2f0290d6"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4f752f8c7128e69d683c0cdc45a9264f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d1a5fafbef2a58e8693b5153b9bf5afb"],["/lib/jquery_lazyload/README.html","041e860f9c51a5ad2993e5e2a299878f"],["/lib/jquery_lazyload/jquery.lazyload.js","4ba2000c059350010eb12b1ecac439e7"],["/lib/jquery_lazyload/jquery.scrollstop.js","39b4c762ab94cf86273e2ddc614f1f3f"],["/lib/needsharebutton/font-embedded.css","8876f79c7119e76af914bf8b6ceac4b3"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","fdff4469b5ec60b5260c9cff5dd1e080"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","36900a4fd9ad1977127067c406655c9b"],["/lib/velocity/velocity.js","5953ce235e5d8ad0d61ab7bb32cffa66"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8536ee59f565ba01b3cbe859c5a5af3a"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","0d23685accd92201cfa78c0c82723a38"],["/links/index.html","8bdec3eedc4f04dc653bb93159b8a46b"],["/live2d-widget/README.html","d9884f163cab04af13dde1865821638f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","ad2e9d899d41f78ecfde218e6f381ba1"],["/live2d-widget/demo/demo1.html","9dd13bdf0f58ace763194fbcce5a619d"],["/live2d-widget/demo/demo2.html","398919d4b48cd5ebfd9455eb2ffcc4f8"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","deb6ceef309dbb8555e3e7c122768d7f"],["/movies/index.html","13f4a6ec44995c32472106ff8cf32acd"],["/music/index.html","1a9ba16ab3a3891aa43ef25e37df5499"],["/page/2/index.html","bb3484fc6be741fd7044a0f6835b1878"],["/photos/index.html","f339f0a41d6571188ff0fffa3a2e4bce"],["/posts/10528.html","69924008210964dcd013df7508a9953e"],["/posts/14311.html","1a7704b6e5331544ffb4263c92cada10"],["/posts/15468.html","e0ffde4be2c3ca4939e5760b23e72f2a"],["/posts/16107.html","7d0bd3a0046d1b28fa12004a9f09f341"],["/posts/20352.html","bf64f91fc94d654fc7e09e781735f769"],["/posts/21238.html","1f1cc71c7296a3b37fb8d2fb5abffb73"],["/posts/22281.html","2a4a8ee1eb6d49ba7ed0ce21e752e963"],["/posts/51203.html","fe71a05c4878805fdc328b4310977718"],["/posts/59037.html","7022025070c9965c909f3d203579e31b"],["/posts/69978469.html","b1503ccc51437e77a7e850ff7f3c9327"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","bfc2892265092169e6ef697083186027"],["/tags/C/index.html","a0442ef07cfb149154de17fae44508c7"],["/tags/Hexo/index.html","c38bfa3e5f3812fd715a15ef10edb619"],["/tags/Java/index.html","ee5e58078577a034ed375a1512d8976e"],["/tags/Mac/index.html","db631eaeb5d045e7a8a5462e58fa2439"],["/tags/Python/index.html","60f4d6fa3740e7c0e729f81b4e788d27"],["/tags/Qt/index.html","1673b0b89f0d4df702d743efe100144c"],["/tags/abbrlink/index.html","2c726ed3a0e0c29b0d93c43ea2cbeaae"],["/tags/index.html","68ccea618fe4edb2fd7235fa9fecc694"],["/tags/冒泡排序/index.html","6c81ec07f88704c86aab4ba862154e2d"],["/tags/希尔排序/index.html","fbb2b0a62e48b50df0b07d3400d25df0"],["/tags/插入排序/index.html","1e0253c0aedd9d34bc46bc6b3a4042df"],["/tags/数据结构/index.html","1bb51c43a130d0f9d252e505e69f6a81"],["/tags/杨辉三角/index.html","37620b4e3ceeca7fcc801b271e07a1c8"],["/tags/栈/index.html","95a7a9b1ae200a0f286a1b77f78674f5"],["/tags/类模板/index.html","32a583837a2375a242ed3709a3b8669a"],["/tags/线性表/index.html","cea7df2f7e292560bc773df8677a5e6d"],["/tags/选择排序/index.html","b8e265d260f338228d36265f38f8f223"],["/tags/队列/index.html","c823bd77347182b61596fc8f0c6e8cfb"],["/top/index.html","12c5af8e596d071bce38026bfecab836"]];
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
