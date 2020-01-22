/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6eaa8b5a9409646fc1baef248af3f3fd"],["/archives/2019/10/index.html","7e4bd44850f58777951e990f02421fbf"],["/archives/2019/11/index.html","8f30cfe2fc291522d7010575771a775f"],["/archives/2019/12/index.html","f9cfc70a1b1a15dda465711083531a92"],["/archives/2019/index.html","6d45460f599b848775dcf7c33e1f11f9"],["/archives/2020/01/index.html","4173f59ec1cd12122feaa213d281e411"],["/archives/2020/index.html","521672e99bcdb251d3afa785b639372a"],["/archives/index.html","1a2a1b1b841462e91c21001ba861dd8f"],["/archives/page/2/index.html","20a2d7b6370fe2ae400da87d95055832"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","1f4dc1a0a4c7a564bff734836811a46a"],["/categories/Hexo/index.html","b50141dc8020bf9294cebccba7184137"],["/categories/Mac/Qt/index.html","278d2ef8c6b93e693e3cce4f73316595"],["/categories/Mac/index.html","78f8fe45a45b143a27d85d1c99d4b43b"],["/categories/index.html","deb92973850891b3a7f336b785583740"],["/categories/数据结构/C/Java/Python/index.html","05b0951c6073cdd4e6682bd9f9810921"],["/categories/数据结构/C/Java/Python/排序/index.html","c731f9bec7bf9b7e516f39ac56ec1867"],["/categories/数据结构/C/Java/index.html","624b62ba7e36d00091336f86762f4c7f"],["/categories/数据结构/C/index.html","e540cd1b3c81d279de57d2d8d6558175"],["/categories/数据结构/C/双向链表/index.html","fb7a37a8cb768adf22fea8b6e03d6af0"],["/categories/数据结构/C/顺序存储结构/index.html","b9bd2ccf28f03edb6f2b6aa524d3d63c"],["/categories/数据结构/index.html","3887f583f888237c6292bccc73f9d47b"],["/categories/数据结构/page/2/index.html","46b0444103c569c9a833da08aba3505d"],["/categories/玩转Mac/index.html","7fc9f9d89bd0ce8e0f66651262d5c8d0"],["/css/main.css","7beb76af3e48029f5ebf1efeed54f630"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","1b2b95ef6aa134735e5d40ee0ebde0c9"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","4c66bb102fb5bce810831d560121f9d4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","1cff157795d894d980029d83502f5b3a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","b35036062b700675b706b601ae1afecc"],["/js/src/algolia-search.js","52d6764edf71c2cb51a5ac96c05522e9"],["/js/src/bootstrap.js","c76b851b3b71200ff81b29df46496643"],["/js/src/bubble.js","17f94599874b548681fce6e06b20ca0c"],["/js/src/clipboard-use.js","bdd499799f81af7c2fb3aa814542c8c1"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","4b729e08a6720e1abb7a5c78a8fe997f"],["/js/src/exturl.js","5402571525fb2c95348bdca0e2727146"],["/js/src/hook-duoshuo.js","a5f8b22c28740ca837eb36c3a97fdb0d"],["/js/src/js.cookie.js","a788221940b7f2fb6a16924e7ac0d968"],["/js/src/linkcard.js","3e1994965765ec8c51f8bde39c820ce8"],["/js/src/motion.js","3dd62a8256f84de03659339070f396b1"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6911a670ec60d3a9e2b83e07d2b45d49"],["/js/src/schemes/pisces.js","65e2ce3bbc27dfddd7cf01a01635722d"],["/js/src/scroll-cookie.js","3a44014061bb3c202e5caa008ecda122"],["/js/src/scrollspy.js","bab79b4dbacb45a9f1eb2ea15981aa15"],["/js/src/utils.js","d634cf83ca05128bfe17e2e2df9635d5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","4cb5301a657ba96453c48df7ec1d8529"],["/lib/Han/dist/han.js","30bd455ead4a4cce7978f8166835224e"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","45572e7e590fc7d67075fa672ec24b36"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b48b51957b6c6da0f2cf604c18972579"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","861e305a1c2f34827b277dbe7e2ed693"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","8572bacaed3a71c2df4685f3eed242f1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f5e1e9d6619ccb97cec03ef85e24bee2"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fddf2f6d22f9dc2e3b54ca745d285838"],["/lib/fancybox/source/jquery.fancybox.css","613de40430bde56e59efd26f849ea5e6"],["/lib/fancybox/source/jquery.fancybox.js","5e0e734007325261ea88e83ba42b7098"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","33b00126b4e3dc5bf0ead14cb76b9ece"],["/lib/fastclick/lib/fastclick.js","628ef03c5cff93ef57a29f1605ecc9e2"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","79439ccc9d8443c3d5f116159493893a"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e39ee07b19049313146c5e8a97fae6d6"],["/lib/jquery_lazyload/README.html","e5985ef3e29cc8578df064eb045a1497"],["/lib/jquery_lazyload/jquery.lazyload.js","3473dc4330be266fc34d0324ebb470a9"],["/lib/jquery_lazyload/jquery.scrollstop.js","ef39f018e057365a855afa57426ed162"],["/lib/needsharebutton/font-embedded.css","e6a66462689f6d4beb7f95c3e396c5d6"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","0c0b171d186ef554ec51de50ee4872e4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ad0d3d96860c1277aebbf2d03aabc56e"],["/lib/velocity/velocity.js","ef10bc666f7db19b41f66318a23b5381"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ff47a685dd8fbb3da459d81b13e78037"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","7f46a00e429db0f20d120da99d180f83"],["/links/index.html","0f35d9aa7ca62918ac08a562aad31e0e"],["/live2d-widget/README.html","54faa59dd9874a45e0ee16ce7b2f65c5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","5491ffb45b895944ea9bc328603cbd93"],["/live2d-widget/demo/demo1.html","a2aba1380d1d111b02bf2f954c1f4257"],["/live2d-widget/demo/demo2.html","59448cee87931f69946c7e3c575c7236"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","e059c4fe0b15e4243a811c4769926796"],["/movies/index.html","c94b4250375baac7cff5b0846ee9cb6f"],["/music/index.html","975be9525ecea204f7dce7e2975d46db"],["/page/2/index.html","8573c64d811610a2df9219c450134b21"],["/page/3/index.html","ef7991e5a9e89da09591337492f4fcf0"],["/photos/index.html","01f9fa20a8c6e32972f2dd49ec8758a3"],["/posts/14311.html","025715912b40dc88f308473e163e290f"],["/posts/15468.html","119b574ac47ace65105c7976f9287bc8"],["/posts/16107.html","6366c363058079299556cd7c80af4069"],["/posts/201e1121.html","fd8cf5cd19bb4a627555a5f4aa6864f8"],["/posts/20352.html","dd5f3f91fe9d8f8a53de88f06be1a7fe"],["/posts/21238.html","9429c196e7542f3dfae845bffac5072c"],["/posts/22281.html","8b70fca3e288d87ace14fd2306d34455"],["/posts/30c404a6.html","910c249cb1e7e7edac89a9e8cdbacc09"],["/posts/51203.html","fef804e1a878e96f2fce4fd246d0a241"],["/posts/59037.html","6329907767afcc86893c35122796a929"],["/posts/60816b5a.html","1324267b2ce81820b0d5665df823d21b"],["/posts/69978469.html","da31a11d201bc5dec1b4765b391fffc8"],["/posts/6a752619.html","cab325207d93420f02325818e55c6e8d"],["/posts/8cc73e65.html","0d66877a43fe0a1dfe7b11ab3e555fb9"],["/posts/beb5106a.html","43b1e7bea02a3bea1b54fcdcd1000555"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","440b5126699b6fcbd84c55f803839dd9"],["/tags/C/index.html","16c9b233cefedc42f4ada0b59871ff6f"],["/tags/Hexo/index.html","0120e071e27f8d7ab6ed1a26f349b60f"],["/tags/Java/index.html","391f7aa3dee6e2bd30ebba014bff1c2f"],["/tags/Mac/index.html","340f69bf7947fdf66011736275a54fb1"],["/tags/Parallels-Desktop/index.html","78d1e620cd0fb45ead3cc9e9ebe7b4cb"],["/tags/Python/index.html","948fdc4d04c887e5a2bd701f0bb81a41"],["/tags/Qt/index.html","cad71f22941ee64ff72f28cc8abcf66e"],["/tags/abbrlink/index.html","d80cda2f2bfc3e773cce238d739dfc04"],["/tags/index.html","2c1500cad91341c6a1a4fe54acdf7df7"],["/tags/冒泡排序/index.html","66241f7bc16d1932be7b6dc1f60afe4a"],["/tags/双向链表/index.html","d292f2f4063b386e4fdc1dc2d8fe4e07"],["/tags/希尔排序/index.html","78244f0988dba55d1d109ff8b91616f8"],["/tags/插入排序/index.html","b0600bcd1336ca466a1fcdbdd7ad18c1"],["/tags/数据结构/index.html","9730bc7aaad7ed190b71c3866cc2db59"],["/tags/杨辉三角/index.html","9d806b29671827a7584bd4a1cb55d735"],["/tags/栈/index.html","b2353a37bf0f2c780d9b5e5958032d6f"],["/tags/类模板/index.html","0bc3fb7b21d3e5d95d62ca76dff14cf5"],["/tags/线性表/index.html","35deed647dbd143aa08118b9c53710c7"],["/tags/选择排序/index.html","baa68e26aedb190876a4776f653cf6df"],["/tags/队列/index.html","56ef73068f65e483c36506c5c2dbfbba"],["/tags/顺序存储结构/index.html","547ce0ac41bcca9e5fa5775805824f22"],["/top/index.html","1843a47c370d9b83bbe0984b3e110937"]];
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
