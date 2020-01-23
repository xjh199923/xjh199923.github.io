/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","aa1efa133f27d85e9b1cc19d178f174e"],["/archives/2019/10/index.html","746525891264a94755cd2e77a60651f4"],["/archives/2019/11/index.html","bb4215dd1a44067240d69d4fce057d6e"],["/archives/2019/12/index.html","850426b92bc23ac0b25441ea616cb3b9"],["/archives/2019/index.html","e5277e25064b2e4c98c9f89b0277c3d0"],["/archives/2020/01/index.html","e85faa4150b2e0385cc045e71e0baeb6"],["/archives/2020/index.html","2709da1aa0adb7ba0f61fce0ff97ea47"],["/archives/index.html","0b4225896a34ac4e5f2ebf1174cc1f52"],["/archives/page/2/index.html","21c1f376c4ea7eefdc4a82324216b865"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","d744dbd8f53bd0d09d16e55b98b1d701"],["/categories/Hexo/index.html","ef930b49f4975dfae995cb3b2182db4a"],["/categories/Mac/Qt/index.html","866117d6fe2a66a585334b366be20b42"],["/categories/Mac/index.html","d44b9a0b5696cb5a848574497e273674"],["/categories/index.html","0ca7dd39c36e78c87ff5bb1f58c876bd"],["/categories/数据结构/C/Java/Python/index.html","f177f012b8457e94d645d439caff9857"],["/categories/数据结构/C/Java/Python/排序/index.html","322913d1ff8781d01d17772c21d6eba4"],["/categories/数据结构/C/Java/index.html","a1e977a821d140f3097fd81ad0f8df71"],["/categories/数据结构/C/index.html","25341346b5040679267b83841da246b0"],["/categories/数据结构/C/双向链表/index.html","829d00c6878bb0893f8faca2410ec77b"],["/categories/数据结构/C/顺序存储结构/index.html","a4b9ef163b72afc7c2ef1dd79fab0581"],["/categories/数据结构/index.html","0cbf073749c6bf0e2726d1bc4133a321"],["/categories/数据结构/page/2/index.html","9bc1aacfe6b0a978795bec0165cfc2fe"],["/categories/玩转Mac/index.html","7dbaefffed37d8e0cba72b4dd0275cef"],["/css/main.css","eec56cf4ad7cb0a8e43a4cd420eb71bc"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","18e5b2c20681ea935c2af365c6860ef7"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","51acebab22abad459849f885dc53fbf3"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","b9fdfd81f19053d0f03f1d8dce18f3ff"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","a015d0dca56941d55b1b5f959d8dd5b8"],["/js/src/algolia-search.js","6cb3486f4d08b3b5594b6708408e0f31"],["/js/src/bootstrap.js","6ccc93bfbbb15616f00be178ad8c561e"],["/js/src/bubble.js","f5c08784650103104d1971916dad379c"],["/js/src/clipboard-use.js","8e221ff562126c0189496d107282a362"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","5d536edbc8a71b63bb613efb6d5fbe87"],["/js/src/exturl.js","95765c5535576062e722a39bb65415f1"],["/js/src/hook-duoshuo.js","6fb1da28bb58b84aeb7fe2171e88bb0a"],["/js/src/js.cookie.js","47a81890e0751d05576cdedfd776c8e7"],["/js/src/linkcard.js","8c83c78f7909e6936b70fe8c9e0b0448"],["/js/src/motion.js","c99b4e4c1257c2de2ca932f932bb2b78"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","899d372dbe9607a3d3f08d7a2c8c3298"],["/js/src/schemes/pisces.js","044facaf02902649aa2032e579195219"],["/js/src/scroll-cookie.js","c72621a7523779e899ba26774a33bf14"],["/js/src/scrollspy.js","6cd8aa9b7cbc5ad6b6917c84ceb5cf5c"],["/js/src/utils.js","2d79e302b1de6f9761ed45222ba5be2a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","b87d7054adcbde894e0abdfb20f059b8"],["/lib/Han/dist/han.js","802cf5fadfa154b8cff0f5ba8f678a50"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","61a7663d420337a77108c37d03146775"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1fcacb9398c439ba2d904eb9cbf61c69"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6844f59f4022e9866b611d9327301a49"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4766b72ab6262ffe5c7143b37d83f3c8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","7b713c25059b92ca975f4b629e73d42d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","a83ab52b1b44f1546618c950e22fcebb"],["/lib/fancybox/source/jquery.fancybox.css","cdc8764170f717cad4a185da4b714375"],["/lib/fancybox/source/jquery.fancybox.js","d797878a4816f90a77101d8d042b0426"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","653c340fe49b2d6851f6240940ae7f8a"],["/lib/fastclick/lib/fastclick.js","3ce83b0251aec9c0726cd4f09d79b5ef"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c897a6f398f159108796a1bac0536aaf"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","8626e9c1586e73ad1bd43b70637a8847"],["/lib/jquery_lazyload/README.html","3e3488f08835e0b742f5c3f05cc5e2b9"],["/lib/jquery_lazyload/jquery.lazyload.js","4adf83b8249d788fea11ebf9351516c4"],["/lib/jquery_lazyload/jquery.scrollstop.js","1710c09b7c7d68a32f5d872a3eeb26ee"],["/lib/needsharebutton/font-embedded.css","6887f7a08e8b2393059dfa5e8a4ad0e9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","9f10d03cd44dd7c537f8fa3eeb4e7438"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","a69f7d350700ddc7c5d6211deaf58ae9"],["/lib/velocity/velocity.js","0fd5b1c697e8e9cbaeffcc9520751b4d"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","ad948dc046ad1c3e6409817291634e89"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","0a78a9ed2fea385b989720269eb1d18f"],["/links/index.html","257594f780b05b33a7100163c1209723"],["/live2d-widget/README.html","adc812c577ec857e30263b437cae7fc0"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","91b51d7108b8cfe3e92e8b7a1132b7e2"],["/live2d-widget/demo/demo1.html","594436990a5725cafe0807cbde567ee7"],["/live2d-widget/demo/demo2.html","7300fcaa938791dc16940cc563380946"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","88deb6450af1980b8141a84e59d3d61d"],["/movies/index.html","d58ed70791ed0acbb51b231db23a1628"],["/music/index.html","3c0428e4901956fa049b061a82af629b"],["/page/2/index.html","0f3267481fedc2e5d2816f27de419a37"],["/page/3/index.html","536e3a77199ba35c67513e98765fe87f"],["/photos/index.html","e64b25e2dec2cdbcd79b59f25694251f"],["/posts/14311.html","4a3f271f2edd46e78d9d85486beff0bd"],["/posts/15468.html","b2cef13be27be056608d6ad4f03038d7"],["/posts/16107.html","299420cd61771ff48e39969766d6b9c0"],["/posts/201e1121.html","f3d43ef9a80ccabf61a8156b76a6eb06"],["/posts/20352.html","78faed58d3b2104ab7a808b4886cc0af"],["/posts/21238.html","6bc4a8cffbf97e4e7a8899d4911be0af"],["/posts/22281.html","814c7220f1636d24b5318c2535067b86"],["/posts/30c404a6.html","0c63e8864ec8c0d61e5433d09a107db7"],["/posts/51203.html","fb7bb26540b23bfa9f363e97c956eed7"],["/posts/59037.html","3d41351aa4b579631cc8e0ee0afc7c83"],["/posts/60816b5a.html","8055b11ad9b9d963769248b11a05a700"],["/posts/69978469.html","2800120061d45db69831d183d7a13b87"],["/posts/6a752619.html","56411d2075beb57927659edd1b8a1910"],["/posts/8cc73e65.html","043f853b2d038b5affafcc5d1327f611"],["/posts/beb5106a.html","20c52a3619391345d1b80d695c722b38"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","7ca7e54000491aa3746aec5f90d7c4f6"],["/tags/C/index.html","be3536862790f5b456a123012bf78634"],["/tags/Hexo/index.html","691a32ffd490628cac15f89c57e5807d"],["/tags/Java/index.html","84e7fb322fe18b59dc36287922520b56"],["/tags/Mac/index.html","494827819f1b88552ec53da673bbff42"],["/tags/Parallels-Desktop/index.html","deafdd91e95ae159708d79730e077723"],["/tags/Python/index.html","f38ef3342782a236df9d5c4590464a59"],["/tags/Qt/index.html","c7ffcfe97d35356397ed4bf672b006bb"],["/tags/abbrlink/index.html","87c2c659184312e113fa44295d2e2d9b"],["/tags/index.html","ebf76895c2ce65a7ad68369f086dffa5"],["/tags/冒泡排序/index.html","7062e65623ae891e535858e524426b96"],["/tags/双向链表/index.html","84d853627203a7f19fe2df82064fd3cb"],["/tags/希尔排序/index.html","8b6d4ef8a609eb994abe863568ac9dd1"],["/tags/插入排序/index.html","c14e500630c5c5daf16499f5651e5861"],["/tags/数据结构/index.html","19447c2dc3b6fd8bd415a73948c0bc46"],["/tags/杨辉三角/index.html","8e610ec91789917caee0913b695483aa"],["/tags/栈/index.html","4d2316c0691ee9bd251d01017b7f859f"],["/tags/类模板/index.html","eb26b5ffa4bd2a7eebe5329f27c22b30"],["/tags/线性表/index.html","05d3eb819cbd0f1fa03d2450e640431e"],["/tags/选择排序/index.html","6f8783f2b2f3777afa5c690469bf3172"],["/tags/队列/index.html","77e59a960e00554febc6f10382352165"],["/tags/顺序存储结构/index.html","7636d99c2089f42953c3b7e6a43cd056"],["/top/index.html","4e70e3f813beb15af9af220c6aa398d7"]];
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
