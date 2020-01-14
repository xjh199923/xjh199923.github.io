/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9381db9a8336a1ba9d7be3cd93996e38"],["/archives/2019/10/index.html","243602bf045125d4480e7717903facc4"],["/archives/2019/11/index.html","7ecf0a0706d06e162bcae4de6a38c41c"],["/archives/2019/12/index.html","c513c9e4892b3dc2b03e4a44dc8d9c4f"],["/archives/2019/index.html","7bffd6d975aa1bd1cd2a407fca1f97b3"],["/archives/2020/01/index.html","171393c5a3e77cc88e23930dcccd2a22"],["/archives/2020/index.html","cb0f502c8baab55bab2d14617f926b88"],["/archives/index.html","f902bbd829786adcd98c45826a25c73a"],["/archives/page/2/index.html","78480bbee30f21807c575643c804fd0c"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","b842444ed16d8402322f717a876f9ee5"],["/categories/Hexo/index.html","7f0706a65616c3d93fe54406ea4f2595"],["/categories/Mac/Qt/index.html","f2f766d9745a182bfab17beeba5aa3cb"],["/categories/Mac/index.html","29448fd5513d56d2319692e8944552ec"],["/categories/index.html","3a65bcb48bda16434a48f861108ec5e4"],["/categories/数据结构/C/Java/Python/index.html","90a47601a79e6e441024075634df04d1"],["/categories/数据结构/C/Java/Python/排序/index.html","745b0f87942e0a2cc991ea28c5ae7196"],["/categories/数据结构/C/Java/index.html","2338fe0f574d270c8d0f943e61c0a193"],["/categories/数据结构/C/index.html","ece01ac9e45db97afd0289568197d186"],["/categories/数据结构/C/顺序存储结构/index.html","64b4709f9839bde137ad19a5a4dd008d"],["/categories/数据结构/index.html","c47b2b0a1cb58a0f1683f52b3b3ccb35"],["/css/main.css","d19818c3099491287937f013ae497e1c"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d1e24592f47dcf09ad7c315469c2d8be"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","4cc6a0ffa4081c53cc791a0b0176afce"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","257b31294d991fa41e968b2961c4a9af"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","67231ec0a9cde0f1e802df0e98ce169e"],["/js/src/algolia-search.js","a0eba0fa2d9f222dd965801c7681f0f0"],["/js/src/bootstrap.js","9bd9790d0fd7621b367f8bc32ac1ec54"],["/js/src/bubble.js","a4a9ef2163e0ff297369211ff24af170"],["/js/src/clipboard-use.js","63e8584ef0e18bf0589b8647c50c9f8c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6ea3879069c9c556807b9d6a563b6abe"],["/js/src/exturl.js","c2d9b985f47d928dd57294740857d382"],["/js/src/hook-duoshuo.js","37e3e38abfbc08f351c002ef3c7d0461"],["/js/src/js.cookie.js","f32c36ec68c411517c8027ecb7db08d2"],["/js/src/linkcard.js","9fbb19f5bd34eb41b2689afbd781f9a6"],["/js/src/motion.js","152aae347b1591332918fe6f69c38765"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","a1e9a6627965a7d5b2b7bebde649d90d"],["/js/src/schemes/pisces.js","8bd5673da6c64a51ab9193bbfff5b048"],["/js/src/scroll-cookie.js","d6df2587d90964bf2a70c0c818b1c5ab"],["/js/src/scrollspy.js","136ff72f3b6afc4aef49a9bf53996bba"],["/js/src/utils.js","5333e1569ec58c229ad697910847a33e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","3913b27cd718a1976842cbc24ddb0a38"],["/lib/Han/dist/han.js","957d987c5adde29facffeb434c0fa932"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","377103e088c6f1914a0e45d35d950f30"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ec103d86d47d78e7add0be6a4688a9f5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","d5fce4881353e9a6570fba9cb64fd8df"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","dababd90dbb62681d4752b2dca102ccd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","350c6450541183087b89d66d9e890122"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","623c6404684213f41f8ca780879863bf"],["/lib/fancybox/source/jquery.fancybox.css","b89b936c0826ade234809300547f2fb4"],["/lib/fancybox/source/jquery.fancybox.js","a9cb64b25b674b1d13ec1f928bf70cc8"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","46da440a9702706c05070a10622af97c"],["/lib/fastclick/lib/fastclick.js","fafadabcffae28a9c1738b336b3114a4"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c7b9871e37789df22cc47649c0a83a08"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b373493b3aea7cb2c5a36d600a36036d"],["/lib/jquery_lazyload/README.html","bf9203b9d0c67c5dd915146f2fb2e451"],["/lib/jquery_lazyload/jquery.lazyload.js","c2708697b4f9bcba4e428098b32c17df"],["/lib/jquery_lazyload/jquery.scrollstop.js","de47ceeea58f81a26c2ebdbfcec9ffaf"],["/lib/needsharebutton/font-embedded.css","16475e29f875b9132c824e64707d0b05"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","3cecd03babf16349a08b22441c6c96cc"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","0d51fb038fb0330157a80079bcc499c6"],["/lib/velocity/velocity.js","cd52deb9780ba5fbf8161dc5f668ad5e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5ad49477d7088edd7060c7956bb3c8b0"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4a8e48ec3bdefb52da5d50926f8c33b5"],["/links/index.html","2eb6ca8b97faaef056612695335219ad"],["/live2d-widget/README.html","123a9f66ab82d56df6b94ac474f21657"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","e79e39a05989b141714c4b450f041945"],["/live2d-widget/demo/demo1.html","9193d0be4b67b9835be045902591719f"],["/live2d-widget/demo/demo2.html","6b3d8acd001ee1d3c924d6431e6acd34"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","759032ea044d35b607291764400e274a"],["/movies/index.html","9265521b27f707fefeb91130eacfb2dd"],["/music/index.html","30c91adb5ce7a2eaa82e443b5900f0c0"],["/page/2/index.html","ce83b6f110a386fe059504dc5c03faf3"],["/photos/index.html","dba08eb994a75ca303b8b30df062f6fb"],["/posts/10528.html","fbabd1ec311cd627ab002a7869c6608e"],["/posts/14311.html","d417b28dc2e79635a93d760329f7ad94"],["/posts/15468.html","9072b6f2c21abdb8357ac0415533c397"],["/posts/16107.html","7d95427d9480717c23a00e1443541080"],["/posts/20352.html","39e73795d7a8dd1328e097d21eb85f1d"],["/posts/21238.html","71235aee6a34237fb7500f6cb0dc0973"],["/posts/22281.html","94110906e0af7ed47c6a274130b1d69e"],["/posts/30c404a6.html","8b47496e228865ab635d7bf9e148b5d6"],["/posts/51203.html","eee78ec896834017deec89b511a51445"],["/posts/59037.html","360a19cb56af677a3cf3d49639b19065"],["/posts/69978469.html","863d0babb5c963b9a6ba1c3aaf906c2f"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","f39261c7ba01ead715b1fd49db491121"],["/tags/C/index.html","f56d83fa29837085249de60d67b42733"],["/tags/Hexo/index.html","c43c766a03fd316f1d1b91bb8888a23d"],["/tags/Java/index.html","0cce7b698de27ac4db1a884d3be53e56"],["/tags/Mac/index.html","57fc27c74e7d453eb47b7ea3be231fc0"],["/tags/Python/index.html","657d56a3aca0c2113e927ed91b04f4bd"],["/tags/Qt/index.html","b6befd64fcae5962e41aba76eabaad5f"],["/tags/abbrlink/index.html","0232a446ce4578619fe9859363486136"],["/tags/index.html","2c910f258c3c324dea7ec2f76849cee7"],["/tags/冒泡排序/index.html","84ea3ac821568f1891722c3678f0078b"],["/tags/希尔排序/index.html","f6dec52a7fdda81a40932cc4dfc33520"],["/tags/插入排序/index.html","c833a4227dada2e203d2a1b740af12b9"],["/tags/数据结构/index.html","06c17920294ab16ecd5c65a22ae20036"],["/tags/杨辉三角/index.html","817bfb2dcab08018b3aa8b5aadb580d8"],["/tags/栈/index.html","fdf47cc53289f9a63234b4f832c19114"],["/tags/类模板/index.html","b81468b34f969badfa79143f8bc67b00"],["/tags/线性表/index.html","603e3371c58bc16095db612b22514995"],["/tags/选择排序/index.html","a7d95af8f85462912c140c425b1d17f2"],["/tags/队列/index.html","7010c1612c24cb56ce1c0ddaa9b8255e"],["/tags/顺序存储结构/index.html","c24595d9c8f6e2769ac0d75821452fb7"],["/top/index.html","0b5963aa74f9f8e1bf957079a23ea795"]];
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
