/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3bb715e79321448db4082e742231c4ee"],["/archives/2019/10/index.html","acd59cd700d40f6c76e0058d4e811d74"],["/archives/2019/11/index.html","b295efe8c3972c0adb9be39f6f650db5"],["/archives/2019/12/index.html","3db7d23a53b328d3269cdbc410281f9d"],["/archives/2019/index.html","3266a4f1beba33e7419edc6058f1b636"],["/archives/2020/01/index.html","d3fb04e53081d3d80e8ee400a202303d"],["/archives/2020/index.html","9aae820902a9881849e50623666319ec"],["/archives/index.html","65f3140fb573d1d14723431f6ea05af1"],["/archives/page/2/index.html","f3f23c1aa07d6f2801abe5c55798a4d7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","91fd65fdf11f11b370cc458798793ff4"],["/categories/Hexo/index.html","de1405ca006f731e89c327610fa06092"],["/categories/Mac/Qt/index.html","c7b48abbcb11cff66d15a4479092c1c6"],["/categories/Mac/index.html","9535fbe69f7ffeca1b5eddfe3805b29d"],["/categories/index.html","8d9dddac7ffcb60dab8caa723ac7c29c"],["/categories/数据结构/C/Java/Python/index.html","371f8236366d490080d5f8a4fa42ebcf"],["/categories/数据结构/C/Java/Python/排序/index.html","ff89670de6d7b6b0fc56cf7bc50e3cf1"],["/categories/数据结构/C/Java/index.html","f6cdb766e71846b3271a0978c1ca7609"],["/categories/数据结构/C/index.html","d90bd309d9b7f8798a5f1499594ce100"],["/categories/数据结构/C/顺序存储结构/index.html","7c099dffc55415c82ec7c50655566e91"],["/categories/数据结构/index.html","450328440d61e92fda161a34845c1d33"],["/categories/数据结构/page/2/index.html","1c1e181cd1e84e9aa353489e3e962f14"],["/css/main.css","d10d689d33b333d5cb165d47b3d845ff"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","d13e0a8cd7f9f3f22e474baae105e425"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","69838787c884d589f28ea6d417cb9b36"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","2f0074dced6c9470497fbf60a9175072"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","72dba8030ad59028a0c885aaafbd51c3"],["/js/src/algolia-search.js","c448d9439bdabdc3cadbc8a0d4cc1f6d"],["/js/src/bootstrap.js","d79f6d2278fe7afe23b5438cb2ea7609"],["/js/src/bubble.js","69c5613c435d1c1600be5d750420f640"],["/js/src/clipboard-use.js","d2b6197bd0ff5e51ef242c691da4d6c2"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4975213425e63d96ac066cd627a2eb34"],["/js/src/exturl.js","09b3a835d6e2ef6016bf3cc3cb4f048a"],["/js/src/hook-duoshuo.js","6139a5c63b24423ec4c4e1028691a064"],["/js/src/js.cookie.js","13dee7eb62ebf1ee0a4a606dbd8dcc0e"],["/js/src/linkcard.js","1068f8013c85ae2d53f8f33d94df1903"],["/js/src/motion.js","d46dabf6688b4664a0cc0ebe70d88275"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","3b32a5eed7d4a60e44a509082c09b486"],["/js/src/schemes/pisces.js","779da276d0da8286704ae9470a82b5d7"],["/js/src/scroll-cookie.js","c5d35b9221d30e4e66ea5a1d6c2579e9"],["/js/src/scrollspy.js","a645c000591a26afe6b17cfb80b90977"],["/js/src/utils.js","5e9c1521670a6223b29a71f423ba4779"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","93183fbf068518f6d9652ee0b1d19f9f"],["/lib/Han/dist/han.js","6f25a58882be2c8fa55197d8b05927de"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","2bbfe772cea142402da724cb5eb946c6"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","82d7d59464a6f21a4be9fcd796505cbe"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","9a20d6d262261a4fe30286fe571058a4"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","72b032f7ce441088f55c1930dcbcff3d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c8018a93adee18549e9b2c64b3345302"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","6adc80d3279873f9bbf7d4ec3aaf581f"],["/lib/fancybox/source/jquery.fancybox.css","fd6fff52a8d3e715e38e69764c31b773"],["/lib/fancybox/source/jquery.fancybox.js","a10035bcd5579e872bbda25d733d3349"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","f9a07e28464e8c92ce3f97d120285d74"],["/lib/fastclick/lib/fastclick.js","55757b17a6bee979d87cba46a585d760"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","f7fa611dc4c15f06a81586afb1ccecff"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e08e9181075edf8e7f179f21545ab6c7"],["/lib/jquery_lazyload/README.html","2b2f4fcba542ff507189dfa1641ff373"],["/lib/jquery_lazyload/jquery.lazyload.js","80bea64ebd5b6b1f8da94d6227c17368"],["/lib/jquery_lazyload/jquery.scrollstop.js","6f66dbc67a6dc541c2144bfc81d461aa"],["/lib/needsharebutton/font-embedded.css","41400354bf86a1cde7dc8caa025c36b6"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","97702a55e34bd08db5d341c3e5eacbca"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","f462404f7608a829c4d736d2f540b50d"],["/lib/velocity/velocity.js","010f5a235a4effb2a060eb0d6101f136"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","93d2d9daa9380e7c6e13e033e11292e9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","8037de06de871d06633b0b93139e5413"],["/links/index.html","2b45c0ef24936177bb5fed586793fd7d"],["/live2d-widget/README.html","a0a6a700ee9753d566c90f0c7593ff48"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","caab56181236a553e861f9037e5bc131"],["/live2d-widget/demo/demo1.html","2de2ee422ef8a22cbf6b47fa39f2c277"],["/live2d-widget/demo/demo2.html","24dabd985d58d555270bf63a2b2ac863"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","e4a0d6fb6db33876d70cb2aae5a9dc3e"],["/movies/index.html","a232544ee4b9c969256c29014f7c4ebe"],["/music/index.html","2369a5182fb8217e26737137d4338610"],["/page/2/index.html","ed752f1da60bad3057f45fbe6bd6552b"],["/photos/index.html","bd67fb2d8be8132e01df2c4b09f6c4db"],["/posts/10528.html","efcbb066c99589ead65dd212e7bbfb84"],["/posts/14311.html","48add638802465561853bc942ce36d69"],["/posts/15468.html","975257fa4bc31bceba50b67c7049ebf3"],["/posts/16107.html","d02feaf1d9a559bd85a81ea0ad4719ed"],["/posts/20352.html","8c2a5bd7c66fde339ecb6bca7967281b"],["/posts/21238.html","3ee41939f96ead68bcf93f94adcffb74"],["/posts/22281.html","9a7c897b69194867dcd521889f7b4bc0"],["/posts/30c404a6.html","54328b111156ae4c0e3da97aa1bfeb44"],["/posts/51203.html","f59c72e269c5580c56095e782c368aba"],["/posts/59037.html","cf7358e2c955d9cb95f09adbe29c3696"],["/posts/60816b5a.html","5daa3fb1aab65152547d89d70dcb89e4"],["/posts/69978469.html","c2d644ada0df6815ab04690769c84653"],["/posts/8cc73e65.html","1da858084b8bef201b22ccc71bcd4f8c"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","59715df3e6847879435a460cfb2ffe22"],["/tags/C/index.html","029375d8f09586ca42f358cbea0ed979"],["/tags/Hexo/index.html","90b13351b00d9592bae60473ff2498f4"],["/tags/Java/index.html","8c7da1439013c61f1b043ff655c6beac"],["/tags/Mac/index.html","ffbadfd23071357f5b374326e9807e18"],["/tags/Python/index.html","ce6d34346c27ea44ed34dcf9497cf2b4"],["/tags/Qt/index.html","922c7f13f6eb0242ea5b514c87c83a43"],["/tags/abbrlink/index.html","f772801eb26bb29bae0d76b5eaae1da3"],["/tags/index.html","3f4e37e5db6766d2fee1acd0f379b36c"],["/tags/冒泡排序/index.html","8f4f1e543fe3514c441b1b2d97b9a24e"],["/tags/希尔排序/index.html","71d24f6f38848504a5791bfb6f5e55d1"],["/tags/插入排序/index.html","113dcd02b22c97e236352ddff8e3fcb3"],["/tags/数据结构/index.html","08ebd4a01bcc8442d60fe49f1171f02d"],["/tags/杨辉三角/index.html","e0c9219dab086cfe1098c20962439704"],["/tags/栈/index.html","ec077cda38ba622ed31cd9e3a7bf39b9"],["/tags/类模板/index.html","640160d975d0a302f04d9aac24bf7d47"],["/tags/线性表/index.html","a0b703738941df53458d702539b7d8c5"],["/tags/选择排序/index.html","04d1654b4e2d49a7017df31a41a9973c"],["/tags/队列/index.html","cb11c7b273771ed63e922db42582b9e5"],["/tags/顺序存储结构/index.html","ca8e5aef11bad82f98214888dfe21b88"],["/top/index.html","3dc7c8b9d7bfb8d4f2baa1f75246b1d9"]];
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
