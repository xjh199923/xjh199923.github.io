/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","df07443817683bcd375996f585b92788"],["/archives/2019/10/index.html","700ba53eecdf03bf878769a1cad19da8"],["/archives/2019/11/index.html","3184938896fe9b6c9f72ed3860a80f87"],["/archives/2019/12/index.html","108caf445df5d8547226113f07eaaab4"],["/archives/2019/index.html","a521a7aeba85ccfad2cbb5bec5774276"],["/archives/2020/01/index.html","fd5189a286e365f21a2701cce5f281a2"],["/archives/2020/index.html","3cb4773bc5e7e80b4325cf1460220888"],["/archives/index.html","9fdb73ff82262748f7aa8bdd3bfb614d"],["/archives/page/2/index.html","dfc64d16bab6a7a7152c58773c4eb43f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","36835082616dab0819303fd53678ea71"],["/categories/Hexo/index.html","5d3900f63f61f3076b6bde5db888031d"],["/categories/Mac/Qt/index.html","daa700b7b3b02722d12c2cb90acde958"],["/categories/Mac/index.html","0d7b8830a1f8fe04521e396018a7543a"],["/categories/index.html","e7e6e877e5c9af3aceee9ba7934696ae"],["/categories/数据结构/C/Java/Python/index.html","62edc6be93d1414e55bd75e89aaaf50e"],["/categories/数据结构/C/Java/Python/排序/index.html","620eb872f71e537c590a0bc94a18c5cf"],["/categories/数据结构/C/Java/index.html","74e76eb3f921b7de17d902d36f7a3939"],["/categories/数据结构/C/index.html","a17404bff12a74b684a94ecb2ff7fb78"],["/categories/数据结构/C/顺序存储结构/index.html","8b896d9cfe9704abb452eb2ca005e386"],["/categories/数据结构/index.html","07adcff73d08f15f273e986e62aeffcc"],["/categories/数据结构/page/2/index.html","f3fe130d05509558fbe69b54ab37a678"],["/css/main.css","66a60b0d6f7cc285b4c693bea1dd633d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","080cb6709223e9d6937349249902d75e"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","74b01f1039bae907231b13ac79520087"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ee6861c90b984b55fb7abb451cb28afd"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","fc37952102802155d19baa5f394589b2"],["/js/src/algolia-search.js","979272d100b6b27e664b059e9fe69976"],["/js/src/bootstrap.js","5dbfbb2902c704cf5c8718da0fd9bdf0"],["/js/src/bubble.js","93dbb0b1a3660df08bbe1e099e5948f4"],["/js/src/clipboard-use.js","039ef7168a530129feaa94a1a12c57fe"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","7a9791098d83e424e51c9b7c859879dd"],["/js/src/exturl.js","e6668f48518b4bb382d6bbcad8fc9c8e"],["/js/src/hook-duoshuo.js","33396cd2836a427d6246cdf73609f785"],["/js/src/js.cookie.js","2f34874c6a959eea81ef0eaea2656a5a"],["/js/src/linkcard.js","ac7b6c6000ef08389eaeaae33397beea"],["/js/src/motion.js","62f0ad91bc47e0df88857422d91189c2"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","60e64d52fdee61feaffcadaee8fc7491"],["/js/src/schemes/pisces.js","a96e219b61b2c432c86c923476fab9f8"],["/js/src/scroll-cookie.js","650b546b2e8154d446664aa4c5a812c1"],["/js/src/scrollspy.js","5d46f6697fcceb978e68c11f9d870b94"],["/js/src/utils.js","34d6ed782af99111821c8e0f6cb1201f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","e4c3a3b414a3d1bbc18b3a35980aa1fa"],["/lib/Han/dist/han.js","0846ee1e77daa4908190f61433751698"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","defff2fd1a8cea76fde73664464c0b43"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5c43be27c19abf27c9aeee4fa3e78838"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1a681c0ae9f3aa33ef9354baf7bcabd1"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","486a9d59c03f000cffe1bcf5bd0aee3e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","313cef1e5a5791958453b754dd161a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a52d5c824e6eea1245aec53e8d28b52f"],["/lib/fancybox/source/jquery.fancybox.css","ea90378b1adf77030aeee55aaebf9423"],["/lib/fancybox/source/jquery.fancybox.js","cd2c2b15655735ea7ac5a287fd48f105"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b373662b14af76c91f051d666463b6b5"],["/lib/fastclick/lib/fastclick.js","c2b9ad67aba0c07c973e73f889e235c0"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","4b76c1223d02959c19a3d5214e7c2a27"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","4e81b345b1581d3e036431d0ec87033b"],["/lib/jquery_lazyload/README.html","30db928d3b670513076a391e957fdec5"],["/lib/jquery_lazyload/jquery.lazyload.js","999ec6005c7fe3e98442eab19d513eec"],["/lib/jquery_lazyload/jquery.scrollstop.js","ec32b00c1e34ff6897c6a27230a22ea0"],["/lib/needsharebutton/font-embedded.css","ccd1d60b3f2015ad98965b39731ad046"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","cf6a28e562a49a5e94bf51da46bb3b2b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","213cfccec45bc9500a1897af91c6c7d1"],["/lib/velocity/velocity.js","3ce35051debeea5d943214173a72360f"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","fdc904f7f5d89e7d37320e1a06dc6aae"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","72cd0ff4bbc1e85ce94a40c7119072ce"],["/links/index.html","1f1b3f7f292b1d650ba607561b460531"],["/live2d-widget/README.html","cbd2ee421abc3ff91d30ac7dc3cdea7a"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0ecc6bf15c12ade4dbbdf6b024674976"],["/live2d-widget/demo/demo1.html","77d3834a258a86e1ecc5a573ec978f7d"],["/live2d-widget/demo/demo2.html","65441c8b86aa94af209481b76c6a7ce7"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","7bd30d326a196202d96c81e7fd4c9c86"],["/movies/index.html","bb8e528b27089765a2a6e2a3fe27e520"],["/music/index.html","4f166cb72cb55f0e027c1024c1f2566d"],["/page/2/index.html","94dc0c1dc4af6d103bf7771fa0450e8b"],["/photos/index.html","1875e6736b9a766d3ad60279a0e2b448"],["/posts/14311.html","40db5bc7f167cdd61331916b21533a11"],["/posts/15468.html","750270e2456d45812b1abf973447806b"],["/posts/16107.html","6ddc74e0fb508d8fba8f7fcb68362822"],["/posts/20352.html","4cb70d079e84ddc69343f3bcff9831b9"],["/posts/21238.html","3a6d3e82a80c6575ca00e8b3308904a9"],["/posts/22281.html","7415f1cc3e93b8bea268ab2355a84966"],["/posts/30c404a6.html","8f35ca15ae30f92a2d5b127533f60b6d"],["/posts/51203.html","0b902734448dab4c8c18c9a0ebd178d2"],["/posts/59037.html","f4942f4745da64d604c16548271b5afb"],["/posts/60816b5a.html","fc7ea3d634d97cf47fc4f6ade6f13c1b"],["/posts/69978469.html","84f39159a6117f99c04498f10078990f"],["/posts/6a752619.html","c5b48389b1a77c2ac0b074c804e0e88a"],["/posts/8cc73e65.html","433a42caf614f4c77ad9aa089052b49b"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","82ffa6a0c2e1468cdd34fb675feb132a"],["/tags/C/index.html","bee87236bc8fc3486c49f10eded7d46d"],["/tags/Hexo/index.html","1d000b016837253e533110180c046ea3"],["/tags/Java/index.html","88904af5ac584f489b76be0dbaa4634c"],["/tags/Mac/index.html","4000125dffd373c7c5652a952b3ae8ee"],["/tags/Python/index.html","58374447217769680e28db3f58f718a1"],["/tags/Qt/index.html","a3920d4170825688d98e0d930c211d7e"],["/tags/abbrlink/index.html","0e3bbd629c53a703fdd782d23ac09853"],["/tags/index.html","ef7ace80676667cbf6d466778933e2cb"],["/tags/冒泡排序/index.html","c31a15f2cbbb9e9c96dfa3b44cbe87ca"],["/tags/希尔排序/index.html","d516a4b1f266a401108cd0cbe2df5550"],["/tags/插入排序/index.html","e1f94ac7c1b96b8a86054f9ee6ccd23e"],["/tags/数据结构/index.html","7bf12187f565d8de26c3fb6fe0136cec"],["/tags/杨辉三角/index.html","e3e8837c850d453bd5d6864e749235a1"],["/tags/栈/index.html","ed7eb4dcc48550c6b054b3e5e434f213"],["/tags/类模板/index.html","28c131d1ffd0ea57d180ff8b66d9f61c"],["/tags/线性表/index.html","d236226aba6ed985b2c3f16fc18afd0c"],["/tags/选择排序/index.html","f21d289a986871249093b0d823fd1dde"],["/tags/队列/index.html","08d6abec5b63feeab3f7e1fe30bb4bd4"],["/tags/顺序存储结构/index.html","23cebd64ccbf9cced29f7fa544034b3f"],["/top/index.html","731eef74448991fc854ad42d69daf3ff"]];
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
