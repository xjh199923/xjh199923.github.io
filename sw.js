/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c635ba7aa923e643322b388d584cdc46"],["/archives/2019/10/index.html","5f01fa59e6e64ef1df6b6d23e2a97526"],["/archives/2019/11/index.html","804d7f7e66afec18c88619baead8e459"],["/archives/2019/12/index.html","7c64bc94eeb060096374a8bc27652cd8"],["/archives/2019/index.html","589474b4e9ae9542ce0b12729f858803"],["/archives/2020/01/index.html","8b2d5c5c9cf951b6d090df66f805f8cc"],["/archives/2020/index.html","d451d91fcbafbc243936e5d4e1b64e00"],["/archives/index.html","2e598223dd9245ecfa3b4abe85daa45c"],["/archives/page/2/index.html","c059e6db883361563048832b0134048b"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","727db6a29e7d4e948cb801ee048a6e43"],["/categories/Hexo/index.html","46f076f7893648f7890ca70ff053c5a5"],["/categories/Mac/Qt/index.html","20e810e31a3c5e040dc68a2075cba59b"],["/categories/Mac/index.html","28d0f70ebc948bb1f696031a908c5439"],["/categories/index.html","5a0f0d2f92a3109786684b6d3db1ae8d"],["/categories/数据结构/C/Java/Python/index.html","678c48a5d59a60279804a188ce125b6a"],["/categories/数据结构/C/Java/Python/排序/index.html","9f2e347e267c01b32d5f95372cb86f92"],["/categories/数据结构/C/Java/index.html","253e0c714ef9ddf7e69695cbe1ea84ed"],["/categories/数据结构/C/index.html","7432c0e23e8fbcb6c51ec6c0c7639866"],["/categories/数据结构/C/顺序存储结构/index.html","fc3b364f453528e9508ec6909ae0b795"],["/categories/数据结构/index.html","d9e6b65cc7277865d09a6feb6fa97ccc"],["/categories/数据结构/page/2/index.html","b8ec788114e28c487879cbaf18734c02"],["/css/main.css","a03aa4792d9822ae607680dd569a8e7a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","3c8b8ebb888674298aef4c6dd274dce5"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","14a0a919788013ffeb53ca4992a25b21"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","7b116bdc839d8c7de6388acdc4c9fa6b"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","183c562639f4efc3d7ac71ad74d46950"],["/js/src/algolia-search.js","c90679b0b619e249e87994dd90520490"],["/js/src/bootstrap.js","8b7b7cfa3338944222819a2e471a581d"],["/js/src/bubble.js","18191b59eeb482aeb4f56f2984ecc4f5"],["/js/src/clipboard-use.js","0632491ed42546f03f4485cf7c620350"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","3d7c1db1c2f4887a146e3ab7a5f5463f"],["/js/src/exturl.js","c02801a7b94deb0d9eaa08e98e2e26bd"],["/js/src/hook-duoshuo.js","b2b563fc0720e9c8fc9931ee91b89656"],["/js/src/js.cookie.js","17a845d5ed5b18ba1820cd73206c0e52"],["/js/src/linkcard.js","8a7965e115813b7d041b525a42e703cf"],["/js/src/motion.js","6d3811fdb19ff53da97fe5cfacb1331d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","c3ebf813082be8268560fe088c7849fc"],["/js/src/schemes/pisces.js","e55fbe6e0907203b187baa5da942369b"],["/js/src/scroll-cookie.js","5edbb6d45d96f7593f8e913706782cdc"],["/js/src/scrollspy.js","fad4317af688e557b02ea85f58684acc"],["/js/src/utils.js","f48a6ba360b27f3f9bd8573bd6dfe7bb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","a813885981d8d5c3def14663678cc62a"],["/lib/Han/dist/han.js","be2157f97b8a38ab6a26b95e64090019"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","4e64de2df2906ee28be2091d7b4a87f8"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","793f1c1a2aadffe2dd34c17a31feaf1d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9ab87e16f17edf7ed1c3565dcf868281"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9c715f37879a113d4784dd418bbef4ef"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","216e972cb0224120c85142f54db790da"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9fc6be9c03dcff06996c1af3a22415a8"],["/lib/fancybox/source/jquery.fancybox.css","7c3c832d8ae70d92b9e5b7e45b90d54a"],["/lib/fancybox/source/jquery.fancybox.js","738ec64dd755cf08e2f482098c906c55"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","61ab2e41dea42f2ef06c7018a51ac8e1"],["/lib/fastclick/lib/fastclick.js","124e95d730734d88f4eb65b9975e24e2"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","5094909186261d28c3b39797bae28b7a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","d986359a438862a3b46390bfed366859"],["/lib/jquery_lazyload/README.html","3a72bff81ca1022ca57417f09ae12cc1"],["/lib/jquery_lazyload/jquery.lazyload.js","b0b83be57c478eb3e3e20abf2e7e2518"],["/lib/jquery_lazyload/jquery.scrollstop.js","00859d7ea2837f7586ccba61b254e3bf"],["/lib/needsharebutton/font-embedded.css","9b9edab3e6a585b75795280d517601ad"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","13d212effc7fa8e61a640db3b7d92447"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","898a50626d22b5aaf1a54c9d0918a03a"],["/lib/velocity/velocity.js","24a7fc918305c8d5d2419f85611bb204"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","9b55f27f14956c3b36df37713df439b1"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4c0bd801a9fc4167f4d414f5d9b55b34"],["/links/index.html","58ad5a1a3cab185375ea5ade2948cb93"],["/live2d-widget/README.html","2a66e1f9069e59ca5733331bd7657bc5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","455305dceee31d20b2a1942cc26c148c"],["/live2d-widget/demo/demo1.html","fdaac7e1909038fd7a7225a2c5548865"],["/live2d-widget/demo/demo2.html","82f5e4b3186f2a2bee1d0d73b7277ff6"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","d2e04620e2823df4fdff348044225828"],["/movies/index.html","cb74504230ad79479462d137eb21daaa"],["/music/index.html","44b612849e089eba3a7926fc3387d7de"],["/page/2/index.html","12acb35d4651b3b5d71e1da5f48b5b37"],["/photos/index.html","3867c38dc7547abec205a61621678b24"],["/posts/14311.html","6f944e9197c21fc9f27023b46966b787"],["/posts/15468.html","a0cc16e3248329ef0df679503c6caaf2"],["/posts/16107.html","69cae92ab6273b242b968e998930dad0"],["/posts/20352.html","ecb67abe7da92fcd827e65ddc208d351"],["/posts/21238.html","9d8bdcf0effca5f60e83bb09ce2e6072"],["/posts/22281.html","bb6225f340330761abda2f3feb7d9159"],["/posts/30c404a6.html","80a003840b8b0261f0a44c7e8b10a8d6"],["/posts/51203.html","00cda973cb53b00bdfff5a393552044f"],["/posts/59037.html","b9128a690c8de98a6d65241bd33f1ae9"],["/posts/60816b5a.html","eab7d7006d2f610534f35c769e1dcb6a"],["/posts/69978469.html","e894bde8b13113e08f3b4c1b3f13116e"],["/posts/6a752619.html","37c15e5030bb80fb9daefd7742c98ab7"],["/posts/8cc73e65.html","e0421199412e92c72022ed2af617d92e"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","abb17ca37421458e7a3ade9ad433467d"],["/tags/C/index.html","39f0c2b4955b46e3303d72feec393628"],["/tags/Hexo/index.html","5d0d69efcccec87178ecac3d862781da"],["/tags/Java/index.html","4b92f4b6dae146976f738732b5c8b765"],["/tags/Mac/index.html","bc8b25d52891f486036252e88c6f2ec9"],["/tags/Python/index.html","8a36b3e48d10e234ae985299244cde19"],["/tags/Qt/index.html","a29d420e996e450450eb8a56b70d6756"],["/tags/abbrlink/index.html","b1bdce240005660d8cb1708b30044686"],["/tags/index.html","88c4552988162a5e1bdeabbe97dd48ae"],["/tags/冒泡排序/index.html","da1b085803bb2dae67b3be5d2a7fd4f3"],["/tags/希尔排序/index.html","400f968078d5ca646564bce80311a7d5"],["/tags/插入排序/index.html","cad928df16bf321a3203683771c3dafa"],["/tags/数据结构/index.html","0ea9bd5500bc76f3703bc6a3978f14a4"],["/tags/杨辉三角/index.html","7f89bea95a6cd76b8890b55a80dd25d2"],["/tags/栈/index.html","f08ca1ad72f8ba963d1104d065348ce2"],["/tags/类模板/index.html","e90b70432e61510fc9fe82bae526b206"],["/tags/线性表/index.html","b81828ec35f147eddf09fae092d27142"],["/tags/选择排序/index.html","18202196e2e0321dcda2abd1d9e4cc74"],["/tags/队列/index.html","e592ba160b7619bcb0489fc82f03fa32"],["/tags/顺序存储结构/index.html","63bf65e836cf5eaa8da8f256af66dc0c"],["/top/index.html","f1a49a2db2777347f901c0a588c7ede5"]];
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
