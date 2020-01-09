/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","26f6fc584bb954c0630d65a770ae59c9"],["/archives/2019/10/index.html","03232c6a335559edbcf25cd16e56f9e0"],["/archives/2019/11/index.html","b0162cc77afdf8a235e1a275fd27ea0c"],["/archives/2019/12/index.html","9ebb47e6419830a1d89bfd843b3b9a07"],["/archives/2019/index.html","7b419df19ed46feca208d1b1913f2a31"],["/archives/2020/01/index.html","48ae41c7ba876a07316c7f5036a5f522"],["/archives/2020/index.html","64a2c25d8346ff7e8fff0d3c98255572"],["/archives/index.html","fbcce433afd3ea326ed536370e00e9cb"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","5936aabbc2544b1d5deea5322cd08edf"],["/categories/Hexo/index.html","15ec92218a8ae10b27dd3910b9c456d8"],["/categories/Mac/Qt/index.html","8d156f45090b4e53cd950c00019dbf28"],["/categories/Mac/index.html","1778bc7a0b0843dc9cb34367b30d8408"],["/categories/index.html","f98ab590da35e16a83701a457126b7e4"],["/categories/数据结构/C/Java/Python/index.html","946006219b891c21228992b0e995fec1"],["/categories/数据结构/C/Java/Python/排序/index.html","9fa04c39a52f5097783bdd82525bc8e2"],["/categories/数据结构/C/Java/index.html","0a1b994ffdb0c4e0339c97c6cfbe721b"],["/categories/数据结构/C/index.html","78c7db59eb7da72e3e79bc675e9c884e"],["/categories/数据结构/index.html","b330025a441d8f5f4248973928d7b08c"],["/css/main.css","ab8e82a31e3e2b8fbbf8f189739f6e48"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5924c3323ca3baf661e6be3f74c7bfe7"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b6a395155279377224c2681ef58ebb90"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","bd8e32a0a61f40fe7d7c490a1cf1d0b7"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2ab4f5b5b392827b132bfe41c892dbc2"],["/js/src/algolia-search.js","e556b04fdd2436ecc746693e24e01b44"],["/js/src/bootstrap.js","494a63f2d9d7a3eb626d9d2a7a2ba6a1"],["/js/src/bubble.js","ea0515766337ec0023aa518833bc83e0"],["/js/src/clipboard-use.js","9ab4cdab49b3e11aa439b8a6b2f63073"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","12822adc21c9fd5b960354506f5ce1c6"],["/js/src/exturl.js","7657e9fddcd0d2a18bf792bc92cda3ea"],["/js/src/hook-duoshuo.js","51ab743371ad0a49954f0150ec00cad6"],["/js/src/js.cookie.js","7b2afb67b7b0ae658197ecc249917e82"],["/js/src/linkcard.js","468a95240a32ceab370eb7268ad373b3"],["/js/src/motion.js","b1f77909eb6f478d10c9e7cd94045474"],["/js/src/post-details.js","45c9e7e43c7bf24816aab61af769efc1"],["/js/src/schemes/pisces.js","29166cb241625da7e75f5066e5139bb5"],["/js/src/scroll-cookie.js","abd8710eeb3d9a6f8d0d1f18b3cd7426"],["/js/src/scrollspy.js","b4b1c3cb349a78e8c23a3ef6d254b01f"],["/js/src/utils.js","71058e5d79a8733e66ee9f82a6f3cae4"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","36b883bd9b13529c95ea98f289e79207"],["/lib/Han/dist/han.js","7f3f953d16799d5c8f2e9b49b6a5c5ab"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","53a55236e550d2ee40c71181ea8769a2"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ef9783d198d2bd0eaceecc848a745924"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","93fc4ddf56c1bbd95db9993889443e82"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","7f25fc0fccb5c2358abc3ef33f2da007"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7bb555a1cb8a775b299e216af271f56d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","5a57752c568dec9a145ddf70057b7d77"],["/lib/fancybox/source/jquery.fancybox.css","7fb992636c87745146f458fbf7358eee"],["/lib/fancybox/source/jquery.fancybox.js","5ebcb4a2d00a4cb1680068892e364c85"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","c2002954828416a48df0c11437f8e854"],["/lib/fastclick/lib/fastclick.js","c8fefa20fbe45e577b689460c7d4368f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","be4c83cf04f7c3e3b2d4e6e8e6939dd3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","9eb8148ff5f5d4ee8cfced0d07c193d8"],["/lib/jquery_lazyload/README.html","f20aaceeffb1031e4de0894db98de45a"],["/lib/jquery_lazyload/jquery.lazyload.js","62bc3f5ff9d73f539c4760e79bfd87cb"],["/lib/jquery_lazyload/jquery.scrollstop.js","a743b350887b34c1cd2b383a0e6db784"],["/lib/needsharebutton/font-embedded.css","5c99781bf1b6415c0374c0cccb984f03"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","06b7dfdcd5ea0c75d099c59faef496d0"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","df2362c2c5b403740e10a8e424d4aff5"],["/lib/velocity/velocity.js","ba9504f68dd7f3800135721a5d8eb94b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","911b35a6f82810c4f9121b1973e5f303"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b4afac153b587cad4878b5104656d50f"],["/links/index.html","55bfcebdef302493ffaabdb93909ad2e"],["/live2d-widget/README.html","7fb3b160950b11e6dc02cb820bc69473"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a8505a949d75ebb0806a4acf844c0839"],["/live2d-widget/demo/demo1.html","1815173fd43cf0b8f6da3c5e243e6528"],["/live2d-widget/demo/demo2.html","f96e6b7d5f3c25b1fb97f0228e21ca1d"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","76a4fe62492184bc658ce01e12b0668c"],["/page/2/index.html","7aa6ef7343dd25a622fc7087e5b1edab"],["/photos/index.html","cd97829b75fd1e10045e905ba02d92c9"],["/posts/10528.html","7101aa79fc85aa4aab8a9bb7e61095cb"],["/posts/14311.html","7c82dd1f35fafafc3b964817a11f4870"],["/posts/15468.html","9df389d381e13985e2b41e302b9677e4"],["/posts/16107.html","10fe22613d2db1ee47998bc08c225d16"],["/posts/20352.html","1055b3ab8ef090d5465189bcc125e6d4"],["/posts/21238.html","3a0945d84ea73f520a73d2bf35dd16d0"],["/posts/22281.html","54af8e06f8b1a46a4bfb5c8d49a034c0"],["/posts/51203.html","c07688825871bda9d4a4615263f2ca08"],["/posts/59037.html","c15cc8716dfff5f1102f269b29721495"],["/posts/69978469.html","7252901937d6004edf42adb951d27319"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","0ad1130008057371f4bfc73921c3c137"],["/tags/C/index.html","dc111e56faadb941d18aebc664c2a0d0"],["/tags/Hexo/index.html","780ba3644a30b2fbba97cbce53758460"],["/tags/Java/index.html","6db949edf4d73b4ebeddf77ef0cead02"],["/tags/Mac/index.html","a10862c3f5c639ec4ea99b85be782cd6"],["/tags/Python/index.html","4afc7ae2f4aa30596468dccc10e70e50"],["/tags/Qt/index.html","47d3438b4257d4897027542c89b63048"],["/tags/abbrlink/index.html","587925d522a45c981cec13ae42a122de"],["/tags/index.html","2b1a2cfa813b52640cb60a3fe6a76bf3"],["/tags/冒泡排序/index.html","3865eeafedd92d7ba34ecad96fd18104"],["/tags/希尔排序/index.html","13c1eb226a8bf92d5f8b3de937dfaa1a"],["/tags/插入排序/index.html","7e0fb56ba9dd70fa9f150ef98e4f1499"],["/tags/数据结构/index.html","46126846dd8e2dd4d0c9b42cdbb52e87"],["/tags/杨辉三角/index.html","9a6690bc55ff82489e8595e4a459580b"],["/tags/栈/index.html","10aad71ee618cb4add8ed000481da3d2"],["/tags/类模板/index.html","03a23d49aec2f709c38b0c905a6685f9"],["/tags/线性表/index.html","d514d59b98c0061917aa54a02debe7f4"],["/tags/选择排序/index.html","a75a8b937fde734ee491de701211a566"],["/tags/队列/index.html","ca0f49a4c9330ad415d14a4b481f6b90"],["/top/index.html","5c2934fd8dc551566199deef5430a7ed"]];
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
