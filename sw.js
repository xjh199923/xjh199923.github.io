/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","64978b60424770727ee377105dfc51f8"],["/archives/2019/10/index.html","fa0d379f8d77e4c8e452025714fc5078"],["/archives/2019/11/index.html","e78aeff0ad3f97f0a54220ec8c03f0a5"],["/archives/2019/12/index.html","8741c6e9986055d99cbf2f463bc4e56e"],["/archives/2019/index.html","a8a1f67a1a8a3ff6f7e6cb3c96132c2e"],["/archives/2020/01/index.html","cab44947cab59cbf1bdd6a422226a081"],["/archives/2020/index.html","98684ee16ec431a44d36d64c7276caa5"],["/archives/index.html","f07f3a631466097fcb00b9e2ab4adbe9"],["/archives/page/2/index.html","bcb846ea0ebb38ba86e568840e92c366"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","9d0436f2265110070295871b655ddd79"],["/categories/C语言/index.html","7976c4d4eecb64c2439f8aac45770246"],["/categories/C语言/数据结构/index.html","bb7e5989bdab84d918dc7815f74eb82b"],["/categories/Hexo/index.html","b02859f039ac5ebd5afd791b6158b93c"],["/categories/Mac/Qt/index.html","3f1f4814b55717bb8454678cc709c5bb"],["/categories/Mac/index.html","6b06567ec08fd52d9a5496df6a686866"],["/categories/index.html","1759bb7cdfd1abf885c328c3c54f73d3"],["/categories/数据结构/C/Java/Python/index.html","9797e521d38cc0f71f248794abab7f3b"],["/categories/数据结构/C/Java/Python/排序/index.html","72aefac401a7d0ed280a01c0bffea021"],["/categories/数据结构/C/Java/index.html","437cbd9de278a7a6f4afd867eb5f0ce1"],["/categories/数据结构/C/index.html","5606694f8ff4eb2c291b2f7745c9abc3"],["/categories/数据结构/C/双向链表/index.html","b90b25ec842e5d4a498f190ebeff6f04"],["/categories/数据结构/C/顺序存储结构/index.html","7ad81109420ed910cfa3669d50799c3b"],["/categories/数据结构/index.html","0bf05fe85ded2fa86c3907ef1b8156f6"],["/categories/数据结构/page/2/index.html","6ac3a5f5b5ad01366ed62b6254c3354c"],["/categories/玩转Mac/index.html","438c287ec0e6fe258e259f6fdd0fdb7b"],["/categories/顺序栈/index.html","3bc116acdc71623bf653e85e6b9af257"],["/categories/顺序栈/数据结构/index.html","ff241806a216864cc6c4449b9300944e"],["/css/main.css","89b2e29f5d24ee915ca09210baabb8c4"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","641c7d1f0c31c85edd079de67cd31fe6"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","cf99b83218564e4155937cb54cd1a12c"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f990cecc1266c60c574013be9318641f"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","e33f6f98d2b6eb1604e27130805cbbd9"],["/js/src/algolia-search.js","5aeaa8fc5f9272420530fc1a2723f9b7"],["/js/src/bootstrap.js","1f57d875e39cc02df9ef76e5252ce6ca"],["/js/src/bubble.js","ede07b19c52e5eac5a7f1b182df35b52"],["/js/src/clipboard-use.js","7e0f66b4f0f40495059e9cc3ea9a340c"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","174f4eb53f184acf2e1890c1c8d29123"],["/js/src/exturl.js","d032dc7e90304bd51a4d31f9c37f385f"],["/js/src/hook-duoshuo.js","147981fbbce3c7dc43f88b2d62a0b6ab"],["/js/src/js.cookie.js","0f052539038ecae1290b09a9babf3b5d"],["/js/src/linkcard.js","8d9cf96092448b2859352bcbd1bab427"],["/js/src/motion.js","2a7fff88779dddc658096436fd3af794"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","df76900af2bc5fc5da9c82b0d763a8ca"],["/js/src/schemes/pisces.js","8923dbca79e7165361ebf7070e8ae3d6"],["/js/src/scroll-cookie.js","0056df13e58e8a15ed722eed8071ca89"],["/js/src/scrollspy.js","c62a1d528071c00cc69b4d49e6de13cd"],["/js/src/utils.js","2e3ac9e741b732d372b0bb129cce6ce3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","52f3e634ba359266f748b2f6ac13ad7b"],["/lib/Han/dist/han.js","f5f8ca709b258597e1a0aaa65a1d7f2b"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","51b9aadf37d53d45e281a57e0cf9c122"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7737690a1d0697b98d9d91eef8a7a923"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","709e4e2e3e282c9a1b6f94022eeb3199"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","49747e34bb3cbc4cdd5a274e4ba66619"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f47f141b77ed705b85b023cf4031959c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","25c064b3da275efd9ddb5dfda03ae1f7"],["/lib/fancybox/source/jquery.fancybox.css","f4e2d63d23bba7a030f071f51339b98d"],["/lib/fancybox/source/jquery.fancybox.js","3ee6488909f69275329cc122d6841d92"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ab5d8dcc17ff8598022d9d5677b9de3e"],["/lib/fastclick/lib/fastclick.js","9495234156afd86f733b3d5f2950bc2c"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","a1922689cb6c0b6558aa497796dc4414"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","a314e50b3e7525076dc7fd77493bc9b8"],["/lib/jquery_lazyload/README.html","3ad5c56fdbae3e8fa407c353aa10bda3"],["/lib/jquery_lazyload/jquery.lazyload.js","735e15c36d474b56633bbfd67a2df8aa"],["/lib/jquery_lazyload/jquery.scrollstop.js","6bb864670b7b7aa88d4d1865d0d5ffb4"],["/lib/needsharebutton/font-embedded.css","f6783e5cc6375f164a8dafca512572ac"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","abfb97d57ae1cbd4bfca365faa1ca8b3"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","da7e6cd838930564e11cc93e7587205e"],["/lib/velocity/velocity.js","38486954ee615f657282ac8b35242ed4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","191dedc44dfd77fe206c549164b6942d"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","f81cd07083e51fa6ca7dcf33a6447296"],["/links/index.html","4c093567e2e2b4c9f86587fcb0c16cfe"],["/live2d-widget/README.html","0911f6b7841902ad491270b0c0cc3352"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","272a3ea8d53d2b38c989d3fec6577ec9"],["/live2d-widget/demo/demo1.html","5bdccdc99dbfb0b100e2b60d4bc9152f"],["/live2d-widget/demo/demo2.html","b656409403fa0b1b82ddabece6610a79"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","f17eb39e1ee8996d53200e5f49fb8607"],["/movies/index.html","2e1b5fa04f6a025d28d365c9371012ff"],["/music/index.html","2ed2830c5cac84bfec3bd99d78564c67"],["/page/2/index.html","c7f142269c5e789df11732cf1007ba44"],["/page/3/index.html","9328e8d799c233edaa366fdf1c184cce"],["/photos/index.html","c588360b512e5b762b798278cc372660"],["/posts/14311.html","3d01559e0118240110f1522c8c43d5f1"],["/posts/15468.html","48ca41eef952326b40a4478f2f7cf652"],["/posts/16107.html","7dc55005ff9ea28291c93cde4fcfc01b"],["/posts/201e1121.html","cc985253e52c72c78af54565b8b0f7a6"],["/posts/20352.html","d61b767f0ecc55d0d8c715274999a376"],["/posts/21238.html","ec59c00029fc4eca9ab78d9030c9848f"],["/posts/22281.html","81f1dcc1634c568e91df01a5004c2303"],["/posts/278598dc.html","b12002306fdb791605be4f394f27a291"],["/posts/30c404a6.html","23a130e6612bccb4d10dd69e738f2020"],["/posts/51203.html","9ecbcdba860c51ff8567a3f73d020748"],["/posts/538e5180.html","19762bba424f3774562850c285a27089"],["/posts/59037.html","b0305f36f6b9dd673618b6ea17dd9065"],["/posts/60816b5a.html","ed4ca1520ad6cd5081191b5896c2d189"],["/posts/69978469.html","c3caaa1fac4766b3452d45c2264d8e73"],["/posts/6a752619.html","359ee57342359ae11ffaba0107e6eb3c"],["/posts/8cc73e65.html","eda4dd3754b356c674893cc502ccc17b"],["/posts/beb5106a.html","b318ab199cbf0bad5ea044681518e70d"],["/posts/dd845106.html","94ec0d585600bde6a21c75097d33be20"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","10de09bab1fe06fb9456fd7d80f18b13"],["/tags/C-语言/index.html","65908dce8d05db491994c8d8c8cab18f"],["/tags/C/index.html","d88f366fa1e9451941e143c8687a969f"],["/tags/C语言/index.html","24ebd08381c6d03251242a250d057295"],["/tags/Hexo/index.html","399d9b36dcb8e777a910a0992de0f901"],["/tags/Java/index.html","6f58da5457013b2a047018f294efc15d"],["/tags/Mac/index.html","62c9b17b2d989f3c41528a6cd6ac185a"],["/tags/Parallels-Desktop/index.html","4f490f02aa38c8c3c3d28bc0fe6a68bc"],["/tags/Python/index.html","110eabe8eb0c9cef83776593a1a5c1a9"],["/tags/Qt/index.html","00d951c8f5c323b5e96aa3e11ebcfb2f"],["/tags/abbrlink/index.html","6d28e46cbf635422c2d573038d021f7a"],["/tags/index.html","2364add1af32f7bf0c835f1e74e55e3d"],["/tags/冒泡排序/index.html","459e0c14fd1df33ded38e1d07ba9bae0"],["/tags/双向循环链表/index.html","b8b10892f579cee4a2659a1b1fd422f2"],["/tags/双向链表/index.html","99ae9773740f04a78c101488baeeeb8e"],["/tags/希尔排序/index.html","73fa2e698df17aefb619155b8f44c742"],["/tags/插入排序/index.html","d9eb2f2b716078b9de370174ceb92f1e"],["/tags/数据结构/index.html","d4739092e048bf561d11e423c13b0a09"],["/tags/杨辉三角/index.html","f4721697f10c15e2c0a9f8f3be1850ee"],["/tags/栈/index.html","837233317bbb8332cf3f7fd0cb6d9a29"],["/tags/类模板/index.html","1076cde809cc3a988cdf72b6a5ede14d"],["/tags/线性表/index.html","cd58b12676cc9a6828d6506472153901"],["/tags/选择排序/index.html","a7d360025891486e04c729c0c9de6101"],["/tags/队列/index.html","9224d782d9d8f712505b47e0cbf7f734"],["/tags/顺序存储结构/index.html","ea0792fb92d546955b7ccef8c4913a69"],["/top/index.html","e97ecda184f00725c7374f90cdb9ec52"]];
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
