/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b351fe302ec82ca7e80f68fa9c1c1c54"],["/archives/2019/10/index.html","97e2ad08fd8301dfe14579654841a49a"],["/archives/2019/11/index.html","192ff51d989f7f5a9d1f83dd363c85d2"],["/archives/2019/12/index.html","c2aa68ac8ad750ca144bf19bc1e912a7"],["/archives/2019/index.html","1c7842fc6770163fbe0d9c5583e8ef05"],["/archives/2020/01/index.html","1456c32707e6531d5f9ee621be6c2d57"],["/archives/2020/index.html","1122a113bb75edfe3f613f2081e796f7"],["/archives/index.html","e2041af10aeff0a8ff5e19ec5a72b705"],["/archives/page/2/index.html","7c2e1483d9297588be85a6a7eef10fd3"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","726b8324ba14937d2fc058e7ab8d36d9"],["/categories/Hexo/index.html","be1eb9455662d85356212a7ae496c886"],["/categories/Mac/Qt/index.html","d8ab4862d1a44f931a56089f02a15755"],["/categories/Mac/index.html","5d7b54b6249f253d53ae8e49ac62e4de"],["/categories/index.html","087dfd69d608386e5553c837fbe3a78f"],["/categories/数据结构/C/Java/Python/index.html","05485bc8efff1ba3db360e9e73e91383"],["/categories/数据结构/C/Java/Python/排序/index.html","5e78b2daa0a02c8f2fd4ad38040d43cf"],["/categories/数据结构/C/Java/index.html","b57a486dd691c1a53e3d0591977cbfbf"],["/categories/数据结构/C/index.html","ec3d3be7c3ba928f5dc4c8b6180ef129"],["/categories/数据结构/C/顺序存储结构/index.html","a195b15975585fd806c4b442976152fb"],["/categories/数据结构/index.html","926fae07294d9984da74956889a10c08"],["/categories/数据结构/page/2/index.html","f1e0ebfec439402690f2ad24c948f8ef"],["/css/main.css","0c220e6fa3c37e47b38ead28a7d25851"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","0c1058a9c26ff1d9ac2fbf0a00850a5e"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","c10f3e6655740ac77e4d0afccdcc647a"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","43b1b39058e365434bb33d5cd7d7f07f"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7c32fc1a1d1638eadcafce6bca19191c"],["/js/src/algolia-search.js","202e7e4eafb95d842cbc82659a1c9fad"],["/js/src/bootstrap.js","87d09d1d55c0ee4971a70e0a4046f977"],["/js/src/bubble.js","83a9689b67986a6751a2ade6310e7db1"],["/js/src/clipboard-use.js","b769bf5a7d9e957aea27f92e69fcf70a"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","71d34ebe3c25ecdc8040d3b0b940b84e"],["/js/src/exturl.js","026ec4a8817354c8961662ba0b1bc506"],["/js/src/hook-duoshuo.js","3b894b7578ba32c35ebbf39a2d9a98a7"],["/js/src/js.cookie.js","1b3014b3fbfcc65e198ea8bd2179aa2e"],["/js/src/linkcard.js","02986da059a61088cf5d4a9f54b184dc"],["/js/src/motion.js","9dd363fbcf99f41dcf8ef467ac4ac2a1"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","7c54ef6a8d8f799591c43b4241d9e8ff"],["/js/src/schemes/pisces.js","0593ca7cac19638259bfbc170dd3da08"],["/js/src/scroll-cookie.js","941621def67808514d019caa90dc5e0c"],["/js/src/scrollspy.js","7d8fc4c7c0c4e318c977a50b2b9bc0f3"],["/js/src/utils.js","54f34ec1e0607617d0fdeb1af9241d2e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","673f2ebb660d58332b7a164bf2a85e42"],["/lib/Han/dist/han.js","167b83cdf7cb54c878433d05c4c6c46a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","38c341a0cbeafc1739a650c7bca91c0a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","f48d0f257f23630ac21924aae03bfb26"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","92af506ecd51b770302f94e5a6202fd5"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e3deb34f31bf8e14e2fe508e3d7ad260"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","2b72dafcfdb8eee177591941e5978862"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","79a88b877ddb90786c3801293f4446f8"],["/lib/fancybox/source/jquery.fancybox.css","f4e8f8fbae87113fb2b85bf6e74235dc"],["/lib/fancybox/source/jquery.fancybox.js","34521a342dec95670fadf6e8a42aab2f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7078b5f2cd87cdd106b331fa72847b20"],["/lib/fastclick/lib/fastclick.js","1eba471d98e24db5d1c618c1e8cf3d5a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a997d0dbfb465ec9e5e0c9fdd2b11170"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","9a973b780cbc721021d44d162342728c"],["/lib/jquery_lazyload/README.html","32bbe44657ffef841a057dfbc865227b"],["/lib/jquery_lazyload/jquery.lazyload.js","fd7c0b995cb866ebdb2cc60194588c24"],["/lib/jquery_lazyload/jquery.scrollstop.js","2241ea26559be715515d3292b917b9b8"],["/lib/needsharebutton/font-embedded.css","5579e9b895138c3b89bd8e3f59294ead"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","d5abe6f86c05b4139dfe4aafd13840cf"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6212fa56453a8cfc13df943e4dcbf2e5"],["/lib/velocity/velocity.js","d989fdbdd4de12aac2284b4b183c7c22"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","c9e6d76522ec02ddae21b866d6f4e1f1"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","3d125b87cfde46b446f9e9ad35d994fc"],["/links/index.html","c7aec425721bdb422c20d1907947f99d"],["/live2d-widget/README.html","85e1af7c46130e401e9d8fd4fe075b5b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","363899857952ffbfa6226ab721e5638a"],["/live2d-widget/demo/demo1.html","5503cb2440a95c23e77a9b1573f16308"],["/live2d-widget/demo/demo2.html","325d315572d3e1261f05e1c3305c9f47"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","edef0eb610b4016e7286ea344033c58f"],["/movies/index.html","34ce624b056a09335ff72e74a7117be5"],["/music/index.html","c03b0eff226faf6171c5f6fe0de39065"],["/page/2/index.html","f61544e0602bc52f49e97d654f37a35e"],["/photos/index.html","45d2d1066d9d092c8bd7d05a5f183231"],["/posts/10528.html","719e99c70001da00a8ae3de6cf648c80"],["/posts/14311.html","d493929e36581ce5b5f58f7bc67a1361"],["/posts/15468.html","93e0c89a10550891982e4764d0586d7c"],["/posts/16107.html","2b144df1132ffae1a135931d87107a67"],["/posts/20352.html","2ca39a47d0b0883451431879844a2905"],["/posts/21238.html","bcdfd66008f19f7b15a93d2a66fda4c6"],["/posts/22281.html","7ef2fd53a41267a753b0b1b1c741ebd4"],["/posts/30c404a6.html","3bc4430cb73196ace72ae7ce8e3e1dc8"],["/posts/51203.html","2079f338a78a967edabc1de5a4d9ca67"],["/posts/59037.html","39dabf6fd8841fe80860610177605f9c"],["/posts/60816b5a.html","7d106dde397001f071e6126a4fc090dc"],["/posts/69978469.html","0b9785f2c3db29ee649f7ab702fb8923"],["/posts/8cc73e65.html","7033e2c55745896903a8e53f8b360c04"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","510fdb7902fe565ee06474ac7c23b1f0"],["/tags/C/index.html","41c157817b89a396b259bbd5396ffc10"],["/tags/Hexo/index.html","b9ba59148efe156a71d8165dc4f27296"],["/tags/Java/index.html","756cc9a56f340a1498350073a46e2e0f"],["/tags/Mac/index.html","9750ec5eb0fd52c36e305b0b3f503a1b"],["/tags/Python/index.html","7764a48796a52b4affa5d805f0fcdbf1"],["/tags/Qt/index.html","e3d05513fed645ee80df83830b77b3c8"],["/tags/abbrlink/index.html","2b7b68420721a522f46d1c5eefe44fa3"],["/tags/index.html","3108a48532952d32c21869e6d6760628"],["/tags/冒泡排序/index.html","2992d3d5f67a9806dda7489acb7e3119"],["/tags/希尔排序/index.html","5a2716204b23247c981e871923e09533"],["/tags/插入排序/index.html","955a079090872b395a748cca61a507a5"],["/tags/数据结构/index.html","9edbaa256aed2c918932f20fd50948e3"],["/tags/杨辉三角/index.html","4447bdde14aae3c222cd0a07cf43dbb7"],["/tags/栈/index.html","2176dbdb4acfc9a411ea9e627848bf56"],["/tags/类模板/index.html","bd87b1a2a9271129c5f32f821aac6d77"],["/tags/线性表/index.html","4161ee4414de0dd72459ef0aa330c6d2"],["/tags/选择排序/index.html","968ba60171fee66e6b1a2f56ba44b48f"],["/tags/队列/index.html","96285020cda492bcf3226109ddd56869"],["/tags/顺序存储结构/index.html","c25d21cbe237759393174075a71964ac"],["/top/index.html","b82a4249df4f10bbeb8f71cb1281fab0"]];
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
