/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1e468191bd1a18b9ad018bc8c918832c"],["/archives/2019/10/index.html","2500b22e98b359b0e69c900cdcc605a9"],["/archives/2019/11/index.html","b6aeb09a6ffb3e686f1da1b46e6833c9"],["/archives/2019/12/index.html","c78480b7293f258808b63dc6dd64380f"],["/archives/2019/index.html","fb62c8da34ec3e17110ece1d8989fcd6"],["/archives/2020/01/index.html","99f11232f154a36c51c1674259e9ac8c"],["/archives/2020/index.html","1b4695fe4085c55c2f7d8c36897b9a6a"],["/archives/index.html","1e6c756e9a3ec44d99d8b710954d3236"],["/archives/page/2/index.html","b0e64f6321c92065346f01703be521c8"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","9b9d56dd761f49e4fdab8d9bcd507cd8"],["/categories/Hexo/index.html","842970e0000472af6b1ce8b6b45c418c"],["/categories/Mac/Qt/index.html","afbbb01532f6aa3537d69a98e02bc4bd"],["/categories/Mac/index.html","922f5da732cf7999cfaccacc79f880cb"],["/categories/index.html","badd9bbc8f6d37d7cba7bacc3224f5e8"],["/categories/数据结构/C/Java/Python/index.html","ab4cc6957f0cd7300a71bd61543447c9"],["/categories/数据结构/C/Java/Python/排序/index.html","9dc19b719e4d7728de09c2525aa70a46"],["/categories/数据结构/C/Java/index.html","b394ed5a950a6ef773165c741a6636fa"],["/categories/数据结构/C/index.html","ebe9a4520d68d36897e3baefda43f4cb"],["/categories/数据结构/C/顺序存储结构/index.html","ff604ac8edcb2728dcbfac89a65e305d"],["/categories/数据结构/index.html","38b8ce58306c1d2629de609dc4bf3084"],["/css/main.css","100aa5579eb78bc303b82906ed02666e"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","6976df53a8335f62637c5ca8b03d3a5d"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","b05e713f6979a7975b740c4927bb946b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ded6fe7609489647e446ac2f7471b0c7"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","9b2384d3b4b175fa25208abb402c73d1"],["/js/src/algolia-search.js","355d050c5215a667e6334cacfc42b5bf"],["/js/src/bootstrap.js","703dd4c8ba8c25139853abbb7ef603df"],["/js/src/bubble.js","c1abb298ca302b9b7033bcc78f7d1a26"],["/js/src/clipboard-use.js","c2e14ad74647e1e09c8c8fbc565d3971"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","268565e11fa4cde3459d09280aecef53"],["/js/src/exturl.js","e67c1e30d292d9494a4a82d2f2ca44bf"],["/js/src/hook-duoshuo.js","1f524bfac9b4a04b703bc0619d15020f"],["/js/src/js.cookie.js","2dddf8e7438d1b3756b1348dbb46a170"],["/js/src/linkcard.js","3b8b241f5da2c194f9080ad2fc385c02"],["/js/src/motion.js","886f2d3171e750c0e3ddf1151adef02b"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","1b2da414e57dea3d18cf7140cffe2e7a"],["/js/src/schemes/pisces.js","bcbf187126d0efe8b77a7ff444ce019d"],["/js/src/scroll-cookie.js","9edf27154645921c5980ee18af1aad7a"],["/js/src/scrollspy.js","21b2748f1fcbee420ced512cb1a0dc99"],["/js/src/utils.js","c907dc2162b712890a99bfc7204f0078"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","08c9d58c242bbadbecdc449bc749a7fb"],["/lib/Han/dist/han.js","cf3b59046387e39f49c3eec52ec345e6"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ff7c3f2822fc8d20ed3f2fe0ef04fb7b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","025413423d244f7dea10a8134ce03f69"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","924393bfef0c347b0ba026389f57d421"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","acaadace09aa7f58402754ebd4e2e484"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8e19df79095f258bd8a1382b31592ee7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","1fa4494b4bccf7346f04680f41acfdd5"],["/lib/fancybox/source/jquery.fancybox.css","d0eebd105b65237e3bae9e875def7a33"],["/lib/fancybox/source/jquery.fancybox.js","a7b5a27be3d5fae4be21e17e6ecdeb1b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","74f114ae78b10e905295051d5d8d2092"],["/lib/fastclick/lib/fastclick.js","8b67e1232aff82fa2097d296d0a46572"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","91df39a81fd7e4ca9aa6b173e626bab0"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","6a1e5497f5b5f270ec0a0248f88e08b8"],["/lib/jquery_lazyload/README.html","819af2510fa9b408cd6d74bc920420c3"],["/lib/jquery_lazyload/jquery.lazyload.js","7fdccea17ee05292214b56144a5aec9b"],["/lib/jquery_lazyload/jquery.scrollstop.js","8baa43fbc36da2cfa5f82471115c9c4b"],["/lib/needsharebutton/font-embedded.css","31eea7db0d9ea40ce8e4fd8b31501a19"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","f6d525f028f6d6437e4ea31c8cad8814"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","007a07fd4426736f96d733d2f9473824"],["/lib/velocity/velocity.js","672b8fa919d3dfe78b51e2caf407b3b0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","633694c26f49dd4b46ed541699a40f53"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","dc7d7ff0f631c00032b0e8274c7bc991"],["/links/index.html","8f0b91bca0006c7b710daa2f080fa5b4"],["/live2d-widget/README.html","58db1d09636874d98f2169dc337bab1d"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","d1fb1cfd391a65567b1f498c6d925789"],["/live2d-widget/demo/demo1.html","0ccad6c0ffcb6993eef7522e0645d658"],["/live2d-widget/demo/demo2.html","8527ab1b07eab2be7ed33601a40747dd"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","5061b8937aa1f2fe5ae653d3393f2b37"],["/movies/index.html","3734bac5704e16650a7d8776189c09c0"],["/music/index.html","f44d2d2345d5808ef2d2a7f0fdf6a609"],["/page/2/index.html","04c4318bb2079603a2f53187d3a2b92b"],["/photos/index.html","e48de85566a11c5a7d45bac7046716e9"],["/posts/10528.html","754f070b3a907dcc772ae03a0badac39"],["/posts/14311.html","28d8a062f7a600fc59d594e57d87dd48"],["/posts/15468.html","8894c6c2322931c5941ff90c43eeaea1"],["/posts/16107.html","d693539e6bc2732a2620f69834ac066d"],["/posts/20352.html","a6ba4e1fa6affcf3a5485dd76cfbf534"],["/posts/21238.html","9b691ad2adde23ab0d1454d8d7e157a8"],["/posts/22281.html","95474a4a3fb0f190db677ea9ec0e01b1"],["/posts/30c404a6.html","df8a222a9b8610429fcf4e01d2eaf59e"],["/posts/51203.html","1d14668662f48bb74670f11e8b267eaf"],["/posts/59037.html","e45aa457e43a2c4116333a8661e5b613"],["/posts/69978469.html","553b478233bcde3d5841e8afcf777acf"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","539432f7efafa379fe84f15c276bec0c"],["/tags/C/index.html","0ad49ee38db75ec3c54882e8667126b5"],["/tags/Hexo/index.html","324f4778f9b8ae509178f57f7daff906"],["/tags/Java/index.html","05269d868f9b728e8eb2f39ebbca9a78"],["/tags/Mac/index.html","f25a89a8eb33bb266d9618bf69c9b1f5"],["/tags/Python/index.html","6586e589cda8001f3134d5246361ecc6"],["/tags/Qt/index.html","d0f8bed5a631f731658baa0352e128f2"],["/tags/abbrlink/index.html","1cbfd49ea01401d0d6a2b6607b439cbb"],["/tags/index.html","0a0fae77af9b26e0d46c41e84b7b0409"],["/tags/冒泡排序/index.html","a1497204a94fc23d5bdf565553206f82"],["/tags/希尔排序/index.html","d277ff3b75e6dfd67aef20606a0a8b2f"],["/tags/插入排序/index.html","e4670ce44b5d4aff8214db495a7eda98"],["/tags/数据结构/index.html","1ae1128daabf793e5fba0166fa4ee732"],["/tags/杨辉三角/index.html","5d20fb4b745a10fd1b0585e750c5cf41"],["/tags/栈/index.html","8a0da4c28593f3beac1e415e4e114474"],["/tags/类模板/index.html","fb74e8f22fb536da15739dec5e6419f8"],["/tags/线性表/index.html","fea7e967961596c173fe8c007001b4e1"],["/tags/选择排序/index.html","6ccf862aec1a0f377e160e3e4b567623"],["/tags/队列/index.html","da1060ed8ad52e398bf7059b5f5082cd"],["/tags/顺序存储结构/index.html","a6cbcbbde60bda087f99570f4bd8c854"],["/top/index.html","8d99f97c3f464261ef5609cdb879a461"]];
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
