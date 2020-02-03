/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","7012116a8ee3b75b5d312ac6848d1250"],["/archives/2019/10/index.html","1cf7fda1353c4f89780e1aaacee7a52f"],["/archives/2019/11/index.html","c973034e7dfda22f60081fba7497d6b7"],["/archives/2019/12/index.html","99f476a321ad4dd8be0c36e87a6d4ff4"],["/archives/2019/index.html","acc81c5941916de7d3751d08ab6a6e3a"],["/archives/2020/01/index.html","7c3821c6bb1b4402f6b440984179df81"],["/archives/2020/02/index.html","c2139692e651bec7a0c920445e52d490"],["/archives/2020/index.html","2cce437d7753898fd85174b2dbf392df"],["/archives/2020/page/2/index.html","85adbf486b35569565796a2c1c238aeb"],["/archives/index.html","911677f8d8586f9b0d28248f1648af39"],["/archives/page/2/index.html","d2707844164ccd35b1ace315feda9dd5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","b0c986e9b107f0d7d5d4d5368fe0564c"],["/categories/C语言/index.html","340bf710a2d43357e05b313ff4469f41"],["/categories/C语言/数据结构/index.html","ebe3899f986024028f4db9b262487b4a"],["/categories/Hexo/index.html","09b1da211117e33aa8f00b398898fa14"],["/categories/Mac/Qt/index.html","56a95afcb36672e9db3e991966f335a7"],["/categories/Mac/index.html","1c5e4b531c279107c5ad17abbccba9f8"],["/categories/index.html","f816205bc127cb101e97f48a001cc197"],["/categories/数据结构/C/Java/Python/index.html","1396712ba8a13da104fa2ef869ccf7d1"],["/categories/数据结构/C/Java/Python/排序/index.html","bbec53e21c005fbd058749522805b7da"],["/categories/数据结构/C/Java/index.html","496a2f39b86a4a60e952d0b8d688277b"],["/categories/数据结构/C/index.html","016f95a738298dd7c883d47311bf5d8d"],["/categories/数据结构/C/双向链表/index.html","96e7516860c95666014901429b5a6ca2"],["/categories/数据结构/C/顺序存储结构/index.html","a9e4e768968ea12608021943831e8823"],["/categories/数据结构/index.html","a4e7dadd3f228a71a469c913873930b8"],["/categories/数据结构/page/2/index.html","4d6416cecf7ba62e47175e11ebfde961"],["/categories/玩转Mac/index.html","e913f95e1abd9ce54f2b1c6624656e10"],["/categories/顺序栈/index.html","ec4081a065986bec85bb05716259f064"],["/categories/顺序栈/数据结构/index.html","5acbf7b54ebc2bf2b9b3aef63022ed8e"],["/css/main.css","c6962a201cbca0741a337ad1945e8552"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","8071e54d3be5730b1bb1cc57a2220361"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","b7a37082026c04e045fb487b48278c7f"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","6525687333c4d1823b42a676d055f40d"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/friend.jpg","676e4339894d91f55ecab38d6cf89915"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/life.jpg","2a65b4ed3dd8cc57a4ba176ec5825ed9"],["/images/linkcard.png","3a51ac6d43d7ff98158343a7b57c4f9a"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","bc788117969783bc5d0c255811dc281d"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","0c08545829b7e38a6c12f7de44ad8572"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","3f9347f1bf313ef96595c6be66370ded"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","d1a6ff9ed0937e59eb850398defa628e"],["/js/src/algolia-search.js","c4d2452ba6b3a850cb4c097211807648"],["/js/src/bootstrap.js","95899da28f67fe72247bf8174afed3f0"],["/js/src/bubble.js","bd1162f16f8f960c3f3d5eab524a3fb4"],["/js/src/clipboard-use.js","1b4ed411773db40f249db2e21bb630ec"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","97c28dc04f6addff0551c011cd10ebaf"],["/js/src/exturl.js","8a512a74c4152dd951b4013e794a9c0b"],["/js/src/hook-duoshuo.js","43471dcb36a6b1e6692f101434068e4b"],["/js/src/js.cookie.js","bfad44cc89147721a6884d5979a53b58"],["/js/src/linkcard.js","4d8c42f3965c186cc2ac1a41509f0f5e"],["/js/src/motion.js","428ff9754c8d606f948a4eb4e48560ba"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","d9f5fb9f1ffabf72082913b57a902fc8"],["/js/src/schemes/pisces.js","befd5c67fb2132b036b7bbef791178c0"],["/js/src/scroll-cookie.js","b345b4e42723eccfad30031a638c3b37"],["/js/src/scrollspy.js","2bb9ad6865150c25327e66db22816c51"],["/js/src/utils.js","3ed8548ae8bab69b33aa111094b71e2a"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","199098872f0e28d7f63dfeebb0f476e2"],["/lib/Han/dist/han.js","142dbf71cf3c1883e2d18fb205ad6955"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","a1334352630f37b5883f564e8a36416a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","32596a5be815824871aee1f700901e98"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4af0084bc12220d266ccd6847dfa9fd2"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","3e657b932325c596c52d69ccd5434d1a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","afa7548403031587ba896bc99a8db308"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","9170609ae9dc9786f9bbc7a964be73ff"],["/lib/fancybox/source/jquery.fancybox.css","0bfb877ff4e6799cdca918078808f8d2"],["/lib/fancybox/source/jquery.fancybox.js","b56ba97c16a90a1a6d5fc24b3ebabeec"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","2e48c6e43384c625a4f6a03c74c46bf3"],["/lib/fastclick/lib/fastclick.js","bf0aaa5acc51f2ae014c590debf9ec7b"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","954dd406c595b2d792be8efad0a6296e"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","1fbdeaa0cb1419d92f2c11228abb43af"],["/lib/jquery_lazyload/README.html","09ec82396a9402b941de2933bb296820"],["/lib/jquery_lazyload/jquery.lazyload.js","aad263c56d658a936501aa529e56d4ae"],["/lib/jquery_lazyload/jquery.scrollstop.js","f81903aaf16089d4175faf202a43b7a4"],["/lib/needsharebutton/font-embedded.css","9c1c9b74f84a12789c4b2b8cc677b34a"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","13fa2fe506a65f27af4ca301cb5cad04"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","3f0672362194d816e3cf15c401152bb9"],["/lib/velocity/velocity.js","723645acd84ab49c2e908ae99cde63b1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","64e336a401db7300b00fa5ec1b2dbeb7"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","3f26057c41ea1173db9eb67e2a42e5b1"],["/links/index.html","60452271afc886706bb86b1032d65add"],["/live2d-widget/README.html","2cb4b89e45d1f73d9abdb5889345ea5d"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","6bdb10cb6c7b0c745b2c2542751acffa"],["/live2d-widget/demo/demo1.html","8a15ae6b14e11f9b1864f41e9fd25f25"],["/live2d-widget/demo/demo2.html","e183ecaa26b07a9c5735d3e62dfdeb14"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","7a782330655479aba9d27867cfe388e9"],["/movies/index.html","227be4cf03cedcc3fcadb0770de8963a"],["/music/index.html","4eb79ea4152e44762155ffc90e404a4c"],["/page/2/index.html","d9d93aea2507c06a3e6a725b5860c0bc"],["/page/3/index.html","0dd888643fb5a984cd35e1ad06bb38b1"],["/photos/index.html","15f30bf9b9d1d981f6bda33b69854be8"],["/posts/14311.html","5393763a423cb755374998a970635975"],["/posts/15468.html","6db2304fdd7e86ca38c1fae45e5edddc"],["/posts/16107.html","c11ae76dea08f4a74fa536dd5596baf3"],["/posts/201e1121.html","a9557f7ec1570d9abe65eea60b6e6548"],["/posts/20352.html","2b8c8da5e04708f489c417cb0020ef6c"],["/posts/21238.html","a73391611b88373a0342bc8709558d77"],["/posts/22281.html","476f678c0c130121cc201864011be037"],["/posts/278598dc.html","fe456928239fddb1208dc92f54667771"],["/posts/30c404a6.html","ee6e7b572a1499b18a807fab13569f36"],["/posts/51203.html","b3a41037fe700dfb9a5b18feca91b779"],["/posts/538e5180.html","2f9e279b926dd41ac98e56ac7d645127"],["/posts/5394fce7.html","0a946463540e690433fc6d3af9116a98"],["/posts/59037.html","5d2bcc0dd07ba1be4b217b56cb04b8f7"],["/posts/60816b5a.html","2297226b5a34a52c243ed2049cae4132"],["/posts/69978469.html","7aa540c728e118487528dbe7b07dbfb8"],["/posts/6a752619.html","8d0da495ebf2cf0b7490b329f5f76b8c"],["/posts/8cc73e65.html","6458594b77d67073c439f1aa134d8979"],["/posts/9b621d6f.html","52105f87a57b1607ce97f429d5acc4fb"],["/posts/beb5106a.html","a2aa0028869df456ea99163f49258de1"],["/posts/dd845106.html","5f7d63908416c0a5a78deea5eeb6f2c4"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","fd5c7b61def7b37b24f6d9545bcb5f80"],["/tags/C-语言/index.html","0e578f7a282e56fd34d942ee87fe2496"],["/tags/C/index.html","2b583cea8dfede59cf612ef9fccad9fe"],["/tags/C语言/index.html","83d219f7c640e18fadc931dd6b11e5c1"],["/tags/Hexo/index.html","9926dcfde5d5fc36a51c2a7d80b59c78"],["/tags/Java/index.html","7977675be62f552b2e29ead89d489c5d"],["/tags/Mac/index.html","c75a8ad91eb4de3b1e412df333e9fa60"],["/tags/Parallels-Desktop/index.html","10347253070e8868de7b007132df30c7"],["/tags/Python/index.html","3022f5da5fe1ef8d5f95bb95c7681707"],["/tags/Qt/index.html","c955c0312d9051ad42e2d483ddf1ea46"],["/tags/abbrlink/index.html","8f247ce81bd3ec8c35d037e4d85798a7"],["/tags/index.html","8d3267d2187e86ab93e69acf4908fb28"],["/tags/冒泡排序/index.html","f0bdb331c5e19b946b5f0c991441e8eb"],["/tags/双向循环链表/index.html","909398b60c3a3b491dc173ffe4455fc7"],["/tags/双向链表/index.html","d5192efe57ed21adf56989657d43b193"],["/tags/希尔排序/index.html","59fdc5ea5693c7050394008c60d3f50c"],["/tags/插入排序/index.html","fd2c88825f1f8b0fab8ea1cff7b39133"],["/tags/数据结构/index.html","038ad2d5414c3d4f2ab5a115405aec57"],["/tags/数据结构/page/2/index.html","0ca22149fa1c8d27eee681b7b56946cf"],["/tags/杨辉三角/index.html","9766f0ed915216448b846f38151d1cbe"],["/tags/栈/index.html","49afb307873588871e5c0e9e31c00ebf"],["/tags/类模板/index.html","669a3a423dd90c03412ca35573ed0ac0"],["/tags/线性表/index.html","d54f7f6fe89225df234bf30af4326103"],["/tags/选择排序/index.html","d6894f0b6ce36bd88ce8165fbed6a219"],["/tags/链式栈/index.html","f3ad777e5c3b3e9658e4c5f818fcc1b4"],["/tags/队列/index.html","61e7cb7e4fbf9bf3af5fe1dbd1d56ec7"],["/tags/顺序存储结构/index.html","7876da822e77e0a9744ede5df21c56eb"],["/top/index.html","76e24ba9d1045530bca2cc24ec96aea3"]];
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
