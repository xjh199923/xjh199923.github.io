/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","bb44e28c9de0977be851a3ee101c6f5d"],["/archives/2019/10/index.html","5dfdd8346623f30f3cfd7c5b51059ac2"],["/archives/2019/11/index.html","91993bc3e65e36f7264fc949f0d1edee"],["/archives/2019/12/index.html","feff0c368f5fdfbb46804134e627318b"],["/archives/2019/index.html","45da76bcd1a107a5a220e9acad517801"],["/archives/2020/01/index.html","93726a699c7e9429922d922c8e744f89"],["/archives/2020/index.html","8ea2ddf9c84711a3cf4b497d54dbd28c"],["/archives/index.html","6ccb0a8ccb36e2b4c7bba0b0224babeb"],["/archives/page/2/index.html","ff1699b0a1a82a9dde8b111eebb89517"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","da11a897d3860f16221b2f8e9d6590c7"],["/categories/Hexo/index.html","9075d0835facea7ac90edd5ca0670438"],["/categories/Mac/Qt/index.html","51428410f89197fb3db2a45c5407ca5a"],["/categories/Mac/index.html","d41546b0ad6743b79743df691fea2ff8"],["/categories/index.html","246c9c4c49141a0e87521df69bf26ddd"],["/categories/数据结构/C/Java/Python/index.html","9bc29ccbebda05842afb953d76a03159"],["/categories/数据结构/C/Java/Python/排序/index.html","c1b96afbdb03dbc003843522156ee7ef"],["/categories/数据结构/C/Java/index.html","9bc339cda8995cd96bcc663ecaf85fab"],["/categories/数据结构/C/index.html","575054c3d57913db063286b507987be3"],["/categories/数据结构/C/顺序存储结构/index.html","d7d74913db28c4293d2db768aec211da"],["/categories/数据结构/index.html","826818aaf42a92818e51884917f17c51"],["/css/main.css","eedcdd9c0337c37c878ec0b061f52092"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","23491b73cb78fdcbf6886dc6a03f9656"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","ba5639229f9741ce35996d7cd2b027a8"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8cddf7a9320081d9eb6db55a40d3cbc5"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b8dd148c5153c6cf7ef87627ff428e09"],["/js/src/algolia-search.js","db33709847b332d770c67a7fc76fd9d8"],["/js/src/bootstrap.js","a311d78c60cc3a74e90e6120c4e1f83a"],["/js/src/bubble.js","c0096ef4077e74f0e7ee75a4cd8f26f1"],["/js/src/clipboard-use.js","85ed62fcb0c6f84d1c51ba5c20c95a3a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","312fabcc5a418e3e3011876af9dc6a80"],["/js/src/exturl.js","870b6c55040a66d71fdcbcab73f6cd1e"],["/js/src/hook-duoshuo.js","12a02a86070716f4fec81fe5bd79a52a"],["/js/src/js.cookie.js","8a65a35c98abde000c3cbdff6419efd7"],["/js/src/linkcard.js","ea006968f895b8b83aa48b314eb04667"],["/js/src/motion.js","29e71237924cb4b9f4904464f42b7055"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","35557aa360152bf4cbbfb7af5338ac5a"],["/js/src/schemes/pisces.js","4f82f378593314613ca1bfe57de5ec28"],["/js/src/scroll-cookie.js","51a5ed8cdb7e66edab4c3b0e8d5d68cd"],["/js/src/scrollspy.js","3f86ee2516eaffe4071c41defcd8e30e"],["/js/src/utils.js","76fd594efab2f6915b78984f2c25260c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","86a66dc9d79e24658ad9f39d4aa969b8"],["/lib/Han/dist/han.js","309cc91c6154bb526477d1e760eeaad0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","144dbdebdc510521fe8d9a8e584be54e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","669e1b17c7aaa780f01827b539dcdbcd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d6eeda4c05e9ab883a077d34ffa66083"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4fc382292e94c91905cf8aa28146ce1d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","12798769f4d3b39b8f94c40da6f810a1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","e9aed6830dbc9f152e327b1a4bb66530"],["/lib/fancybox/source/jquery.fancybox.css","be53dfca16c45099868b1b028032980c"],["/lib/fancybox/source/jquery.fancybox.js","a1c97a3434428244abc84c9551f43dba"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0cf8b21ba7d6eb6605f528dc6c8ac437"],["/lib/fastclick/lib/fastclick.js","b8f2cbdae8462f147170d210d1067d8e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","586452b033140ef95d70682020539e8c"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","05010ade19ac3246d92ab097620937e1"],["/lib/jquery_lazyload/README.html","82587714e5331b4e66bf437e1fac0dfa"],["/lib/jquery_lazyload/jquery.lazyload.js","7264bd49b0d56c78c2eca9123048724b"],["/lib/jquery_lazyload/jquery.scrollstop.js","50cd6bbd4c5fbd38f84bd181fc544f24"],["/lib/needsharebutton/font-embedded.css","cf1b1acb985820a3b45fa3f6aeafc472"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","afb3061bb8705922b1dd5be73022f3a2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","af758568c08303c5d603e85846b92f6e"],["/lib/velocity/velocity.js","27647811b32345828821f96fa00b0fcf"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bf323be6689ad1c7c160111da9f02454"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","e57831108cc04d5663f6ae3bd0395369"],["/links/index.html","23e2c1d1e04207567028905be8f1f92b"],["/live2d-widget/README.html","cd61637ffda05d5ba9b1a5d8ea77882f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","c404e6682a5a45f701dd36a506df5904"],["/live2d-widget/demo/demo1.html","d38a9410280de870fd1f066707b3ec65"],["/live2d-widget/demo/demo2.html","51f5c9ad35c5a85c12a43cc67da1b8f3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","a650a44a391f490142e69ed81fb5fa25"],["/movies/index.html","eb18f703bead5b89fdc6d01a4a5bd855"],["/music/index.html","877d4fac83f3853a2a4faa8b7167f4c4"],["/page/2/index.html","e143858bc69afd9b95c7360462000625"],["/photos/index.html","ee7af27722db21111b294f6a621d803c"],["/posts/10528.html","06667b6ee112764c87a9a97ee9ae97c4"],["/posts/14311.html","2e5aecfe05aad98d3f0f22b1c1165378"],["/posts/15468.html","6db3d6ec994675445d8f8bd1faa32774"],["/posts/16107.html","f2ebe8e80790b3228af09e4969d21e7f"],["/posts/20352.html","04a85ba35857900f679f7fb8523f24c4"],["/posts/21238.html","7d732265ad6174e8714b4427307a5a6a"],["/posts/22281.html","3ded284286c76d50dfe704bbedb8d9bb"],["/posts/30c404a6.html","844bf9fa2ec1add95833df8022e899df"],["/posts/51203.html","34056eba33f2aa7dd97901145e12a207"],["/posts/59037.html","3d5c55073327065250b126be93107591"],["/posts/69978469.html","3ad06edf0ab305ce5ac470fdf94d7d0e"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ab70ccdc20ad4678701f63da63dbaae7"],["/tags/C/index.html","ec6214776564db5187bfee67bb105af0"],["/tags/Hexo/index.html","10bef9e67e588fa4c3ae5883338323d0"],["/tags/Java/index.html","095dedea59bb90b1a5a4c0bf81a6934b"],["/tags/Mac/index.html","3c6fcae745279015c546fde7b0c8d4bc"],["/tags/Python/index.html","fc55b5479cef0901ede198a4a1296dae"],["/tags/Qt/index.html","87e43f6cc85b468910bc2b7a4da4ae0a"],["/tags/abbrlink/index.html","decc36159c00e11bcc08d827b348371c"],["/tags/index.html","9e63ad10489a8eae43d3d9bbda814974"],["/tags/冒泡排序/index.html","b439645da1d6db8600ff7b8fa3d648a9"],["/tags/希尔排序/index.html","206e41c73d856eac44243dd3d6e35233"],["/tags/插入排序/index.html","7bee6ddb36cd6dd9df07f988819267e0"],["/tags/数据结构/index.html","dc673f91a35b8278ada190c3b691833d"],["/tags/杨辉三角/index.html","4adfe2f52f4416935badac2a5e6743df"],["/tags/栈/index.html","4ba352f86f857796972168779aaea55c"],["/tags/类模板/index.html","d8786668dd7787231cf57597bebba2f5"],["/tags/线性表/index.html","cfc36704685f1e7e79bd8f659c843b96"],["/tags/选择排序/index.html","38a2363bd733cf9553908b03f40777c6"],["/tags/队列/index.html","542c8e7385715aa67b3fc228d71b1aae"],["/tags/顺序存储结构/index.html","5c3498f397eb7d4caf89f790862c0dd0"],["/top/index.html","f434079088e85510ebd2451ba44ef8c6"]];
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
