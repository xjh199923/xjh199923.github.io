/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","87774a945c187b82f235fedd082856d7"],["/archives/2019/10/index.html","033f7245fbfd430d803e65e06ae6cc22"],["/archives/2019/11/index.html","59e1159a1d764c8ae9fd33c8aafe8556"],["/archives/2019/12/index.html","02b598a13bf47ed9013e584bff143f8b"],["/archives/2019/index.html","a900fafe7b18e11a9d18e00169b3fe43"],["/archives/index.html","cf7079f17d990a1807083b879017ea36"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","66ed948a4e8d990beaed9a798b21ee09"],["/categories/Hexo/index.html","3887d5ffa7628fe6a2a9cf867a373a27"],["/categories/Mac/Qt/index.html","6bbf125bda29d4a935bc7b41316ce5e8"],["/categories/Mac/index.html","f38c7fbe4f521103dcce377615e3547d"],["/categories/index.html","4cf4ceb8c9dae91bb256b507cc7e6880"],["/categories/数据结构/C/Java/Python/index.html","fc646d7af92417711731a26432a8d499"],["/categories/数据结构/C/Java/Python/排序/index.html","e00d2969073bb458a6b13a773ad053b5"],["/categories/数据结构/C/Java/index.html","d3edbf440908336bcec024f7cb4be5e7"],["/categories/数据结构/C/index.html","0d280df5b5c432a25d627da49cf9e1dd"],["/categories/数据结构/index.html","1858523e574f0f417f35837801504c99"],["/css/main.css","49dba8e76bc040967a594b03798c8677"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ca2c20c38a4914e82d1e6902869f766c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","3b74c08b74505e5385fbea555cb16203"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ce5dc5769dfea634e6e91e99eb9c0fa0"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d8394a11d746801bbc54bab9c04aa681"],["/js/src/algolia-search.js","d5fba1d2edaa63334b481ba7f9a27905"],["/js/src/bootstrap.js","10ed33385de5c99606ab8ff544d87972"],["/js/src/bubble.js","b208de8e6351e8d355e5e3facc47523e"],["/js/src/clipboard-use.js","62d94e7081a147497a3cc2f889badcde"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","1c2d7277c42280787cc160ae3101beea"],["/js/src/exturl.js","37477de85074de61b4cadaaa96e4500c"],["/js/src/hook-duoshuo.js","1b663fe804839ac8ddb02ecb7f03fc4b"],["/js/src/js.cookie.js","2f1dd3e505e21364d5c231d88bf18682"],["/js/src/linkcard.js","a9ce825c3901d857f2d4d784ffd1bba3"],["/js/src/motion.js","9050abbbd33f640e61744f194a29e869"],["/js/src/post-details.js","87d48f014ff49c893f44e3bc7bff42d0"],["/js/src/schemes/pisces.js","baaf5fbc3fd2df18caa549b100e18245"],["/js/src/scroll-cookie.js","a39554899bf983d1fd39a41da1bbf06d"],["/js/src/scrollspy.js","8d65253733048a0d6665aafffc05fcb1"],["/js/src/utils.js","4cd206b5d5e3862457cca481d40a3674"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","617d18d9a8b5ba9f905b2e1f80cafb1d"],["/lib/Han/dist/han.js","ee40d12e01f6626b743bd361e9be490d"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","facc8837140cd24affa194c42ad70972"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","6e0001f6f5b9590bfd8a843e79981a8b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b5bb35923b65ff5b24c4dfee88a5c699"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9b92efff21ef2885d1b3bba021c7b5a1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ced0437b2f9a185a6968f2c259539815"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a3d48a90bfceed8a94455ddf309a0eb4"],["/lib/fancybox/source/jquery.fancybox.css","9e0fe26c2c4728ce47319f4cddc17065"],["/lib/fancybox/source/jquery.fancybox.js","512da6111200e04391a3d31292586d40"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","365e190a2a80f3454a3966d621ecfe1e"],["/lib/fastclick/lib/fastclick.js","ffcb963af11819fa1f7c9ef1c29282da"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","49f75aa337f933cd78b0b1e6648792be"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","95b6badc33e4a724dc60491456a385b9"],["/lib/jquery_lazyload/README.html","c2587aa290fae4ccb50588ad5c38825e"],["/lib/jquery_lazyload/jquery.lazyload.js","9ef2d06eda82bfbb64aae92dbba4105a"],["/lib/jquery_lazyload/jquery.scrollstop.js","56dcbc1dc0afd7fe20a6dc81f289d3fa"],["/lib/needsharebutton/font-embedded.css","4b6e78082540913f5bae96837974517b"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","c2d4b1dae89a544b7bfbe675010538ac"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","187c8aa4baf46f44f8e56b8e3c2ed303"],["/lib/velocity/velocity.js","cf88feb5898f107995017969e1715f5e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","839482d05efc4622ecd68524b3b9b224"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","75353daec14df47fccb6c5c78ad53a0f"],["/links/index.html","75dae97b1a47a7f0ac1adf7f9ffa2e3b"],["/live2d-widget/README.html","f8554990c2abf83a4b371e1c41ce55e4"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5e18f9a98c227f13b947d67879ac3dd7"],["/live2d-widget/demo/demo1.html","06afeb0f07e0d1117b4c401a6124f9be"],["/live2d-widget/demo/demo2.html","c168e45a3ece5de38cd75bd5e877e892"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","341ec51163cb644cc26883628dd60d2c"],["/page/2/index.html","459cb317941f2dec2d38269dac48ab61"],["/photos/index.html","69a1df5a7db473e18d0aa75c9d8c40f9"],["/posts/10528.html","ae5ca789fdc47893468a869c77c2b0ff"],["/posts/14311.html","f2570f6af4d89d824855cdbdd2276c5d"],["/posts/15468.html","aa5b4059095fd8b77711238f3e4b6860"],["/posts/16107.html","d25a35d67cccbdca5e6ec1408100a916"],["/posts/20352.html","46da213160caeba5c81de245e09d9f34"],["/posts/21238.html","e74b4299e9ab51c76686b7bdd6cc6ee2"],["/posts/22281.html","305cca18170e1ea2b6288168bea9b5f8"],["/posts/51203.html","e477a886c6a5cbce1903b4a44c9acfb9"],["/posts/59037.html","db20a5487e87bfaefc83ea5a2b294375"],["/posts/69978469.html","df4356cd196f1f01405e56064d461442"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","e812864907d5e7bb8360b4ed0e6ff84f"],["/tags/C/index.html","beb8f42f539c4e93a922ce4732ef86f1"],["/tags/Hexo/index.html","c1974330a9397c8037cfd96fa98ee3a6"],["/tags/Java/index.html","2235e73c518aa722c4a9d7b01cc26b45"],["/tags/Mac/index.html","a8f2e330686f35d4ff4d5003c026adf1"],["/tags/Python/index.html","a13eef9cfd9799bc341342d95906a5c3"],["/tags/Qt/index.html","cab9dcb742efab738d9746deae565509"],["/tags/abbrlink/index.html","5a9a8c8d7e71c0a93c2752260fd8a4e0"],["/tags/index.html","add7b9382999554d07c25562725ea4ae"],["/tags/冒泡排序/index.html","0bf116ed3b2915533ace188aca5e19f1"],["/tags/希尔排序/index.html","5712b4546c982ad614bf11a6f11017c7"],["/tags/插入排序/index.html","971a64e075a892fa8516bfbc429c8666"],["/tags/数据结构/index.html","5d951756bf2fc7ce7f8443810dc98087"],["/tags/杨辉三角/index.html","96f9e287a23f177f4495e3653d15ed5b"],["/tags/栈/index.html","49330704e7dbc1aad528a6158f017a67"],["/tags/类模板/index.html","9386972ba389a115b4f472620fdac38e"],["/tags/线性表/index.html","a41642de80882afd8508ae3a20d08d9e"],["/tags/选择排序/index.html","73a522f90b1c236dcd85eaa261872305"],["/tags/队列/index.html","9243e11daeaaa6aeb199739bcb84e533"],["/top/index.html","daff3b783e6438a2d5b84d41f0796753"]];
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
