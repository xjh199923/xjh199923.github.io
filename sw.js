/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","dfe55db0da27fbe8ea99c92b55ac0bae"],["/archives/2019/10/index.html","75386f518260e5f2088b176395291013"],["/archives/2019/11/index.html","84b458b59be895f8c8f7fb82dd1bf029"],["/archives/2019/12/index.html","079e856a45fd7e9541aeb025286d5b06"],["/archives/2019/index.html","3d0990c3741e679e810ac52f5b6614ad"],["/archives/2020/01/index.html","dc3f6fc57baf1504bb82d150228ad513"],["/archives/2020/index.html","3f986240a1f8c6279f8b60020c8acfb7"],["/archives/index.html","a483a4291982cfc6b856423f9ccb42ff"],["/archives/page/2/index.html","58950ab773d73389fdf9745626b74cea"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","959f2f85b9a19f1826ed029df9aad5fa"],["/categories/Hexo/index.html","adc8491f4c0af646d123c2091ae86990"],["/categories/Mac/Qt/index.html","cb794c249aac094e73d4efea2a2df0b5"],["/categories/Mac/index.html","c020927755c8e21d5dba72078cce2e8f"],["/categories/index.html","1b0606836ccf36bbedbf91f35d24bf84"],["/categories/数据结构/C/Java/Python/index.html","91dda77cdc3af3f0e099df0a5f1ae603"],["/categories/数据结构/C/Java/Python/排序/index.html","093da42edb714e5f086b7eda2dbdf4f8"],["/categories/数据结构/C/Java/index.html","d38d765687a30982a685704a238b3ac5"],["/categories/数据结构/C/index.html","3e133ac218a2ea8d2654cc5ac58d4fd5"],["/categories/数据结构/C/双向链表/index.html","35314dda7c3b6ffdd46e2992c2bcb34b"],["/categories/数据结构/C/顺序存储结构/index.html","70e9475d3d37f3c316c5e87589c0ba79"],["/categories/数据结构/index.html","af7f3a4e58fcf5fb964c8ce33e2f4175"],["/categories/数据结构/page/2/index.html","582b28ee9e1949371a2cc9e90d6cb109"],["/css/main.css","3e4606eaedafd8c1f0bc083c6e9f5c4a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b0e7a51718b04203c16a04ffa9ee2808"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","1bedd5946c4cfa67fdfdf46eb745bc18"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ac38261137e52313642f80358b4c370d"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","11d5d80d375433e5a3379848b80958bd"],["/js/src/algolia-search.js","a22e7143c198874910145dcc347998d3"],["/js/src/bootstrap.js","68888ce736cb2ca04734446d02a4fa77"],["/js/src/bubble.js","22fdc59e19e7211166d6f7e1f50d5d17"],["/js/src/clipboard-use.js","3b6b2898ad5ae1c172fede34f6a4ab12"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","d42e8114229a9fd38a3f257a7138af49"],["/js/src/exturl.js","de530f063bcfd6ec1760442a41bfb2be"],["/js/src/hook-duoshuo.js","ce9ec303ebd04da00be3ee986103b01b"],["/js/src/js.cookie.js","e3c8a2a617ced1ef5e9eaa275ca1c385"],["/js/src/linkcard.js","63acaf1832d7613f2d4ca030da8097db"],["/js/src/motion.js","ca9cbf75c510c8e6416b4d21d7890a60"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","83b5736f3459494e42100635d901f643"],["/js/src/schemes/pisces.js","a52916c37eb9a208cb7a3326d2f40fac"],["/js/src/scroll-cookie.js","12bfd55083f0118cab388faad4412845"],["/js/src/scrollspy.js","8d5e65ada5f08f619cbadf5d5bd44740"],["/js/src/utils.js","f7b563826f18dfcf2462c51afb4f68d0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","8538b03d030489d735fe94d9188e2612"],["/lib/Han/dist/han.js","a7f8574622cf087678800db5817b842c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8924c5c9cb192b0e349c44d6de590eb7"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","815847b3464a7c7831282a206aab8abb"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d8ea5013d9e18d17c248941e830c84b8"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3bb32f8cfffa5563e00ae5f27760d790"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4abd1faab002b1ef1beb420aeace96ea"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9d1d4e8626acc7cda454f458cb24d1b2"],["/lib/fancybox/source/jquery.fancybox.css","9bf2ce64e0f762c7e5a31f9af0d24a55"],["/lib/fancybox/source/jquery.fancybox.js","642013ac11f31d91cd535e64b7517fa9"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","e17327ae179baac47f8c648dd6bb9100"],["/lib/fastclick/lib/fastclick.js","56278547e36eb88abc6b6113ea20fd27"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","695189db3284986c4326baf173627cab"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","1e04c0d417fa2a64170f76438b836101"],["/lib/jquery_lazyload/README.html","47e4af434eb7cced448ff73f3214d521"],["/lib/jquery_lazyload/jquery.lazyload.js","bbd9a91a62b3b8ff2c3f1e4b96657d35"],["/lib/jquery_lazyload/jquery.scrollstop.js","9eaa713ad7451e50149188aa7745531d"],["/lib/needsharebutton/font-embedded.css","8fd36d12446d10cd9ed59041370eeede"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","c82181189141f139812318e7b0bc73f1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","90992b6797699abb0a0a0b8513e07bd8"],["/lib/velocity/velocity.js","e229f5cc4b545c3f98eba8904301a6e5"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a08b41c1768357ef7f89ad980d051a39"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","3836740a4ee44c2d29ffce5303188237"],["/links/index.html","9dcfd402dc74e4c28befad63a989b186"],["/live2d-widget/README.html","b78ba6e3276acba00c34d85d928feaf7"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","91d469b9b0865a51fe632c11d8532f5c"],["/live2d-widget/demo/demo1.html","67b439caefc6b5bda09a76bcceb5f608"],["/live2d-widget/demo/demo2.html","a63eca0e0a718c87644f84d1d17832ee"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","2d2e107142c4673a6cb8f0c0c24edd2a"],["/movies/index.html","1fa9aab2dcd11c62b261a5d44a31019e"],["/music/index.html","2e4506f8f6573f566c0a8a943f7f3a3e"],["/page/2/index.html","18fdfe2751b93ed6c25f8c00fab151af"],["/photos/index.html","80abeaeb31ab41a22000c593c8eef015"],["/posts/14311.html","49055a13f11010eb11aa2e47d6e022f1"],["/posts/15468.html","7024794a77a72e66f960df1e44ef498f"],["/posts/16107.html","f5e121694ee133e14782bebcbf2d37ff"],["/posts/20352.html","fee7ef129941d39efccff58100b5b7e0"],["/posts/21238.html","3ebc93a272723c205c8db89809fe051c"],["/posts/22281.html","2403b327a5df5fe228d5baabff9e474f"],["/posts/30c404a6.html","73af7f426784003e08b4dfd9a0b24b11"],["/posts/51203.html","ad7ded9faab37a3e4c8fdc793d77d2be"],["/posts/59037.html","96e3877e0975d09cb419fe78d2f9f401"],["/posts/60816b5a.html","b3480e914ae6cf7c9c73be52fd758a33"],["/posts/69978469.html","0b9838d2a00fdec83a7390e7598a2eb6"],["/posts/6a752619.html","1968bea1f441cab91afcf0bdd121f578"],["/posts/8cc73e65.html","b656dcdc4feed02bfea3c9c00304b472"],["/posts/beb5106a.html","c87b65377a7a257d253f65f8c6c82587"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","79b069dacdce6c81861a2495b347d7d1"],["/tags/C/index.html","09c1fc4c7b36ce9cc39fb402c8c7d389"],["/tags/Hexo/index.html","903e82e7fdfb85be56608e52f59cb174"],["/tags/Java/index.html","e4e998fcd827b7ff3e25b40c380cb9c5"],["/tags/Mac/index.html","115f86b65fe1ae48c8fe138059b8acde"],["/tags/Python/index.html","c8a5b37bfab3db4828d66e7bc41303f3"],["/tags/Qt/index.html","5cf0fc597c4d272ce7a43ec5331b76fd"],["/tags/abbrlink/index.html","ce8418fc2d11d88ec4ae18a8a7fbc99c"],["/tags/index.html","66d5dfbda4106a83ab056a515942a5c3"],["/tags/冒泡排序/index.html","477f1afff4af46c8d62e26e3756f3a25"],["/tags/双向链表/index.html","413a2ad96694629aef09bff62bd2b85e"],["/tags/希尔排序/index.html","897a37b432b889b79aa576faf12fac51"],["/tags/插入排序/index.html","6f7a3a4cf6fe44495b61a572d5033e59"],["/tags/数据结构/index.html","0c87f91c5f28871da64f6af072b76b90"],["/tags/杨辉三角/index.html","861c48bdbe31cbcc33f117c38a1fc70a"],["/tags/栈/index.html","cf2c55ea2b98dbd8fb8074c6772d32e2"],["/tags/类模板/index.html","faa9f5308f785b0519a5a72edfc9df95"],["/tags/线性表/index.html","857f53a23750397d81684db4242f2783"],["/tags/选择排序/index.html","a1af6fba65a457a5bc584b0a77fdab5b"],["/tags/队列/index.html","24006d0d08ef554ccaa0dc368d0baff6"],["/tags/顺序存储结构/index.html","4b5d5b28c64ba0cc793a30a94de25270"],["/top/index.html","19cd79571591f654e7cdcf6c6a9ff274"]];
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
