/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f0fb760ebcdaba12dc0a38d84b26f360"],["/archives/2019/10/index.html","2091dcb1541e9798299598b5be8018c1"],["/archives/2019/11/index.html","2925649e4570f3b8cd5d96eecc5544e3"],["/archives/2019/12/index.html","bd6e8a188b4834130569a021404f1638"],["/archives/2019/index.html","9c0a8690b29cbba91def9e096d94a44f"],["/archives/2020/01/index.html","249bc16cbf33464c690f67aef592bdc1"],["/archives/2020/index.html","cf14232c288894cad2721179c8a0c568"],["/archives/index.html","e8f6b379a8796c7a9aad6067b74ec117"],["/archives/page/2/index.html","f30bc79f4f6c8086b155ffd46d05f484"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","a38e0b3d50cc3199daf26f9c201ef3b9"],["/categories/Hexo/index.html","c2e3c3deaa514f8d04e6a31abb608592"],["/categories/Mac/Qt/index.html","eabfb0684787b14289e974864d6d890a"],["/categories/Mac/index.html","391b9ceec1db049af8467239b435c2a8"],["/categories/index.html","b0dffc63a0fd29a7b70e26bd32b152e0"],["/categories/数据结构/C/Java/Python/index.html","568282b7b06fa6a1fa5d6b8feb8d1a99"],["/categories/数据结构/C/Java/Python/排序/index.html","d36d7f9224c2d95eee500fc8c44b308d"],["/categories/数据结构/C/Java/index.html","6f8ef678312fc36d3a54b33abc49c2e2"],["/categories/数据结构/C/index.html","f2c3dd7623e1a915cb9faf12b2c77461"],["/categories/数据结构/C/顺序存储结构/index.html","d9d91e2a79951848ec72d79406b39d5e"],["/categories/数据结构/index.html","2da6c8197403afb8fc6a4ae9f82f9d5a"],["/css/main.css","66936c036274f0a7b5070fa0c1b7f106"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7e5e066b4256a169501427a0ee09e2dc"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","2331b9b8239c8afc9986f427dd595122"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f1de415b3a73f42b5fcbda449744be0b"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","17052f142ce107cf1ea86dd225d0f622"],["/js/src/algolia-search.js","84f6cdf0a33f59ea0ba63833689098d1"],["/js/src/bootstrap.js","64eca0b95cc86f68777262b5a455c7b4"],["/js/src/bubble.js","42be131517279983c03e76d976508ddd"],["/js/src/clipboard-use.js","3a7164471d42fe60a5924f40b22547e3"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","c07f6ec8d4754b1538ca0a2c95454455"],["/js/src/exturl.js","a6a0dbbbfdebe9932d26e690556aa9f0"],["/js/src/hook-duoshuo.js","95fd43b6cc55c025f4b5737424ae7ebc"],["/js/src/js.cookie.js","5bb2cec676fa62cfa033ce5ecd566b1d"],["/js/src/linkcard.js","d192c7c8c3ab6c2ef1baf380899beed9"],["/js/src/motion.js","be806db8c1db609b4e127d04217ee3a2"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","fb65222a63b1ee6686fab2b228f0f4e1"],["/js/src/schemes/pisces.js","ef190e81bd0cc8a8908d4122bc28c8d4"],["/js/src/scroll-cookie.js","cd168183c474e9f52922bd820424a1dd"],["/js/src/scrollspy.js","20b3b293eea4d6eb0e75be854e1cad6a"],["/js/src/utils.js","54e17b0069a16a3c715bceec4fdafeca"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9074bbecd108a1a3b51eddfec99cbd49"],["/lib/Han/dist/han.js","727f5a4db863b884afb427ca2e7027f4"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","272b123cf728baa67cde53708f3bf9c4"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2f9660cc8852e66e6343dbe58b29cb38"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a88227d3752e04d50e47778a3dac693f"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d638efc32f805a0cc38200c03dce7d06"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ea4dba4ad4c5c3b87a3bde72a95cbf5a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3427b4de4c040454cc9baef4e5460de9"],["/lib/fancybox/source/jquery.fancybox.css","10923a3a6fcb809d2f3514310da993c1"],["/lib/fancybox/source/jquery.fancybox.js","7892783fa86c5a8b61fb46a0fa3cbeb9"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16ea6804c7e6f067ae4dfa9fd647c2"],["/lib/fastclick/lib/fastclick.js","79b5eb680f01c20c877d91624009357b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","11754a7ddfbe9100e2662d4ff3fdbd75"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7c9db706e21d06bacc6a4a0d50fad80d"],["/lib/jquery_lazyload/README.html","cadf02e9e427ae048d86924b7130b806"],["/lib/jquery_lazyload/jquery.lazyload.js","403b07f71e366824e3ebe49ba66de9f1"],["/lib/jquery_lazyload/jquery.scrollstop.js","3717998fef0847787f2182d16e7dca94"],["/lib/needsharebutton/font-embedded.css","cd3be00329342429248ee9f03dc5691c"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6153b56582885704d809b5b958e54af8"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3edf6ae8a321c29a770bfda7c6eaa07e"],["/lib/velocity/velocity.js","06d30d2dd347c59d87952188d3ade737"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1f8df1ae246274fd70eac592aed00841"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","67fdb0a1f788319b45edd588ee8997c4"],["/links/index.html","ef3a08508d10585d8449e50fcd2334da"],["/live2d-widget/README.html","b24f209370b2afbebfa2413fe499ec78"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","401d3ef768758fde04981f4e544d8ac7"],["/live2d-widget/demo/demo1.html","ff23bee9f1f0da256685d5261c8708fd"],["/live2d-widget/demo/demo2.html","e4287793e5d2e20d245fe866557a58c7"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","767b35b4c25bf38f6d0669a4eea1d8dd"],["/movies/index.html","b6a91d228cc10e364f9016f7dd94d3d3"],["/music/index.html","9de4a0a2df05c962ae90a88abdabf4a5"],["/page/2/index.html","04c61e81c87e38a7704a330ef2b422c1"],["/photos/index.html","ea4f88b03f144d87ca59cf189ca0bceb"],["/posts/10528.html","970b12a8edaf432e691f87fa79a9cef2"],["/posts/14311.html","412c6f6adc4e571928ac35686bfca552"],["/posts/15468.html","3f05dce348942e59de5323dd093f73ea"],["/posts/16107.html","ba6b5000bbd85a9211affb92b02c8fcb"],["/posts/20352.html","843b1c37010d2b08471140d1ed9d2a77"],["/posts/21238.html","53e4662a140dec89ea9b2d160f56e5bb"],["/posts/22281.html","98430b796488b1ca0b4107dea5c7686c"],["/posts/30c404a6.html","365e9be6d176fb1c50a3b08bd2414804"],["/posts/51203.html","86c94159ef8c05361ad49bb9f1af2857"],["/posts/59037.html","8ea6a428ab22d5b736b0ce64416f6177"],["/posts/69978469.html","f721f443cc42e43db93df614fc285c11"],["/posts/8cc73e65.html","93e5fdcbf42e5e1ebc3c254e34dd8f0d"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c74b95c40854c79adc363817f78d4c03"],["/tags/C/index.html","fa3aaebc20837cecab6eef630b6262af"],["/tags/Hexo/index.html","c9beb31f7a15ce1e21e5626f8f0c485c"],["/tags/Java/index.html","f1c56a177f09b0f153ef9c6e9edc69d4"],["/tags/Mac/index.html","fd1d4f629fef8d5bab3ce9d1d9adc098"],["/tags/Python/index.html","9e42f53893fab2bc2c76e26b73ab8490"],["/tags/Qt/index.html","1b89f929c2d36dbef6dc12af54b0fb65"],["/tags/abbrlink/index.html","0385ad3b5ed7a32bf91834b4ebed05b0"],["/tags/index.html","c8ccbf75ff99894147218d5f75d6e531"],["/tags/冒泡排序/index.html","9cdb6526b264cff9cdeb0596268db52b"],["/tags/希尔排序/index.html","cca3433897dec951bc3a82c99b19b550"],["/tags/插入排序/index.html","0c703efd5f9a11c8b8a616c75a1bff8e"],["/tags/数据结构/index.html","180ed676f236d232f33d25791fa663c6"],["/tags/杨辉三角/index.html","0ed82a53d06d723971b4d3be7da3f0f0"],["/tags/栈/index.html","09b7a59f8cd8be0176c38a1aff6261ee"],["/tags/类模板/index.html","fb74821a0f291658c1a6b81f42df63dd"],["/tags/线性表/index.html","39b10835196f0a1f9fb28a58e2a8262a"],["/tags/选择排序/index.html","b4d5f9118b584a908c83f36b539cc397"],["/tags/队列/index.html","f2c59fa6ec90056e61246d6b12edeb16"],["/tags/顺序存储结构/index.html","8b88e124716bc27b379796cf4b5d8610"],["/top/index.html","2b7ece41ef0d8bdd43d43462a5c378f0"]];
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
