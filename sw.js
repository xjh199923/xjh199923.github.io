/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d9dcd0da455baaf10fa246cffcc672d1"],["/archives/2019/10/index.html","29542667fa5df8c3431296fdb44351e0"],["/archives/2019/11/index.html","66e4831f5679cafc9648ddcf3e3a47db"],["/archives/2019/12/index.html","bed7297efed6404f1ed1f3ee5676b500"],["/archives/2019/index.html","6fe620477125ea4ce4f8d65bd9e5a850"],["/archives/2020/01/index.html","8dc1db6e5bd4127d2a4b7673e336033d"],["/archives/2020/index.html","9415630aadf45de8a78254146a8cf5d7"],["/archives/index.html","f739bcacdb325e15925e05439ddcbefb"],["/archives/page/2/index.html","7365653e550ad9f2beeb4e56405b0de8"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","5f8434019611b897dccaa33939d4ebde"],["/categories/Hexo/index.html","bec39272c42eeed596faddead1ba979e"],["/categories/Mac/Qt/index.html","0ada4d681b92cebe55cfd2256d6b0649"],["/categories/Mac/index.html","4868bcf59c223ebfddd2ff6f625f20a7"],["/categories/index.html","da58870778725470b95608ae937d0096"],["/categories/数据结构/C/Java/Python/index.html","790ca7e5b7d82afff5d3f35cbaee481c"],["/categories/数据结构/C/Java/Python/排序/index.html","29f032d61d23b1d226da5005a6db07a5"],["/categories/数据结构/C/Java/index.html","17e15f4f809e19cf76e11d2d6d22ec8e"],["/categories/数据结构/C/index.html","c1cf6043c82d946c4a8b19c44d07abb1"],["/categories/数据结构/C/双向链表/index.html","4095fa18f3bbbb1cde132f12c81048a2"],["/categories/数据结构/C/顺序存储结构/index.html","d35d85e5bb6d47164d1447190a9d56f9"],["/categories/数据结构/index.html","0d3ec17c6087bbc5a3b4044c06ef6f30"],["/categories/数据结构/page/2/index.html","338cb2bdbd4e45e59f9edd3a4c55eccf"],["/categories/玩转Mac/index.html","414ae600a59dc95f2a68f9b0e2eb6036"],["/categories/顺序栈/index.html","8ad5778f39ba04bf3049aceb9bab9b53"],["/categories/顺序栈/数据结构/index.html","e56e3729ad086889b86cfa53963480be"],["/css/main.css","03103f5c56e072ddb2b94f66d208c24a"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","7528706ca452ff91c9bca4e1f20625b3"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","6dee377ee4000866182c76624f64dddf"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","cc15c21c4dcbe99e93781894ca08b709"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","791200252ed1da14b7089e67c562d6e8"],["/js/src/algolia-search.js","e1ec3bd003fa8379a93e23c9ea70e541"],["/js/src/bootstrap.js","5e47abe7ac06b6f89251333dceaed5ac"],["/js/src/bubble.js","6ef84fb6db6428c9eaf5ec1b9645cb95"],["/js/src/clipboard-use.js","c2a03ecc95ee6d9f0de3a328b995df65"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","e397ded6550f4a732df773049b63ff62"],["/js/src/exturl.js","5aa0500e43b5a1bc155588663dadae6e"],["/js/src/hook-duoshuo.js","458517516a1388b9122081c628cd019a"],["/js/src/js.cookie.js","6fd143812daa7062da8f633f30205290"],["/js/src/linkcard.js","4e9be5a6fbecc19b4fa4d771e9863b6d"],["/js/src/motion.js","504f382305f5d76768ce9c9a2dca64c8"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","52ce02811b39a90d906bf68dbce381b4"],["/js/src/schemes/pisces.js","50f7efd61d9be90fae819850d20adb81"],["/js/src/scroll-cookie.js","e78fc1310c076686d5e36ce2f36fad48"],["/js/src/scrollspy.js","16100d6e85a425ee8e50932446b93e01"],["/js/src/utils.js","e69105fcb6849fff2f1430a1d3f2cf98"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","babbea3e169ca35e2813ce0499fd34ab"],["/lib/Han/dist/han.js","bc4d524cbf626093b796d66e4aeb492a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3ca1c50b35f063fb73d3ad0f3043e7ba"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","02a0b4e6adc695bec58c33d7be1ed130"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","00bc37e6f989691d9ad817b2615fed30"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","515a732862a9d8dbc42b9f3ebb553d94"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","6f076f5b977f9023fbd6ece14d75049f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","8b69113b101a383e08353dfbf52d2d76"],["/lib/fancybox/source/jquery.fancybox.css","b2f5fc3f3c6c19a30aaaafde3945b4dc"],["/lib/fancybox/source/jquery.fancybox.js","16ae3f431d0f5261a0fe6a2cb4054f07"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","4abd7ca2178725bce2a9097957d63f35"],["/lib/fastclick/lib/fastclick.js","23a6a00f90e247e9123baaecb420a733"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","2784c92736e0e35aa75508aadec93cb9"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","617ef27c60ff664685ab00c7142ce1c1"],["/lib/jquery_lazyload/README.html","567c103756e461c288e50253be2c1266"],["/lib/jquery_lazyload/jquery.lazyload.js","e77ac770d6c76714125cc4b7b74fc107"],["/lib/jquery_lazyload/jquery.scrollstop.js","6e17e5117bcd66677b3293f217121661"],["/lib/needsharebutton/font-embedded.css","119e6b7c3bde8abd60a8d9ff7bbf5910"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","1ae4b1a75162954036f27839aa7e7eb8"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","74c0a9988c2c6fbf3ef49cdeac37ccfd"],["/lib/velocity/velocity.js","6e667614f175d2a5a0aa52779f07e00e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","4a129fb7f740614bbfe96d2db2a64456"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","70c891692a546bf92f04566c317d164e"],["/links/index.html","1d760a5fc9b7f1952ab1db8fb5f2881f"],["/live2d-widget/README.html","a77ce33709eb3f2773b84f5be5092b4b"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","a2c4767d2bfdb58a6a952c7ec5a1da92"],["/live2d-widget/demo/demo1.html","abeddb3565a3eb6a24e3cca86ddf7e31"],["/live2d-widget/demo/demo2.html","fea0ba24cd9840ae7b4c966c0db1b444"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","8e4727ac142d109f82323486e069626a"],["/movies/index.html","006938237e2e761b676cac22e2066a5c"],["/music/index.html","66e7fc6fa5be3bc89279a7b3f8be433f"],["/page/2/index.html","2acc44f9a4c4cce91655978e3e3c40cb"],["/page/3/index.html","bdc9f0326379d0c3a93c9bc92068962c"],["/photos/index.html","edc2c83c6c47d98ef53e5006b248243b"],["/posts/14311.html","82c7fa982799b98805a0534fa3ee163c"],["/posts/15468.html","92f79f1d8276273e9f51b60a9fa7c250"],["/posts/16107.html","a12e52a2178382dfa922c63228042bc1"],["/posts/201e1121.html","4a982ecd4cdb49bbfae9e8cc721c8142"],["/posts/20352.html","7866167d59ede1e56ac14482266356b6"],["/posts/21238.html","ccb19a1ce44c548fd26c4d39eb5622d0"],["/posts/22281.html","1e79237f6a5c2668d601ad3b1e5ea1b6"],["/posts/278598dc.html","b7a5d12b093efceff2cd9c3c8d175cf1"],["/posts/30c404a6.html","c8d1271ec3aa4f4895a1e8d4dfb50fef"],["/posts/51203.html","d236f9008b20bc8efe1ad38564b64451"],["/posts/59037.html","bcbe03f6e89aa6099def0abd9ce5cd18"],["/posts/60816b5a.html","1f539bbfde212b71e6d7e8e2bbdddf16"],["/posts/69978469.html","5e9ba72243845ce64140660980e6dad9"],["/posts/6a752619.html","961a788235eec08af3da0a3c2734ed91"],["/posts/8cc73e65.html","b9ee99447a70b2c1bd261f7aa386ab6f"],["/posts/beb5106a.html","8ad483ac08ed5f728c123cb2d8e0aa84"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","6aea360eb31ee044bd955e8eed47ecf0"],["/tags/C/index.html","46ed3cc0a0658ec4ed5067a1121b8e02"],["/tags/C语言/index.html","6daba105368c758e6fa8b85d606ce432"],["/tags/Hexo/index.html","e3e81d0df5ec9c21876ed5fa914512ba"],["/tags/Java/index.html","6660e8cb213e97c505b594f278074d02"],["/tags/Mac/index.html","2fb3c504f1725107abeb91687eb49c68"],["/tags/Parallels-Desktop/index.html","1dfdecdf125e46eb92d6d18153832005"],["/tags/Python/index.html","91b8936c61e6588180398e1ca016f9fa"],["/tags/Qt/index.html","0582717f9821fb7676303cb4898932bc"],["/tags/abbrlink/index.html","63ed78795f7677f28480079a4fe6d550"],["/tags/index.html","3cc65dfe663bf95bbc637d386a4f117d"],["/tags/冒泡排序/index.html","57f29775ba1f2afa41ab81a69af356cb"],["/tags/双向链表/index.html","99351f254dfc2501f41f20a8a59cdefb"],["/tags/希尔排序/index.html","e6e3287a805b39207a2c952d7ef23f08"],["/tags/插入排序/index.html","d486b11006246e19e74672f49484b737"],["/tags/数据结构/index.html","b29297df89efe7ef4e46b8c20dcdbf7b"],["/tags/杨辉三角/index.html","4918cf80413d3a230f45013a88bbf48b"],["/tags/栈/index.html","a969b382ffb88c7588e91f48fb7902a3"],["/tags/类模板/index.html","7d477cd45b2d8a310bfea0e1928848c1"],["/tags/线性表/index.html","68c85c3312012143becd0e7db129ed7c"],["/tags/选择排序/index.html","51c2167025ee016d35eed4d063f90d76"],["/tags/队列/index.html","93ea6333dac9725f054cb6352b84f1b9"],["/tags/顺序存储结构/index.html","a622e54e491503276716d73f64c44f6f"],["/top/index.html","e2490d42b495eb4ce9efc57cb0627ad5"]];
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
