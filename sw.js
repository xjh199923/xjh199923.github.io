/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f96ebe5f1905900d9fb24aa29ec5a479"],["/archives/2019/10/index.html","fa56d8235a98f8330f0d8f9031ee4959"],["/archives/2019/11/index.html","1cb2ec2590164d60e12e175ec59f46d9"],["/archives/2019/12/index.html","80df2d8d0f834bb04f4ed4b8aabcf162"],["/archives/2019/index.html","7046acd2be0d7321244538c25079c97b"],["/archives/2020/01/index.html","d766d07c87e469f29c21469b8963993d"],["/archives/2020/02/index.html","e04ceee85890c967a848af383b84f684"],["/archives/2020/index.html","a9a111d24dddbdb29ee848aa01002cc3"],["/archives/index.html","fd61e2b5a178259bd0c89cbea3300c24"],["/archives/page/2/index.html","9782b1773fb572dbe3770a218d044756"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","e01de7a1ce8003cbf1f1162770bca99a"],["/categories/C语言/index.html","f264b8b46bc533aded0f21b20e66b07a"],["/categories/C语言/数据结构/index.html","476d0cb3a2cc6608cdf334d1f95c74d6"],["/categories/Hexo/index.html","b280c169a07ee5b1c84b86dc2e117e74"],["/categories/Mac/Qt/index.html","00e111c6f2a034fc0ede7d2c0c6d3ac3"],["/categories/Mac/index.html","0d9d1b45c36d7554c2d06b36442bdcbb"],["/categories/index.html","b67135275418b862c92bdc7124473a0d"],["/categories/数据结构/C/Java/Python/index.html","d56fd69078d7ee7092260478c8f0346c"],["/categories/数据结构/C/Java/Python/排序/index.html","8fa7dadb67a6a9c23205789ef21ff586"],["/categories/数据结构/C/Java/index.html","cb02ba1cfce28326cf38c3bd84a79c4a"],["/categories/数据结构/C/index.html","1150b03d5a4eb9fa3fa10f5bd142c16e"],["/categories/数据结构/C/双向链表/index.html","7c452351dab50e09705b8357f3c19e9e"],["/categories/数据结构/C/顺序存储结构/index.html","0a6055eec57733b2e405e470edd7530f"],["/categories/数据结构/index.html","5c454cc9d0c5bc9660c9b82080083486"],["/categories/数据结构/page/2/index.html","dbe934750b08b09d266b6c3aa349197b"],["/categories/玩转Mac/index.html","5f898ffd85f00ee887e0395cd384f5d4"],["/categories/顺序栈/index.html","e8e4a96a006a026ee4f822aa0ad3584f"],["/categories/顺序栈/数据结构/index.html","f602a1696c929ee954c01e79a64d51ab"],["/css/main.css","880b714533b08ec91e65910748f6d42f"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","6311a912f94718525d911517fa10bae5"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","e032c6c41bcbc78e713fac30191a7b57"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","cb748f7631a5e1b6cdee4199b882aa89"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","abba72ba592c63bb123abfc93366a999"],["/js/src/algolia-search.js","c11f764f41ea8eda7c323095c01c780e"],["/js/src/bootstrap.js","767649d2a60e6b8c8f2479391bbabb7d"],["/js/src/bubble.js","c10d244dc6243e7cdfe2bc6c76909c13"],["/js/src/clipboard-use.js","6f8c6ea5b067217e4fdfb8e79cdcb910"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","e22d4250c6bace1816d6140e2669732a"],["/js/src/exturl.js","06e22bdae95253175f87f32b454c5dc7"],["/js/src/hook-duoshuo.js","37067dbfdec3c8e192e86d23a3421b20"],["/js/src/js.cookie.js","27ee1581fa28e38b667906e455ea5c8a"],["/js/src/linkcard.js","b3952d1178f475438fdfc296b7cf98a6"],["/js/src/motion.js","1cf71af6b8e867377f5705f9ca8d9b5d"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","4348e3d14d61fd0738f0f228c56f16b9"],["/js/src/schemes/pisces.js","ccdfa79bdd919bb9612ffa9970376f4f"],["/js/src/scroll-cookie.js","dae69847b4f9bfa6f6f3e89a15253ebb"],["/js/src/scrollspy.js","e135a259a95f43a17a67bc22fb9a4a9f"],["/js/src/utils.js","6b2f9fcee59aeb94320beb1c397ec8a3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","55a58cdde62923d244367604ac5c8a3d"],["/lib/Han/dist/han.js","a3274371285ace28c26dc7d9a6981416"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","fccbc04233016b75f402e8ba84e013a9"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","7b8304fe0b85c72501bab89f118fa2b5"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","85956e18f97cfc52a0ff8a446f0fc7f2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","e4e5a43cd529e00653a9675ada9d9e73"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","da47f8e2cb01ed84e9ab7e28861f4cad"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","bba97f2634e9edf8968bef064251791d"],["/lib/fancybox/source/jquery.fancybox.css","1b3033684429e23235314475887ab02c"],["/lib/fancybox/source/jquery.fancybox.js","183e4c4fa63d41508cd2b06b48361452"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","d727763480d8683b0d5dec1bdf4ce592"],["/lib/fastclick/lib/fastclick.js","5df1f039c3c362d3a97f2d7607e74ae0"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","948917afec8ff30b67263297e1d5113d"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","95d5d77d5b2ff5e71359297f3f8a6c1b"],["/lib/jquery_lazyload/README.html","bb94f44f5ba3768b59e0b7f225b7c733"],["/lib/jquery_lazyload/jquery.lazyload.js","3fc508f0c976e19c2fa67a4dc454c0b0"],["/lib/jquery_lazyload/jquery.scrollstop.js","0276cb33260801e543f10421ed9bd09d"],["/lib/needsharebutton/font-embedded.css","369c2a464ff256f90b42cf21c794be4e"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","c7ead70b1b84e4b5b827ba0832fa474b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","ff1b333b667d9b70a233ba7f78862571"],["/lib/velocity/velocity.js","08c2ce2e9d9f788e451e23cff6d7c9c4"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","15d2da6c062eab617fb9c3ff91f6face"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","2f304cf4f906e3e9c6811b0259d64e12"],["/links/index.html","f46aada91a6de272348d4156d38d7e67"],["/live2d-widget/README.html","9536c3ceb1c1e8c96935917c9dcfee21"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fafbc748430523a53a0c5f0e503cb62f"],["/live2d-widget/demo/demo1.html","4627ec886e1227ccbae1bf921750a92b"],["/live2d-widget/demo/demo2.html","e605871e865806452f52d82491801ffb"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","d60d7a51754d556d9cd348894caff11e"],["/movies/index.html","00ba3cc12ee23884ef0fca8c93c1ca7a"],["/music/index.html","d3229b2170b1ca61c52c923bfcb483f9"],["/page/2/index.html","d5ff7f5d9170ee80a136d8f4bae88dbe"],["/page/3/index.html","2a92feb7a306eaf088cbaf3fd0598ecc"],["/photos/index.html","bd7c885ac79f3c1aeb6b3418c514760f"],["/posts/14311.html","ace86a2fa47ba9dfc9d7ae9ec4e1e810"],["/posts/15468.html","62463c38297f0ebfd047f2eb6be35fc7"],["/posts/16107.html","b24996b55b74d2e4df6da918d8061404"],["/posts/201e1121.html","0d1f1dfb91d6dba1e95931a89bf54cb7"],["/posts/20352.html","e4ef5857732ec1c600c4afd1139a345f"],["/posts/21238.html","45980894d038b6c9a972fad6ee61b8a6"],["/posts/22281.html","9e33f61b94080aad92247f6bc605fe78"],["/posts/278598dc.html","79a0567cd8a814f2fc5629a838f9518a"],["/posts/30c404a6.html","f534ba3a62267226b22e92c1f33591ca"],["/posts/51203.html","b497d70ab213d76e643e5dccef476b52"],["/posts/538e5180.html","854980637707238d8a906ddf451eb927"],["/posts/59037.html","ff99b6568de67cfffe433870f535be0b"],["/posts/60816b5a.html","f4ef1b057f29ad6e9664296f733d4a27"],["/posts/69978469.html","7ef3495485fd1cd4ad9d68fb2897412a"],["/posts/6a752619.html","b69dfbbaf6fd69a3ca101059a40ab2fd"],["/posts/8cc73e65.html","abd0b523d1965823ce0c8aee7072d1f5"],["/posts/9b621d6f.html","86fafe5f0fb1d9689495db7336e1f415"],["/posts/beb5106a.html","eef82c4c1a48939c68b89d312afeea1c"],["/posts/dd845106.html","f7ed2ee74fbce6ab16f1a270151d5fee"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","ee2af5a2fa5e4f049c95ee7c63f062f8"],["/tags/C-语言/index.html","a4f667b771eb201c8639550a9d94db02"],["/tags/C/index.html","31c4e6bafbb2498325e8914acb54c5f7"],["/tags/C语言/index.html","260cd4bb911d094cea16c414f7627f54"],["/tags/Hexo/index.html","7186abdce4f0434b0023fd1ceec1381f"],["/tags/Java/index.html","e4ea22c132edc2a1098f6bbaa8fa11a4"],["/tags/Mac/index.html","1ea848a7dea66c7c005c6e624c8a825d"],["/tags/Parallels-Desktop/index.html","2a2cb4d337fe97ac9616331394e0df4b"],["/tags/Python/index.html","89f13bd78cde113b833f7f3103c93809"],["/tags/Qt/index.html","bfe6e75f3193724b5cc5442ab7bf5d6f"],["/tags/abbrlink/index.html","a4c376630e3c7c194c235d4898583d8f"],["/tags/index.html","47f615b07d05312bf6aecbaef87328c7"],["/tags/冒泡排序/index.html","880905b2c4e8f7679e2cf4ef115015e5"],["/tags/双向循环链表/index.html","c22cb15adb3bf467472e608a20e40d63"],["/tags/双向链表/index.html","e0068e53cbfb5b6801d94805b6230b1c"],["/tags/希尔排序/index.html","0c869f48bbb58ddaa83117591e5e08be"],["/tags/插入排序/index.html","f8247c784254530daf881cf9d1d96272"],["/tags/数据结构/index.html","fae64a5206bff30595528ae5155efed6"],["/tags/杨辉三角/index.html","1b168e34f59cbe1f30fb7b0bd43c108d"],["/tags/栈/index.html","94a6368be72edc3f124fb4119d9df9ba"],["/tags/类模板/index.html","76b3696a982aae54afde0a33a0838393"],["/tags/线性表/index.html","3183c7d0258c927fe9ec6f13103adadf"],["/tags/选择排序/index.html","31af9f8f17f70dd782b5b747a84dcb12"],["/tags/链式栈/index.html","5081b229a4c35df1466152fce64fef3a"],["/tags/队列/index.html","022ea1032def83a75681b92caf432cef"],["/tags/顺序存储结构/index.html","58f10c3b5b070845a1c3c63ccf31e7e3"],["/top/index.html","a7b5919cb915ad88822998d962090bed"]];
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
