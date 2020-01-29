/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","466c64e10faba3b7b9c2c453fd512387"],["/archives/2019/10/index.html","1722ea19b54dbb6bf89e3d449b915b11"],["/archives/2019/11/index.html","fae698d73c9bc0574f082d86104872f4"],["/archives/2019/12/index.html","813c1097b28e942cb7b4aba4e786d725"],["/archives/2019/index.html","32cb34f5ee4af78a1b3ca5f1c98c8f31"],["/archives/2020/01/index.html","eaa8f61cdc668a4310f90ccaadf33f2c"],["/archives/2020/index.html","849ceb7c8976baee58967d0b7552d25f"],["/archives/index.html","fbbed746b98e9b0279c5d6ecc22b797e"],["/archives/page/2/index.html","54c8856954661fc2e0aee1ea9a1c17a2"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","7175db28da9b95960367d6e52bfb1534"],["/categories/Hexo/index.html","e396e186297da6d374c3113d378cfd18"],["/categories/Mac/Qt/index.html","6463f305835b88fd746241532724b3ce"],["/categories/Mac/index.html","c6a00de7d9cdde557e09078ff7251bb5"],["/categories/index.html","c361fad086cad1a3f46dd7f8c23eb80a"],["/categories/数据结构/C/Java/Python/index.html","77179f50c551beaffae0f98a4c734735"],["/categories/数据结构/C/Java/Python/排序/index.html","e418c27970843d164b1ad7ebd4ebc7bc"],["/categories/数据结构/C/Java/index.html","6f7496d4c3937e795cf7139a89efb3ef"],["/categories/数据结构/C/index.html","405f0d2576bdb7f79c8ed7e81771895c"],["/categories/数据结构/C/双向链表/index.html","c03869c06e486dc945bcc0d0d12070a8"],["/categories/数据结构/C/顺序存储结构/index.html","423509ac173552405bd942318e066051"],["/categories/数据结构/index.html","a7f285a8550cc4277379b186dfba4e29"],["/categories/数据结构/page/2/index.html","34b19b098c48792b543531373d240dea"],["/categories/玩转Mac/index.html","ca1906754ab6f6b8e46a85e00a14f00d"],["/categories/顺序栈/index.html","3edd4cc20d4922c16c13741abcbf924c"],["/categories/顺序栈/数据结构/index.html","3b1b8a8b7db25d8284ebfce6f5b4c05d"],["/css/main.css","92255a645ed6de0e2a4937f4ffdfa7dd"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","8da55732aa5cc947ff230d797825a20d"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","9a9109f39b7309c72390b702a49e3002"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","dfd05496dc3aaa17439781770b7b00d1"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","fd8f5bfb31e086c0d4a05b6c57f7b86b"],["/js/src/algolia-search.js","c33e770dbe105ac530c90f3a4d6c1ecc"],["/js/src/bootstrap.js","d914548e18c6f8113b34ec5bfd701f86"],["/js/src/bubble.js","11c6e8a12c672c5f3a5fbfa5b3a21fe6"],["/js/src/clipboard-use.js","53c0e4ddd46d9539ed3de18756cf3875"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","14d9b352d19d16e08d5995e15ebef91c"],["/js/src/exturl.js","21cabd08e40db33d8802e8cd080caabc"],["/js/src/hook-duoshuo.js","2c8040eb4f70746a335dd6e22c3fef98"],["/js/src/js.cookie.js","1792ec7543ebf830ebbb95d73a7293cd"],["/js/src/linkcard.js","2ce4d43f2668ba11e08d36fc507c0e6f"],["/js/src/motion.js","98b48d68d12c52a317fa87c10f2e0f6e"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","6d9fc41bd9b184bf5d56d1f1233cd79a"],["/js/src/schemes/pisces.js","f293c4c2828b6b7c89c378cc5e381d61"],["/js/src/scroll-cookie.js","65376a004341d68997031abec0c26e2c"],["/js/src/scrollspy.js","b010c49183f78725523a3cf04a244ad7"],["/js/src/utils.js","febd408f13f309a8ce7afadb3aeb7c8a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","7f6c70fb2344b57f82433f6d10c8cf38"],["/lib/Han/dist/han.js","d22220e674dc39c0537d71f82abd143a"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","928eb00b791d7609f6f54d6b6444c613"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","bcf64cf5b3779f486ab1229be25b0356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","51525ece14b536fb92cc62b4de99238e"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f41e505dbbe4e9455f3d8cadceb7bb03"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","e01c4d06ab3b54349d6d8e5c13f74158"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7b1026de971fe41909ebdabdfa4e6aac"],["/lib/fancybox/source/jquery.fancybox.css","d53058d68eee12b1b75500ea3a633de4"],["/lib/fancybox/source/jquery.fancybox.js","51ae6dc224ff4720a590c344a75e55db"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48c39df78478ab75c695ec9e35525e3e"],["/lib/fastclick/lib/fastclick.js","84a8c4b70877cbf37f12f55c5e2d79f1"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","fe0bfc0f138b28cd97200231dbbb683d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","503de61bcc7a74367086e08beb8e195a"],["/lib/jquery_lazyload/README.html","c594529e3d208400dfd48f38014a3512"],["/lib/jquery_lazyload/jquery.lazyload.js","b07f82206c6c542211587ce26c451723"],["/lib/jquery_lazyload/jquery.scrollstop.js","2648750f2a36b540be3e4c075d02f5dd"],["/lib/needsharebutton/font-embedded.css","0a63b2f8c6cae51642f64749d037ef36"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","3c3e073feef30dde1f688e757b320785"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","1c3d643218434d392dd6105a3126be39"],["/lib/velocity/velocity.js","dd8353414753f4d28896d212e328a65e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","fd95596458c5241f3bfe0be426ee13a5"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","cdeeb4d41b325c946a7d3d141d361480"],["/links/index.html","10b6e2a03fdafd2a65e5371a9e3e45af"],["/live2d-widget/README.html","51a533f77a6f497525a729b82e0c9dcd"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","1104248521068a597f7051d6a7e4f259"],["/live2d-widget/demo/demo1.html","32029459a0b960fa4bcfb60fae7540af"],["/live2d-widget/demo/demo2.html","63c75a0b5956463839c1f01737a4b564"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","2b84cf6498f3ebf609b537ee6d73eca7"],["/movies/index.html","9550e935dcdc78f08462b88862ac1d63"],["/music/index.html","d428ee9ff95abbb8dd6d4c33fca7f78b"],["/page/2/index.html","eeb706f9b4646665491353bd3d849f18"],["/page/3/index.html","b3890652afa7c2b2ddfab3380bc360b4"],["/photos/index.html","3bdfc57c362c420354f8d549a989003e"],["/posts/14311.html","d7ca08dd3c6e007c7e5d47c1b2acea62"],["/posts/15468.html","e27a5b0462e26441460f8c15e789b04c"],["/posts/16107.html","d2ce9c8104deb359270961307d5bbf6f"],["/posts/201e1121.html","39b90e5d55f10eff95ee3cfd4e1da292"],["/posts/20352.html","c1111aa25bb1a9278f4b5adf7039776a"],["/posts/21238.html","e3111168227f824a8844fb0811884548"],["/posts/22281.html","33c39f7f34e35f4b295986e6cf0f920b"],["/posts/278598dc.html","a879c83b60e9d887f8d115d2d88cd772"],["/posts/30c404a6.html","65af23e1927cd5b18566b9740b6cc537"],["/posts/51203.html","f9f07c96f405cf1e36c02d03a4979abe"],["/posts/59037.html","dc623cb52be0d3e11cc8b66865d885c4"],["/posts/60816b5a.html","4bc9b5230fbcf7bcd72dbbb9605e9c6a"],["/posts/69978469.html","904298b73c4f6ac54769a975b0202149"],["/posts/6a752619.html","fa61d3334bfff16dc432b685d949d72e"],["/posts/8cc73e65.html","660800fa595f46afefd92a35b9d139df"],["/posts/beb5106a.html","6a918016531e854c1a4914cb0b101197"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7667cad9bcb987ff4deb7d0b8f4f197d"],["/tags/C/index.html","a7a37a48321ef245baa949a8806ebab9"],["/tags/C语言/index.html","984abfc0d26a9f736cde37f4b35877cd"],["/tags/Hexo/index.html","13f54bacdc757125aa46c734a97506b3"],["/tags/Java/index.html","f3f90b2b4d0cfca294473471ad56c3a3"],["/tags/Mac/index.html","2d8b280fa6a4eba2f53eefab1cf70c89"],["/tags/Parallels-Desktop/index.html","063c76e706ec9c35007b0b9ed8dcb75f"],["/tags/Python/index.html","6ba9f5c6d6d71e85464e274d075957f0"],["/tags/Qt/index.html","b173efb6544a13305aa167c66d918a4a"],["/tags/abbrlink/index.html","578286d031790c98405845b1538deb92"],["/tags/index.html","bebc7f7f399d28a65f9d653d5cc02d97"],["/tags/冒泡排序/index.html","5936744efd113f139899504f4b0d9b75"],["/tags/双向链表/index.html","cf067a3df9e2734f6bbd4179bbe12173"],["/tags/希尔排序/index.html","e3d1c16c4595fdf368f1f6d26010e03e"],["/tags/插入排序/index.html","4041877185131f8075a660a0abc01531"],["/tags/数据结构/index.html","81e68c8a8c34b5af103ede72491c5187"],["/tags/杨辉三角/index.html","b1def951c9c059a3b60eea2f4f12c535"],["/tags/栈/index.html","1ead284d5c2b5d1db2eed48fd198e605"],["/tags/类模板/index.html","08109563496f83a65893986b5ad20813"],["/tags/线性表/index.html","574ec99f86f9fc25ccde8ac920f95d10"],["/tags/选择排序/index.html","1991030f0e4e57e0cbd2b7af4751f104"],["/tags/队列/index.html","69c7653c03d5542e672928f98b3995bb"],["/tags/顺序存储结构/index.html","32bd7cb1eea88988196704b271f10ad8"],["/top/index.html","1942388e29e655c93f472248c5c3900f"]];
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
