/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","57f2cebe255a0133bba160ca6dd5421a"],["/archives/2019/10/index.html","5f31ef9a14489a430c333915c6e5eda0"],["/archives/2019/11/index.html","a951b3d2d2bc174ca484c66361dc1856"],["/archives/2019/12/index.html","7b5870db74bf88307dc206eb66964dde"],["/archives/2019/index.html","4fe3156c9c1ff249583c8eebe9156435"],["/archives/2020/01/index.html","fd4513ddd8df955cea759b3c6c0d739e"],["/archives/2020/index.html","83be757e8912f6ec21de20014def6cbc"],["/archives/index.html","87e2a09c22c6a9d51d1da94ffec55255"],["/archives/page/2/index.html","6174224d7a74b636ae972b4981bd06b9"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","b90b445e849fe2ad2205eda121b919ac"],["/categories/Hexo/index.html","6a02d3dac0d5f4986f8465545fc6d4b5"],["/categories/Mac/Qt/index.html","6b12e0edca3e3b85fbd89b17196cd56b"],["/categories/Mac/index.html","1917dd2f4520ba07213afa29d6082fc2"],["/categories/index.html","9bbe5865dc730244baa753741cd226cc"],["/categories/数据结构/C/Java/Python/index.html","36db9c04008278ecb45939197c3c2f08"],["/categories/数据结构/C/Java/Python/排序/index.html","192342a9a548348ecb4a2de55fe9da96"],["/categories/数据结构/C/Java/index.html","2de53005498d0623ffb1f9b19f83d14e"],["/categories/数据结构/C/index.html","797b500180f6a49b67d5dd0e86ea64b8"],["/categories/数据结构/C/双向链表/index.html","7989b6b329bc0ecbdf0ebd982cc66d77"],["/categories/数据结构/C/顺序存储结构/index.html","3310579e6d9795b1f3e24f9943c0d2ef"],["/categories/数据结构/index.html","0ab0f09a55704c216ee76a4ca67b732b"],["/categories/数据结构/page/2/index.html","b1df695657c111d61e67b31aa40c594d"],["/categories/玩转Mac/index.html","33fe21aa1bf3144c07e7f1aa0a7cc73a"],["/css/main.css","340c9fbf5f0766d000ae0653e044fea9"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","80c4054e751a9dc686734e8252d1ea86"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","7497838d3caa734c4551530166bc9128"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","ef2fa5d8ee352c0ccf76cc71459ee878"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","48378ac97d421f5845cd4fb4b91b7b78"],["/js/src/algolia-search.js","106cd978fda79dba2719dac26ce2bea6"],["/js/src/bootstrap.js","76012e7515c96e0789b96272ea2fc0f7"],["/js/src/bubble.js","95fec77e3333f8574b4d50c5b29d6d75"],["/js/src/clipboard-use.js","c57a545032f84eae4ea5d5f570ea02e9"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","dddad01cd3a88ff3cf5d8f7364eab464"],["/js/src/exturl.js","f1ec7c6c2f961433f27df480279f3b7d"],["/js/src/hook-duoshuo.js","7b6a033fb5d91083e5f6dc7ccd078a23"],["/js/src/js.cookie.js","79c999317b7cda108ab41e2dcd5d10c1"],["/js/src/linkcard.js","d47f250049d15a6262bd4599d8e2ca57"],["/js/src/motion.js","dda8f3aa03e27e286aa1189e041502ac"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","fab90b41bc3fb89ab239321bd7c320d7"],["/js/src/schemes/pisces.js","927e177ed488479547d89a18ddbde400"],["/js/src/scroll-cookie.js","b1c196f5e2adeaf6328a020e4f6f5549"],["/js/src/scrollspy.js","60cd3fc414dc0e49c076c810e7a58bd0"],["/js/src/utils.js","8ffcb132dd0e0ede60b99c6730b99d1f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","725af7cd7d310cd8f8d74628b033a308"],["/lib/Han/dist/han.js","f5325f93c19d18bf0ab07d1a54be4632"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","0eda0c0290f5bbe61b0bbbec0b593945"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","dde31dbce3f60def0c4c20b79b0e10df"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f33189889de558c288762773b898822d"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","15e1f310efb9945a25207d6995a34944"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","4d9a87e385ce5fa539dc87d363509993"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","3201b9ede9187b4bbf7c4d91fb6ffe12"],["/lib/fancybox/source/jquery.fancybox.css","0a026a292073822f63023e5f1bb7ca87"],["/lib/fancybox/source/jquery.fancybox.js","0bddaad5e41177ba1070338f31f2eccb"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7498bf10d7503cd9e53a47f7338b87a2"],["/lib/fastclick/lib/fastclick.js","2854e1600b5a7aecbda4f54018c72576"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","00d5a2529dc848e8c817a6ce5ef813c6"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","b8f4b9197c141f734aa33cd38ceaf4ad"],["/lib/jquery_lazyload/README.html","dbd2c4e0d3c7a408efba1610a0dac8e6"],["/lib/jquery_lazyload/jquery.lazyload.js","4a46e751f9aff5dc3c43467c3cfa9427"],["/lib/jquery_lazyload/jquery.scrollstop.js","4d37030fb8f3ad8abbc841d210645b2d"],["/lib/needsharebutton/font-embedded.css","543339e39b2f416b075f0788b4dd1efb"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","f84ef17c13ed39eb46eab6ddaa8d9029"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ca61c1b2bd63a123a6684e87af15285a"],["/lib/velocity/velocity.js","baac530013fd5b4d9c81919143cd7bc4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","6d6f33a7b95684f7039354bfbaa9b9c2"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","c28ae9ca2c98659218aa67a5fc8ef910"],["/links/index.html","26b3ec95ac1045329f52c24c3bbdb1d1"],["/live2d-widget/README.html","384dea65386121eff23739a05bc6de1f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6eb5d6d4b69880dad0559e8cfef8ca82"],["/live2d-widget/demo/demo1.html","ef63ed41aa5cd6542508ec584aa7cbdb"],["/live2d-widget/demo/demo2.html","8caaed69df18bcb5ecb5c7cbf49d1ce5"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","ecc92778de3bb9d82950cbc73d86d14b"],["/movies/index.html","3d2fdcf5806a9271d73162097f4e0600"],["/music/index.html","9a236cc70243f86e8aa5e4c07210af5a"],["/page/2/index.html","942394c7d1bd5c3e91848044afbf696c"],["/page/3/index.html","33faa67d417c5d02fae3c977f2bcadac"],["/photos/index.html","809e6ad3aef89fa63938ae59706ceee3"],["/posts/14311.html","6ff8b9c61d4f9e3c96e92cfd676b4ed3"],["/posts/15468.html","e2f4197398685910963bc9acc0374250"],["/posts/16107.html","11a018698f155fd7541f7fb188ce8c93"],["/posts/201e1121.html","e846120d734be9dee762753ff2b02e44"],["/posts/20352.html","2649599907310011823f90ae131a93be"],["/posts/21238.html","f3b17b995bc36298c22b62a009ed9fba"],["/posts/22281.html","fdbb61a7f519cda30140f2a8f0008a99"],["/posts/30c404a6.html","45985ff8bc09a917bf75ef78a818d63a"],["/posts/51203.html","2da1245fd4eaee4a325db2b66c83ca50"],["/posts/59037.html","74c2ce679453e213a50d9f5ffc5801ad"],["/posts/60816b5a.html","e63ad540b0277641a4186e73ff771b12"],["/posts/69978469.html","53645f5a698eb3059481c91361fbf36d"],["/posts/6a752619.html","c3f145931456fb091dc083d8eb8f0414"],["/posts/8cc73e65.html","7b2e771df1b04e61c872ac5cf4f8c566"],["/posts/beb5106a.html","918f27a9f6ad90837e32499c6b3c2a07"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","38ce2362ca1fb72c96548b9cf959bd5d"],["/tags/C/index.html","b54ce08b767d48bd83036c7eb49918ec"],["/tags/Hexo/index.html","8e2d975db62e57356d10e4f20060e659"],["/tags/Java/index.html","22ac5c3b6372702b8123880a0423d5a1"],["/tags/Mac/index.html","635a27384ba78b1f3d82a713c75fd606"],["/tags/Parallels-Desktop/index.html","675fa5b0651412ec1eab1767c309764b"],["/tags/Python/index.html","07a2e39c2e7405dd3da04085990b986a"],["/tags/Qt/index.html","e0595e640ee7ead195d65d740c338652"],["/tags/abbrlink/index.html","41989da5059c7e6fa43a25545539e0f0"],["/tags/index.html","1d21622c0f57c9493e930578d8228800"],["/tags/冒泡排序/index.html","4e797d36475cd33b31f8dad4b1eca633"],["/tags/双向链表/index.html","9900691a9b34b9ea9a9cf4dd7d5e235f"],["/tags/希尔排序/index.html","0e920430318a8893ac66b6dbc0184a98"],["/tags/插入排序/index.html","736d59914afc14996dd2c73e89c0c1d7"],["/tags/数据结构/index.html","417de2a393df841ad88fd5aca9663081"],["/tags/杨辉三角/index.html","f3cafbbcd5b698a798eb02f76c96ab19"],["/tags/栈/index.html","d796adc40bbcb275a9c2135fe1cdd76d"],["/tags/类模板/index.html","6a878ca45184b82f032e8a1651718d40"],["/tags/线性表/index.html","cbe026c1fe86b830a2039cce0a5a7497"],["/tags/选择排序/index.html","6d50361b24026dad7c8e21ba01a0db31"],["/tags/队列/index.html","1979c8a63995c2a93d5f75b9cd73733e"],["/tags/顺序存储结构/index.html","814b1383c5ad4a91a4cfa9afa927038b"],["/top/index.html","a82e926fbb42cc186c1eaac661bd2b91"]];
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
