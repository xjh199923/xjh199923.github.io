/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","59f8614cc2a3e8484cbf4bc0827b8137"],["/archives/2019/10/index.html","db092e30227303b012d2a2268427c4fd"],["/archives/2019/11/index.html","729ed7848ec9d2950ed41ae662503259"],["/archives/2019/12/index.html","4e2f2fb1e4506dd89cf89a082e579b94"],["/archives/2019/index.html","44ac69682448cf224cf527db7afd2efc"],["/archives/2020/01/index.html","bfa4b1d84f4b9adb4c486bb3edd6c021"],["/archives/2020/02/index.html","efe1363b0bd5d056a93b09cacda887ac"],["/archives/2020/index.html","4e0ffb5de57e7f477d70d78eae53da2b"],["/archives/index.html","f54d3ca34613073fa2e891ae901182f7"],["/archives/page/2/index.html","42621b31bd9589dea8b92e9d26d97297"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","084fb8fcc7529ee6331c3e5fa5f05c19"],["/categories/C语言/index.html","adf98b1f18c05649c01d155d63de6c9a"],["/categories/C语言/数据结构/index.html","9c1f63ea3ac03967301091972b9c5f02"],["/categories/Hexo/index.html","474cbf81a27d72b1a5bacffba2ae55f5"],["/categories/Mac/Qt/index.html","a2efb8a4cf270b8dfc6545bfd9dd9f48"],["/categories/Mac/index.html","80ef2d80f24087d7470b3bc5c1e045a1"],["/categories/index.html","275860e66a44dc7797d3980e20b5b67b"],["/categories/数据结构/C/Java/Python/index.html","acb1a54f5ccb1bbeb17c31db416163e1"],["/categories/数据结构/C/Java/Python/排序/index.html","adb716c07084806c27197f50b5d18d3c"],["/categories/数据结构/C/Java/index.html","3894d5546995a59afd048b4ac03afb4c"],["/categories/数据结构/C/index.html","ff130b781a690a99e061be6fee26a213"],["/categories/数据结构/C/双向链表/index.html","c7a7c584877b22fe968eb78f0229ffe6"],["/categories/数据结构/C/顺序存储结构/index.html","c3a350e2acdef54ad2116dfc0b672d66"],["/categories/数据结构/index.html","c6f1a711b0b2eaf3a78d6ba65e6434e8"],["/categories/数据结构/page/2/index.html","ec693866cdbebb4d37b1ae2a74dceebb"],["/categories/玩转Mac/index.html","d48a79ded024988bd6e83682761e9577"],["/categories/顺序栈/index.html","2e58462c14fc45edf88943d9cae19834"],["/categories/顺序栈/数据结构/index.html","219f67377a83adce0b83b8f49ce3beef"],["/css/main.css","0cf5a22db58626c7bcb2bdfc9edad27b"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f03a7449865f93d1df1fdea91f3bc7e6"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","c1bdbe73e9fd766f0a1be196193670ec"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","c2a583b3a2bb9810dda07c13ee8abe41"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","fbdc325c9ecea5c0798f588e6591e5ee"],["/js/src/algolia-search.js","260614af00b855d51de06ad9160f84cf"],["/js/src/bootstrap.js","25de38be21dc7f039dc7e56fe7f34a0c"],["/js/src/bubble.js","2c11410f87932336eb09a43cc3c6b062"],["/js/src/clipboard-use.js","bc69cac6f2be4b2c67db042cbbf7f3d4"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","b13d80870c6d2cb976d9cc36e4f48309"],["/js/src/exturl.js","610da824280b150907e4b2b9d8f787f5"],["/js/src/hook-duoshuo.js","be4a74c3624f7ec735d1922a64b7f07b"],["/js/src/js.cookie.js","635b12e74f03256d4d9117bd1bd298ba"],["/js/src/linkcard.js","0e60e98b816e5b10903138e2b2c05fac"],["/js/src/motion.js","8acb44e240f7ab8e2e42226ffd580733"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d52b505c058d27b0a97c1f9ace4110c8"],["/js/src/schemes/pisces.js","08224edfc2620ac281caf10fcaffd41f"],["/js/src/scroll-cookie.js","44eb7816188d04e05366bd0da6a43add"],["/js/src/scrollspy.js","e7990fe78f334c67ba8f43b4302be245"],["/js/src/utils.js","223f68b3c140375539a7159a2d80b85e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","03a4637c26733e16f7f2b4a6b5581977"],["/lib/Han/dist/han.js","4c857200680b3b07a95a17c280fdab32"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","926886c7a55c53ce2558872be840e3b0"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","9d1eabf564d1fb89ea37120d80203c62"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5ed0cb0b10f52835c794a76e0e5810ad"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","16357ebe8d5eefc9c36c9eb8b4dc018d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","866e5850b837ded38463b6fabcda5ff1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","61cbf4a7840520f38150fb412c9c2341"],["/lib/fancybox/source/jquery.fancybox.css","444af4461b75c27279650ca6e767224f"],["/lib/fancybox/source/jquery.fancybox.js","150078b70d5e4d119bdb6d6e2af225a2"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","44b3d59e3aee1033c7443ed9c1e0ab67"],["/lib/fastclick/lib/fastclick.js","94400292e87fa3aa268b4ed978eb1c5b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","47ca72dbab8c62f508cd6072c3e4fd35"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5351ab9929321c4e1d806e3ad25fccb0"],["/lib/jquery_lazyload/README.html","cda04db9f47a18ac6aa0701cd239445d"],["/lib/jquery_lazyload/jquery.lazyload.js","bbc58341e5e111720f6e5f3510fbb04d"],["/lib/jquery_lazyload/jquery.scrollstop.js","1216ee1b9bd5c7dc7ce51a4f05d7289e"],["/lib/needsharebutton/font-embedded.css","2772c39bde22202b496e488ef0aba101"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","fe19a0c9cfc87d3f8b9e7c8e503804e4"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b9f2a5e2f1b61f4305475239b25ef5f6"],["/lib/velocity/velocity.js","717b763affc479a537683f2d14532119"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","3e4c510de91546845250195302082300"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","16cdbc7ccd676028c0bd7604a3c2239f"],["/links/index.html","f9bfee110f3ddf7ee53e4bf8d52657e7"],["/live2d-widget/README.html","91744c89d5d6e7eddc1f6316c17e6e94"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0e9d8740c7903034f5cc4c376e5b29ad"],["/live2d-widget/demo/demo1.html","f727252eccb3a5e52cf5b4edee666c89"],["/live2d-widget/demo/demo2.html","ef168b88486169f4fd14c2a6a297a648"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","260eab21c1282c14baffd1a55f2af106"],["/movies/index.html","b46e12b04c1a0d62b44f698eb71837c1"],["/music/index.html","f9e94dc43a1e29c0ec2df5209e189fb5"],["/page/2/index.html","dc76cdf6cec899a002316a5c802a4e97"],["/page/3/index.html","69f5eca168c93fb9156bea8d61766729"],["/photos/index.html","34ff3a616e62f3e15e22dcc60a242bdc"],["/posts/14311.html","79b1034edb28bb0ef51249f9b18ef1af"],["/posts/15468.html","e980493bd2c8514d4e512502933c3a1d"],["/posts/16107.html","6777908f40b03e65a36e2dd53b0c4d1c"],["/posts/201e1121.html","098cb824191cf813d443f323959b9297"],["/posts/20352.html","f37aa4b29fac6c24b6f02ffd7c391c06"],["/posts/21238.html","9d7fb2b7cb39becce06d9930c6980d75"],["/posts/22281.html","cf0f02d30247471f466fa0b4969e48c4"],["/posts/278598dc.html","895539c57eb09bd9722efee296b3e468"],["/posts/30c404a6.html","761d525c82d73947fb9f0c459edc7b2a"],["/posts/51203.html","e96f85b6b00770ecfb921f30fe22e3ea"],["/posts/538e5180.html","a83a3d6174373b89deb9108c91fa5e8e"],["/posts/59037.html","9eba7ddff45ba81ab8b05bc735e46919"],["/posts/60816b5a.html","6d1e1b69cd5eeec79adc688952f73287"],["/posts/69978469.html","d5469a521154c703f1daaa6083decdea"],["/posts/6a752619.html","349aa6f2cd0dce02f07480dbd0a82d73"],["/posts/8cc73e65.html","56d4234c4762082e7f95ff53ffce7173"],["/posts/9b621d6f.html","ff667ab2ac36429bbfaf2101131932a9"],["/posts/beb5106a.html","4406b61694dd68d505074b891a26b6e5"],["/posts/dd845106.html","d85b84914f39c4c208e799ae5372c5dc"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","d6ece25611bc04a7837c48964340fb7f"],["/tags/C-语言/index.html","de138eec443eee3c1bfc5de6756e7860"],["/tags/C/index.html","0d5a5a96e8f80ba91c10ffdb609af91e"],["/tags/C语言/index.html","d3bf0ac589bcceb48bc94fc33e5d81ae"],["/tags/Hexo/index.html","cecd952a785a1fa19f75ca673c19e3f5"],["/tags/Java/index.html","c25987edbb61405d6d89ce3b6f324536"],["/tags/Mac/index.html","4bd5d433f667e0c00a5c9ac63c5377b2"],["/tags/Parallels-Desktop/index.html","872baf2eb265135394a57f3191020e6f"],["/tags/Python/index.html","2ecbc96c6c3bf7f065dcd780adc96ef0"],["/tags/Qt/index.html","0f5ac3af8a0aa64154ac7b63489a7d3a"],["/tags/abbrlink/index.html","d32571582fc29f74a3801b14572fdf1c"],["/tags/index.html","921a469892aaf1167979397802a7ce70"],["/tags/冒泡排序/index.html","163da1bd8cb9b53337f66661a0b77945"],["/tags/双向循环链表/index.html","6be29640d65de005ca6c5cb1e086353c"],["/tags/双向链表/index.html","695b3ee37e6c5915711ed9196fa361c7"],["/tags/希尔排序/index.html","e8ab27ad5f765b2e44923b41fd9b5ca4"],["/tags/插入排序/index.html","c383fe0204f5710febdfcab9472a01f9"],["/tags/数据结构/index.html","c7240d61908b6c017a234441abb4c645"],["/tags/杨辉三角/index.html","08e8db5fe6ce8a2811dbbb84e16eefaf"],["/tags/栈/index.html","41ad298fbc1a4126b40973f2be3a9be4"],["/tags/类模板/index.html","bfd22b858e3ac62b4535f2d8ac24cc99"],["/tags/线性表/index.html","dbd1bb47ae6f056096e9ca82dd8328d3"],["/tags/选择排序/index.html","3761d44d98d064876b16a34520967f46"],["/tags/链式栈/index.html","9feceda05b3994cbddd7b5d002f3c7d5"],["/tags/队列/index.html","34cbbe50f020cc662856145d695aba86"],["/tags/顺序存储结构/index.html","a05a9534928cb7c747845befc9df209f"],["/top/index.html","d3bfaab0991884c848e8f40184015cbb"]];
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
