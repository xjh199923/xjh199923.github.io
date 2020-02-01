/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","6237b48c2e40b0c195b464d494c60531"],["/archives/2019/10/index.html","45d9e08e3af7de39034a5eb60e1f1df2"],["/archives/2019/11/index.html","11d5870a68432778095fd92c47673e3c"],["/archives/2019/12/index.html","54ba4016ec9d33135f21910614a28c85"],["/archives/2019/index.html","35245db0a1c0086fda84b5962b4c3392"],["/archives/2020/01/index.html","b22c195ca4503c50d189335b6720fae0"],["/archives/2020/02/index.html","f151eac37fb103f9a7d10b1d676eff35"],["/archives/2020/index.html","c7e7a340bf28d501f61829f7984cc73c"],["/archives/index.html","778243fb72241a2573c299e99f7986e4"],["/archives/page/2/index.html","23243b6b9e6a80dbbdedce202f0f7c31"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","13e1db73a6793a96471a8b9eaa2513ea"],["/categories/C语言/index.html","8a21a4a9205674b20429ca62d968ccd3"],["/categories/C语言/数据结构/index.html","777e7fdbb0fd7ed13c7b83db319c8637"],["/categories/Hexo/index.html","ba6b202a782741e2d54586d11353bd0e"],["/categories/Mac/Qt/index.html","dec63619a5bd8db4d2ff63dde62ece69"],["/categories/Mac/index.html","bc66da39d68799ff30bee02194d7be80"],["/categories/index.html","0bf0f6eb56093fbba9fffde3d4a13bf9"],["/categories/数据结构/C/Java/Python/index.html","afa1828a0ca3827a3eab733e7254b71f"],["/categories/数据结构/C/Java/Python/排序/index.html","6b8931d1b648d4b919a29a80266522ea"],["/categories/数据结构/C/Java/index.html","7b9c75678d2cb13111de491bd0fcb1f0"],["/categories/数据结构/C/index.html","ca531175c9a6a5149614a5e8db0e2e0c"],["/categories/数据结构/C/双向链表/index.html","855b6c56785e6e83780716cd4bd9709e"],["/categories/数据结构/C/顺序存储结构/index.html","7292762cf3a32c2c2202c654fbb60e93"],["/categories/数据结构/index.html","4dcfbd5f725fac261428ea308479c2e0"],["/categories/数据结构/page/2/index.html","b79cbaf86c5d238ed32a505723b06789"],["/categories/玩转Mac/index.html","10b0ed065c4afe5dddb30e60c2ceffdb"],["/categories/顺序栈/index.html","e07e3b6614f05ccb3c557299af1819a5"],["/categories/顺序栈/数据结构/index.html","86f360dc4a211f4b2d95d460f6ac31e8"],["/css/main.css","e82c2062aae7790c7cd6c5d38653e557"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","ab7f82475735854a364a504d95c4535a"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","f86d97bac639b3cfb6d6a864154cce06"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f8b6e9e614067e37f4d8a47124301b53"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","a490e09132c085b6d15da03274b9e3ed"],["/js/src/algolia-search.js","25b80d6f4a1667998771a23519fbf379"],["/js/src/bootstrap.js","db76326b7d7fd33fe823e7c3d053d8c8"],["/js/src/bubble.js","ac4bb3eb0159782ecabcc8deadf8c2a1"],["/js/src/clipboard-use.js","4ac10d825b83bea813a4e481e1848b9b"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","8c80e86012c137e5d8a0370c404b5955"],["/js/src/exturl.js","974535a622ca3c69a34434f697bd3132"],["/js/src/hook-duoshuo.js","18c11e58b21edff84cb6f5e85d299d70"],["/js/src/js.cookie.js","a110bcd2eaee92f0332db9ee9588cbda"],["/js/src/linkcard.js","bb377cfb289dc84cdb489236250ac955"],["/js/src/motion.js","e354228bade03831af4d03407503649e"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","3147318b85d950188a4bfda76a6d1672"],["/js/src/schemes/pisces.js","95929e0b9c9b4755c1ba0a2b17a17110"],["/js/src/scroll-cookie.js","e0a3390dc2322fcbd4a7982743bb4cdb"],["/js/src/scrollspy.js","c38de22c0494355ea6f7bf69b6c59853"],["/js/src/utils.js","6b3bb0a9eac79f0484f5d4213e45122e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","c44953d5df67755a61e91958e044d5e3"],["/lib/Han/dist/han.js","1dddb740bb6741c6d887f67532105784"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9bac96d369e55a649bfcd34583ca5071"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","c7c797455e0a677694314fa3bd9c4783"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a484893fe397e77080d997aed8a01773"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c6d118a467294f21d0722630ac0631cb"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","333aa74722a1f6748701798dfc477f67"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","08d474f43fd4e7abab8278242ea43ae2"],["/lib/fancybox/source/jquery.fancybox.css","37b84840464c04a8db23b21021a0d01a"],["/lib/fancybox/source/jquery.fancybox.js","a250cdaa59442c96e0d9a3cac9e65a8f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","1d61c089603107034634d1456fe55c60"],["/lib/fastclick/lib/fastclick.js","062cf6f155779d1da851a3ecc849329f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","6620fb0e57bf45bf8107258c13c077a4"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","dbd675dac604c0fbcfb60c7b85d6d15d"],["/lib/jquery_lazyload/README.html","e4b3d7d3c94d60a953f182e87b21c80a"],["/lib/jquery_lazyload/jquery.lazyload.js","41d1169de2be4cec9e36599a8879da28"],["/lib/jquery_lazyload/jquery.scrollstop.js","334fcec037c3f6717c3c355025972d4f"],["/lib/needsharebutton/font-embedded.css","bdb2736214e37a124de9837d20a4a17b"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","eddcdbd617e65da1ab210d41f6d418d7"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9cffa2fa832a3091652e69aca5870cae"],["/lib/velocity/velocity.js","61cd02854d118fd81539f05e998735c7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","a3fc14209a68669bac2b12a678f16592"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","b2d8f5c68e48f6187170fdd41718edf8"],["/links/index.html","5b2e6dfddce6e9c6399cee6df65489c6"],["/live2d-widget/README.html","58131340ed6de2dc52d3f1f12e71c5a6"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","39d9e4697d20e4eecf6e619beddf090f"],["/live2d-widget/demo/demo1.html","e0e0c11b49e80d31bbe152dfb6358627"],["/live2d-widget/demo/demo2.html","eea1bd38ce44e2d939bc5f35114c40f1"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","a79ac18a4fa3f22be1a08b01d5a025ae"],["/movies/index.html","dc1ff0654d0bb90aa9d72a1b809e7c1a"],["/music/index.html","ed722dde85617a174ab9f776cdcbf29c"],["/page/2/index.html","30552bf09dd9b4a03b7410d9164deeb6"],["/page/3/index.html","2e98f9fd3edd1d502a98a625dafdeecf"],["/photos/index.html","2cbc1c956df4c84506b140e0f8f5ac81"],["/posts/14311.html","25ef8ff6a9252b0c90eed5bbf887ae3a"],["/posts/15468.html","a45fd0c4f98cf694fa7d506cac77448e"],["/posts/16107.html","3823dd652a8228700371c262e87c816c"],["/posts/201e1121.html","bae71a86ad1982d6869fbfc503246a5e"],["/posts/20352.html","81c1a861459bb3d617b31608f51a3c02"],["/posts/21238.html","600b8ac24b86611439b1492cafcf453b"],["/posts/22281.html","4da6490bb29b651fcf770cdd7cbce346"],["/posts/278598dc.html","893be5b242d30e227a4df8a6e4476a6d"],["/posts/30c404a6.html","6d2d3379ddb06e3d3251f1885c0b1549"],["/posts/51203.html","71d531074519a768456edeb374200f51"],["/posts/538e5180.html","25412ed7b3f42b5c264762d25e540aff"],["/posts/59037.html","978a16e98e67d78533694acf0714a91f"],["/posts/60816b5a.html","d9f72959dc8964a050632bb58a07da03"],["/posts/69978469.html","4e0a2664b90fd4fd645c0d6c63f1374c"],["/posts/6a752619.html","f5179ffad75a9f7909e3e17fdce417a2"],["/posts/8cc73e65.html","50544442884a9723c8842cafccb6beeb"],["/posts/9b621d6f.html","c654d428b9376804565c0650a462d6c7"],["/posts/beb5106a.html","f48b727f18d750169203d058f6358130"],["/posts/dd845106.html","f6effedbd470691f65d991e4829f21cb"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","1c624b03fcf4a96d554098d40ab9d55d"],["/tags/C-语言/index.html","dc5a1194ebb8d8c2034f11074124dc79"],["/tags/C/index.html","edc14c4bd3a8a348050e91ad929daf8f"],["/tags/C语言/index.html","6b180d15b285714a879444feaa3b0e4b"],["/tags/Hexo/index.html","ff2f500f08f2cea9e80c18d79e675b5b"],["/tags/Java/index.html","3e348d8961dcaafcb947937b1e1f06b8"],["/tags/Mac/index.html","a790fa6c8726ffbb1ee134a0588077f4"],["/tags/Parallels-Desktop/index.html","282d017c9e12ac79a33e8721012336a7"],["/tags/Python/index.html","479a2169c1f73f0b76b47396b993b80b"],["/tags/Qt/index.html","93cd9bda959160c15454fdcea6356c05"],["/tags/abbrlink/index.html","52ce1b5b82ed41b3e1675cb9dd34184f"],["/tags/index.html","97934f37c8f837a2dcd24d594ab2316b"],["/tags/冒泡排序/index.html","1c1c21418d2cc2ad92539c1cfccccd38"],["/tags/双向循环链表/index.html","6df37c5e9abaa6c8da4e1934f49299a7"],["/tags/双向链表/index.html","524dad572bf8754f913ec55340ff3943"],["/tags/希尔排序/index.html","d1c5906b955fbfc98394a44f3fd490a7"],["/tags/插入排序/index.html","288623a8bc199c3bd9a3f3753da9067e"],["/tags/数据结构/index.html","417d3cf8a863246574244f6b4d8ed675"],["/tags/杨辉三角/index.html","40f583eac87799c1c80577b7162866cd"],["/tags/栈/index.html","32c61fd9ce36c57f4b26fcb93136b437"],["/tags/类模板/index.html","e5b7929ebfc753a159d5666a6ababc49"],["/tags/线性表/index.html","2d3c9f9bac1b3284650688e5fa0b20ac"],["/tags/选择排序/index.html","2b0d5fd24078472825d87e9784da99ae"],["/tags/链式栈/index.html","95d272af2b37cdcd4045b4d9890e69cb"],["/tags/队列/index.html","95e625101f5064a075817876845218c8"],["/tags/顺序存储结构/index.html","3f07ecb89ac9780b95094f4f538c0c93"],["/top/index.html","22a077404dd5276981f240b596aed190"]];
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
