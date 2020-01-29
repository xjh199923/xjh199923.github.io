/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","17f1e918a9579a23706f8502ba868dbb"],["/archives/2019/10/index.html","c2dbdbbe1e79aad91addd489e8d3bf64"],["/archives/2019/11/index.html","6cad39ba7cd9f7dad7abbe6af9e1c861"],["/archives/2019/12/index.html","d3ee57ad71fd7c2d7ad9ebfc888ffa71"],["/archives/2019/index.html","91b4879907a93603ad63d19b56d32740"],["/archives/2020/01/index.html","4d93aa2691acd20ccd2ca24ea9356780"],["/archives/2020/index.html","df475b441d83fcbabe2b210aa10f6881"],["/archives/index.html","4c059b71ecbcf8e20734a26e54dbaf4d"],["/archives/page/2/index.html","6bee6bb3c609ba84823102a567d3a75f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","782c6eda29af3778f5d4d6deec770f3e"],["/categories/Hexo/index.html","e2eede3e32a10539b5c7030bcc242c1f"],["/categories/Mac/Qt/index.html","99aa6bc82e5039ac476d63132bd5ea2f"],["/categories/Mac/index.html","44769752342bcae27229d4431211e295"],["/categories/index.html","2aff43594dd29f810663d347cfe5884e"],["/categories/数据结构/C/Java/Python/index.html","ac68f89e47040212ca99a4a11e06aa8b"],["/categories/数据结构/C/Java/Python/排序/index.html","30c51291ce9542563e831a096657341c"],["/categories/数据结构/C/Java/index.html","ff98edd6ec238ce5074673d38bf15d22"],["/categories/数据结构/C/index.html","4ae6d1eb0960a3fd8b300976b9b59c94"],["/categories/数据结构/C/双向链表/index.html","e2376ce6acb47734f9562ad72b76d51a"],["/categories/数据结构/C/顺序存储结构/index.html","74b288c6b1acb7919ebf717a9cf7dc54"],["/categories/数据结构/index.html","a5c611a1a7a37f511769a873b5fef405"],["/categories/数据结构/page/2/index.html","eae9de6e533fa9660cd98f135e97f901"],["/categories/玩转Mac/index.html","0cd2e84543c36aa304f1210ea381469d"],["/categories/顺序栈/index.html","9f221271d6cbef34f4870d126a5bcd1e"],["/categories/顺序栈/数据结构/index.html","a13f3e3d7c77c8b90ecdfe1bcc8b5a4f"],["/css/main.css","87b6b4302c441c7a1044de353c926166"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1c4f70cca77445769094e377abd7c97d"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","dbd38a4823dd2d43f8161093b9b28660"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3fa30f36d9bcf01452d077442354e8bd"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","5a3260721b3f02413aa1a352348e12d9"],["/js/src/algolia-search.js","0db49c4ab70be60ae754e746f0e09549"],["/js/src/bootstrap.js","0a002a6f09a0b10404b36b26c81f68af"],["/js/src/bubble.js","4099442fd9d23d4f842a5473864bcaae"],["/js/src/clipboard-use.js","1fd104512b5ba43097ce0557c1a8d0aa"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6c3955c48940e68945b1d53da20f2e85"],["/js/src/exturl.js","244f4f39ebc08e904bc986d8a3d1f5b1"],["/js/src/hook-duoshuo.js","11f04132d614f224133f25f826dd2fcd"],["/js/src/js.cookie.js","9469c46643228f7bf4ec1b839f618324"],["/js/src/linkcard.js","8840eadbb06df3090af1a66bb7275c48"],["/js/src/motion.js","55ef8dfbdafc83c48703af487c23408d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","943a8167d1890a52c3b08616d157d20f"],["/js/src/schemes/pisces.js","c51223b582833d2fefe8dab8b8863f60"],["/js/src/scroll-cookie.js","abbf435d00fd8dbd7849047e93b1fc6e"],["/js/src/scrollspy.js","fbd89e8eb6c5dec263b9751cd2b2bc20"],["/js/src/utils.js","81b1ec34369e1fd2161a1e4853aa1aa7"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","c930f0fb2d272237a562cdf4c3172790"],["/lib/Han/dist/han.js","94725c8a7b2629d726bdafd59625b570"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3e78a8c963c294efe558ad2137fee245"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","787ec772cd476e973dbc3158050cbd90"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","12e217621efa99988f65480f78c68e3f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","90663673d3162907e75cba5439e95e47"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e33274c428d01e1521acb7e9dd215b4f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","bd1bdadbd8930900a4e2d92005007002"],["/lib/fancybox/source/jquery.fancybox.css","20e097f8f5f134acc62ff1158e8f1944"],["/lib/fancybox/source/jquery.fancybox.js","5c4eb47b71046e76c6cb36b19d3476af"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","92b15ea238390a13e0803ce70c54fb68"],["/lib/fastclick/lib/fastclick.js","76edf3f2391139387976b770716ad724"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","8c13a2f7a2cf87c137eae8d12e183f6f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2da359f9be050ce46e7b2751bf9f3119"],["/lib/jquery_lazyload/README.html","16ff24e594a0711f3c71342d0e7c5645"],["/lib/jquery_lazyload/jquery.lazyload.js","36fffe261453dd9597a51d5053ecb035"],["/lib/jquery_lazyload/jquery.scrollstop.js","ab5b95efd3d5277a4f26cb3bcf9dc1f2"],["/lib/needsharebutton/font-embedded.css","cfd1a04d734530977aaefa6318346490"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","e61bf33dec80b43ec8ad2457b343b9b4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b80370b4ad2c35f6f33f62118c499fce"],["/lib/velocity/velocity.js","b2a9d7f9f08bedc836e863439103ec98"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","47731be85903e1a483ee11c96da8633f"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","662ac41233e20833b12676747b10028c"],["/links/index.html","decb48847bb36c65fb66cbbdfa13eec1"],["/live2d-widget/README.html","55e8b1ba32a6c2ae4e607fa5b275d8e6"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","434d7d9a83d039124d716a9e4d67055b"],["/live2d-widget/demo/demo1.html","3fdcad87a84d6bd999b6fd86ee526fd0"],["/live2d-widget/demo/demo2.html","bf1172e5d656cded98ca5ea4efd1ddfc"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","74b437f8647e381b771ab3085434e0d1"],["/movies/index.html","d159696acea73113eece3c4203b3a518"],["/music/index.html","cf2a93edefbaaf45a5e08c95163f7fc2"],["/page/2/index.html","4eabafc2b66831d211100985cd27e9df"],["/page/3/index.html","c9ddc9d50d749ec837fcdacaea6c8f79"],["/photos/index.html","fc279ac5d0e9f74a10a877676429f463"],["/posts/14311.html","a6a9166384fe7539a655200506008e61"],["/posts/15468.html","8f9b10c3cccbaa27a95194864211d08d"],["/posts/16107.html","c7c95b68598ef3ed1aaef50e86160e92"],["/posts/201e1121.html","b1152509d248591a946f6f64b821ae7c"],["/posts/20352.html","cd0336d32c5bbae2578436e7d7d6a11e"],["/posts/21238.html","4a886f0962c2e135222efa0d1d1df55c"],["/posts/22281.html","d02ed0b057e1d5cb8b590bb44a2b6316"],["/posts/278598dc.html","263e73d3b160c1cf25f7327d56343e15"],["/posts/30c404a6.html","b34a7a6ecdde52c2156ade611c54b3f9"],["/posts/51203.html","d95ae978f99df29a477167594bb74e5e"],["/posts/59037.html","3dffe326be1778ee68b73e018a6be4b3"],["/posts/60816b5a.html","2576ff8a7177cb3a5e575e03b377781b"],["/posts/69978469.html","10db10d18f188444a3bab83a7c80c63b"],["/posts/6a752619.html","cfe3839291eb33feb7dc81682186d222"],["/posts/8cc73e65.html","257a7ef6a27d2366d718589a56437c06"],["/posts/beb5106a.html","8484a9f462594204d741531f9cdbf6a3"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c96e2d15192ff864d27571a01db1e110"],["/tags/C/index.html","b4c4a775a52d03e6c3a92a86501fbcf2"],["/tags/C语言/index.html","45578eb5b5098cb850504b9bb74a0b24"],["/tags/Hexo/index.html","5ac22bfa3a9dc56aeeee0adff281747a"],["/tags/Java/index.html","4904d6360976b41b5e3945da1791a3d5"],["/tags/Mac/index.html","338359c957027754c5bf401d183c47bb"],["/tags/Parallels-Desktop/index.html","538348eb32163ca7cbb96e30dbf57554"],["/tags/Python/index.html","7b4a5c248b077bc45a244a5fb11f0bd6"],["/tags/Qt/index.html","d340949b2852d66364213d0426dca6ab"],["/tags/abbrlink/index.html","cfb4840f628c66655aa05bd623acfec7"],["/tags/index.html","a4b1fafc84db216ffc7b72b4894bd1f1"],["/tags/冒泡排序/index.html","13d999fabb4c656e5fcedd706fa31621"],["/tags/双向链表/index.html","a96d835e663267bc29608efb9bfdc063"],["/tags/希尔排序/index.html","5e690565ae2e0e7622d497f446387d11"],["/tags/插入排序/index.html","77541fe097ddc5db0037f3b76a9ae891"],["/tags/数据结构/index.html","9332e88f5e25f390bb4340890cfdf35d"],["/tags/杨辉三角/index.html","fbc4d996bb26f68f85a7124582a9107b"],["/tags/栈/index.html","cad8de27e7f62a65c50e0b61517112e3"],["/tags/类模板/index.html","1bb34b629338498d49c61bc18f6668b5"],["/tags/线性表/index.html","cfe9251c1847cb097b0b65a68bce0777"],["/tags/选择排序/index.html","f430afa646b79f66c68f7da0d2919958"],["/tags/队列/index.html","a92f4dfc7c659cca48b42300321872cc"],["/tags/顺序存储结构/index.html","f33232f24e1d1308bcb300741c8983a5"],["/top/index.html","35642f040b2a650e69f0e9e0d1ec9c1e"]];
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
