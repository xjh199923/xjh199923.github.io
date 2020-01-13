/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9c3d9590aeeeadbdd8f2db6ab95a2ecf"],["/archives/2019/01/index.html","8da0ce6cf670fff30b6f9febd37e90d9"],["/archives/2019/10/index.html","d6adddf53be91f00382ddcb5fbc45b36"],["/archives/2019/11/index.html","a06e13a8a90d65fe51a15e65717c78e7"],["/archives/2019/12/index.html","161f72cee1f785b66e07a0dee5ac61e7"],["/archives/2019/index.html","4d36290b0444e1437fc3bb44c03cf5e4"],["/archives/2019/page/2/index.html","9936e048111f42018e9aec6a4f24be28"],["/archives/index.html","b22d1f1bada885dbcad8b600ae419fc9"],["/archives/page/2/index.html","7c26336764337e1d2f1a26ad91de4715"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","78f0bd33753dd03bcad4a0cd34abfb71"],["/categories/Hexo/index.html","8cbb52909df52b08b4393b1eaa7d69bf"],["/categories/Mac/Qt/index.html","1034516c563d0b4c98924b521a2bee1e"],["/categories/Mac/index.html","879f6e380dc411b966ecacc31dd1eb7b"],["/categories/index.html","eecf105b66ffa44fe825f8e2ab05bd1d"],["/categories/数据结构/C/Java/Python/index.html","906fdb4df6a4a04dd647b6288a8a2e0c"],["/categories/数据结构/C/Java/Python/排序/index.html","31df0b5fe0284f5be48a4b460a5a5b69"],["/categories/数据结构/C/Java/index.html","55e47b13115057168e67452ac70b849a"],["/categories/数据结构/C/index.html","7c2111851561207adec3847e13143709"],["/categories/数据结构/C/顺序存储结构/index.html","b34e3cbd55d70788e09d5e1c298a7986"],["/categories/数据结构/index.html","c88952abb90ff2308813d570896d4a33"],["/css/main.css","f6b0ee5617fa9f765d9bdb3b7598d4c5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","01b699cfecb47e94c825b65d0f3c20c4"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","50a92636c218def484932dd36b464ce5"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","1c408ca316c5db90d45c222cd7d06b4e"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","47593c376a71eb49746acf93c275142b"],["/js/src/algolia-search.js","8bf235b5b1040f76c72dadca7b511a79"],["/js/src/bootstrap.js","c174c77f2fbbe0f1e424eaa8a93f235b"],["/js/src/bubble.js","284cc5901dd2b53369d6aaf1bfe33a4a"],["/js/src/clipboard-use.js","5ed4309b1162c4745c79d1313786c0eb"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","10006d1404e8385a54ce74535e27ddac"],["/js/src/exturl.js","5ad662bf36cb6196262183d36cb00ffa"],["/js/src/hook-duoshuo.js","e48d4d30f025be6707c1b40e17f85d02"],["/js/src/js.cookie.js","b4c8046f45edad7eb0d975343d26c40c"],["/js/src/linkcard.js","461d2230265be860713cbc8bbc0e607d"],["/js/src/motion.js","01c09d276876270e9734f0886dc6a983"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","cb47ae0eef2b647840c296e72144fa2a"],["/js/src/schemes/pisces.js","cfb93095c74996b1191f1c4e132bfb72"],["/js/src/scroll-cookie.js","4f0152bbf85b57bfbb7cad487962bf2d"],["/js/src/scrollspy.js","415aaf48baff9799aaee73d91374be83"],["/js/src/utils.js","dfbfd1ab2f8eb172a062bb90369aa9b1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","67556a0038c9d9c50ced3d2ea5ac087d"],["/lib/Han/dist/han.js","58ae6b910996f1bc0c8eb39be4e8b29c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8d4496c1bcc90fa61786ad8061e1b407"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","079aeb04c5f050840995e75cf2d6fb82"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","692946137076f40d5da36b5458d7f486"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b063027f2fcb04f1823818e104abdcdc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d6e2b452e18d1f583cb09d34fbb9a6cd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","4d1381461dd2c1fd92e0ea8103505ba4"],["/lib/fancybox/source/jquery.fancybox.css","16f47f60d1e54b51d6c25d7ca3290977"],["/lib/fancybox/source/jquery.fancybox.js","92fd000529ef35d310cab3e37580a0fb"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","3bf80ff2dffe02039f93eea97d9e94d9"],["/lib/fastclick/lib/fastclick.js","80aa2b92d20bd2fa75c762e54d412771"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","700e4c65bf4e5ded0aed34de7e5af616"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","59c65182a1ade5a69707e2a78ee0ba10"],["/lib/jquery_lazyload/README.html","d5f9e594cb3c76c16e28f192d4075e77"],["/lib/jquery_lazyload/jquery.lazyload.js","67776e463f4bc9901944b5bcd1a4a997"],["/lib/jquery_lazyload/jquery.scrollstop.js","dfd55efc811425ed2c548f686fbd779a"],["/lib/needsharebutton/font-embedded.css","0d6e6b2fd79a357bb1231710bcd3b87c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","8fc466905c025c39468eca617b22e067"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a339cfc60c4642f2f0e3a24f85e3bbbc"],["/lib/velocity/velocity.js","fd97b1b931e9431db6157092b51ac24f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","206ffb1d18cce5afb7a3d3803331cc08"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","13c173330076a13aa7d82daaf036f8d3"],["/links/index.html","ce30979f45370917d9d56534262119e8"],["/live2d-widget/README.html","d0acc660865ee237c926809b6189f6e5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5c38125e7eee6fa157ca20ff1cfd0ac5"],["/live2d-widget/demo/demo1.html","6d3f73f2c7f90d37e44e61389b782ed8"],["/live2d-widget/demo/demo2.html","1dce138284e480db7ba8fa8a0e7e669c"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","d6e5e17a9a495bc6c64885b144e9fc41"],["/movies/index.html","4f6dcbdda89ea6dd3f2e48297e9674c1"],["/music/index.html","d1f819041bcb6b73246f1039a3f6b53a"],["/page/2/index.html","0f46e6c798c417568e0a2940d1b34a53"],["/photos/index.html","06fb210f9966456d18987cd272b7b803"],["/posts/10528.html","0f38b3fbad82d7fddaadb5cec4a8980f"],["/posts/14311.html","6df42265e395498336417be5786a82a1"],["/posts/15468.html","e4c1b9520b726a53213a5f9f80e0118a"],["/posts/16107.html","382cd5ef11a0aee1e5b49b111108f3b3"],["/posts/20352.html","f49549a5b9efc71620e12a289bce90f7"],["/posts/21238.html","5af58baf1c738b961699554b3a4a200f"],["/posts/22281.html","8dbab7a3d8e4fff124501688a9969f19"],["/posts/30c404a6.html","5d6e9e0f7f65424f08da47ba9e914a0e"],["/posts/51203.html","48fdd876a5d7a8c8d5b552c24b95f993"],["/posts/59037.html","7ad39e9c6c91b9abd5de1b85de89b390"],["/posts/69978469.html","a230ca516ee2e0db49059bf2c2c541cd"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","96bdc88a3004aae0eb04afa86638011b"],["/tags/C/index.html","2caf8adc3469d0d209c9511cf482a97d"],["/tags/Hexo/index.html","9482f1cceadf33c6555fa345fe9e40dd"],["/tags/Java/index.html","8f199e8509113e618683beb36e561ff5"],["/tags/Mac/index.html","f851644f11d151f0c356ccbbf6cad81a"],["/tags/Python/index.html","76db6695cb931ebb1e7048c08eae073f"],["/tags/Qt/index.html","fc0f8231475184aed4b8d1f1efb30d17"],["/tags/abbrlink/index.html","0cf78cc9d105638720563d8ea8e07228"],["/tags/index.html","2ea93cc07b7f093ae22f5addd7142419"],["/tags/冒泡排序/index.html","2e0549b2967c1781b2abedbe28f9746a"],["/tags/希尔排序/index.html","4582e29eba64e845546078d009295569"],["/tags/插入排序/index.html","e0758427391b4213bfaabdc38705846a"],["/tags/数据结构/index.html","8e7639d6db21282db595fe96ad050b9e"],["/tags/杨辉三角/index.html","261620402bb4aae3f3559a74405c4fd5"],["/tags/栈/index.html","41620ff05466ccd701753f79447794ca"],["/tags/类模板/index.html","8c9e9692a1d89d961a78f3c752bec5ca"],["/tags/线性表/index.html","9d63a1087e4302cc2fab1cdd937a6856"],["/tags/选择排序/index.html","55c4ee6b8a2ce91ad03239f15f801c12"],["/tags/队列/index.html","315feb77fc1cc5ca8d26d17814f52bbe"],["/tags/顺序存储结构/index.html","4397504572691a4434a488b2cf4092ce"],["/top/index.html","35e6e4fe7240d43bc355b643cb77d5ab"]];
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
