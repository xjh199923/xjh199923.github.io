/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0bac769a7868564c9f1dfca03789c28f"],["/archives/2019/10/index.html","b80f683c7c099abdd583fa3e041ebda6"],["/archives/2019/11/index.html","d5cd15623076f33ade2f1c31e069443a"],["/archives/2019/12/index.html","e756050fb56f98ebc4fcd7890131821b"],["/archives/2019/index.html","09fc7c1582a6d1858d4858cb67da7dd7"],["/archives/2020/01/index.html","ff4e83782a8f4003c0e091c4f7383eb9"],["/archives/2020/index.html","4540e2e79eda30bc50eaaef8379c128e"],["/archives/index.html","9ec80a8a7ef47c7ca027a50f6f8cbd9a"],["/archives/page/2/index.html","9b042da271aeca8307fa7f5fd1c66871"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","03ef03be3d497e1b02dd1c978330db3b"],["/categories/Hexo/index.html","0a7a7aeed0e1f7bd1c828bb96606768f"],["/categories/Mac/Qt/index.html","17d04d76d8ffbb2489d82263e85431c8"],["/categories/Mac/index.html","aa74d0a59ae60de0dc96b9de021d6516"],["/categories/index.html","10d0acfd03221eddee17e124d7078e59"],["/categories/数据结构/C/Java/Python/index.html","c6acd0f0d79b0c07cca77bb93de6b2ae"],["/categories/数据结构/C/Java/Python/排序/index.html","f448c314ead986626115b1d4c6918da1"],["/categories/数据结构/C/Java/index.html","51603d20bcd4235816dc4b2343753aeb"],["/categories/数据结构/C/index.html","5c672ca894e569b29e474d9cec73c4eb"],["/categories/数据结构/C/双向链表/index.html","d4b805e6866f27a6b96be249f549330f"],["/categories/数据结构/C/顺序存储结构/index.html","be667ecdfc7c54ed39070bb19b638e9f"],["/categories/数据结构/index.html","74d4783b8b7fcf74bf2a5cfc70d037f3"],["/categories/数据结构/page/2/index.html","880e61a511ceff08749bd2859267788a"],["/categories/玩转Mac/index.html","72506143540e068f2bd7be77324c29d6"],["/css/main.css","b345aa513c9a5d52a79234fc35e1d407"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","55efa15491b6bfc4856b0b96b7759449"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","ee037906dea87fed934cdb727105ff56"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","bb4d8bfa4d17ae11a5ff5aad53908f11"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","929ce99e5e5922a731fc5757a63578ff"],["/js/src/algolia-search.js","03d55f71b9da8e8b50399a57756049b2"],["/js/src/bootstrap.js","212fd15d127263372bbde55c56084cf6"],["/js/src/bubble.js","05eeadc0405ba46e17fdfde203a220be"],["/js/src/clipboard-use.js","d70276a73af1e5813b94ede348b28488"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","796f041284655f7e633aad2fc72787e9"],["/js/src/exturl.js","0b4fad9aa6b94861e25919105aff5ba4"],["/js/src/hook-duoshuo.js","5950adb07db00f339cc179126fa83d32"],["/js/src/js.cookie.js","2ed9117ae5f1cf163e0b6335af606259"],["/js/src/linkcard.js","371535e6fa9f614c8e3b3b2a0772b4d6"],["/js/src/motion.js","c72c4b71d36f878133d7cc05a4eeb2d4"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","fc18f6e807e337b7de8f92a6e5e4db52"],["/js/src/schemes/pisces.js","b68356460af96b47cb3f55fb84a42413"],["/js/src/scroll-cookie.js","2c7c5d380c577e3a19413b3506134344"],["/js/src/scrollspy.js","2d9b6251cc554c7e845650a06cdc584a"],["/js/src/utils.js","55bcb7c96ba61bfbd546c438efa422eb"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","f8fc4c68d55af5d4e30d310ec525c87c"],["/lib/Han/dist/han.js","1d6b360407b8496f9edab0131a0f1f8c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","5e5848315ec15c3aa1915d4574cb7154"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bd293deae765c52017a59f551ccbdbea"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","bbd1e65fa8bde12c377c8772c7e8b224"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","d82cfd5b8e55f6f59d848fc1a2c49a9f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","061c8e2e8a05efabb6b715f75aa6c61f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9a4984beb9cd67eff0cbe815943a7f96"],["/lib/fancybox/source/jquery.fancybox.css","51705048dd8ea61d3ac1b162e8132c6f"],["/lib/fancybox/source/jquery.fancybox.js","2971e6435b5ee6363c582f7f62487089"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","8cd94033f68a8d826edf2df61a13bf02"],["/lib/fastclick/lib/fastclick.js","296189c0e6836e05cdea2f48b44b45fc"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c0294d9a5959bf63dff11a900c0df0ad"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5faf3b4ecff8a54b18849d9bd64d31df"],["/lib/jquery_lazyload/README.html","289175783afed22346ad9bb2bb840cbc"],["/lib/jquery_lazyload/jquery.lazyload.js","f305b438b4dd27d935ac50c1e67a60ee"],["/lib/jquery_lazyload/jquery.scrollstop.js","2938599235df405b669f6ad96a9b2827"],["/lib/needsharebutton/font-embedded.css","bcb290c012660f8223b1f560bbf638a8"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","d7e7eb36ccab03d35d034500bf8c42c1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","0c5e9af0fe05566d46d6cf482e1852ef"],["/lib/velocity/velocity.js","0d74a18b53a5c21c848e383e55938a8e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e36a551c412649da72d358ca72b06b50"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","a3120f3b656675a6ba4c7218f8093c78"],["/links/index.html","0c7ba5d4b5aa296baf9e795f858d1ffd"],["/live2d-widget/README.html","65b55187263cc84f2e29ae985914027f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","789c045c6e2fcc0ccfe9daa09379245a"],["/live2d-widget/demo/demo1.html","b02ac54709e22f7f805e0360b7d292ee"],["/live2d-widget/demo/demo2.html","82c2382c3cc6ea2e1484835096cb15e3"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c007c890d1ec1f88354e10b471dc08db"],["/movies/index.html","1d2ffc68942ec8eda448199829cb7809"],["/music/index.html","bb725fb3421c12f494ffd7911636fc43"],["/page/2/index.html","b974f876dcadb6711a402f0e85536f1e"],["/page/3/index.html","e5f92bfc53712d1558f40e1c10519ad4"],["/photos/index.html","752e913fed4783e5c21558f3f9de4428"],["/posts/14311.html","67b75619f66c837977c8e81a959df211"],["/posts/15468.html","f2a17e167cf60b04dfc524e82612c8dd"],["/posts/16107.html","011b29a46084954b7e115f154a29f836"],["/posts/201e1121.html","17f8d12fb5b9884ac74b6bb8fa47ef11"],["/posts/20352.html","89620e4bfec9bed0ef58245fc981ea0c"],["/posts/21238.html","82384e1ce326cb65bfa71f69a90d6e96"],["/posts/22281.html","a5318a9a21ed3b825d802ffc8d427f02"],["/posts/30c404a6.html","6c21f86c2e732975639465c43926f546"],["/posts/51203.html","4e4b2f9b354f27cd5ecf12dc3178bd55"],["/posts/59037.html","ee260f9c4bedd24ed6eb2d2cfb56c19a"],["/posts/60816b5a.html","aaf32e8e4fcb2659d64f9ae8f3478edb"],["/posts/69978469.html","f67aa3ca3b96ca09470da3784eabe66b"],["/posts/6a752619.html","235dec386a7d493e37f672b93fb2c181"],["/posts/8cc73e65.html","aba6134a223cc5119f93a94dce7dffe0"],["/posts/beb5106a.html","7b4913a1f82cdadfbc5f9720ae1af1ab"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","27be35cc39383f098bca3230c456376c"],["/tags/C/index.html","7837cf21ba84c58f5fb3edd062bc1ed2"],["/tags/Hexo/index.html","6d8e8da15206d69bf696b21f2451a8e4"],["/tags/Java/index.html","cf53f45853ec271e1e994cb04df4d78f"],["/tags/Mac/index.html","ad3f5a32a3192f5a3c6d09499f700dae"],["/tags/Parallels-Desktop/index.html","95d5647cb7d46105cf8fdaae31821462"],["/tags/Python/index.html","beac408bec033c5549d280e2e2295f7a"],["/tags/Qt/index.html","a165e7ca04450273006c077dc5de8cbe"],["/tags/abbrlink/index.html","9690cd83008bbc099d2421c6ceeeefb9"],["/tags/index.html","adfb2ad0335ba951c55608089ed853fa"],["/tags/冒泡排序/index.html","d81ac546735ce53cabf211a1038aace6"],["/tags/双向链表/index.html","d1376b9c307aac753d2ddc44f020948a"],["/tags/希尔排序/index.html","c9588f6751f100815b2735d6117de52b"],["/tags/插入排序/index.html","cc3911195880d1efbaee7650caa9c7d1"],["/tags/数据结构/index.html","d133b2af2d10e68b995c314ad1c25d3b"],["/tags/杨辉三角/index.html","8efe82e1ff8e1c75c1f679917cdbedc6"],["/tags/栈/index.html","bb9614e4dbbe4efbe13d8ec21de9fbce"],["/tags/类模板/index.html","fc29d8e4e37202f44b2eb67aa2b7dfc2"],["/tags/线性表/index.html","c5b8dab050607e504bdec655f5ea775f"],["/tags/选择排序/index.html","695bfdccca178a6811e6d94bdb3bd59a"],["/tags/队列/index.html","0d1d2049389cb6d2080e96f155fbfe7a"],["/tags/顺序存储结构/index.html","6295404da8ae56a3c59766c8282c4720"],["/top/index.html","09ea649f6c72a3a8f8b1afb527f7b6e2"]];
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
