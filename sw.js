/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9372b8c7ad925ee2d22a3255cd94a41f"],["/archives/2019/10/index.html","1f13044e9ff833b9396d8c80b3ea497b"],["/archives/2019/11/index.html","0eeefbde38f381d94526a886c6eec7f7"],["/archives/2019/12/index.html","a27ccf02382f73a22da60a4a9e08f2da"],["/archives/2019/index.html","960762bb226fe625fc26de2c63a5cf1d"],["/archives/2020/01/index.html","160b3cce1c980155f394c97ab1707ce1"],["/archives/2020/index.html","ac40c74e9d607fff30e42784848711cf"],["/archives/index.html","5f279f50f018e201eeab81efc52b2ea3"],["/archives/page/2/index.html","8a748b7c9879812b72962dc0421d4eb4"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","0bd89a1275278cb5517eac1a0d90e01b"],["/categories/Hexo/index.html","f7241a99655e78c0f400dadf7eecdd74"],["/categories/Mac/Qt/index.html","1362c7b89838f0958d9f74cb1752bd46"],["/categories/Mac/index.html","ba6ebad25cc267c02815a65e0952bd6a"],["/categories/index.html","53b178901b2271fee281c5d31cdb9ca6"],["/categories/数据结构/C/Java/Python/index.html","a23fdb08b9d147f3cff886b0d7210637"],["/categories/数据结构/C/Java/Python/排序/index.html","6651e36f6bd0abd760ca87e5bce82978"],["/categories/数据结构/C/Java/index.html","2f6cd74f4fbb0f7e131a46d27ba7598e"],["/categories/数据结构/C/index.html","286278cc595cd2dab52fc89f3808e493"],["/categories/数据结构/C/双向链表/index.html","f08fec49987be132ec39e42973493366"],["/categories/数据结构/C/顺序存储结构/index.html","e2ec7cac60ce7a7de585bf3e36f41d69"],["/categories/数据结构/index.html","23fc77646c1c0f1270fc76599d10634b"],["/categories/数据结构/page/2/index.html","4c84a90baab5858239e0d51c3d189e08"],["/categories/玩转Mac/index.html","4813133f5ad5a16006b551d6572d47bd"],["/css/main.css","e3f86dfce343151d27d287442427bc09"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7970fedaf970ebf807d130c61fc641da"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","c0f2ae3e51c230d6d703053082aa8929"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","8e67dbff0d1b1b2c874e6258ba70540a"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","51609502e3b72953a3a0578968526953"],["/js/src/algolia-search.js","fba9008969414030479ea5d90f57aba4"],["/js/src/bootstrap.js","a60f28194b2d7508acac795086ed95d1"],["/js/src/bubble.js","9a32b0b7502aa539340274c562e14fb9"],["/js/src/clipboard-use.js","ea1b6630de38ca343b559f77d24aad77"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a8136d011d6e04fdbcf4f9438c4d0a53"],["/js/src/exturl.js","e5aaa2f774716d990c2f9bd127a12d82"],["/js/src/hook-duoshuo.js","4a11612230ca36c49fd933d3b7923f66"],["/js/src/js.cookie.js","487ffa8004fb27d2ecd80eb921707fd5"],["/js/src/linkcard.js","fee1f8ce68990dd3e79961deef7c9fb5"],["/js/src/motion.js","1faaa5fa04069d32cfe42df33b5adf32"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","8a0345e0773258227f4c63750d7675e6"],["/js/src/schemes/pisces.js","f474c6c4f2a0f6957b8be33971e154ed"],["/js/src/scroll-cookie.js","b5c687e6c188db49c220d9e173bc3ddd"],["/js/src/scrollspy.js","c97399e32c9b2986e2d58e10ee4c39a8"],["/js/src/utils.js","36a3e3e315f1ff7cd83797559dab6eb3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","a6158be9f0018d9b7cc39d503b076308"],["/lib/Han/dist/han.js","083b009341ae32fd233f3f221d468f38"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","35dd772d87d844e57f163a08b53da87e"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b1d30e6d38c286f97ac615a37a385dac"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2649b72623b9a6caf864ebd120727902"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0a462e9ab2293984a661b1dbdd4bb5a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3aba34e055eb4ebd0fb3ed3004da4423"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","be02848ea6835fe5f57c946a8cf9ae7d"],["/lib/fancybox/source/jquery.fancybox.css","354d14b7f324a60e64d66121affffde5"],["/lib/fancybox/source/jquery.fancybox.js","4e1bbf2a5188500f1ccb609eaa0bea92"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","63bda1bf3450e94adfce14f14b8d7be3"],["/lib/fastclick/lib/fastclick.js","aab95a68c67f049eacd53751b703592d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","87c1cb0738838b53018fcd754ad3a91f"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","af01cbb1ee2621f8928e8b8a860867b9"],["/lib/jquery_lazyload/README.html","5bcb8864968bfe4efa79284acfe5226f"],["/lib/jquery_lazyload/jquery.lazyload.js","13e28a9d6179cb225df454bb048b0e41"],["/lib/jquery_lazyload/jquery.scrollstop.js","f1d94e09908022a5a02cd4c8237a5276"],["/lib/needsharebutton/font-embedded.css","3a86005fa7287805a43d4fa8fe1030b7"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","087cae0a60a7aa5222e67dbd8316ccc8"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","68879beb3a2409fd67a8b681d08a3da7"],["/lib/velocity/velocity.js","2364f6bbdf68e354ca04c0631f56b692"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ceea7ac46596300cf855f415ed2a9272"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","223da200b62d7e61a49278f1be7a64a0"],["/links/index.html","66b5168cb4bd44d75284262198d76abf"],["/live2d-widget/README.html","e588d17d8527ae6faf805ea7f5ca85fe"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","4501a7d6a67fbffe45ac029db25d79b3"],["/live2d-widget/demo/demo1.html","3a76af5135dbafcdd532916177f29646"],["/live2d-widget/demo/demo2.html","87f9c228d6e3b7a9e92bee00e8f020bf"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","5bf5d55a2b5f3f2011771ac28f47525e"],["/movies/index.html","d22cd4dfc07bb4166e9a9c9e26ff0f4d"],["/music/index.html","7cfa43e2541e84719deb797229ebc6b2"],["/page/2/index.html","0a48e7c3f195f26d64ebc2750bf8d63a"],["/page/3/index.html","20c4c5cc13f5bb728c417c46b6f1d664"],["/photos/index.html","c0c2d62c8006a178a30f3f5283cd1d6a"],["/posts/14311.html","755c777384513cae6aad5d115b0a382d"],["/posts/15468.html","c893052c6499022205507519bb6f1b2c"],["/posts/16107.html","721b0b6703929fda963782fc4a7b57d9"],["/posts/201e1121.html","f4c13407662e19343aca623946348ffd"],["/posts/20352.html","d817bed755f4c9abf46adaaadbbae9a1"],["/posts/21238.html","33793b4248b9d839148d3025de630bdb"],["/posts/22281.html","dfb1637a09db1fb56f46e1eff3a08f0e"],["/posts/30c404a6.html","2bf359ea9fbaa908ba63b78c0809ba5f"],["/posts/51203.html","53f468bcdd06f8934349b23f76397c76"],["/posts/59037.html","19560a19bdd30787fd5fb0e6e9801234"],["/posts/60816b5a.html","db13da58ae11d0bc7a0df5824e12cd10"],["/posts/69978469.html","e27742ceaa4f2342a52c1d42aff6cde9"],["/posts/6a752619.html","12d860b91ebc6b3f85617c446e1f4f24"],["/posts/8cc73e65.html","1a1396871b10be08531220bc6c576f0f"],["/posts/beb5106a.html","be4a4254cf1fa39223e56f3a6d263bc4"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","c1040a593941f8a7fe62d8379344fb83"],["/tags/C/index.html","7269b0aff031ebc76bc6e0adc08064f1"],["/tags/Hexo/index.html","44114b6abfb4e21275559b2f8b1e9a37"],["/tags/Java/index.html","cd853912f5f786987633358729ea6561"],["/tags/Mac/index.html","3e6c8a8dcb857d5b4d72929a0cb1cc30"],["/tags/Parallels-Desktop/index.html","43c3b2d72ec40e8e385758a2cf2aa4f9"],["/tags/Python/index.html","dc42e1cf592ef99f42d922e02e79cea8"],["/tags/Qt/index.html","b832d6ee3a23e23a709bab436ac675ef"],["/tags/abbrlink/index.html","3972cf210e399f6380e50a444c5846ce"],["/tags/index.html","92a779643ad72f5eb41b6ed98e0183c5"],["/tags/冒泡排序/index.html","f764f08c208dc167569d5bdbf3bd253e"],["/tags/双向链表/index.html","16c445ca80a7c13d469250f6a631a8b1"],["/tags/希尔排序/index.html","3cb47fc27354a131fd1c9d994a108c84"],["/tags/插入排序/index.html","f5d3d9eb64daf760b839b342db8a8d39"],["/tags/数据结构/index.html","5ab190738b7028fa5a8fbb78591a7b76"],["/tags/杨辉三角/index.html","3584f21e2d35d55e6189b2b58fbec6f6"],["/tags/栈/index.html","a79ec8a10cdca0b250858201fc207dbb"],["/tags/类模板/index.html","0b74587a12f2e539ccd266d631c0ef8d"],["/tags/线性表/index.html","bfebec3815d0666c92f71ae90afd3953"],["/tags/选择排序/index.html","4156a08354c7b6b476979bfb20da8a1b"],["/tags/队列/index.html","d1ddbc308a6776b700aba79b2651c1ad"],["/tags/顺序存储结构/index.html","e3a4b2e8fff1ffe96177eb110f796113"],["/top/index.html","9044be7ceca3e262ecbce5ba3580f6fc"]];
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
