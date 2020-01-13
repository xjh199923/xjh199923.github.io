/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c5553e9ab72c32f54e8ef426029717b7"],["/archives/2019/10/index.html","0dfdf6f941ec19f34502d0f07ce04cc9"],["/archives/2019/11/index.html","7b4e1b44e0dcae873dadc16a5cbef560"],["/archives/2019/12/index.html","f3cecf944a260f462ed5121ac5f98f2a"],["/archives/2019/index.html","83470a92af2bcf432cdfb2faecff0122"],["/archives/2020/01/index.html","0318b85991e66d5b76e8044112ea48c9"],["/archives/2020/index.html","e2002bbd1eb343f314326f9f52cae2f5"],["/archives/index.html","958b702b0926507d5ee345ecd8a1e840"],["/archives/page/2/index.html","a0dce0c61cb974d09162883103b20b43"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","493f34ea57d7c0778c0b4d231bda3921"],["/categories/Hexo/index.html","fe156be4e166a38a1ac8e582ea125d34"],["/categories/Mac/Qt/index.html","3b8f01c818589ee2c12fa60f50080fc5"],["/categories/Mac/index.html","1f294d3b3a656a9426273893b09b0de5"],["/categories/index.html","b7e58b7b53cfdbd10e8639e346339599"],["/categories/数据结构/C/Java/Python/index.html","6bec78ccb2dd443753d6e1b3a34402e3"],["/categories/数据结构/C/Java/Python/排序/index.html","396c8ce38295e72591cb80d973d389f5"],["/categories/数据结构/C/Java/index.html","63313094fc6d0266d64c5f49f0937573"],["/categories/数据结构/C/index.html","a67937fd0ef3eaf56de64afe5a8f8029"],["/categories/数据结构/C/顺序存储结构/index.html","2b59202d21c3e952cfa824ef62529559"],["/categories/数据结构/index.html","09ddb7e3bb4673c9db57c72a0e74ff6f"],["/css/main.css","79d9e28f685ecdcdde8932980352765b"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","cdee5c138a8c0d13f0edd8bc65c78dc9"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","62d3087978cc7f196a5f98cf2a5627f5"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","27490e35ec0daec946c37c39f98bdda6"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","4b3b95a73ac7959e80c539cba30b442a"],["/js/src/algolia-search.js","1968d29d2ceb5189036304dceb7afe88"],["/js/src/bootstrap.js","e46becce616d262bbad87676e44f11e7"],["/js/src/bubble.js","2f1bffe116ffb357ed92db27cb3d621f"],["/js/src/clipboard-use.js","49fa89bf30b40c5d2a23c48485efbd3d"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","efb80ebf38c1356867f5d0911818da48"],["/js/src/exturl.js","a3138413337ccea239956c612d15eba1"],["/js/src/hook-duoshuo.js","fcf1c69ce65709c74facc38d2a5e015b"],["/js/src/js.cookie.js","f299072156c5252fa9a6a611092b4703"],["/js/src/linkcard.js","594228ac2b8ca0a506e973809b4ca333"],["/js/src/motion.js","72e515dadbd8b828b0ca485f41f3e9b1"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","34b4ff98b896e2a19f7519f0a3a76eff"],["/js/src/schemes/pisces.js","ecbc98c753ff184d3fe222546ea8da25"],["/js/src/scroll-cookie.js","991b7d51363a495ef42b3d0f002fdca3"],["/js/src/scrollspy.js","7ac9d444287ca9fdf3c46443d46aaa8c"],["/js/src/utils.js","509bfbbd9d07c3874978c45cdf1a6921"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","24edd843aa3a0d5f568288c9783f3dd9"],["/lib/Han/dist/han.js","606ee15c0aff6200ad1d455a808b2b57"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c7ceab09c018abd83e27e273f77d1ea7"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","abe693c8930dc1a685f89f471280d661"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","253a0f3a6cff1bb32278c0d0bc7dff02"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","da4ce5fdbf5e97b74659576161cd2dcd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3c2a7d9296ab2c14db34573936d7cf5c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6caa299dc651dc9992328470c907b9ee"],["/lib/fancybox/source/jquery.fancybox.css","d5043e4723cf5856be70594730774776"],["/lib/fancybox/source/jquery.fancybox.js","e759b7fe9886e88f173cacf38042ff5b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","236febaad53a171476f2107431e87deb"],["/lib/fastclick/lib/fastclick.js","7b7742738bddf72ed54c8213bc6accbf"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","cd21dd8320f13eb65c66be010ade18a4"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","47166183a945fab3cc9290cebbf4239e"],["/lib/jquery_lazyload/README.html","313ed5d2ef600558d6c8e3d7a9c05768"],["/lib/jquery_lazyload/jquery.lazyload.js","cbc7e0ee4c5e9c1938d141d6b7a56de9"],["/lib/jquery_lazyload/jquery.scrollstop.js","308b5755aeba1665e22d2e175e1fbd49"],["/lib/needsharebutton/font-embedded.css","49d52c227ca7af7e03bca92bc97b106c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","c7c9c796c3ea78e2db3c95449ec6798b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8f8b938208487510c261bf59a9a9ec95"],["/lib/velocity/velocity.js","7ebd0e7650938ca1c1f7f2dc041ac6e5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","eb557452ffdbdf285d078aa6da2df88f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","1efeecb8ef087e9a15820a1ad8097023"],["/links/index.html","697d1afd70b19192a91afd1903091a95"],["/live2d-widget/README.html","4b3b58dea5691c02adbab306912aa520"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6d75103c5ad229ad9ffa9dc38711d210"],["/live2d-widget/demo/demo1.html","c78819d5b99196e030c1f7bb418a5e6d"],["/live2d-widget/demo/demo2.html","e72a8c47d3b241312e46bce5e2bf9a35"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c873bcb120141004c540a86593e6c3c1"],["/movies/index.html","4e10cf825c8799fc520ccb99522e1d5c"],["/music/index.html","1af6e8292ee2c1e75256843e2aacec8f"],["/page/2/index.html","cddc7ee90a1f2ce82ac8fe9411f4fc61"],["/photos/index.html","2dc39b689ea2dd114ec78dd282d5100f"],["/posts/10528.html","e1042e644a117d0c7a203a8d87fdfdb8"],["/posts/14311.html","ea575bdda3b03633b6ed632c32c220e4"],["/posts/15468.html","8a5c44a47d561ec40e0c0498382d7549"],["/posts/16107.html","285527896a0afadd965d73e750f1f595"],["/posts/20352.html","21617790ba450ddf45509c7b15a20255"],["/posts/21238.html","517a3f74be57fb35a1c7139bd7e4122a"],["/posts/22281.html","e0205e147270672f8fdf579336deac94"],["/posts/30c404a6.html","6e80ff06a9ebea798f86e0959e7d183a"],["/posts/51203.html","b97d71f87ae38fdf5270bc8ff6851b4d"],["/posts/59037.html","3b88435e09279cc9fcf7ee3abf47f465"],["/posts/69978469.html","f64a19ca82b7a111122f3dd20e1d25b4"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","34e1316b61d41d23b843336041ef7ab3"],["/tags/C/index.html","b1c1a00b2543283215677bc1a1e2ebfb"],["/tags/Hexo/index.html","c1f42e93142945be3348c72c42ae0da2"],["/tags/Java/index.html","93fc404ccd929bb9ea59ea16d9345157"],["/tags/Mac/index.html","95acdd278f2d6a11ff18e9e7c0ff0944"],["/tags/Python/index.html","817dc00aa12c5639c1565332f96a9751"],["/tags/Qt/index.html","08dc87f54feb72e98485c8090dade88a"],["/tags/abbrlink/index.html","ef082c81afba4279c0cda28fb73fdbfd"],["/tags/index.html","8fdb77f3691e59e8fe36f801bdf341da"],["/tags/冒泡排序/index.html","21a905ff153952e85f4fed19be4e703b"],["/tags/希尔排序/index.html","e6344702612488e9bc0e2dc7f737a657"],["/tags/插入排序/index.html","4a71563876a9d3d9ee20376fddf1ea21"],["/tags/数据结构/index.html","231eecd172bfc724bbe641018b098274"],["/tags/杨辉三角/index.html","dfc4c7a432a95572a7bfe25031f6c7f4"],["/tags/栈/index.html","55ea481fac256095cc1a21af27ec5a2e"],["/tags/类模板/index.html","05d04798e4b329fb62d3e78a54cedee3"],["/tags/线性表/index.html","219facab24a5269f645f19ab58a3a489"],["/tags/选择排序/index.html","1e6dc65b9af2b68606b0a24e87276663"],["/tags/队列/index.html","70288eca51b5a2a5f8e02f8bfb5d57c6"],["/tags/顺序存储结构/index.html","ad9947c83f2deaf61207c2ba89ef72aa"],["/top/index.html","ab922d4df8e99374a787a8f2836bd4fb"]];
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
