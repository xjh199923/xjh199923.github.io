/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6bfa5dfb0012e1a8efee836efbbcb2dc"],["/archives/2019/10/index.html","5279522ad8b823c8bfa24c5c224e2ff8"],["/archives/2019/11/index.html","1b84558c6fa9ee3e4834483aca6e2fc4"],["/archives/2019/12/index.html","a84c75af3fa13bff591a7178c2c98f18"],["/archives/2019/index.html","d582e231d990644672916745f718718a"],["/archives/2020/01/index.html","711f75c7a68ff5faccb95ee21c37c7a5"],["/archives/2020/index.html","d603f4b078cce92bb1c92e39e868c325"],["/archives/index.html","7cf6408d6d8138b4f6d6f238c019ceb3"],["/archives/page/2/index.html","647157fa44b33acbfaee5da0111ceaa6"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","b969b573f649bdbb2e750a80e48274f4"],["/categories/Hexo/index.html","29235948b741e848fc53533617175061"],["/categories/Mac/Qt/index.html","8ff0094e5298407a2006f8aed3b5f96f"],["/categories/Mac/index.html","24c8cff9322d520b058825dcc7a4ca51"],["/categories/index.html","e951b3affbe08ac4fc5d2d8cfbfe78d0"],["/categories/数据结构/C/Java/Python/index.html","eec2112a0f6fc28a9484f88127ce3fd2"],["/categories/数据结构/C/Java/Python/排序/index.html","d5a8983dfc268153921f4789dec0ec44"],["/categories/数据结构/C/Java/index.html","3431c93fe622fba9760702760e76daf2"],["/categories/数据结构/C/index.html","c16cb03c4b6d6fadd13ba021e754f1e3"],["/categories/数据结构/C/顺序存储结构/index.html","75701c935c92583d29ac44b78699bf25"],["/categories/数据结构/index.html","ef39cdc3409d2adf445e8b45c55a69d6"],["/css/main.css","2de431d4fe59cd447256aa57405de875"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","91b6bdc2ef54536fcd97cb39f41481c5"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","48f3b082439059c82539ebff1ba7d5e6"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","5b8e3f577be498672b0d0a12782b957c"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","cfe10eb081751de8c8f2c7210bb4382d"],["/js/src/algolia-search.js","faf63371f0ce08bb320b0c73750a98dd"],["/js/src/bootstrap.js","84f0d68e505c2dff89ef194c664b2b94"],["/js/src/bubble.js","f1f2f72df968b4a380756432a224a893"],["/js/src/clipboard-use.js","2da0183937607c163003e241944007e2"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","56e9118f3d123704fe91451e80ca107c"],["/js/src/exturl.js","36257d9c4576967add203dc1b5fb904e"],["/js/src/hook-duoshuo.js","d1ac2ee0a7ef705e84a81862cd18b7ca"],["/js/src/js.cookie.js","4d0d577a6543e2f3134c5cd61f80c06c"],["/js/src/linkcard.js","e629570e9f5ff3f87916884a04605dba"],["/js/src/motion.js","faeb919929f1e4ebcaffd46cf9631790"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","915c9738ea51a0ca0dd0be4889edc0ce"],["/js/src/schemes/pisces.js","875b7650b744ec1c29af965e2ea99602"],["/js/src/scroll-cookie.js","e5509f0af1d28db38e49e40b54cdc952"],["/js/src/scrollspy.js","93d0df9e58ad20f48e8b854b5a2de27c"],["/js/src/utils.js","ae09a1c08981e451f3b48583b9d73ba8"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","63a1b32390ad025b0cce6481d8dab398"],["/lib/Han/dist/han.js","332d9ee8f9be3e95c859a51524e5362b"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c20a3d79c1d5aa16442ca7978e107bd0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a8343c8bc945a24507c26e665a80e963"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9181505546c2fc17d7c6672ab92cd074"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b83eaf25e7b65fa0658df29e30d38023"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","09646eadf226efefbf4958b1ee5b851f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32244db108b517fe967d74aac671a1fc"],["/lib/fancybox/source/jquery.fancybox.css","7037740e10e458b1ed60b8252715bb2d"],["/lib/fancybox/source/jquery.fancybox.js","b31c9b68908796955b2cb70b76db2dcc"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3312e9cd1f2dd02286c9697476ff46fb"],["/lib/fastclick/lib/fastclick.js","5d733c9d91d4ffb0a0e44ed344348d77"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","703af0081812be303f9d85882f9c3784"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","fe23178b021943b8f4060701cedb5f99"],["/lib/jquery_lazyload/README.html","fb4ddb1892d3dad492001d29ea02ce87"],["/lib/jquery_lazyload/jquery.lazyload.js","9a9a75e9ed5c122e9878ae85a1c9f156"],["/lib/jquery_lazyload/jquery.scrollstop.js","2c5464b70b3463ad7b528b15e68c534f"],["/lib/needsharebutton/font-embedded.css","a9ff9c995389c7c6e2117b46757510ca"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","16ea775980fd7522d3a6deaf0825c8b6"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","5cbf5e8bc71684e2524642a42f63cc67"],["/lib/velocity/velocity.js","3b292ca02fdf9e8101091396a045d351"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a6d098851f6e5a544b8db12647da9fbd"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","38d4d752f2eb3e59030f116d83bdedcc"],["/links/index.html","4ef935fa01320d218ca72072ed0816ea"],["/live2d-widget/README.html","8e54a477f96ddec3a65e04330357ea8e"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","52174ff8ae845682a9ba7c56f39b2038"],["/live2d-widget/demo/demo1.html","9e3c1de069038be2c55287e56984e78e"],["/live2d-widget/demo/demo2.html","86a05418f83ffb42c2a1f3be57e9f1bf"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","78d54268f07bb6a26d149797a457a417"],["/movies/index.html","44f8698305836149be880096e7fb730a"],["/music/index.html","cff4304e4e4e60af911a1212949b649e"],["/page/2/index.html","fcae3e9f2d24ab0865656f8f8bb07a47"],["/photos/index.html","97173fa0576e42c018533ca977a6c58d"],["/posts/10528.html","f66f156246dcce84f18aa7727b4674bb"],["/posts/14311.html","7ae26b0f9b22769da2a7b4f5534eda5c"],["/posts/15468.html","b1753becfdd2ff2f3067ab3bc490f340"],["/posts/16107.html","7afaa1919861db6ed9cab29fde743a2e"],["/posts/20352.html","0365708a32592c63819ed566b8005cfa"],["/posts/21238.html","c3ceb99a4deafec678f9ba273c61094c"],["/posts/22281.html","0d8be2a80b60aff5576106a28228eb6b"],["/posts/30c404a6.html","542ee1d598eff2c55067e61b66f44166"],["/posts/51203.html","b94dc415250fa79584f31793565bdf61"],["/posts/59037.html","e017a8a24e5aa03276f45d9f0b8e5c1c"],["/posts/69978469.html","52e6b6875ff20ca8f46019aac61ff9fc"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","1d59e4df5f2cdfc6cc6f7c0a2a18316d"],["/tags/C/index.html","c553b5f5df0395dd56f6e59dfaf114e1"],["/tags/Hexo/index.html","0ecbc90620e0532e2c2c416b6580f295"],["/tags/Java/index.html","e51cd70c47b2e0d65a3c4257fb3dbc98"],["/tags/Mac/index.html","3071e2e0167d1c8068912d4e7e3fa22f"],["/tags/Python/index.html","52fcb53c4d833542ddd4b788a4b8814e"],["/tags/Qt/index.html","b6e3382e9037fb74831caea0859255c6"],["/tags/abbrlink/index.html","a8b6f7e4dd148e65eeb3c9a91ccb3c49"],["/tags/index.html","16ae1a17c026635bd67760dd4129a5a9"],["/tags/冒泡排序/index.html","eb5372dbcbcf6096276162751d41d46f"],["/tags/希尔排序/index.html","6738d7d0a621de5eaa7071259df8ccf0"],["/tags/插入排序/index.html","03b18a7af60e8822b01884ced58dace6"],["/tags/数据结构/index.html","e78581e5a0cd2d53cbd83cb33b21d68f"],["/tags/杨辉三角/index.html","cbbed48d81f12029ce250a166a0965f5"],["/tags/栈/index.html","4d60ff24d0d6605079f82d54d036edb0"],["/tags/类模板/index.html","1fd163acaed2769836cf482649d15227"],["/tags/线性表/index.html","acf73442a119770d10a68f46bfec48ee"],["/tags/选择排序/index.html","454d2768524e23e7566e93269a7c0095"],["/tags/队列/index.html","3d2f7258700bc7bdcb87772e1f18a392"],["/tags/顺序存储结构/index.html","8139bbd4613fb89ad211267de03ab46e"],["/top/index.html","1aef66563d204c067e26486ab3776535"]];
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
