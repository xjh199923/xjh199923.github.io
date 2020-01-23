/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9fa9cd7e1d61208f430206c75120b7c8"],["/archives/2019/10/index.html","08dfb52f33097e30e8cda6f2c0364a07"],["/archives/2019/11/index.html","a26d579ad18bfd0f9160ebffc94ec00e"],["/archives/2019/12/index.html","a4e41927787a3104bbff951400a588cf"],["/archives/2019/index.html","9daec19736b2f7aa9b86123c3ea2a01d"],["/archives/2020/01/index.html","391048174a603832521a0dd9c4982d12"],["/archives/2020/index.html","d9ab2fd28edc9aa9de98f88c68e9d482"],["/archives/index.html","ae179f3ebf41639502e3fd7e653febfc"],["/archives/page/2/index.html","7c7cc43478add13d6d07a7557e401ada"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","8bb8f011c2ed94890ff18c9bb07edacf"],["/categories/Hexo/index.html","9725ac2ccbda1cd7c1f84022c34dc9ed"],["/categories/Mac/Qt/index.html","d8fb195a7e7c238bf311b78c9e1c9d2b"],["/categories/Mac/index.html","6b2c6cd1667afda04c6a436d4a6f155f"],["/categories/index.html","79308eb14cf66b35cec13712d6982ef9"],["/categories/数据结构/C/Java/Python/index.html","07028327f65c58b809fb2ce14a35e5ea"],["/categories/数据结构/C/Java/Python/排序/index.html","4b5d74a05d8d603f007034b1db7573e7"],["/categories/数据结构/C/Java/index.html","cc8bc8dbaa39070bca8caf8fcf6b317f"],["/categories/数据结构/C/index.html","eda000361e4cd99b8cd956ac23bbb36c"],["/categories/数据结构/C/双向链表/index.html","f45bc5ffc7271f5068908ccb9eece5d6"],["/categories/数据结构/C/顺序存储结构/index.html","f3a9177d80aa6c578dbd4f9a169eb8e9"],["/categories/数据结构/index.html","3653e1fe231e23b67bdc847734a1a6e8"],["/categories/数据结构/page/2/index.html","f84d624e391dd25141f30d20853239be"],["/categories/玩转Mac/index.html","30f04b5c8bb93ff5bbd2aef4a90f6953"],["/css/main.css","9589ea3200c4d9c8c9369f4dd6470022"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","b942888a6a6b57374b69f5ac8bc0b321"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","0fd41affb4912b8d99364786f4bc1724"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","03a2ffece81bebe8b87231951f31195a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","0e62d5460337edc1026d8b56947217fe"],["/js/src/algolia-search.js","96f44af38ef9bf4b3ffe792cc0e3fb6b"],["/js/src/bootstrap.js","1a5faf3d3f908919a51388c24e0c4f4a"],["/js/src/bubble.js","07fea783e0cca5079a038ee1a372cdae"],["/js/src/clipboard-use.js","0195906985bd2906c90c734ee76647ac"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","07220d545b3cc5c57bfae0f0250a5347"],["/js/src/exturl.js","d181c2ee4c3882c8169dea28b4f99d4c"],["/js/src/hook-duoshuo.js","59cc5f15a82e39e5b3733c2920a31f67"],["/js/src/js.cookie.js","e7e47c196bc7d3aa481ed15028dcfdaa"],["/js/src/linkcard.js","7a446da2cd80d9bdffa0219758d6d937"],["/js/src/motion.js","072f1a37078ff3f9d75859754728ef0f"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","02f72642d1bf4c64ff9a94c65a730b95"],["/js/src/schemes/pisces.js","b94dc1df5147e8a7641f0839c9f6a48f"],["/js/src/scroll-cookie.js","de3433feb820b031ca4dfae43245d5b8"],["/js/src/scrollspy.js","4050ba141a9318c10c5e7a92377e5a94"],["/js/src/utils.js","98336b638fde7d6bfe2af95c2872398d"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","a15dae7239c3c51f8896f1296ecb0db1"],["/lib/Han/dist/han.js","83c67848e361145a6dd1030579f739b0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","200f7b5aa033846bc246be0976377094"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d817974e79bf3dbcfa2a7b4d9afea46a"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f321925081e3e8c96409988587184729"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3330923728dd763685a2d88040b9ed14"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a47645a0778b8b83954799e9ca73d17a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9a9667aa9f0a56d376caa43ccb30c880"],["/lib/fancybox/source/jquery.fancybox.css","f0b4d24ce1b90d7218ca4d6a2a869750"],["/lib/fancybox/source/jquery.fancybox.js","878e1815be9ffcf09ec4e32c402582e3"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","0b892746964a5e38acebcbb043b169d5"],["/lib/fastclick/lib/fastclick.js","e28d62e49e3797b7c77df64cc53e35c4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","0d68236dcd6750a2e17f3bf072768d35"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","bfdbc51774dfaff12b2012c69b742658"],["/lib/jquery_lazyload/README.html","07aec16545e2f0923fdf62aa34464680"],["/lib/jquery_lazyload/jquery.lazyload.js","74a0e39af66d0ecec360b9ed3c33bffc"],["/lib/jquery_lazyload/jquery.scrollstop.js","526b58c9f9584ad7acabf382a083367b"],["/lib/needsharebutton/font-embedded.css","23593c591b5cef2fd9e858992fa74458"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","5736bafbeeb400488f1fe853862c2200"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b4637ca487d9226871d0e70f2c41a348"],["/lib/velocity/velocity.js","f363cd269b6322fd7cf0ddcf334f7749"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","cd6b7bc29a5a79cb9c4cfc5c98bd323f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","ea450d104c6022901d6da694a1baade6"],["/links/index.html","16c0f586fe7d26a20f490887120d4b8b"],["/live2d-widget/README.html","0184ecf760e0fd0790d678d02e0b9446"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","ce77f8936875b73620096439e9a3f7a9"],["/live2d-widget/demo/demo1.html","b18098b07b023e800f75ff0392c91f5a"],["/live2d-widget/demo/demo2.html","a4429c15b60406470e745118e0e602ee"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","124458f9ce073bd28544e399efc9d18f"],["/movies/index.html","1f3268a339638e1084f08205f29cf5ba"],["/music/index.html","54592a89917a24a3251a9413a992aee2"],["/page/2/index.html","34c9713bd43940085ac65dd9e099e37c"],["/page/3/index.html","41cf80215e83a49c90eff1aa6c56d0ea"],["/photos/index.html","0dccaa93f33be11cc3502278b2cca631"],["/posts/14311.html","321f7f2ef58675b412d5439461c90009"],["/posts/15468.html","bc37cebf2b08de916963e642da32653d"],["/posts/16107.html","8e3ad8b23928a3f76244d7e8108da744"],["/posts/201e1121.html","0aafe5d95fa325ecf4ad4a3c39643f64"],["/posts/20352.html","13b75ad42f0eb1475d9ed0ab0cacec31"],["/posts/21238.html","ca300bcb9a9dc76bbb7fc8ba2441740d"],["/posts/22281.html","b44be67fcbd3ecc5f068b86ec8a50854"],["/posts/30c404a6.html","925b97a05070ca0c484f0f8e57dbb936"],["/posts/51203.html","1bd971fa962dbd6227816257fc8347e4"],["/posts/59037.html","3d0e387e3c794653fd96e9944fa1dd6f"],["/posts/60816b5a.html","69bec8891295a5ad8ef36b831076a9db"],["/posts/69978469.html","ec4eb237001b0704e087de0b7f363e60"],["/posts/6a752619.html","7dbc2690c1d27d47f20456a7f49cc94a"],["/posts/8cc73e65.html","8635e7e456ec58704f43bd09daf10add"],["/posts/beb5106a.html","e27796bca22b9ad1eb2ca9b4a06f5248"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","003bb118ccb57d81860dbc152aa67509"],["/tags/C/index.html","2b88da72fe21f802173a173768a8f2ad"],["/tags/Hexo/index.html","c69090fc79889cfe2c12ef640cfeb31e"],["/tags/Java/index.html","56181ce07c84e8e4d8b0d332bcaba608"],["/tags/Mac/index.html","3a1cd360fcd5eb71763f80e58ef0c63f"],["/tags/Parallels-Desktop/index.html","95931e9fdd129740ba81af0b2e74b930"],["/tags/Python/index.html","3ebbb3b517ba3c39a5bd73895d4d434a"],["/tags/Qt/index.html","d8bbe9cda714f5f5026dab1974067e5e"],["/tags/abbrlink/index.html","d1c20dd5cc65077df3fa58e292633471"],["/tags/index.html","7599ccd9d83d189e01a78c92babac6d0"],["/tags/冒泡排序/index.html","64da97bea8fdb9f3c7f4825acd9e8f03"],["/tags/双向链表/index.html","92deb401d690d90318d7223e6cddf946"],["/tags/希尔排序/index.html","37133c85e019d6366517c213738f8406"],["/tags/插入排序/index.html","c6724958de733186eec2e8cb3ae595c6"],["/tags/数据结构/index.html","ff04122b81f572aacc75a0b8f88953cb"],["/tags/杨辉三角/index.html","3660c086fb974b82a6bb7a213909bfed"],["/tags/栈/index.html","8f3662ebde724013cd0762e1875a8876"],["/tags/类模板/index.html","60910ec6a9ea8eb91aa6b88134a8500c"],["/tags/线性表/index.html","43e842e6d687e409e4d9773c4ee29e6b"],["/tags/选择排序/index.html","1120c40f15bb8b85a383afc9a0195fe3"],["/tags/队列/index.html","76a9c5ba3c167c7ef50bddda0a0cbbc8"],["/tags/顺序存储结构/index.html","e5a967a558b4ce28d8da13b349aab383"],["/top/index.html","9dcc76219f9eb08d9aa18f3d9f990cfe"]];
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
