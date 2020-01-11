/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","59df7ee99b2cf3da276d2fc035a5aad6"],["/archives/2019/10/index.html","ef69a3b13ce8309c6a7308fd6f31d481"],["/archives/2019/11/index.html","0b887f865d5b7ced7d9cd581bdb7bdfe"],["/archives/2019/12/index.html","e842c2579d1162d6986ff045c7cf112d"],["/archives/2019/index.html","65c8ca7101a71513f9df8c4b04f3c263"],["/archives/index.html","191bce71a726773bbd6479b2d1d91376"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e9b22992fbf0c26f9916da5b1e5ceafc"],["/categories/Hexo/index.html","bd58673542456163dce02efb129a95a2"],["/categories/Mac/Qt/index.html","5d604bf7e42292e3eb376ed877ba4e35"],["/categories/Mac/index.html","78592ae59feddf651ef85ed5b208b757"],["/categories/index.html","4d884fb55abfc751ce916dbcaded7bf7"],["/categories/数据结构/C/Java/Python/index.html","49510768258e1242dafa768efaf5fb75"],["/categories/数据结构/C/Java/Python/排序/index.html","568e233c14fbfb8824ea843301c5376c"],["/categories/数据结构/C/Java/index.html","f44c9718a7fa17877a5f121f27705898"],["/categories/数据结构/C/index.html","6187ba6db311cb05794fd2638740f966"],["/categories/数据结构/index.html","374a2cc57d0f5975411922e3f2c10346"],["/css/main.css","42727290c6a799bd517b17b0ff36ef4d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","4492a37cc99156134a54265ba744b3ba"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","ad44604468056b720fb5823eb0af12ff"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8956796f6e7c541c469f3b9a31d9a8b5"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","2a669824b6e14575976d5ffa787161b4"],["/js/src/algolia-search.js","eed871ca953a3743b58a4ce782a67939"],["/js/src/bootstrap.js","13c93c3adcd36e5d1cdc37bd0697c118"],["/js/src/bubble.js","0689bb789a03f8ea093bc69ca117c064"],["/js/src/clipboard-use.js","309aa39920c92cba9f182356f21665c0"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","3d253f76afdb680c9a7324d192b38ecf"],["/js/src/exturl.js","2ee864c52235dbe73daff9617d5a9b58"],["/js/src/hook-duoshuo.js","916d7ae6604c7ff9e9b5d71f8d503a2a"],["/js/src/js.cookie.js","5fa507548cdd0430557a84c2c9fcf97f"],["/js/src/linkcard.js","87b4a5b6a8d5dfffa4d32980dc55b366"],["/js/src/motion.js","57e6a6575c0801a1517f30db252cbe07"],["/js/src/post-details.js","761a54c968c55d8e7a4e5440c82c3bb1"],["/js/src/schemes/pisces.js","a4d8cb3f940d42eebaa167d77a6dd647"],["/js/src/scroll-cookie.js","c1ee9c8774104a7fc60c023c29ab170f"],["/js/src/scrollspy.js","6fe8111a65ac3c4f780d95b1f72fbef1"],["/js/src/utils.js","a48cd2c355c961ed0ce408e0c2c96671"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","304580d6cf7fea24569edb7763905011"],["/lib/Han/dist/han.js","ab68f6cd36c9927bb1642c7ae1fd5965"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b56c6c2248c3ce46f07222d2523e7189"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f286d01677a43bafffe6e9e5ecb6bdd3"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","baf89ec8f3de581ea4c242bad6a11668"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f655da1e51150de1c7db4048efd80b5d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ddeec1d247edd22311864c5ea4b53295"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fc7e1252ab81410b14ff2294ee585bc7"],["/lib/fancybox/source/jquery.fancybox.css","8e5077acb50bee12fa5146419331afc0"],["/lib/fancybox/source/jquery.fancybox.js","8424a02cdbd1413a7b69e9ede31a88dc"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48be81e48e2dd811f91d0924452f8ac9"],["/lib/fastclick/lib/fastclick.js","7b3e566f88c61bd77bc9bb898dcba0c3"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5e31cabd59122b20dbac2683dce7f979"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6181fd13adeae68bf7f171b4acce546e"],["/lib/jquery_lazyload/README.html","05137784434b33e05cc27b0fa75d28ac"],["/lib/jquery_lazyload/jquery.lazyload.js","6f06b6b66889291b5cbc3cb85f71e93c"],["/lib/jquery_lazyload/jquery.scrollstop.js","78e07b837d6327b5875b8c9ccc7c3a81"],["/lib/needsharebutton/font-embedded.css","510ceb9b3ccc8c006fb7b0067ea4378f"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","7ae08354b7a7c31dba29a1e41e36afb1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","50f7e6efd6b4243c3a0e8ad1a45bdb5f"],["/lib/velocity/velocity.js","d951da1b20fe565be2c60cbc4158ef5e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","8598358d70e5ea72e8a24e9bafffe7c7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","de1fc1a69f487d453603a9441ea3a049"],["/links/index.html","ababd5fdf50785965788774438afed03"],["/live2d-widget/README.html","812533a6fa0049dd2645b0af915ce1c3"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","dc4791f636278a64881e3fede19cf022"],["/live2d-widget/demo/demo1.html","b38bcb5b522728e8ae83f6df69277444"],["/live2d-widget/demo/demo2.html","78cfcff42676b87b45937d2f1e10a39b"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","dfef3f5adbc73d9858e5bd9622fde650"],["/movies/index.html","4509b96bbaa61ac7a45857376a969db6"],["/music/index.html","0797466eb3bd850b1ff7c4971432e3df"],["/page/2/index.html","3a15ba5fec66b89a17fa95a0efc29ec3"],["/photos/index.html","b9674797e549ea06a19ec02b15afd13f"],["/posts/10528.html","e5bb43e53f79d03122da344567fc1a7a"],["/posts/14311.html","7a425d6a454b1ee299a09a3f702b26df"],["/posts/15468.html","4cbce1316eccdd60b3acf437166d58cb"],["/posts/16107.html","45cac296a81daa4061a26b43755cb60c"],["/posts/20352.html","b9d0ca6ed51f9e64665f5888dc287008"],["/posts/21238.html","f1cece6b3770db2f921e84aab3d565e5"],["/posts/22281.html","f85f6411b079672f76f6d360aa329d03"],["/posts/51203.html","3fce2cdc769fff61f2aa6766896df4cc"],["/posts/59037.html","be55254ab5d004b6d62a43eb84106899"],["/posts/69978469.html","6c7d3fb84dfe04bb4824d7860045a016"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","84b4f74210e29ee768090d78b830cd97"],["/tags/C/index.html","f0bbe769b50d66c3ceeb20d86c55e597"],["/tags/Hexo/index.html","66edaa1087e764578f35eafbb4a2e9f1"],["/tags/Java/index.html","363e00735266bd94963098497f2ef531"],["/tags/Mac/index.html","dc1376a08894474ac1d08f544ab6ac63"],["/tags/Python/index.html","5adc3037dcddc88f05b3e9cfbdf0b0fc"],["/tags/Qt/index.html","a7a8bfabacf3a095627371653e018c04"],["/tags/abbrlink/index.html","f9e2c20e25df1116f4625e2a85ca299a"],["/tags/index.html","bfec4132c1b4f3e283b1894b529e8ff7"],["/tags/冒泡排序/index.html","45850ab35f80c4a1d92a29e355416e06"],["/tags/希尔排序/index.html","caec4e11ec24e35f12b02ac70e981087"],["/tags/插入排序/index.html","1e514be6f099573cbbcdb1e8b770c90c"],["/tags/数据结构/index.html","46971841baaf906b41276db45fe309ca"],["/tags/杨辉三角/index.html","4c2ecedb660deb74152ce9d0838f5857"],["/tags/栈/index.html","aab097a2ce49a239a2bec6934cf8f948"],["/tags/类模板/index.html","15a231762d62dc94da6a73d0eda43c0c"],["/tags/线性表/index.html","70d74a7a40f00ac69d08efd559778b3a"],["/tags/选择排序/index.html","56c4b7c3ada7f99f59c5062c0cca803f"],["/tags/队列/index.html","2a3eb5c5b14dce9e7e128bc14538e1b3"],["/top/index.html","2ab4eefffc9a80b056bbc26bff2c2568"]];
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
