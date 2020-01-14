/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","bd9981777681df9933472181411395bf"],["/archives/2019/10/index.html","2249c2e665ac815d81efa6bc87680799"],["/archives/2019/11/index.html","5819f4b13ee9c7a3d5824b35deeb32b0"],["/archives/2019/12/index.html","9c76423927e929d78d1e1a7a8011dce5"],["/archives/2019/index.html","3af127e4a4609834203a211164cebfda"],["/archives/2020/01/index.html","52a5a38fce002aeafb5bbf95469ea59a"],["/archives/2020/index.html","10e375892f0ed6ad6a4e67de5ab5af7f"],["/archives/index.html","20a81d21fc2e01ffe1d0893b4ec246ee"],["/archives/page/2/index.html","b88ccbc3b608c6c996441aaf002537d6"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","843737abe8e3c91a3d03e11548021c83"],["/categories/Hexo/index.html","51a59a6e993e68bd1e506ab113aec0c6"],["/categories/Mac/Qt/index.html","8663b5c2b979abfd5c02e5e91519e323"],["/categories/Mac/index.html","b06b7dff0d9de56f3015b534df1aac9f"],["/categories/index.html","88b17b01bc8c476d94f43d7f35445a4c"],["/categories/数据结构/C/Java/Python/index.html","80acb227e7aae3274f6bc668e3fcf04b"],["/categories/数据结构/C/Java/Python/排序/index.html","e8bed2017a53b0052fab823b69339cec"],["/categories/数据结构/C/Java/index.html","a633f49fe9a16f9651ba103cd6a3ddd4"],["/categories/数据结构/C/index.html","ba82f0d6a158a0f18e41a35d9df07057"],["/categories/数据结构/C/顺序存储结构/index.html","57475c81971b7eb1dfb4390bb04a627e"],["/categories/数据结构/index.html","76f9387148a2a91ab56a8b5c04a48b3d"],["/css/main.css","867b35f055bced2245d6b5089c1f1d30"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5147d91b07096e89c0e55b63c880de90"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","98e3c4318d72647d2da3557c7a00a68b"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","997b07440e196c3878ffa1bba680e8f3"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7aa019e6160cd2ad4c524ea9864431c8"],["/js/src/algolia-search.js","0362b7a0cae03d0e7b1cfcc744056d62"],["/js/src/bootstrap.js","138ac538e82132284bab18cc81141426"],["/js/src/bubble.js","cb461f60fe3a419d543001cfe3aa35a5"],["/js/src/clipboard-use.js","5cea7bff8a3575ff2fca71f55f3dd6dd"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5e144031841d372e1bec1b313370b588"],["/js/src/exturl.js","13659632bd29fb7fd8c3cb6f9de55e92"],["/js/src/hook-duoshuo.js","07519bdbdf311da4558ca275223054e2"],["/js/src/js.cookie.js","d988e5e6581947435ddc57ca6d459143"],["/js/src/linkcard.js","ddabc2e990e290aeca6aa7723ef31d84"],["/js/src/motion.js","dbceb641ae99f88971501113a737320d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6033209fc9c2c863cddcd448891f9efd"],["/js/src/schemes/pisces.js","9349ca2871760add826930e1ce38f2d4"],["/js/src/scroll-cookie.js","14212cb60f8c8f37bd6c22c10a0cd18e"],["/js/src/scrollspy.js","eb52a1c036c1dc0838f9733b671d7134"],["/js/src/utils.js","fa550140fbc06e001ba497d0da1e541e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","dc0c4abc645c3e36dd6ad5c8cebff3f5"],["/lib/Han/dist/han.js","5844197f7486cd99f7270f7bd67fc608"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","c80b9622ea5b071f96ca57be10d4d45c"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7d9efc9ee2ee45126cce1155862f8f0b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4b0685baae152a17e63171b170545203"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","5d7d89973857ee45a430e9a949101171"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d573e260f348c3838ece5333b94d6947"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","ef0b6b1e2c8f266a635f49475acae5e3"],["/lib/fancybox/source/jquery.fancybox.css","00d24bf09bd0781d5e8146f5dcd2976a"],["/lib/fancybox/source/jquery.fancybox.js","da9cce480bf7e21cfbbc364cbe8b7896"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","320eec4b96bd5773b26cc4504363cdc9"],["/lib/fastclick/lib/fastclick.js","560520804cb9dc2098dfee2a21a156e3"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","43fa5629376fd65750b6c2a0c897347c"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b9662ac5fe4ef40dfa7dbcd98fa53b34"],["/lib/jquery_lazyload/README.html","a40e52a2f2c5bdf948937f3578d7629c"],["/lib/jquery_lazyload/jquery.lazyload.js","4d83c83ee2b8d595bd3667765ea55ff1"],["/lib/jquery_lazyload/jquery.scrollstop.js","e61b3c442d5409768c4e2f5053a0528c"],["/lib/needsharebutton/font-embedded.css","a6c845e860f619bf1c72f74b4d35106e"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9042f8312216d9e59b3874688c3847b1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","4b28f082afd1bc900dfd9b35c993be01"],["/lib/velocity/velocity.js","59339c19f0e7eea723119282a16bfd89"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","fd7af50c3dd28e7f9ee07fcfa8aabf8e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","aaf9112742c83e95f224cb6346b71063"],["/links/index.html","1ca6b938556c4921e111dd8575cab1b6"],["/live2d-widget/README.html","9da18943a11a4e0184a5fc1e573fac7f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5abce712c1e408e6640aa44e88ef435c"],["/live2d-widget/demo/demo1.html","a5812fa570ac6dccb74b6f18b0c5ee17"],["/live2d-widget/demo/demo2.html","6de7dec35fa62993d43a323dee20ac4c"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","025932de3e079928a36fedac7e1651f4"],["/movies/index.html","49d5dafe38a6f14fb42fcd279200c136"],["/music/index.html","1983c36e8c90092af58a656ed210ad2e"],["/page/2/index.html","6da60d6edf94659170fa883da6ee778c"],["/photos/index.html","ca75830cc3df97e124a461c1c727628b"],["/posts/10528.html","442e47a7871e4e1a9acb70b36303ea54"],["/posts/14311.html","80af1e21672d9c227091ac3ef98d2533"],["/posts/15468.html","7c3e73039430f765294b61cb7f25b2c1"],["/posts/16107.html","96a9b2c6470000386ece7bc1c2b32b2c"],["/posts/20352.html","b947b4c4f4580ba4442f08bf8381257a"],["/posts/21238.html","f94f091bc93a1ff44ef342721f8496c0"],["/posts/22281.html","da09a3dcd2d423e580947cb0baf12061"],["/posts/30c404a6.html","911d49db5a51d1399e1add3a4c4c995b"],["/posts/51203.html","d1ebebf4f823877539cd4a29adb11267"],["/posts/59037.html","cf72cfddd86316fb65620942ab5e0410"],["/posts/69978469.html","d137f74c2f51440a8485efca423b6622"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","a4e1196f0efed56ec175272da9d8e6a4"],["/tags/C/index.html","6935247d74138b13ad75c9b01338d4be"],["/tags/Hexo/index.html","e740458b7ebc643a76be8d04d5c543cc"],["/tags/Java/index.html","8a4d5afbcb59577e425127a43b56140e"],["/tags/Mac/index.html","c38577fd08e0201a7bec1bb5e460305f"],["/tags/Python/index.html","26c562a0b18381e611143df1a0072e05"],["/tags/Qt/index.html","4d172a4037d7fbfa84473966dacc854d"],["/tags/abbrlink/index.html","645182bf0f085076818adce9a4f17014"],["/tags/index.html","5cad12b270ee4161a147e3b321f41cc7"],["/tags/冒泡排序/index.html","610262fdc68f65c831c5e983d14e8033"],["/tags/希尔排序/index.html","686ffb6aee48ac906a81f9f8d1b508e3"],["/tags/插入排序/index.html","0a05fdc23c85a37898f7e7030f30c098"],["/tags/数据结构/index.html","a80ccfc0a6c5ea7d50bcb94157a59fc5"],["/tags/杨辉三角/index.html","10d00819986f17e1901f7c1ebbed6572"],["/tags/栈/index.html","e11715fb37d2dbe7abb35a2bd000cc82"],["/tags/类模板/index.html","86d456fdc830e439711e9d6a0bb47415"],["/tags/线性表/index.html","61c62bec181d93f14bbe2903dc1fb585"],["/tags/选择排序/index.html","d40e3cca2ee31bcb4b01fed9788fe0e2"],["/tags/队列/index.html","60b1149fe64d91178588313199452063"],["/tags/顺序存储结构/index.html","846c3dee3612bef20577f0160c863492"],["/top/index.html","85d264d7453945993e6127120195ddcf"]];
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
