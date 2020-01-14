/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f6f43eb341ff9c45deb3835d9a893e83"],["/archives/2019/10/index.html","038cc044ed27b9f938cde92911ede4ca"],["/archives/2019/11/index.html","3223d7293e35bac292356299899cb3ec"],["/archives/2019/12/index.html","33d8a20d067121edd2db2a6e864fb05a"],["/archives/2019/index.html","531d65cd6836664e7e4d5d4bcedd0c2e"],["/archives/2020/01/index.html","575958aa72362c8503d67c0371911e8f"],["/archives/2020/index.html","2d7a579d28107df8522db201c7154a67"],["/archives/index.html","0f44a4871d330fef03cad19ec00afe5d"],["/archives/page/2/index.html","4cde31945ca043ad76616ab75332f992"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","a04a31e5bb5b1268b27e604a42184a82"],["/categories/Hexo/index.html","cf9b70aba330d23ddb02e71655e34b1c"],["/categories/Mac/Qt/index.html","63a506d4433d1d741f1e14cf0c8a15a7"],["/categories/Mac/index.html","cf6cbc40f3852de60ba132cfa684e204"],["/categories/index.html","64f425a38d4fd53e49be0148f946ac39"],["/categories/数据结构/C/Java/Python/index.html","e3e01d9748c48fe29cc79eb6fd714fd2"],["/categories/数据结构/C/Java/Python/排序/index.html","94fa6d396ddf3530ad84b8420fa580b8"],["/categories/数据结构/C/Java/index.html","42bdc47556b9feedcf3e849d1f7951fc"],["/categories/数据结构/C/index.html","d1be7f1119a2e050fa612524fbb7ace3"],["/categories/数据结构/C/顺序存储结构/index.html","9bb07af6b5800b28d16c9efbd41795cc"],["/categories/数据结构/index.html","ec5c4be94076e215811a56eedc98a05d"],["/css/main.css","1d51496fb47f4f49df57e7396fde427e"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","34bae03e298fd0d63144972b926e9a54"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","cd32f843117b4f70af23893d6f742a4f"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","dfd6c5cfcee8cf92827e85d74d4d1660"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","bce4aadc236cc352c5f0ab4f7dac8c29"],["/js/src/algolia-search.js","038f798783bdf533aa4f8a5eabce3e06"],["/js/src/bootstrap.js","09e21d5df0365ec4872c32c6511e1d3e"],["/js/src/bubble.js","fadc3f759208abeab09a7c53ccb92f73"],["/js/src/clipboard-use.js","207ddc9f9fbd0aeb29d3f38125dd9d4f"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","d53de8178f6290579c6bc97c3cd09f9f"],["/js/src/exturl.js","fb328bea4b8d295a4dcbb91b1e629956"],["/js/src/hook-duoshuo.js","a1c03c5e22b2f7c809b1548639e4106a"],["/js/src/js.cookie.js","be8c7135f28765a6252f68a7a49482b0"],["/js/src/linkcard.js","f18ba48ca58e5ab8cad7208b2b2f7eaa"],["/js/src/motion.js","336b85fedc9e7ef25081a8b15ee60237"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","5fa5285b809e4f58d7f75734ee5d522a"],["/js/src/schemes/pisces.js","206b7505e37ceb9241c3091280b79096"],["/js/src/scroll-cookie.js","62e14e737a1cfdc5f9c61652d0708588"],["/js/src/scrollspy.js","daeb98507f924339799729986c2b4970"],["/js/src/utils.js","d11f36fdb1b8563c41612e12e158feab"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","0beb82477752c25a857011cc20126ae6"],["/lib/Han/dist/han.js","66af5242f576e05a647ea53a93cecb98"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","ab10dc377151ca426dc1c542a71283d7"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3d39f63c9a5de3e374917f9a36230f7d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d60a2b6116df5f9ebd5c7864b145f0f0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","a7fb8569f6d8e3172ffea1ee53589cce"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ba9f6444b0e195721f3483e2efbd4c50"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fd3205c46a79fa760da74064d3e7f06d"],["/lib/fancybox/source/jquery.fancybox.css","ca9cd3e359998115bb3bf55250c7ba17"],["/lib/fancybox/source/jquery.fancybox.js","3652ca070072fc4329d06742e6808daa"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7c08defd941fcbf5bf86d4f65922cf38"],["/lib/fastclick/lib/fastclick.js","4d684ac3958b429f789f7d885583a8ed"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","9cbb8c701f49df27b34b8f8c05fa7ad6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e3eb365160241d45b1dbcfe32ee760d1"],["/lib/jquery_lazyload/README.html","f63c398da0424f730dd4253709ae2521"],["/lib/jquery_lazyload/jquery.lazyload.js","6d1a2cc48fe17becbc94b3771cdc046f"],["/lib/jquery_lazyload/jquery.scrollstop.js","c8b193139e8634efcecc2b0ff70a01a0"],["/lib/needsharebutton/font-embedded.css","3eebda0b130af8ff12f0d0b351c134b6"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","74ccf1ad81d9ede796a4e201ddd8f44b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f7bc52e9227192c4c58ee3020540cda9"],["/lib/velocity/velocity.js","314a1af0bdaf0a9bf570c1e67ba59d6b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2aea3ddea118b47525aec8a9df265d8b"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","45c2c0a5ac32eec6d2682aede3fc7ad3"],["/links/index.html","306e979daf20aa9db10c1efd409c9bc9"],["/live2d-widget/README.html","754d27d1487e6837d694f59ce1c0c4f0"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","7613b64d03dcdf5f0aea054cbf365c02"],["/live2d-widget/demo/demo1.html","f88ef0638399d8cac7f6bd28827a7254"],["/live2d-widget/demo/demo2.html","e1f2297c97ad4a6667288d364cfffbf9"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","6495337077d0fa3678b39e9bc6937932"],["/movies/index.html","64f1df724a3ab3c60843982a1dd8fd46"],["/music/index.html","d14d3e830343fda5359bf39af54faf41"],["/page/2/index.html","1c0348bb4a5bef819f42aab317296106"],["/photos/index.html","2a9b94e302ea568f14f268136584aebf"],["/posts/10528.html","fefe730b705bf071be10b7ed46441ce1"],["/posts/14311.html","7264ed63a1f4beb1251e9527f5c0ba63"],["/posts/15468.html","40805005573b3d9d0aafae9c6a5fbab8"],["/posts/16107.html","0fc790cf53974c4ed3855d49893ef6c2"],["/posts/20352.html","59397e0b8a18d2c70f4681733ed07f12"],["/posts/21238.html","b10b14eb106965a46310485207c67c95"],["/posts/22281.html","c88d1921b2efff21011bf87c7deb7a42"],["/posts/30c404a6.html","365c4d64c44ed187553871776b6da39d"],["/posts/51203.html","899f7573461479a6b7187687af2aa0d0"],["/posts/59037.html","3ad1d98c8d1cfc090587da1bb4db3181"],["/posts/69978469.html","aa0999fa05106f90655abf977dd658ec"],["/posts/8cc73e65.html","6c6adb40e0911a756024e4dae0a089ca"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","bc9728a83f55bda5baa646cb7a97d5fa"],["/tags/C/index.html","e7bc934f9bed241b033a9eed38374b33"],["/tags/Hexo/index.html","c285f02d6a6015f7cd5935c2736a6f52"],["/tags/Java/index.html","c01ebec95418b8f19be32be5842204b1"],["/tags/Mac/index.html","f4f988fb3e931cf9f5ed16c87900b498"],["/tags/Python/index.html","2b18c40031fe2436e63ee056f714c6c8"],["/tags/Qt/index.html","59385a5c8b451f5edb59b7c26e9a29b6"],["/tags/abbrlink/index.html","c0acfcf1ebfa21dc2bce17ee750987ab"],["/tags/index.html","34a1de29135a205e15790e1e3710e589"],["/tags/冒泡排序/index.html","4a723be546313183fa31a84dba1a2f24"],["/tags/希尔排序/index.html","81f66feb93a70e045338d9786658dfa8"],["/tags/插入排序/index.html","e8496a50f151838e6e2beb9fc0d8ec7a"],["/tags/数据结构/index.html","9c32865f0699c0c9816f35320a9a2f04"],["/tags/杨辉三角/index.html","e790ebb46a26b0240e9b0cd9ec1a0b8a"],["/tags/栈/index.html","e36cf9bb077c70980913efafc55e0f81"],["/tags/类模板/index.html","0a41abcdfd51ff4ed42205bf37e1c708"],["/tags/线性表/index.html","74f5b1b317433a966b67417c190cfd87"],["/tags/选择排序/index.html","d2a76e1491776fa24519a00fb3156508"],["/tags/队列/index.html","f6e4d09fe2a9295ccfccf046944cb45a"],["/tags/顺序存储结构/index.html","4c1b30b62e3762319625878310882f15"],["/top/index.html","27302ffddd42b55e45ff007d6b98748a"]];
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
