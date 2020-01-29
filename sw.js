/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","230ccec4a7fb0c4fc1f9f31be5015f7c"],["/archives/2019/10/index.html","0a7e1f7a2d318a0925fb0d7414452b3c"],["/archives/2019/11/index.html","9ffc1f641863329e1b6ea40df5484cb2"],["/archives/2019/12/index.html","39d3d6b09be3c7ee01823ccfd13b7e92"],["/archives/2019/index.html","ab1fb4c918a3bd72128d45ba4c015b92"],["/archives/2020/01/index.html","4de6a85c9650b8c268cedba1b4edc6d3"],["/archives/2020/index.html","603206c1a3d73cdd4030881805df89bc"],["/archives/index.html","966e073959c35787e22a6af4cf5980c9"],["/archives/page/2/index.html","4ebfa3c0a44f3c4a7328dacfcdfc6afc"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","1152eea4de05a1058bd0e7631da8e4e2"],["/categories/Hexo/index.html","1f3612408186d25ce65e0a9dcf4727ea"],["/categories/Mac/Qt/index.html","388796e8e0d1350c36d64f6e4844163e"],["/categories/Mac/index.html","51fa11e040e607d29ee48f2dbfe9486d"],["/categories/index.html","0478e9444c0a856dc8eadd842b9c207d"],["/categories/数据结构/C/Java/Python/index.html","230103909227ef402ab8bda199a117ad"],["/categories/数据结构/C/Java/Python/排序/index.html","4e2d72c3db69b0425e05ac37c14b4652"],["/categories/数据结构/C/Java/index.html","8c8b8555363ca5e0ab32663597c5b2bc"],["/categories/数据结构/C/index.html","0c448173b82d79b75e195d3ce9761119"],["/categories/数据结构/C/双向链表/index.html","6e46dadf4f2ba4211179e9c66596553c"],["/categories/数据结构/C/顺序存储结构/index.html","29a9aa488f81cf5e7af431761b0b9ad3"],["/categories/数据结构/index.html","9da16037386d2f425652ffd4d719ad77"],["/categories/数据结构/page/2/index.html","2802e7cc2215b3e100f75616f6b8be92"],["/categories/玩转Mac/index.html","0dd8b6ae3b9d165c8cc4f1cc0d4528df"],["/categories/顺序栈/index.html","5330f0e569a699386d8b20dea12518fd"],["/categories/顺序栈/数据结构/index.html","b7e92f4bc22d3cdc3d3a5433cc417dcf"],["/css/main.css","3ba220bb5604d855a8266cdb2105d2e5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","3785b24285e63061c8ba68de79537a8e"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","59b34e76ce341805381d7620f201aaf6"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","014d33746354ec5ca9104c9c3211f446"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","c23329f8e5a8b73030fbe421d82a21e7"],["/js/src/algolia-search.js","52755bc75a31d11c42f3b519d174f83a"],["/js/src/bootstrap.js","9ed6b76f03bdb6d57f81db7e3052dac8"],["/js/src/bubble.js","0838f238ab9a3acf36bfda468e9a70ac"],["/js/src/clipboard-use.js","985605b38e548893055d6eba9d8c7223"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","425a27b274e4204cea33ca97c7c87b99"],["/js/src/exturl.js","03e1926dcc5d0396ad7704294168ba17"],["/js/src/hook-duoshuo.js","86afb69bb4209f3237baa9602ce4b53f"],["/js/src/js.cookie.js","290574b76031fd8c22c60863ea89d741"],["/js/src/linkcard.js","d1a2f17263960c0856d614734b7874f3"],["/js/src/motion.js","045c398107c8bfb7be1b501306c353f3"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","871f1f0bc7ee026d3787c92e4d12187c"],["/js/src/schemes/pisces.js","e77d5aa85848af130e689fd7e16a1607"],["/js/src/scroll-cookie.js","a5852939adbe418199eaa5b85e51d83f"],["/js/src/scrollspy.js","c57078db3bc2d4e19f80a78c7648b3b5"],["/js/src/utils.js","2740dda96663f401c1478a39a92bc4b5"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","fbfeb73d06ac7e991a9c4b07cf7af741"],["/lib/Han/dist/han.js","e448ddf5a510a1ad0342502b86eb26a6"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","845bd3e5963073f11b9b6701dbd6c799"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","aa574a36608a683c10571a90a8577e4c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","fb4200d71071b72ef75697824da88290"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f544d6c5ed984e5e67eec5018b026c93"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","ad19427527db09f4bada20f3c78d21a7"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a580492eaae7de905c57b8e162f369e9"],["/lib/fancybox/source/jquery.fancybox.css","f80b4c90808e73d3a57b2e2e68e1763d"],["/lib/fancybox/source/jquery.fancybox.js","c9a0fdf7e100cace23f857eda18fd81f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","5fc8d68ed835a4e1495b225c87935435"],["/lib/fastclick/lib/fastclick.js","4e9c14df9ddc716047dc74ca1a41d26d"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","76d632ed5bb24f910dcb1d0fcf7f0aa3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","02d740bad578150e24009b4789a17b2c"],["/lib/jquery_lazyload/README.html","09feea74f9ed5a75f17b7c4c4c5b5338"],["/lib/jquery_lazyload/jquery.lazyload.js","72f9c5d9bf16e4d07875dab2f8fa134b"],["/lib/jquery_lazyload/jquery.scrollstop.js","6c56fc69e5d23b1b9f2180062ce975d3"],["/lib/needsharebutton/font-embedded.css","b8cd9ff482ca3e7e1b496f39eb1f9250"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","399c7d6dcafc8b0378c323f22088d99c"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1af97606c3089ae21bfc2685b43eca26"],["/lib/velocity/velocity.js","6288af4645317bb116b660715d77222b"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","386b2c9175655a73ee0c79eac2052d79"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","5a65ffe71c7a8ae1d1cba998a19f0cfe"],["/links/index.html","5a8ed859d8eb43f0877e9b4bb915b189"],["/live2d-widget/README.html","1ede38d09b63b39252c91346d9acff91"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","e836895450c83fd47560495097936eeb"],["/live2d-widget/demo/demo1.html","0b6b819d9dc8f1ddd13fc6b17ca3d35f"],["/live2d-widget/demo/demo2.html","66d6c5d2b63e759a3acaffa506ebb245"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1526fa57e6ff107c893d195163cea142"],["/movies/index.html","3293170c518f0348851d0fc69d9b4854"],["/music/index.html","06633e8492cf7fb71453a5a700d90d83"],["/page/2/index.html","619e34c4688b2efa2465fded1370d1cb"],["/page/3/index.html","6f1bc8d030336e0c93590877fd07358a"],["/photos/index.html","35db24666c7c4876a72e24372277aacc"],["/posts/14311.html","dadd37a8025b32d5610674f6e67af85f"],["/posts/15468.html","b952a80ebe35c8ed0d69435da6335d77"],["/posts/16107.html","50aea760999e831521a466068ec8fbeb"],["/posts/201e1121.html","7b951f53fdd2b858909adef4a8588697"],["/posts/20352.html","265e57d8708a79768c76592e34428ac0"],["/posts/21238.html","8f79f757b1254daecc8b5e31c03845d0"],["/posts/22281.html","95c1f65acc8bc6052b114e963bf7088a"],["/posts/278598dc.html","b7875958cab3d790188894a13d218834"],["/posts/30c404a6.html","d2a23fbf1ee5cd31ce1e43111b329f39"],["/posts/51203.html","596d7a0b85db4bef04ee126ca2fdd4b5"],["/posts/59037.html","4f90126a1129c7c98d193ab9c0e3f1b3"],["/posts/60816b5a.html","edc6e86e9e63404b88f41395061db0f5"],["/posts/69978469.html","820afea29866bd616c8c55aa99cfa3a4"],["/posts/6a752619.html","05afdcfe81593576f9ced12998c59c49"],["/posts/8cc73e65.html","13e55b9419873fd64a6523000bb6f223"],["/posts/beb5106a.html","f45f230d3c50eb70ae9e17a46997c33f"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","d9b0d465564f83b6d6a177baf116fdb3"],["/tags/C/index.html","6915159d4acd80dcacb48ac91ac56f8f"],["/tags/C语言/index.html","5f98f2275e541977ee8af4172d38638f"],["/tags/Hexo/index.html","26a78eecc345b1970cf88b4cbf366d0e"],["/tags/Java/index.html","a162eb166753052ffa983fd99d7a283f"],["/tags/Mac/index.html","2562e52dff10fa77d4017b72c4486f52"],["/tags/Parallels-Desktop/index.html","56f57fdacc6abdda27e792959ad3e4ac"],["/tags/Python/index.html","7a8b231ce7ba57fe1abcd56f26844d76"],["/tags/Qt/index.html","b91edc545042ba4998b595bb931f0a93"],["/tags/abbrlink/index.html","67171a1432c9934224fd9f62ef9b04e7"],["/tags/index.html","1cb2fabefc0b199f147c106639ef9915"],["/tags/冒泡排序/index.html","822698ef87726a36ba17f645d76c9604"],["/tags/双向链表/index.html","6e484e607e21bcf7568dd44da8988e5b"],["/tags/希尔排序/index.html","b77ee39c8433e04e30666b298cacc1d7"],["/tags/插入排序/index.html","c9d2ae78a3194bae004fad11996109c8"],["/tags/数据结构/index.html","a2a23181d55e3800ba07471a1359607a"],["/tags/杨辉三角/index.html","e45b60cbba51c90d71c2a35a3441f225"],["/tags/栈/index.html","cd362006dc40fec0dcbcbe2f1ddb04f5"],["/tags/类模板/index.html","a404fd6a9f00a98392aa905fc42aa313"],["/tags/线性表/index.html","767d0d90144fa4ad96b446fe225e92bc"],["/tags/选择排序/index.html","b0eba7e633816801171ef3fa079b1a97"],["/tags/队列/index.html","55ea3273a9981952227b06798db25782"],["/tags/顺序存储结构/index.html","a5573252b07780f297a0e1b9551ab592"],["/top/index.html","7c8df481a9a84064d8dc82b3fd73b48a"]];
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
