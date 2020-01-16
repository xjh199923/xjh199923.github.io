/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2dc07946a99ff44b9f6de0e67711eb4f"],["/archives/2019/10/index.html","884ab97c67c8550cba31886476966a2d"],["/archives/2019/11/index.html","7962eb6ce091791295ea77cfe994f1f3"],["/archives/2019/12/index.html","ee31a5ac449cb4a2a8546a819fe134dd"],["/archives/2019/index.html","05a3c597a7c97102f15276dd93a74511"],["/archives/2020/01/index.html","e2fe37e88f73a9b43cd5505779579de3"],["/archives/2020/index.html","6a88513978a85917d0ef7c06bf6caacf"],["/archives/index.html","bfb54bf1939021af42dea74d911c6e66"],["/archives/page/2/index.html","7d8d7739f573209692f6e9d9895b1cc4"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0d738660aec0f2fb171447882f34b3c0"],["/categories/Hexo/index.html","1cc1d1fa1d4cc72e7b5d3aeca376830a"],["/categories/Mac/Qt/index.html","659f2dd27b25b2aa52a663a715f86b77"],["/categories/Mac/index.html","56e16457cd568d9e197e63a513f36f85"],["/categories/index.html","a68d2e3ac0c08d11e0d44790ecd2c519"],["/categories/数据结构/C/Java/Python/index.html","c166a1cf9ac2b7ddb5bcf801dc95d861"],["/categories/数据结构/C/Java/Python/排序/index.html","7c6debbefc2ef4f292ec124fabacdd66"],["/categories/数据结构/C/Java/index.html","a44268ab5191e46aa6d41d7fcf142346"],["/categories/数据结构/C/index.html","ca7504b0a1758724b8f7c18832568ac2"],["/categories/数据结构/C/双向链表/index.html","f424ca0427a5bae9368bf1dfb01d487a"],["/categories/数据结构/C/顺序存储结构/index.html","30916ab99219b6b311e51ff7f5470067"],["/categories/数据结构/index.html","82d904897f40d7a7458378f9b663fe39"],["/categories/数据结构/page/2/index.html","ee929b8183749bffb6f3ec0c5a74c917"],["/css/main.css","b8e0776e6702d1c66e3ba43204894e70"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","53977f9cb84a145ed3bc9802a2acbada"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","7bc36b01c5234e6e8cc707646ee8dc44"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","9c305143b19b147007123e0d96141119"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","0230a2acc6548955aeddf9f9ac99607a"],["/js/src/algolia-search.js","875bfca14790e7ab35218d51aad6ebc1"],["/js/src/bootstrap.js","47669ed7025c06f5fc997968e25245a8"],["/js/src/bubble.js","87a1005af06575ee034858a4903d421f"],["/js/src/clipboard-use.js","8b4565922a93b73d0cbbdc2902e68ca4"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","480b547ecc20634a418eae23462e21eb"],["/js/src/exturl.js","039eeb47ff10e128c73f27a0506f4515"],["/js/src/hook-duoshuo.js","263f69e890ac96ba557444adfb03aa9e"],["/js/src/js.cookie.js","166706b4d65ac9d2595a3da4a5ebd251"],["/js/src/linkcard.js","667f5b5141937cae6cd0d80c9ea5d02d"],["/js/src/motion.js","07992b2977d4db405e19d9b1748e18ae"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d1b2721aabd794ea669535630aa6bba2"],["/js/src/schemes/pisces.js","8bc611366b941d4a013cad94c7002863"],["/js/src/scroll-cookie.js","db7b5ec570661a5c5a1d56882e27e8b3"],["/js/src/scrollspy.js","ce38e720e2f39005f53d94d45de6e5ba"],["/js/src/utils.js","0f81393a78339d6cfc63cdb86d0ddf75"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","166cfcb33b60720449bf39b0a81aeb5a"],["/lib/Han/dist/han.js","e31cbfa08cbe382f8cd1e58d94b681d0"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","d06ef5def8bc73b604686f1e8564132b"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","3a4a827e3242311a1a1733ed74a6fc9c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","98ae4c155533281a3d59f77a8fe92566"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d144e3979dfae9ac723b8c5aa73820a2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5a5e36e89d00dc89572acd03b23f05fd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","44b4820f02e69b21b3f0fd75b8469def"],["/lib/fancybox/source/jquery.fancybox.css","d1bb75eec6bd5d4e74141ec3af2ad231"],["/lib/fancybox/source/jquery.fancybox.js","e4910144d87e84077adfb37dbeae4bdb"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","cd6fb86cb5deed7d07dc42d38cacdc41"],["/lib/fastclick/lib/fastclick.js","cf2a14b512d0fd07f9ea2bf85e7d58d5"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2cbdc731d56ee41e8f33097b50dd4263"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","f33d48c679a67a36b1555318aa4aebb5"],["/lib/jquery_lazyload/README.html","b935228baaf69be7c6a44a63bf633036"],["/lib/jquery_lazyload/jquery.lazyload.js","12e257e862e15c514645b8b2524a1d45"],["/lib/jquery_lazyload/jquery.scrollstop.js","8253cd152cfaec854f6016ae4256e36b"],["/lib/needsharebutton/font-embedded.css","3f0b5ac49df4d6f77be9157cadec1266"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","84e9aeaa0288f5bb042c00b703035ed5"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","33c2252465e0019315a96cbf6ad2ccef"],["/lib/velocity/velocity.js","55e74d485021a1add652b90743336099"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f508a133b93789511d9840b618c99dd2"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","567d55206ee829c5e97ace9a0a1be5b6"],["/links/index.html","ba7be439f032cfff339282adbe0beaef"],["/live2d-widget/README.html","c0ca951acd2c829d13846035f8984167"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","cc9d788cca5b0a7c0fe83c8694a92b9d"],["/live2d-widget/demo/demo1.html","74fff04452980155d228e40fe5196b6b"],["/live2d-widget/demo/demo2.html","73aebbc27e36f088c79490326e83bd47"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8e413b57fb62ff52dd3e9f4145c3b2e0"],["/movies/index.html","54613bb18263b4da49137c97aa194599"],["/music/index.html","c669a316e0d4fd285df24e6044685c5f"],["/page/2/index.html","b37a481ed238155d1478c91e5f62e972"],["/photos/index.html","a3a767e898398dc3d3c4ef5a0e5b8062"],["/posts/14311.html","a396276d4f7d0fdec1b06b577ff16b88"],["/posts/15468.html","bf3cb32dba809c15c66fea4717331e73"],["/posts/16107.html","68d6244bcfada94913e240f66530e23f"],["/posts/20352.html","e89bf2fafdb418dfe77a16ff6b45a7d2"],["/posts/21238.html","72077a944a81501a167454095c59d4f3"],["/posts/22281.html","5ee2e300e8b3021e1563a9e80ef85339"],["/posts/30c404a6.html","1f024fdaac38bca20a179eceb72f9add"],["/posts/51203.html","9a9f8c22a22e589470faf6671b4f943f"],["/posts/59037.html","7b156411b6974482c2336c48a1a256fe"],["/posts/60816b5a.html","b65c9237d6a04fed3f9219f857a16aa5"],["/posts/69978469.html","91c2e3054e64c80f647ce14093b072b5"],["/posts/6a752619.html","d4e4f054795370bbd4e86b6e13b569fe"],["/posts/8cc73e65.html","5019224e0f0b1c6ef44128ebf63134b8"],["/posts/beb5106a.html","a55c6f774f70b20511cc13d90f550b80"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","aa754d8ac9c86c9c580e7d843da309c9"],["/tags/C/index.html","b9d7d5e1c441c95d9143b95471eb221e"],["/tags/Hexo/index.html","6bf53fdebda2136a67030c37f07d8356"],["/tags/Java/index.html","4cf744f57d7726ccb846e3b92f84edff"],["/tags/Mac/index.html","bf98f52cf9207f2b15fd7388149c9c7d"],["/tags/Python/index.html","2b1d154513d0a8544d0401f432fa25b0"],["/tags/Qt/index.html","5e276bffabd86f654d6ac365d21cb4b4"],["/tags/abbrlink/index.html","55ecd91fe0a461bcf2349bc3eead0212"],["/tags/index.html","1562551619b82509383df003ea250ff6"],["/tags/冒泡排序/index.html","74894ea0ae81b6c3ad34e2d3536d0cd4"],["/tags/双向链表/index.html","3d403fc156599bb8b68876a6ce31c4c9"],["/tags/希尔排序/index.html","5a1748d00f11ff355b58bb6f44266eb2"],["/tags/插入排序/index.html","169aa56dd91f90c4ea354f587a6c687d"],["/tags/数据结构/index.html","a283f70d5792436fbd480b29f98bf317"],["/tags/杨辉三角/index.html","3f961b936e374b394b67c3427ab65f84"],["/tags/栈/index.html","4826f680e64a0b52ece247b952296dcf"],["/tags/类模板/index.html","d373254c7e1a77084d50de1396540170"],["/tags/线性表/index.html","560938d7ed16c2419a781540da368fe7"],["/tags/选择排序/index.html","5c91632ef823425d041f423b5ef83c95"],["/tags/队列/index.html","462104175cc41c212203d7629fd3909b"],["/tags/顺序存储结构/index.html","90599361b4d1a9df6bb819b77c9f523f"],["/top/index.html","220fb45d71f6823adde89a64cd182d35"]];
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
